"use client"

import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.aboutContainer} ${isVisible ? styles.visible : ''}`}>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.grid}>
        <section className={styles.section}>
          <h2>Who I Am</h2>
          <p>Je suis Thomas PIET, un étudiant passionné par le développement web et les nouvelles technologies.</p>
        </section>

        <section className={styles.section}>
          <h2>My Projects</h2>
          <ul>
            <li className={styles.projectItem}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h3>Mise en place d'un server web</h3>
              <p>Hébergement de sites web sur Raspberry Pi avec
                {/* eslint-disable-next-line react/no-unescaped-entities */}
               un loadbalancer et un reverse proxy, j'ai utilisé traefik pour ce projet. </p>
            </li>
            <li className={styles.projectItem}>
              <h3>Personal Workspace</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>Un projet en cours de réalisation qui a pour objectif d'offrir un espace de travail regroupant tout les outils nécessaires pour travailler (pomodoro, to-do-list, ...) </p>
            </li>
          </ul>
        </section>
      </div>

      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact Information</h2>
        <p>Email: thomaspiet@outlook.fr</p>
        <p>Location: Toulouse, France - Ynov Toulouse Campus</p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>GitHub</a>
        </div>
      </section>
    </div>
  )
}