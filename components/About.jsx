import styles from "../styles/Container.module.scss";
import Skill from "./Skill";
const About = () => {
    return (
        <div className={styles.about}>
            <a href="#" className={styles.active}>
                About
            </a>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                odit iure atque itaque, accusamus esse reprehenderit aliquam ab
                repudiandae quaerat dolore, quam recusandae earum nesciunt! Non
                sint, enim temporibus porro quidem nihil voluptas dolores nemo
                pariatur illo quos facilis vel fugiat quisquam asperiores
                tempore deserunt aperiam veritatis quasi doloremque quam ipsam
                laudantium aut nesciunt. Deleniti corporis reprehenderit sit
                dignissimos nesciunt iure. Dignissimos mollitia quibusdam
                consequuntur similique debitis cupiditate odit odio dicta
                molestiae, quaerat delectus atque accusantium commodi, tempora
                veniam qui.
            </p>
            <label>Skills:</label>
            <Skill skills={["Design", "Management", "Coding", "Other"]} />
        </div>
    );
};

export default About;
