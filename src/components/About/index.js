import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react'
import logo from '../../assets/images/Showcase.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faR } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                </h1>
                <p>
                    Waseda University Student from the School of International Liberal Studies with a major in Computer Science with a focus on Natural Language Processing and Sentiment Analysis.
                </p>
                <p>
                    Also a huge 少年漫画 fan!
                </p>
                <p>
                    Currently working as a software engineer intern at つばさ株式会社, developing RESTful APIs using AWS Lambda, PostgreSQL,
                    and Python. I also developed front end UI elements like
                    dynamic Charts that you can see on the right!
                </p>
                <p>
                    Check out my github page on the bottom left corner for more projects I've done!
                </p>
            </div>
            <img className="chartJS" src={logo} alt="loading..." />
            {/* <img src={require('../assets/images/Showcase.gif')} alt="loading..." /> */}
            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faR} color='#EC4D28' />
                    </div>
                </div>
            </div> */}
        </div>
        <span class="loader"></span>
        </>
    )
}

export default About