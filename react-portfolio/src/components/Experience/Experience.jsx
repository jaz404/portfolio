import React from "react";
import skills from "../../data/skills.json"
import history from "../../data/histoy.json"
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css"

export const Experience = () => {
    return <section id="experience" className ={styles.container}>
        <h2 className ={styles.title}>Experience</h2>
            <div className ={styles.content}>
            <div className ={styles.skills}>{
                    skills.map((skill,id) => {
                        return (<div key={id} className ={styles.skill}>
                            <div className ={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                            <p>{skill.title}</p>
                        </div>

                        );
                    })
                    
                
            }</div>
            <ul className ={styles.history}>{
                history.map((histoyItem,id) => {
                    return (<li key= {id} className ={styles.historyItem}>
                        <img src={getImageUrl(histoyItem.imageSrc)} alt={`${histoyItem.organisation} Logo`} />
                        <div className ={styles.historyItemDetails}>
                            <h3>{`${histoyItem.role}, ${histoyItem.organisation}`}</h3>
                            <p>{`${histoyItem.startDate} - ${histoyItem.endDate}`}</p>
                            <ul>{histoyItem.experiences.map((experience, id) => {
                                return ( <li key = {id}>{experience}</li>);
                            })}</ul>
                        </div>
                    </li>             
                );
                })
                }

            </ul>
            </div>
    </section>
}