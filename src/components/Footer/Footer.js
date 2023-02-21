import './Footer.css';

import {
  BsGithub,
  BsLinkedin
} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <div className='footer-socials-github'>
          <a href="https://github.com/melaniemai" target={'_blank'} rel={'noreferrer'}>
            <BsGithub />
          </a>
        </div>
        <div className='footer-socials-linkedin'>
          <a href="https://www.linkedin.com/in/melaniesmai/" target={'_blank'} rel={'noreferrer'}>
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;