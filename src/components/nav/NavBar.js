import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to="/shippingships">Ships</Link>
      </li>
      <li>
        <Link to="/haulingships">Haulers</Link>
      </li>
      <li>
        <Link to="/docks">Docks</Link>
      </li>
    </ul>
  );
};
