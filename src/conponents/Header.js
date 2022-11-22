import { Link } from 'react-scroll'

function Header() {

  return (
    <div className="side fixed-header darkmode">
      <ul>
        <li><Link to='home' smooth={true} duration={200}>Home</Link></li>
        <li><Link to='portfolio' smooth={true} duration={200}>Portfolio</Link></li>
        <li><Link to='about' smooth={true} duration={200}>About</Link></li>
        <li><Link to='contact' smooth={true} duration={200}>Contact</Link></li>
      </ul>

    </div>
  )
}
export default Header