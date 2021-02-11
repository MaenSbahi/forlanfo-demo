import styles from "../styles/Container.module.scss";
import Service from "./Service";
const Services = () => {
    return (
        <div className={styles.services}>
            <a href="#" className={styles.active}>
                Services
            </a>
            <section className={styles.gallery}>
                <Service />
                <Service />
                <Service />
            </section>
            <a href="#" className={styles["see-all"]}>
                see more
            </a>
        </div>
    );
};

export default Services;
