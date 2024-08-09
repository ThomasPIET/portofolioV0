import React from 'react'
import styles from './page.module.css'

export default function Contact () {
  return (
    <main>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className={styles.title}>Let's talk about your project!</div>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input className={styles.input} type="text" id="name"
                     placeholder="Your name" required/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label className={styles.label} htmlFor="name">What's your
                name?</label>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} type="email" id="email"
                     placeholder="mail@mail.com" required/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label className={styles.label} htmlFor="email">What's your
                email?</label>
            </div>
            <div className={styles.formGroup}>
              <textarea className={styles.textarea} id="message"
                        placeholder="Hello Thomas, can you help me with ..."
                        required></textarea>
              <label className={styles.label} htmlFor="message">Your message</label>
            </div>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <p>Contact info</p>
          <p> @ : thomaspiet@outlook.fr</p>
          <p> linkedin : </p>
        </div>
      </div>
    </main>

  )
}