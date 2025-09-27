import { Link, useLocation } from 'react-router';
import { PROJECTS } from '../util.js';
import { FaArrowRight } from 'react-icons/fa';
import classes from './Projects.module.css';

export default function Projects() {
    const { pathname } = useLocation();
    const homeProjects = [...PROJECTS];
    if (pathname !== '/projects') {
        homeProjects.pop();
    }
    return (
        <section id="projects" className={classes.projectsSection}>
            <div className={classes.projectsContainer}>
                <h1>Projects</h1>
                <ul className={classes.projectList}>
                    {homeProjects.map((project) => {
                        return (
                            <li key={project.id} className={classes.projectItem}>
                                <img
                                    src={project.image}
                                    className={classes.projectImage}
                                    alt={`${project.title} image`}
                                ></img>
                                <div className={classes.projectInfo}>
                                    <h3 className={classes.projectTitle}>{project.title}</h3>
                                    <p className={classes.description}>{project.description}</p>
                                    <Link
                                        to={project.link}
                                        target="_blank"
                                        className={classes.link}
                                    >
                                        <span>{project.linkText}</span>
                                        <span>
                                            <FaArrowRight className={classes.arrowRight} />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {pathname !== '/projects' && (
                    <Link to="projects" className={classes.moreLink}>
                        <span>View more</span>
                        <span>
                            <FaArrowRight className={classes.arrowRight} />
                        </span>
                    </Link>
                )}
            </div>
        </section>
    );
}
