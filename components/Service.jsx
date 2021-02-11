import styles from "../styles/Container.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Service = () => {
    return (
        <div className={styles.service}>
            <div className={styles.img}>
                <img src="/service.jpg" alt="" />
            </div>
            <div className={styles.body}>
                <div className={styles.author}>
                    <div className={styles.avatar}>
                        <img src="/girl.jpg" alt="author" />
                    </div>
                    <div className={styles.label}>
                        <h4 className={styles.name}>Tamara Jaber</h4>
                        <p>Graphic Designer</p>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia provident inventore eius.
                </p>
                <div className={styles.details}>
                    <span className={styles.rate}>
                        <BsStarHalf />
                        <span className={styles.count}>8</span>
                    </span>
                    <p className={styles.sold}>102 sold</p>
                    <h4 className={styles.price}>25$</h4>
                </div>
                <footer className={styles["service-footer"]}>
                    <button className={styles.liked}>
                        <AiOutlineHeart />
                    </button>
                    <button className={styles.view}>View</button>
                </footer>
            </div>
        </div>
    );
};

export default Service;
