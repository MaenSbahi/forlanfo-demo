import styles from "../styles/Nav.module.scss";
import { GoThreeBars } from "react-icons/go";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["inner-row"]}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className={styles.links}>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#" className={styles.active}>
              Services
            </a>
          </li>
          <li>
            <a href="#">Freelancers</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">عربي</a>
          </li>
        </ul>
        <a href="#" className={styles.toggle}>
          <GoThreeBars />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
