import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          bgColor={showAdd ? '#4a47a3' : '#709fb0'}
          textColor={showAdd ? 'white' : 'black'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/***** CSS IN JSX  *****/

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;
