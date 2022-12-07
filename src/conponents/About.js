import React from 'react'

function about() {
  return (
    <div className="section4 about" id="section4">
      <div className="container-fluid">
        <div className="col aboutMe">ABOUT ME</div>
        <div className="row row-cols-lg-2">
          <div className="col cols">
            <p>Hello I'm Romy, A creating websites and learning new thing . I'm a starter developer who wants to learn more knowledge of web development</p>
            <div className="mySocial">
              <a href="https://github.com/RomyGuibelondo"><i class="fab fa-github fa-2x"></i></a>
              <a href="https://www.facebook.com/romy.guibelondo.39"><i class="fab fa-facebook fa-2x"></i></a>
              <a href="https://twitter.com/JabolRomy"><i class="fab fa-twitter fa-2x"></i></a>
              <a href="https://www.youtube.com/channel/UC7Yy8wklwxxvR3CdHhtjEow"><i class="fab fa-youtube fa-2x"></i></a>
            </div>
            <div className="col colImage">
              <a href="https://html.com/"><img src={require('../image/html5-logo.png')} alt="html5 log"/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={require('../image/css-logo.png')} alt="CSS logo"/></a>
              <a href="https://www.javascript.com/"><img src={require('../image/js-logo.png')} alt="Javascript logo"/></a>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"><img src={require('../image/bootstrap-logo.png')} alt="bootstrap logo"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about