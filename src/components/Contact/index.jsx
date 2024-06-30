import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Form } from 'react-router-dom'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'semademir2842@gmail.com',
        'swAQhC-FnlDA5r6I0',
        refForm.current,
        'YNtvnsUp9fp3g3c0lw4w0'
      )
      .then(
        () => {
          alert('Mesaj başarıyla iletildi!!')
          window.location.reload(false)
        },
        () => {
          alert('Mesaj gönderilemedi, lütfen tekrar deneyin')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'İ',
                'l',
                'e',
                't',
                'i',
                'ş',
                'i',
                'm',
                'e',
                ' ',
                'g',
                'e',
                'ç',
              ]}
              idx={15}
            />
          </h1>
          <p>Web alanındaki her türlü proje ve işbirliğine açığım.</p>
          <div className="contact-form">
            <form ref={Form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="İsim" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Konu"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mesaj"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Gönder" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sema Demir
          <br />
          Turkey
          <br />
          Ulukapı mahallesi 154261 sok. Kandemir sitesi <br />
          Seydişehir /Konya <br />
          <br />
          <span>semademir0505@gmail.com</span>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
