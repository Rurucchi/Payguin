import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">MainScreen</Link>
          </li>
          <li>
            <Link to="/languages">Languages</Link>
          </li>
          <li>
            <Link to="/pin">Pin</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/withdraw">Withdraw</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;