'use client';
import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react'
import Project from '../components/project';
import Modal from '../components/modal';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const projects = [
  {
    title: 'Hasa Promotion', src: 'hasa.png',
    color: "#CFD8DC", activity : "Design & Developpement", description: "Réalisation d'une one-page en attendant la version finaln du site "
  },
  {
    title: 'WebPiet Developpement', src: 'Rectangle_3.png',
    color: "#C5E1A5", activity : "Design", description: "Conception d'une maquette d'un site de tourisme"
  },
  {
    title: 'WebPiet Developpement', src: 'Rectangle_4.png',
    color: "#EFE8D3", activity : "Developpement", description: "Développement d'une fonctionnalité pour un site de tourisme"
  }
]

export default function Home() {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1,
      }, x: '-500px',
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }
  const [modal, setModal] = useState({active: false, index: 0})

  return (

    <main className={styles.main}>

      <div className={styles.heroBanner}>
        {/*<Image src={`/images/img.png`}*/}
        {/*        width={300}*/}
        {/*        height={0}*/}
        {/*       alt="paysage"*/}
        {/*       className={styles.image}*/}
        {/*/>*/}
        <div className={styles.sliderContainer}>

          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Thomas Piet -</p>
            <p ref={secondText}>Thomas Piet -</p>
          </div>

        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return <Project index={index} title={project.title}
                            setModal={setModal} activity={project.activity} key={index}/>
        })
      }
        </div>
        <Modal modal={modal} projects={projects}/>
      </div>

    </main>

  )
}
