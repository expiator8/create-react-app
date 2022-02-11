import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={`${process.env.PUBLIC_URL}`}>Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;
