import { BsStarHalf, BsCalendar, BsClock, BsStopwatch } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import styles from "../styles/Container.module.scss";
const Card = () => {
    return (
        <div className={styles.card}>
            <header className={styles["card-header"]}>
                <div className={styles.img}>
                    <img src="/girl.jpg" alt="freelancer image" />
                </div>
                <div className={styles["user-info"]}>
                    <div className={styles.label}>
                        <h4 className={styles.name}>Tamara Jaber</h4>
                        <span className={styles.rate}>
                            <BsStarHalf />
                            <span className={styles.count}>8</span>
                        </span>
                    </div>
                    <p className={styles.major}>Ux/Ui Designer</p>
                    <div className={styles.location}>
                        <FaMapMarkerAlt />
                        <p className={styles.country}>Palestine</p>
                    </div>
                </div>
            </header>
            <div className={styles.action}>
                <button className={styles.btn}>connect</button>
            </div>
            <footer className={styles["card-footer"]}>
                <div className={styles.data}>
                    <span className={styles.icon}>
                        <BsCalendar />
                    </span>
                    <h4 className={styles.title}>Member since:</h4>
                    <p>6 Months</p>
                </div>
                <div className={styles.data}>
                    <span className={styles.icon}>
                        <BsClock />
                    </span>
                    <h4 className={styles.title}>Response time:</h4>
                    <p>3 Hours</p>
                </div>
                <div className={styles.data}>
                    <span className={styles.icon}>
                        <BsStopwatch />
                    </span>
                    <h4 className={styles.title}>Last active:</h4>
                    <p>1 day</p>
                </div>
                <div className={styles.data}>
                    <span className={styles.icon}>
                        <BiCommentDetail />
                    </span>
                    <h4 className={styles.title}>Language:</h4>
                    <p>
                        Arabic
                        <br />
                        English
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Card;
