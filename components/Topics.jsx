import styles from "../styles/Topics.module.scss";
const Topics = () => {
    return (
        <nav className={styles.topics}>
            <div className={styles["inner-row"]}>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Design</a>
                    </li>
                    <li>
                        <a href="#">Marketing</a>
                    </li>
                    <li>
                        <a href="#" className={styles.active}>
                            Development
                        </a>
                    </li>
                    <li>
                        <a href="#">Writing</a>
                    </li>
                    <li>
                        <a href="#">Video </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Topics;
