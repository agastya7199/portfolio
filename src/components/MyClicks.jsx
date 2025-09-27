import { MYCLICKS } from '../util.js';
import classes from './MyClicks.module.css';

export default function MyClicks() {
    return (
        <>
            <section className={classes.myClicksSection}>
                <h1 className={classes.myClicksHeading}>My Clicks</h1>
                <div className={classes.imagesContainer}>
                    <img src={MYCLICKS.image_1} className={classes.myClick} alt="My click 1" />
                    <img src={MYCLICKS.image_2} className={classes.myClick} alt="My click 2" />
                    <img src={MYCLICKS.image_3} className={classes.myClick} alt="My click 3" />
                    <img src={MYCLICKS.image_4} className={classes.myClick} alt="My click 4" />
                    <img src={MYCLICKS.image_5} className={classes.myClick} alt="My click 5" />
                    <img src={MYCLICKS.image_6} className={classes.myClick} alt="My click 6" />
                    <img src={MYCLICKS.image_7} className={classes.myClick} alt="My click 7" />
                    <img src={MYCLICKS.image_8} className={classes.myClick} alt="My click 8" />
                    <img src={MYCLICKS.image_9} className={classes.myClick} alt="My click 9" />
                    <img src={MYCLICKS.image_10} className={classes.myClick} alt="My click 10" />
                    <img src={MYCLICKS.image_11} className={classes.myClick} alt="My click 11" />
                    <img src={MYCLICKS.image_12} className={classes.myClick} alt="My click 12" />
                    <img src={MYCLICKS.image_13} className={classes.myClick} alt="My click 13" />
                </div>
            </section>
        </>
    );
}
