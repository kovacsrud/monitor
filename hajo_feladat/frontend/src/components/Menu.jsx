import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = "bg-blue-700 text-white px-4 py-2 rounded-md transition-all";
  const inactiveStyle = "text-blue-200 hover:text-white px-4 py-2 transition-all";

  return (
    <nav className="bg-blue-800 p-4 sticky top-0 z-50">
      <ul className="flex justify-center gap-8 font-medium">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            Főoldal
          </NavLink>
        </li>
        <li>
          <NavLink to="/hajok" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            Hajóink
          </NavLink>
        </li>
        <li>
          <NavLink to="/ujhajo" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            Új hajó felvétele
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;