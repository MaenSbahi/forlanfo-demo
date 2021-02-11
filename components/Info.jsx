import styles from "../styles/Container.module.scss";
import About from "./About";
import Portfolio from "./Portfolio";
import ToolBar from "./ToolBar";
import Services from "./Services";
import Reviews from "./Reviews";
const Info = () => {
    return (
        <div className={styles.info}>
            <ToolBar />
            <About />
            <Portfolio />
            <Services />
            <Reviews />
        </div>
    );
};

export default Info;
