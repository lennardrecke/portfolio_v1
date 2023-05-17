import './App.css';
import { useEffect } from 'react';
import Helmet from 'react-helmet';
import logo from './media/logo.svg';
import me from './media/me.png';
import timer from './media/timer.svg';
import smiley from './media/smiley.svg';
import arrowRight from './media/arrow-right.svg';
import file from './media/file.svg';
import tictactoe from './media/tictactoe.svg';

import star from './media/star.svg';
import circle from './media/circle.svg';
import lightning from './media/lightning.svg';
import line from './media/line.svg';

function App() {

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.c-window');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.style.opacity = 1;
          entry.target.classList.add('animate__bounceIn');
          observer.unobserve(entry.target); // Stop observing once animation triggers
        }
      });
    }, { threshold: 0.5 });

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Clean up the observer when the component unmounts
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array to ensure it only runs once on mount

  return (
    <div className="App">
      <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Helmet>
          <header>
            <nav>
              <div className="logo">
                <img src={logo} alt="Logo" />
                <span>Lennard Recke</span>
              </div>
              <div className="navigation">
                <a href="#about" className="link a-link">About</a>
                <a href="#my-work" className="link a-link">My Work</a>
                <a href="#contact" className="link a-link">Contact</a>
              </div>
            </nav>
          </header>
          <section className="hero">
            <img className="line" src={line} alt="" />
            <img className="star" src={star} alt="" />
            <img className="circle" src={circle} alt="" />
            <img className="lightning" src={lightning} alt="" />
            <div className="hero-left">
              <h3>Hi, my name is Lennard</h3>
              <h1>I'm a Student &amp;<br /> Web Developer</h1>
              <h3>I'm a young and creative individual with boundless energy.</h3>
              <h3>Passionate about turning ideas into reality</h3>
              <div className="buttons">
                <a className="primary-button a-button" href="#contact">Get in touch</a>
              </div>
            </div>
            <div className="hero-right">
              <img src={me} alt="That's right! It's me!" width="350" sizes="(max-width: 479px) 300px, (max-width: 767px) 350px, (max-width: 991px) 300px, 350px" />
            </div>
          </section>
          <section className="about" id="about">
            <div className="grid">
              <div className="c-window w-about animate__animated">
                <div className="c-window-bar">
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                </div>
                <div className="c-window-content">
                  <h3>About Me</h3>
                  <ul>
                    <li>Youthful energy and a fresh perspective</li>
                    <li>Creative thinker and problem solver</li>
                    <li>Adaptable and quick to learn new technologies</li>
                    <li>Keen eye for detail and a strong sense of aesthetics</li>
                  </ul>
                </div>
              </div>
              <div className="c-window w-hobbys animate__animated">
                <div className="c-window-bar">
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                </div>
                <div className="c-window-content">
                  <h3>I am a...</h3>
                  <ul>
                    <li>Road Cycling enthusiast</li>
                    <li>passionate DnD player</li> 
                    <li>skilled cook</li>
                    <li>devoted Doctor Who fan</li>
                  </ul>
                </div>
              </div>
              <div className="c-window w-background animate__animated">
                <div className="c-window-bar">
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                  <span className="c-window-bar-dot" />
                </div>
                <div className="c-window-content">
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                  <img src={file} alt="file" />
                </div>
              </div>
            </div>
          </section>
          <section className="my-work" id="my-work">
            <h1>Projects I'd like to show off</h1>
            <div className="project-container">
              <div className="project-card">
                <img className="project-icon" src={smiley} alt="Smiley" />
                <h3>Eye Tracker</h3>
                <p>A JavaScript mouse tracker, with the visuals of eyeballs. Yuck. But it's creative.</p>
                <div className="link-project">
                  <a href="https://github.com/lennardrecke/js_eyetracker">See more <img src={arrowRight} alt="" /></a>
                </div> 
              </div>
              <div className="project-card">
                <img className="project-icon" src={timer} alt="Timer" />
                <h3>Timer</h3>
                <p>A JavaScript Countdown Timer, created as a University Kick-Off Project.</p>
                <div className="link-project">
                  <a href="https://github.com/lennardrecke/js_timer">See more <img src={arrowRight} alt="" /></a>
                </div> 
              </div>
              <div className="project-card">
                <img className="project-icon" src={tictactoe}alt="TicTacToe" />
                <h3>Tic Tac Toe</h3>
                <p>A C++ Tic Tac Toe Game showing the understanding of programming.</p>
                <div className="link-project">
                  <a href="https://github.com/lennardrecke/TicTacToeGame">See more <img src={arrowRight} alt="" /></a>
                </div> 
              </div>
            </div>
          </section>
          <div className="contact" id="contact">
            <div className="contact-container">
              <div className="left-contact">
                <h1>Be kind and say hi.</h1>
                <p>I usually don't bite. But to be sure hit me up with an E-Mail so we can chat.</p>
                <p className="subtext">E-Mail me at:</p>
                <div className="email-link">
                  <a href="mailto:lennard.recke@icloud.com" className="mail">lennard.recke@icloud.com</a>
                </div>
              </div>
              <div className="right-contact">
                <form action="">
                  <input type="text" name="" className="form-input-field f-input" placeholder="Your name" />
                  <input type="text" name="" className="form-input-field f-input" placeholder="Your E-Mail" />
                  <input type="text" name="" className="form-input-field f-input" placeholder="Your Pronouns" />
                  <textarea name="" className="text-area-form-input f-input" placeholder="How can I help you?" />
                  <input type="button" value="Get in touch" className="primary-button a-button" />
                </form>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
