import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function Home() {
  const [text] = useTypewriter({
    words: ['Romy J. Guibelondo', 'Web Developer'],
    loop: {},
    typeSpeed: 170,
    deleteSpeed: 80,
  })
  return (
    <div name="home" className="section home" id="section1">
      <div className="side1 side">
        <div className="profile">
          <img src={require('../image/profile.jpg')} alt="Profile logo" />
        </div>
        <div className="profileName">
          <div className="welcome">WELCOME! I'M</div>
          <div className="nameProf" id="nameProf">
            <span className='nameText'>{' '}{text}</span>
            <Cursor/>
          </div>
        </div>
      </div>

      <div className="side2 side">
        <h3>Misamis Oriental, Northern Mindanao, Philippines</h3>
      </div>
      <div className="side3 side">
        <h3>My strength is that I am always ready to take up new challenges and strive for excellence. This is because I believe success and failures are the best way to sculpt ourselves to reach our goals. And I believe in myself and my hard work and want fulfillment in everything.</h3>
      </div>
    </div>
  )
}
export default Home