import {
  AiOutlineMail,
  AiFillLinkedin
} from 'react-icons/ai';

import './Info.css';
import portrait from '../../img/iconImage_small2.jpeg';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-img">
        <img src={portrait} alt="profile" />
      </div>
      <div className="info-text">
        <div className="info-name">
          <div className="info-firstn">Mel</div>
          <div className="info-subtitle">Student & Dev</div>
          <div className="info-web">melaniesmai@github.io</div>
        </div>
      </div>
      <div className="info-socials">
        <div className="info-socials-email">
          <a href='mailto:melaniesmai@outlook.com'>
            <button className='info-socials-email-button'>
              <AiOutlineMail className='email-icon'/> Email
            </button>
          </a>
        </div>
        <div className="info-socials-linkedin">
          <a href="https://www.linkedin.com/in/melaniesmai/" target={'_blank'} rel={'noreferrer'}>
            <button className='info-socials-linkedin-button'>
              <AiFillLinkedin className='email-icon'/> Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;