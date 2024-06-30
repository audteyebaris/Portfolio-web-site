import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { TbBrandRedux } from 'react-icons/tb'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io5'
import { TbBrandReact } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaGitSquare } from 'react-icons/fa'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'A', 'K', 'K', 'I', 'M', 'D', 'A']}
              idx={15} // 1.5 saniyelik gecikme
            />
          </h1>
          <p align="left">
            Merhaba! Ben HTML5, CSS3, Bootstrap, Tailwind, Sass, Javascript,
            React, Redux, Redux-thunk, Redux-thunk-toolkit, Freebase, Typescript
            ile uygulamalar geliştiren bir Web Developer'ım.
          </p>
          <p>
            Kendime güveniyorum, doğal olarak meraklıyım ve sürekli olarak
            projelerimin üzerinde çalışıyorum. Web geliştirme becerilerimi
            sürekli olarak geliştiriyorum ve her bir sorunu çözerken kendimi
            daha iyi hale getirmeye odaklanıyorum.
          </p>
          <p>
            Kendimi tek bir kelime ile tanımlamam gerekirse bu aile olurdu.
            Ailemle vakit geçirmeyi çok seviyorum. Öğrenmeye meraklı, zorluklar
            karşısında asla vazgeçmeyen bir yazılımcı ve anneyim...
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <TbBrandRedux color="#68228b" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <IoLogoCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <TbBrandReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <TbBrandJavascript color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGitSquare color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
