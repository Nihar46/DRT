export const submitRequest = async (req, res) => {
  const { projectInformation, designDetails } = req.body;

  console.log("ProjectInformation:", projectInformation);
  console.log("Design Details:", designDetails);

  res.json({
    success: true,
    message: "Request Created Successfully",
  });
};
