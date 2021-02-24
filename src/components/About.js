import { useHistory, Link } from 'react-router-dom';

const About = () => {
  const history = useHistory();

  return (
    <div>
      <h4>Version 1.0.5</h4>
      <Link onClick={() => history.push('/')}>Go Back</Link>
    </div>
  );
};

export default About;
