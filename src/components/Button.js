import PropTypes from 'prop-types';

// NEW WAY OF DECONSTRUCTING BASED ON PROPS
const Button = ({ textColor, bgColor, text, onClick }) => {
  // OLD DESTRUCTURING PATTERN
  // const { color, text, onClick } = props;
  // const onClickThis = () => {
  //   onClick();
  // };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
