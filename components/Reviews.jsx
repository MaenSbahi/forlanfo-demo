import styles from "../styles/Container.module.scss";
import Review from "./Review";

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <a href="#" className={styles.active}>
                Reviews
            </a>
            <Review />
            <Review />
            <Review />
            <a href="#" className={styles["see-all"]}>
                see more
            </a>
        </div>
    );
};

export default Reviews;
