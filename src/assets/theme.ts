import { gray, green } from "@radix-ui/colors";

export const theme = {
  color: {
    background: gray.gray1,
    frame: gray.gray3,
    frameBorder: gray.gray12,
    display: green.green12,
    button: gray.gray9,
    buttonBorder: gray.gray12,
    buttonHover: gray.gray8,
    buttonActive: gray.gray7
  },
  fontFamily: {
    button: "'Roboto', sans-serif",
    display: "'Roboto', sans-serif"
  },
  fontSize: {
    display: "2rem",
    button: "1rem"
  },
  fontWeight: {
    display: 700,
    button: 700
  },
  fontColor: {
    display: gray.gray2,
    button: gray.gray12
  },
  width: {
    frame: {
      min: "128px",
      max: "256px"
    },

    display: {
      min: "128px",
      max: "256px"
    },

    button: {
      min: "32px",
      max: "64px"
    }
  },
  height: {
    frame: {
      min: "256px",
      max: "512px"
    },

    display: {
      min: "16px",
      max: "32px"
    },

    button: {
      min: "32px",
      max: "64px"
    }
  },
  borderRadius: {
    frame: "8px",
    display: "2px"
  },
  gap: ["2px", "4px", "8px", "16px", "32px"]
};
