import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Contact = () => {

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

  L.Marker.prototype.options.icon = DefaultIcon;  
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_xsjqzr9',
        refForm.current,
        'NnhQZqei2A4s4SQ1m'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Currently residing in Saginomiya, Nakano-ku, Tokyo.
            <br />
            Feel free to contact me using this form!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Cheolyeon Byun （ビョンチョリョン）
          <br />
          Japan,
          <br />
          Tokyo, Nakano-ku
          <br />
          Saginomiya 4-14-14 <br />
          (東京都中野区鷺宮4丁目14番14号)
          <span>markorea9708@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.7235341, 139.6341277]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.7235341, 139.6341277]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
