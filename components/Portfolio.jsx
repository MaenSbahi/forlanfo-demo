import styles from "../styles/Container.module.scss";
const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <a href="#" className={styles.active}>
                Portfolio
            </a>
            <section className={styles.gallery}>
                <div className={styles.work}>
                    <img src="/work1.jpg" alt="" />
                    <h4 className={styles.title}>Work Title</h4>
                </div>
                <div className={styles.work}>
                    <img src="/work2.jpg" alt="" />
                    <h4 className={styles.title}>Work Title</h4>
                </div>
                <div className={styles.work}>
                    <img src="/work3.jpg" alt="" />
                    <h4 className={styles.title}>Work Title</h4>
                </div>
            </section>
            <a href="#" className={styles["see-all"]}>
                see more
            </a>
        </div>
    );
};

export default Portfolio;
