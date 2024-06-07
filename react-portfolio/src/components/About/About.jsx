import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return <section className={styles.container} id ="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/image1.jpeg")} 
            alt="my laptop" 
            className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I have extensive experience in frontend development using HTML, CSS, JavaScript, and React, as well as backend development with Java and Python. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Mobile App Developer</h3>
                        <p>I have experience creating Android apps using Java and recently developed a QR Code Event Check-In System app. I utilized Kanban board, Figma for UI/UX design, UML class diagrams, CRC Cards, and Git for efficient project management, architecture planning, and version control.</p>
                    </div>
                </li>
                
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>Database Management</h3>
                        <p>I have experience in database management, with expertise in SQL, MongoDB, and MySQL. I have designed and optimized complex queries, managed database performance, and ensured data integrity through normalization techniques. </p>
                    </div>
                </li>


            </ul>


        </div>
    </section>
};