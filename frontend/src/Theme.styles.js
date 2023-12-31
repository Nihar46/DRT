import { createTheme } from "@mui/material/styles";
import ErrorIcon from "./assets/images/Error-Icon.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003057",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DAAA02",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontSize: 34,
      fontWeight: 400,
      color: "#003057",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 34,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 26,
        },
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
      color: "rgba(0, 0, 0, 0.87)",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 22,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 22,
        },
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
      color: "rgba(0, 0, 0, 0.87)",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 20,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 20,
        },
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
      color: "rgba(0, 0, 0, 0.87)",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 18,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 18,
        },
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 16,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 16,
        },
    },
    h6: {
      fontSize: 15,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
      wordBreak: "break-word",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 15,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 14,
        },
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 16,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 15,
        },
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.60)",
      "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
        {
          fontSize: 14,
        },
      "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
        {
          fontSize: 13,
        },
    },
  },

  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            fontSize: "16px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#003057",
          padding: "8px",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-body": {
            color: "#00000099",
          },
          "& .MuiTableRow-root:hover": {
            backgroundColor: "#0000001f",
            cursor: "pointer",
            transition: "0.3s",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "#003057",
          fontWeight: "500",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiButton-containedSecondary": {
            backgroundColor: "#0000008a",
            color: "#fff",
            borderColor: "transparent",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: "rgba(0, 0, 0, 0.60)",
          fontWeight: 400,
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: 8,
          background: "#fff",
          "&.Mui-focused": {
            borderColor: "#003057",
            boxShadow: "0px 1px 8px #003057",
          },
          "&:hover": {
            borderColor: "#003057",
            boxShadow: "0px 1px 8px #003057",
          },
        },
        inputMultiline: {
          borderRadius: 8,
          padding: 10,
        },
        multiline: {
          padding: 0,
        },
        notchedOutline: {
          borderColor: "transparent",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
        input: {
          fontSize: 16,
          color: "rgba(0, 0, 0, 0.60)",
          fontWeight: 400,
          padding: "14px 14px!important",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontSize: 16,
          color: "rgba(0, 0, 0, 0.60)",
          marginBottom: "8px",
          fontWeight: "500",
          "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
            {
              fontSize: 14,
            },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "14px",
          backgroundImage: `url(${ErrorIcon})`,
          backgroundSize: "17px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 0px",
          marginLeft: "0",
          paddingLeft: "24px",
          marginTop: "8px",
          "&.Mui-error": {
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "uppercase",
          fontSize: 15,
          fontWeight: "500",
          borderRadius: "4",
          border: "1px solid transparent",
          "@media screen and (min-device-width: 768px) and (max-device-width: 1024px)":
            {
              fontSize: 15,
            },
          "@media screen and (min-device-width: 320px) and (max-device-width: 767px)":
            {
              fontSize: 14,
            },
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#003057",
              boxShadow: "none",
              color: "#fff",
              border: "1px solid #003057",
              textTransform: "uppercase",
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              backgroundColor: "#DAAA02",
              boxShadow: "none",
              color: "#003057",
              border: "1px solid #DAAA02",
              textTransform: "uppercase",
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              backgroundColor: "#fff",
              boxShadow: "none",
              color: "#E17512",
              border: "1px solid #E17512",
              textTransform: "uppercase",
            }),
          "&:hover": {
            backgroundColor: "#F1A12F",
            boxShadow: "none",
            border: "1px solid #F1A12F",
            color: "#ffffff",
          },
          "&.Mui-disabled": {
            backgroundColor: "#F6F7F8",
            color: "rgba(0, 0, 0, 0.38)",
            border: "1px solid #F6F7F8",
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "none",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
