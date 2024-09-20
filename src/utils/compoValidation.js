
import PropTypes from 'prop-types';


//prop type validation
const buttonPropTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  customStyles: PropTypes.object,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,  
  disabled: PropTypes.bool,
};


//prop default value
const buttonDefaultProps = {
  fullWidth: false,
  loading: false,
  disabled: false,
  customStyles: {},
};

export { buttonPropTypes, buttonDefaultProps };
