import { TbBulbFilled } from 'react-icons/tb';
import { SKILLS } from '../util.js';
import classes from './Skills.module.css';

export default function Skills() {
    return (
        <section className={classes.skillsWrapper}>
            <h1 className={classes.mySkillsheader}>My Skills</h1>
            <section className={classes.skillContainerForeground}>
                <ul className={classes.skillListForeground}>
                    {[...SKILLS, ...SKILLS].map((skill, index) => {
                        return (
                            <li key={index} className={classes.skillItem}>
                                <span>
                                    <TbBulbFilled className={classes.bulbIcon} />
                                </span>
                                <span>{skill}</span>
                            </li>
                        );
                    })}
                    <TbBulbFilled className={classes.extraBulbIcon} />
                </ul>
            </section>
            <section className={classes.skillContainerBackground}>
                <ul className={classes.skillListBackground}>
                    {[...SKILLS, ...SKILLS].map((skill, index) => {
                        return (
                            <li key={index} className={classes.skillItem}>
                                <span>
                                    <TbBulbFilled className={classes.bulbIcon} />
                                </span>
                                <span>{skill}</span>
                            </li>
                        );
                    })}
                    <TbBulbFilled className={classes.extraBulbIcon} />
                </ul>
            </section>
        </section>
    );
}
