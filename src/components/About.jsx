import Experience from './Experience.jsx';
import MyClicks from './MyClicks.jsx';
import classes from './About.module.css';

export default function About() {
    return (
        <>
            <section className={classes.aboutSection}>
                <section className={classes.aboutMeContainer}>
                    <h1>About Me</h1>
                    <p className={classes.aboutMeContent}>
                        Hey, I’m Mouli — a front-end developer who fell in love with React, clean
                        UI, and the occasional clever console.log() 🐛➡️✨. I started my tech
                        journey in Electronics & Communication ⚙️📡, but quickly realized I’d rather
                        debug JavaScript than simulate circuits. Fast forward: I joined Deloitte and
                        spent 2+ years crafting high-impact UIs used by thousands 🧑‍💼💻.
                        <br />
                        <br />
                        At Deloitte, I built features like real-time delivery tracking 🚚, rebate
                        dashboards 💸, and reusable pagination engines 🔄 that saved dev teams
                        hours. I’ve wrangled Salesforce LWC, tamed form errors 😵‍💫➡️😌, and even ran
                        onboarding sessions (complete with less panic and more documentation 📝).
                        <br />
                        <br />
                        Now, I’m deep in the React zone ⚛️ — mastering useCallback, bending React
                        Router to my will 🧙‍♂️, and pursuing a Master’s in Information Systems
                        (Business Data Analytics) at CMU 🎓📊. I’m all about building web
                        experiences that are fast ⚡, clean 🧼, and so smooth they make users go
                        “whoa” 🤯.
                        <br />
                        <br /> When I’m not coding, I’m sketching UI ideas ✏️, obsessing over page
                        transitions 🎨, or pretending CSS bugs don’t exist 🫠. Let’s build something
                        awesome — functional, beautiful, and maybe even a little fun 🛠️🎉.
                    </p>
                </section>
                <MyClicks />
                <Experience />
            </section>
        </>
    );
}
