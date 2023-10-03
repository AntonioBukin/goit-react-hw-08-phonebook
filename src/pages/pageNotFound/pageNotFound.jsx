import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h2>Sorry, something went wrong (:</h2>
      <Link to="/">Home</Link>
    </>
  );
};

export default PageNotFound;