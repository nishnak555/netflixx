import { useTheme } from "@emotion/react";
import { Button, styled } from "@mui/material";
import { buttonPropTypes, buttonDefaultProps } from "../utils/compoValidation";
const CustomButton = (props) => {
  const theme = useTheme();

  const StyledButton = styled(Button)(({ fullWidth, customstyles }) => ({
    background: theme.palette.primary.main,
    width: fullWidth ? "100%" : "auto",
    ...customstyles,
  }));
  const {
    startIcon,
    endIcon,
    customstyles,
    fullWidth,
    children,

    ...other
  } = props;
  return (
    <StyledButton
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      {...other}
    >
      {children || "Sign In"}
    </StyledButton>
  );
};

CustomButton.propTypes = buttonPropTypes;
CustomButton.defaultProps = buttonDefaultProps;

export default CustomButton;
