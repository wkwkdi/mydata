import Container from "./Container";
import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <span>DW</span>OS
          </div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
