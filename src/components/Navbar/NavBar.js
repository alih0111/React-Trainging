import styles from "./NavBar.module.css";
import PorductList1 from "../ProductList";

const NavBar = (props) => {
  return (
    <header className={styles.navBar}>
      <h2>new shopping</h2>
      <span>{props.totalItem}</span>
    </header>
  );  
};
export default NavBar;
