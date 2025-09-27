import My_Photo from '../assets/my_pic.png';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import classes from './HomePage.module.css';

export default function HomePage() {
    return (
        <>
            <section id="home" className={classes.main}>
                <div className={classes.intro}>
                    <strong className={classes.hi}>Hi,</strong>
                    <br />
                    <strong className={classes.name}>I'm Mouli 👨‍💻</strong>
                    <br />
                    Code whisperer by day, React wrangler by night. I build fast, functional, and
                    user-focused web apps using ReactJS, JavaScript (ES6+), Tailwind CSS, and a bit
                    of CSS wizardry 🧙‍♂️. Whether it’s real-time delivery tracking, or lightning-fast
                    UIs, I love crafting slick SPAs that just work — clean code, smooth UX, and a
                    dash of JavaScript magic ✨.
                    <br />
                    <br />
                    I’m currently diving deeper into the React rabbit hole — taming re-renders with
                    useCallback, mastering memo, and bending React Router to my will. When I’m not
                    optimizing components, you’ll probably find me playing with UI transitions or
                    shaving milliseconds off load times.
                    <br />
                    <br />
                    Previously at Deloitte, I built features used by thousands, mentored teammates,
                    and made frontend magic happen. Now, I’m at CMU — and always looking for the
                    next cool thing to build.
                </div>
                <div className={classes.myPhotoContainer}>
                    <img src={My_Photo} className={classes.myPhoto} alt="My Photo"></img>
                </div>
            </section>
            <Skills />
            <Projects />
        </>
    );
}
