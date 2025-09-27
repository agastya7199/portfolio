import { Link, NavLink } from 'react-router';
import { SocialIcon } from 'react-social-icons';
import { FaFileLines } from 'react-icons/fa6';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
    return (
        <section className={classes.nameNavigation}>
            <div className={classes.mainNavigationContents}>
                <span className={classes.logo}>Venkata Sai Mouli, Agastya</span>
                <div className={classes.navigationContainer}>
                    <nav className={classes.navigation}>
                        <li className={classes.navItem}>
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    isActive ? classes.active : classes.inactive
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={classes.navItem}>
                            <NavLink
                                to="projects"
                                className={({ isActive }) =>
                                    isActive ? classes.active : classes.inactive
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className={classes.navItem}>
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive ? classes.active : classes.inactive
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className={classes.navItem}>
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    isActive ? classes.active : classes.inactive
                                }
                            >
                                Contact me
                            </NavLink>
                        </li>
                    </nav>
                </div>
                <div className={classes.socialContainer}>
                    <ul className={classes.socialList}>
                        <li>
                            <span className={classes.greenDot}></span>
                            <span className={classes.available}>Available</span>
                        </li>
                        <li>
                            <SocialIcon
                                url="https://www.linkedin.com/in/mouli-agastya-06340a187/"
                                target="_blank"
                                bgColor="black"
                                className={classes.linkedInIcon}
                            ></SocialIcon>
                        </li>
                        <li>
                            <SocialIcon
                                url="https://github.com/agastya7199"
                                target="_blank"
                                bgColor="black"
                                className={classes.gitHubIcon}
                            ></SocialIcon>
                        </li>
                        <li>
                            <Link
                                to="https://drive.google.com/file/d/1-7P24odYLjLqDRxe7__TNJZa_27g5HQe/view"
                                target="_blank"
                            >
                                <FaFileLines className={classes.resumeIcon} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
