import { useTheme } from "@emotion/react";
import { Button, styled } from "@mui/material";
import { buttonPropTypes, buttonDefaultProps } from '../utils/compoValidation';
const CustomButton = (props) => {
  const theme = useTheme();

  const StyledButton = styled(Button)(
    ({
      theme,
      fullWidth = 1,
      customStyles,
      loading = false,
      disabled = false,
    }) => ({
      background: theme.palette.primary.main,
      width: fullWidth ? "100%" : "auto",
      ...customstyles,
    })
  );
  const { startIcon, endIcon, customstyles, fullWidth, children, loading ,
    disabled ,...other } =
    props;
  return (
    <>
      <StyledButton
        sx={customstyles}
        fullWidth={fullWidth}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        {props.children || "Sign In"}
      </StyledButton>
    </>
  );
};

CustomButton.propTypes = buttonPropTypes;
CustomButton.defaultProps = buttonDefaultProps;


export default CustomButton;
