import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h4>finvision</h4>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>About</li>
        <li className={styles.navLink}>Learn</li>
        <li className={styles.navLink}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
