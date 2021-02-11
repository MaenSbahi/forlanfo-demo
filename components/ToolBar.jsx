import styles from "../styles/Container.module.scss";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { ImPushpin } from "react-icons/im";

const ToolBar = () => {
    return (
        <section className={styles["tool-bar"]}>
            <div className={styles.data}>
                <span className={styles.icon}>
                    <FaMoneyBillAlt />
                </span>
                <h4 className={styles.title}>Total Earn :</h4>
                <p>50$</p>
            </div>
            <div className={styles.data}>
                <span className={styles.icon}>
                    <ImPushpin />
                </span>
                <h4 className={styles.title}>Order Sold :</h4>
                <p>6</p>
            </div>
            <div className={styles.data}>
                <span className={styles.icon}>
                    <BsLightningFill />
                </span>
                <h4 className={styles.title}>Order in Progress :</h4>
                <p>5</p>
            </div>
        </section>
    );
};

export default ToolBar;
