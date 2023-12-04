import User from "../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Check that required fields are present
  if (!email || !password) {
    return res.json({
      message: "One or more required fields are missing",
      success: false,
    });
  }

  try {
    const userExists = await User.findOne({
      where: { email },
    });

    //Check for user in database
    if (!userExists) {
      return res.status(404).json({
        message: "User does not exist. Please sign up!",
        success: false,
      });
    }

    //validate password of user(if found)
    const validPassword = await bcryptjs.compare(password, userExists.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials!",
        success: false,
      });
    }

    if (!userExists.isVerified) {
      const emailverifytoken = crypto.randomBytes(32).toString("hex");
      const response = await User.update(
        { verify_token: emailverifytoken },
        {
          where: {
            id: userExists.id,
          },
        }
      );
      const url = `${process.env.BASE_URL}users/${userExists.id}/verify/${emailverifytoken}`;
      await sendEmail(userExists.email, "Please Vefiry Your Email", url);

      return res.status(201).json({
        message:
          "An Email has been sent to your account. Please verify to Login",
        key: true,
      });
    }
    //create token data
    const tokenData = {
      id: userExists.id,
      email: userExists.email,
    };

    //create signed token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });

    //encrypt email
    const user = userExists.dataValues.email;
    const userData = CryptoJS.AES.encrypt(
      user,
      process.env.USER_SECRET
    ).toString();

    //Generate speakeasy secret and store it in DB
    // const interim_secret = speakeasy.generateSecret({ name: "ProjectX" });

    //OTPLIB
    //const test = authenticator.generateSecret();
    //console.log("TEst:", test); // OB2BYLKFKZ2GC42K

    //const TwoFA_secret = interim_secret.base32;
    //const TwoFA_otpauthurl = interim_secret.otpauth_url;

    if (
      userExists.dataValues.TwoFA_Secret &&
      userExists.dataValues.TwoFA_Otpauthurl
    ) {
      generateQrCode(userExists.dataValues.TwoFA_Otpauthurl)
        .then((imageUrl) => {
          console.log("Image URL:", imageUrl, typeof imageUrl, imageUrl.length);

          res.cookie("temp_secret", imageUrl);
          res.cookie("token", token); // TOKEN IS NOT ENCRYPTED
          res.cookie("user", userData);

          return res.status(201).json({
            message: "Login successful!",
            success: true,
          });
        })
        .catch((error) => {
          console.log("Error creating data url:", error);
        });
    } else {
      //Generate new secret
      const interim_secret = speakeasy.generateSecret({ name: "ProjectX" });

      //Store secret and otpauth url in variables
      const TwoFA_secret = interim_secret.base32;
      const TwoFA_otpauthurl = interim_secret.otpauth_url;

      //save secret and otpauth url in DB
      const saveTwoFAUrl = await User.update(
        { TwoFA_Secret: TwoFA_secret, TwoFA_Otpauthurl: TwoFA_otpauthurl },
        // { TwoFA_Secret: test },
        {
          where: {
            id: userExists.id,
          },
        }
      );

      generateQrCode(interim_secret.otpauth_url)
        .then((imageUrl) => {
          console.log("Image URL:", imageUrl, typeof imageUrl, imageUrl.length);

          res.cookie("temp_secret", imageUrl);
          res.cookie("token", token); // TOKEN IS NOT ENCRYPTED
          res.cookie("user", userData);

          return res.status(201).json({
            message: "Login successful!",
            success: true,
          });
        })
        .catch((error) => {
          console.log("Error creating data url:", error);
        });
    }
  } catch (error) {
    console.log("Login failed:", error);
    return res.status(500).json({ error: "Login failed" });
  }
};

export const submitRequest = async (req, res) => {
  try {
    // Extract data from request body
    const {
      request_id,
      design_file_link,
      completion_file_link,
      request_number,
      _2d_count,
      _3d_count,
      generic_pattern_guide_required,
      expected_completion_date,
      client_requested_deadline,
      brand,
      style,
      color,
      installation,
      comment_description,
      assigned_designer_id,
      admin_id,
      estimator_id,
      request_status,
      createdBy,
      modifiedBy,
      createdDate,
      updatedDate,
    } = req.body;

    // Use the Request model to create a new entry in the database
    const newRequest = await Request.create({
      request_id,
      design_file_link,
      completion_file_link,
      request_number,
      _2d_count,
      _3d_count,
      generic_pattern_guide_required,
      expected_completion_date,
      client_requested_deadline,
      brand,
      style,
      color,
      installation,
      comment_description,
      assigned_designer_id,
      admin_id,
      estimator_id,
      request_status,
      createdBy,
      modifiedBy,
      createdDate,
      updatedDate,
    });

    // Send a response back to the client
    res.status(201).json({
      message: "Request submitted successfully",
      data: newRequest,
    });
  } catch (error) {
    // Handle errors
    console.error("Error in submitting request:", error);
    res.status(500).json({ message: "Error in submitting request" });
  }
};

export const forgotPassword = async (req, res) => {
  console.log("IP ADDRESS OF USER:", req.clientIp);
  const userIpAddress = req.clientIp;
  const testResponse = await axios.get(
    `http://api.ipstack.com/49.36.89.84?access_key=7f7f7b58e5a840137dc20dd1b38c34ff`
  );
  console.log("GEO LOCATION API RESPONSE:", testResponse);
  const { email } = req.body;
  try {
    const userExists = await User.findOne({
      where: { email },
    });

    //Check for user in database
    if (!userExists) {
      return res.status(404).json({
        message: "User does not exist. Please sign up!",
        success: false,
      });
    }

    const passwordResetToken = crypto.randomBytes(32).toString("hex");
    const response = await User.update(
      { reset_password_token: passwordResetToken },
      {
        where: {
          id: userExists.id,
        },
      }
    );

    const url = `${process.env.BASE_URL}users/${userExists.id}/reset-password/${passwordResetToken}`;
    await sendEmail(userExists.email, "Password Reset Link", url);

    return res.status(201).json({
      message: "A reset password link has been sent to your email",
      success: true,
    });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { hashedPassword } = req.body;

    const user = await User.findOne({
      where: {
        [Op.and]: [
          { id: req.params.id },
          { reset_password_token: req.params.token },
        ],
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid link",
        success: false,
      });
    }
    const decipherdPassword = CryptoJS.AES.decrypt(
      hashedPassword,
      process.env.USER_SECRET
    );
    console.log("Deciphered Password:", decipherdPassword);

    const password = decipherdPassword.toString(CryptoJS.enc.Utf8);

    const salt = await bcryptjs.genSalt(10);
    const NewPassword = await bcryptjs.hash(password, salt);

    const response = await User.update(
      { reset_password_token: "", password: NewPassword },
      {
        where: { id: req.params.id },
      }
    );

    res
      .status(200)
      .json({ message: "Password reset successful", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to reset password", success: false });
  }
};
