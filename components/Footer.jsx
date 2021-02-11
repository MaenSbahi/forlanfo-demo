import styles from "../styles/Footer.module.scss";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["inner-row"]}>
                {Array.from({ length: 5 }, () => "x").map((x, i) => (
                    <ul className={styles.links} key={i}>
                        <li>
                            <h4>Categories</h4>
                        </li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                ))}
            </div>
            <p className={styles.copy}>&#169; 2021 Maen Sbahi</p>
        </footer>
    );
};

export default Footer;
