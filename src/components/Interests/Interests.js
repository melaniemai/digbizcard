import './Interests.css';

const Interests = () => {
  return (
    <div className="interests-container">
      <div className="interests-title">Interests</div>
      <div className="interests-text">
        <div className="developement-container">
          <div className="development-title">Development / Design:</div> 
          <div className="development-text">
            <p>Web & Full Stack Development, Data Science, Cloud Computing, UX/UI Design</p>
          </div>
        </div>
        <div className="other-container">
          <div className="other-title">Other:</div> 
          <div className="other-text">
            <p>Coffee, Film/Polaroids, Sunsets, Helping others, Learning!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;