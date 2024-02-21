import React from 'react';
import './App.css';
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import profile from "./assets/profile.svg";
import main from "./assets/버디메인.PNG";
import main2 from "./assets/쓰슈.PNG";
import Button from './Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='list'>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className='wave-container'>
          <h1 className='header'>Frontend Portfolio</h1>
          <div className='img'>
            {/* <img src={wave1} />
            <img src={wave2} />
            <img src={wave3} /> */}
          </div>
        </div>

      </header>
      <main>
        <section id="about" className="section">
          <h2 className='title'>About Me</h2>
          <div className="container">
            <div className='intro'>
              <p><span className='span'>끊임없는 발전</span>을 도모하고 문제를 직면하며,<br /> 해결하는 것을 좋아합니다.</p>
              <p>사용자의 입장에서 <span className='span'>더 나음</span>에 대하여 고민하고 해결합니다.</p>
            </div>
            <div className='profile'>
              <div className='name'>
                <div className='wrap'>
                  <img src={profile} />
                </div>
                <div className='wrap2'>
                <p>NAME</p>
                <p>강지은</p>
                </div>
              </div>
              <div className='phone'>
                <div className='wrap'>
                <img src={phone}  />
                </div>
                <div className='wrap2'>
                <p>PHONE</p>
                <p>010-5879-4310</p>
                </div>
              </div>
              <div className='email'>
                <div className='wrap'>
                <img src={email} />
                </div>
                <div className='wrapp2'>
                <p>EMAIL</p>
                <p>rjeh321@naver.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skill" className="section">
          <div className="container">
            <h2>Skill</h2>
            <Button />
          </div>
        </section>
        <section id="project" className="section">
          <div className="pro-container">
            <h2>Project</h2>
            <div className="project">
              <img src={main} className='buddy'/>
              <p>버디즈 team project</p>
              <p>운동메이트 찾기</p>
            </div>
            <div className="project">
            <img src={main2} className='ssu'/>
              <p>쓰슈 team project</p>
              <p>우산대여 사이트</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email or connect with me on social media.</p>
            <p>Email: example@example.com</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
