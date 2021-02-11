import { BsStarHalf, BsStarFill } from "react-icons/bs";
import styles from "../styles/Container.module.scss";

const Review = () => {
    return (
        <section className={styles.review}>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    <img src="/girl.jpg" alt="author" />
                </div>
                <div className={styles.label}>
                    <h4 className={styles.name}>Tamara Jaber</h4>
                    <p>3 Days Ago</p>
                </div>
                <div className={styles.rate}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </div>
            </div>
            <p className={styles.body}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                maxime eum, est aperiam nulla incidunt illo fuga dignissimos
                provident modi vero, odit reprehenderit laborum assumenda.
            </p>
        </section>
    );
};

export default Review;
