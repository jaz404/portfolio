import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
    return <section className ={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I'm Jaspreet</h1>
            <p className={styles.description}>I am pursuing Computing Science Specialization at the University of Alberta. Reach out if you'd like to learn more. 
            </p>
            <a href="mailto:jchhabr1@ualberta.ca" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src ={getImageUrl("hero/heroImage1.png")} alt = "hero image of me"className={styles.heroImg}>

        </img>
        <div className= {styles.topBlur}></div>
        <div className= {styles.bottomBlur}></div>

    </section>;
};