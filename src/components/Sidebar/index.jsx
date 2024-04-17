import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import logos from '../../assets/images/logos.png'
import './index.scss'
import { IoHomeSharp } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="Logo" />
      <img className="sub-logo" src={logos} alt="sema" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <IoHomeSharp color="#4d4d43" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/"
      >
        <FaUser color="#4d4d43" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <MdEmail color="#4d4d43" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sema-demir-6267ab291/"
        >
          <FaLinkedin color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/sema-demir"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/coder_anne/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
