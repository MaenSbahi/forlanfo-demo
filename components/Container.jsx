import { container } from "../styles/Container.module.scss";
import Card from "./Card";
import Info from "./Info";
const Container = () => {
    return (
        <section className={container}>
            <Card />
            <Info />
        </section>
    );
};

export default Container;
