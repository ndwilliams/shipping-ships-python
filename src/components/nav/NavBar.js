import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to="/shippingships">Ships</Link>
      </li>
      <li>
        <Link>Haulers</Link>
      </li>
      <li>
        <Link>Docks</Link>
      </li>
    </ul>
  );
};
