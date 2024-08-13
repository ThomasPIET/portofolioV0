'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

export default function Contact () {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleContact (event) {
    event.preventDefault()

    const formData = {
      name, email, message
    }

    try {
      const response = await fetch('/api/mailer', {
        method: 'POST', headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify(formData),
      })

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
        setError(null)
        setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
      } else {
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      setError('Erreur lors de l\'envoi de l\'email')
    }
  }

  return (
    <main>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className={styles.title}>Let's talk about your project!</div>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleContact}>
            <div className={styles.formGroup}>
              <input className={styles.input} type="text" id="name"
                     placeholder="Your name" required value={name}
                     onChange={(e) => setName(e.target.value)}/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label className={styles.label} htmlFor="name">What's your
                name?</label>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} type="email" id="email"
                     placeholder="mail@mail.com" required value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label className={styles.label} htmlFor="email">What's your
                email?</label>
            </div>
            <div className={styles.formGroup}>
              <textarea className={styles.textarea} id="message"
                        placeholder="Hello Thomas, can you help me with ..."
                        required value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
              <label className={styles.label} htmlFor="message">Your
                message</label>
            </div>
            {isSubmitted && (
              <div className={styles.successMessage}>Email sent
                successfully!</div>
            )}
            {error && (
              <div className={styles.errorMessage}>{error}</div>
            )}
            <button className={styles.button} type="submit">Send</button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h3>Contact info</h3>
          <div className={styles.contactItem}>
            <strong>Email:</strong>
            <p>thomaspiet@outlook.fr</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Location:</strong>
            <p>Toulouse, France<br/>Ynov Toulouse Campus</p>
          </div>
          <div className={styles.contactItem}>
            <strong>Social Media:</strong>
            <ul className={styles.socialLinks}>
              <li><a href="https://www.linkedin.com/in/thomas-piet-615014155/" target="_blank"
                     rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/ThomasPIET" target="_blank"
                     rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
}
