import styles from "../../styles/css/Header.module.css";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.groupParent}>
      <div className={styles.planetParent}>
        <button className={styles.planet} onClick={() => navigate("/")}>
          <img src="/img/임시로고.svg" />
        </button>
      </div>
      <div
        className={styles.basketAlt3Icon}
        onClick={() => navigate("/heartList")}
      >
        <img src="/img/basket-alt-3.svg" />
      </div>
      <button
        className={styles.userCicrleDuotoneIcon}
        onClick={() => navigate("/login")}
      >
        <img src="/img/user-cicrle-duotone.svg" />
      </button>
      <Searchbar></Searchbar>
      <div className={styles.line} />
      {/*<div className={styles.groupItem} />
      <img className={styles.searchAltIcon} alt="" src="/img/search-alt.svg" />
      <input className={styles.div16}
        placeholder="상품명 입력"
        />*/}
    </div>
  );
};

export default Header;
