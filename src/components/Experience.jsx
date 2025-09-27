import { MdWorkHistory } from 'react-icons/md';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { EXPERIENCE } from '../util.js';
import classes from './Experience.module.css';

export default function Experience() {
    return (
        <>
            <section className={classes.myExperienceSection}>
                <h1>My Experience</h1>
                <div className={classes.experienceContainer}>
                    <div className={classes.experienceOne}>
                        <h4>{EXPERIENCE[0].role}</h4>
                        <p>
                            {EXPERIENCE[0].company} | {EXPERIENCE[0].tenure}
                        </p>
                        <ul>
                            <li>{EXPERIENCE[0].work[0]}</li>
                            <li>{EXPERIENCE[0].work[1]}</li>
                        </ul>
                    </div>
                    <MdWorkHistory className={classes.workIcon1} />
                    <div className={classes.experienceLine}></div>
                    <MdOutlineWorkHistory className={classes.workIcon2} />
                    <div className={classes.experienceTwo}>
                        <h4>{EXPERIENCE[1].role}</h4>
                        <p>
                            {EXPERIENCE[1].company} | {EXPERIENCE[1].company}
                        </p>
                        <ul>
                            <li>{EXPERIENCE[1].work[0]}</li>
                            <li>{EXPERIENCE[1].work[1]}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
