import { skillsWrapper, skillTag } from "../styles/Container.module.scss";
const Skill = ({ skills }) => {
    return (
        <div className={skillsWrapper}>
            {skills.map((skill) => {
                return (
                    <a href="#" className={skillTag} key={skill}>
                        {skill}
                    </a>
                );
            })}
        </div>
    );
};

export default Skill;
