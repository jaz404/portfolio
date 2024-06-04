import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id ="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage1.jpg")} 
            alt="my laptop" 
            className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}  alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}  alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                </li>
                
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")}  alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                </li>


            </ul>


        </div>
    </section>
};