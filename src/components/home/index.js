import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', ' ', 'B', 'y', 'u', 'n']
  const jobArray = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', ' ', 'E', 'N', 'G', 'I', 'N', 'E', 'E', 'R']
  const nameArray2 = ['C', 'h', 'e', 'o', 'l', 'y', 'e', 'o', 'n']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray2}
            idx={1}
          ></AnimatedLetters>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={10}
          ></AnimatedLetters>
        </h1>
        <h3>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={16}
          ></AnimatedLetters>
        </h3>
        <h4>
        Software Engineer Intern in Japan, and an Aspiring Fullstack Developer / ML Engineer
        </h4>
        <h2>
          <br></br>
          <br></br>
          Other projects, like my personal blog made with Next.js,
          data visualization with react-chartjs-2,
          data science projects like my sentiment analysis NLP projects
          are all available in my github page!
          <br></br>
          <a 
          target="_blank"
          rel="noreferrer"
          href="https://github.com/byun-c-ww/Metaverse-Sentiment-Analysis/blob/main/Social_Media_Anlysis%20PDF.pdf">
            Sentiment Analysis Project (PDF file)
          </a>
          <br></br>
          <a 
          target="_blank"
          rel="noreferrer"
          href="https://byunblog.vercel.app/">
            Personal Blog
          </a>
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
