import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from "react-modal"
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { titleIdioms,headerSections,bannerLanguage,aboutMeInfo,hardSkillInfo,softSkillInfo,inputText,projectTitle,projectTexts,projectTextsPt } from './data/data';
import './App.css'
import selfie from './assets/selfie.png'
import htmlIco from './assets/html.png'
import cssIco from './assets/css.png'
import javascriptIco from './assets/javascript.png'
import typescriptIco from './assets/typescript.png'
import tailwindIco from './assets/tailwind.png'
import reactIco from './assets/react.png'
import pokedex from './assets/pokedex.png'
import bmiCalculator from './assets/bmicalculator.png'
import onDevelopment from './assets/ondevelopment.png'
import arrow from './assets/arrow.png'
import repository from './assets/repository.png'
import eye from './assets/eye.png'
import linkedinIco from './assets/linkedin.png'
import githubIco from './assets/github.png'
import whatsappIco from './assets/whatsapp.png'
import portuguese from './assets/portuguese.png'
import english from './assets/english.png'


Modal.setAppElement("#root");

function App() {

  const [currentProjectTitleIndex, setCurrentProjectTitleIndex] = useState(0);
  const [currentProjectTextIndex, setCurrentProjectTextIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState("html");
  const [currentLanguage, setCurrentLanguage] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameEmail, setNameEmail] = useState('')
  const [adressEmail, setAdressEmail] = useState('')
  const [messageEmail, setMessageEmail] = useState('')
  const [menuVisible, setMenuVisible] = useState(false);

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false)  
  }

  function sendEmail(e){
    e.preventDefault();
  
    if(nameEmail === '' || adressEmail === '' ||  messageEmail === ''){
      toast.warning("Preencha todos os campos")
    return;
    }

    const templateParams = {
      from_name: nameEmail,
      message: messageEmail,
      email: adressEmail
    }

    emailjs.send("service_p52z28j", "template_5epny0i", templateParams, "YWSfj3h8senTL6N1j" )
    .then((response) => {
      console.log("Email Enviado", response.status, response.text)
      setNameEmail("")
      setAdressEmail("")
      setMessageEmail("")

    }, (err) => {
      console.log("Erro", err)
    })

  }

  const handleProgrammingLanguageClick = (language) => {
    setSelectedProgrammingLanguage(language);
  };
  
const toggleMenu = () => {
  setMenuVisible(!menuVisible);
};


  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4.1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 3.1,
        },
      },
    ],
  };

  const handleUpArrowClick = () => {
    if (slidePosition < 0) {
      setSlidePosition(slidePosition + 350);
      setCurrentProjectTitleIndex(currentProjectTitleIndex - 1);
      setCurrentProjectTextIndex(currentProjectTextIndex - 1);
    }
  };

  const handleDownArrowClick = () => {
    if (slidePosition > -900) {
      setSlidePosition(slidePosition - 350);
      setCurrentProjectTitleIndex(currentProjectTitleIndex + 1);
      setCurrentProjectTextIndex(currentProjectTextIndex + 1);
    }
  };

  useEffect(() => {
  if (currentProjectTextIndex & currentProjectTitleIndex < 0) {
    setCurrentProjectTitleIndex(0);
    setCurrentProjectTextIndex(0);
  } else if (currentProjectTextIndex & currentProjectTitleIndex >= projectTexts.length) {
    setCurrentProjectTitleIndex(projectTitle.length - 1);
    setCurrentProjectTextIndex(projectTexts.length - 1);
  }
}, [currentProjectTitleIndex, currentProjectTextIndex]);


const languageSkills = {
  html: hardSkillInfo.html,
  css: hardSkillInfo.css,
  javascript: hardSkillInfo.javascript,
  react: hardSkillInfo.react,
  tailwind: hardSkillInfo.tailwind,
  typescript: hardSkillInfo.typescript,
};

const selectedLanguageSkill = languageSkills[selectedProgrammingLanguage];
const skillInfo = currentLanguage ? selectedLanguageSkill.infoPt : selectedLanguageSkill.infoEn;


  return (
   <div>

<header>
      <nav>

<div className="headerButton" onClick={toggleMenu}>
  <div className={`dash ${menuVisible ? 'active' : ''}`}></div>
  <div className={`dash ${menuVisible ? 'active' : ''}`}></div>
  <div className={`dash ${menuVisible ? 'active' : ''}`}></div>
</div>

  <ul className={menuVisible ? 'menuVisible' : 'menuHidden'}>
    <li onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}>{currentLanguage ? headerSections.home.headerPt:headerSections.home.headerEn}</li>
    <li onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>{currentLanguage ? headerSections.aboutMe.headerPt:headerSections.aboutMe.headerEn}</li>
    <li onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>{currentLanguage ? headerSections.skills.headerPt:headerSections.skills.headerEn}</li>
    <li onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>{currentLanguage ? headerSections.projects.headerPt:headerSections.projects.headerEn}</li>
    <li onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>{currentLanguage ? headerSections.contact.headerPt:headerSections.contact.headerEn}</li>
    <li className='responsiveHeaderButtons'>

    <div className="languageSquare">
      <img src={currentLanguage ? portuguese:english} onClick={()=>setCurrentLanguage(!currentLanguage)} className='language'/>
    </div>

    </li>
  </ul>

</nav>

<div className="languageSquare">
  <img src={currentLanguage ? portuguese:english} onClick={()=>setCurrentLanguage(!currentLanguage)} className='language'/>
</div>
    </header>

    <main>

      <section className='container banner' ref={homeRef}>

       <div className='bannerText'>
        <h1>{currentLanguage ? bannerLanguage.banner1.textPt:bannerLanguage.banner1.textEn}</h1>
        <h1>{currentLanguage ? bannerLanguage.banner2.textPt:bannerLanguage.banner2.textEn}</h1>
        <h1>{currentLanguage ? bannerLanguage.banner3.textPt:bannerLanguage.banner3.textEn}</h1>
       </div>

      </section>

      <section className='container' ref={aboutMeRef}>
        <div className='aboutMe'>
          <div className='photoBackground'>
            <img src={selfie} alt="Selfie from Developer" />
          </div>
          <div className='aboutMeContent'>

              <div className='aboutMeTitle'>
                <h1>{currentLanguage ? titleIdioms.aboutMeTitle.titlePt:titleIdioms.aboutMeTitle.titleEn}</h1>
              </div>

              <div className='aboutMeText'>
                <p>{currentLanguage ? aboutMeInfo.aboutMetext.aboutTextPt:aboutMeInfo.aboutMetext.aboutTextEn}</p>
              </div>
           
          </div>
        </div>
      </section>
  
      <section className='container' ref={skillsRef}>
        <div className='skills'>
            
            <div className="hardSkillTittleArea">
            <h1 className='hardSkillTitle'>{currentLanguage ? titleIdioms.hardSkillTitle.titlePt:titleIdioms.hardSkillTitle.titleEn}</h1>
            </div>


            <div className='icons'>

            <Slider {...sliderSettings}>

              <img src={htmlIco} alt="html icon" className={`icon ${selectedProgrammingLanguage === 'html' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('html')}></img>
              <img src={cssIco} alt="css icon" className={`icon ${selectedProgrammingLanguage === 'css' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('css')}></img>
              <img src={javascriptIco} alt="javascript icon" className={`icon ${selectedProgrammingLanguage === 'javascript' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('javascript')}></img>
              <img src={reactIco} alt="react icon"className={`icon ${selectedProgrammingLanguage === 'react' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('react')}></img>
              <img src={tailwindIco} alt="tailwind icon" className={`icon ${selectedProgrammingLanguage === 'tailwind' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('tailwind')}></img>
              <img src={typescriptIco} alt="typescript icon" className={`icon ${selectedProgrammingLanguage === 'typescript' ? 'active' : ''}`} onClick={() => handleProgrammingLanguageClick('typescript')}></img>

            </Slider>

            </div>

            <div className='languageText'>

              <h1 className='languageTitle'>
                
              {selectedProgrammingLanguage === 'html' && 'HTML'}
              {selectedProgrammingLanguage === 'css' && 'CSS'}
              {selectedProgrammingLanguage === 'javascript' && "JavaScript"}
              {selectedProgrammingLanguage === 'react' && "React"}
              {selectedProgrammingLanguage === 'tailwind' && "Tailwind CSS"}
              {selectedProgrammingLanguage === 'typescript' && "TypeScript"}

              </h1>

              <p className='languageExplanation'>
              {skillInfo}
              </p>
            </div>
        </div>
      </section>

      <section className='container'>
        <div className='skills'>

            <div className='skillText'>
                <div className='softSkillTitle'><h1>{currentLanguage ? titleIdioms.softSkillTitle.titlePt:titleIdioms.softSkillTitle.titleEn}</h1></div>

                <div className='softSkillText'>

                <p>{currentLanguage ? softSkillInfo.softSkills.sSTextPt:softSkillInfo.softSkills.sSTextEn}</p>

                </div>
            </div>


        </div>
      </section>

      <section className='container' ref={projectsRef}>
          <div className='projectArea'>

              <div className='explanationArea'>
                <h1>{projectTitle[currentProjectTitleIndex]}</h1>
                <p>{currentLanguage ? projectTextsPt[currentProjectTextIndex]:projectTexts[currentProjectTextIndex]}</p>
              </div>

              <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
              >
              <div className='explanationArea'>
                <h1>{projectTitle[currentProjectTitleIndex]}</h1>
                <p>{currentLanguage ? projectTextsPt[currentProjectTextIndex]:projectTexts[currentProjectTextIndex]}</p>
                <input className='button' type="button" onClick={closeModal} value={currentLanguage ? inputText.close.closePt:inputText.close.closeEn}/>
              </div>
              </Modal>

              <div className="sliderAreaTitle">

                <div className="sliderTitle"><h1>{currentLanguage ? titleIdioms.projectsTitle.titlePt:titleIdioms.projectsTitle.titleEn}</h1></div>

                <div className='sliderArea'>

                    <div className="slide" style={{ top: `${slidePosition}px` }}>

                          <div className='card'>
                          
                            <img onClick={openModal} src={pokedex} alt="pokedex project preview"/>
                      
                            <div className='buttonsArea'>

                            <a href="https://pokedex-api-pi.vercel.app/" target='_blank'><img src={eye} alt="deploy" className='deployButton'/></a>
                            <a href="https://github.com/Venturini-Sales/pokedexAPI" target='_blank'><img src={repository} alt="repository" className='repositoryButton'/></a>

                            </div>

                          </div>

                          <div className='card'>
                            
                            <img onClick={openModal} src={bmiCalculator} alt="bmicalculator project preview" />

                            <div className='buttonsArea'>

                            <a href="https://bmi-calculator-six-tau.vercel.app" target='_blank'><img src={eye} alt="deploy" className='deployButton'/></a>
                            <a href="https://github.com/Venturini-Sales/BMICalculator" target='_blank'><img src={repository} alt="repository" className='repositoryButton'/></a>

                            </div>

                          </div>

                          <div className='card'>

                            <img onClick={openModal} src={onDevelopment} alt="project OnDevelopment" />

                            <div className='buttonsArea'>

                            <h1>{currentLanguage ? titleIdioms.onDevelopment.titlePt:titleIdioms.onDevelopment.titleEn}</h1>

                            </div>

                        </div>

                        <div className='card'>

                          <img onClick={openModal} src={onDevelopment} alt="project OnDevelopment" />

                          <div className='buttonsArea'>

                          <h1>{currentLanguage ? titleIdioms.onDevelopment.titlePt:titleIdioms.onDevelopment.titleEn}</h1>

                          </div>

                        </div>

                  </div>

                  <div className="sidebar">
                      <img src={arrow} alt="arrow-up" id='arrowUp' onClick={handleUpArrowClick}/>
                      <img src={arrow} alt="arrow-down" id='arrowDown' onClick={handleDownArrowClick}/>
                  </div>

                </div>

              </div>
          </div>
      </section>

      <section className='container' ref={contactRef}>
          <div className="contactArea">

          <div className='title'>
              <h1>{currentLanguage ? titleIdioms.contactTitle.titlePt:titleIdioms.contactTitle.titleEn}</h1>
          </div>


          <div className='content'>
            <div className="emailArea">
              <form className='form' onSubmit={sendEmail}>

                <div className='inputBalloon1'><input onChange={(e) => setNameEmail(e.target.value)} value={nameEmail} className='input' type="text" placeholder={currentLanguage ? inputText.name.namePt:inputText.name.nameEn}/></div>
                <div className='inputBalloon2'><input onChange={(e) => setAdressEmail(e.target.value)} value={adressEmail} className='input' type="text" placeholder={currentLanguage ? inputText.email.emailPt:inputText.email.emailEn}/></div>
                <div className='inputBalloon3'><textarea onChange={(e) => setMessageEmail(e.target.value)} value={messageEmail} className='textArea' placeholder={currentLanguage ? inputText.message.messagePt:inputText.message.messageEn}/></div>
                <input className='button' type="submit" value={currentLanguage ? inputText.send.sendPt:inputText.send.sendEn}/>

              </form>

              <div className="responsiveSocialArea">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-venturini-sales-462600258/" target='blank'><div className="responsiveButton"><img src={linkedinIco} className='responsiveSocialIcons'/></div></a>
                <a href="https://github.com/Venturini-Sales" target='blank'><div className="responsiveButton"><img src={githubIco} className='responsiveSocialIcons'/></div></a>
                <a href="https://api.whatsapp.com/send?phone=5521978915683" target='blank'><div className="responsiveButton"><img src={whatsappIco} className='responsiveSocialIcons'/></div></a>
              </div>
            </div>

            <div className="socialArea">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-venturini-sales-462600258/" target='blank'><div className='linkedinButton'><img src={linkedinIco} className='socialIcons'/><h1>LINKEDIN</h1></div></a>
            <a href="https://github.com/Venturini-Sales" target='blank'><div className="githubButton"><img src={githubIco} className='socialIcons'/><h1>GITHUB</h1></div></a>
            <a href="https://api.whatsapp.com/send?phone=5521978915683" target='blank'><div className="whatsappButton"><img src={whatsappIco} className='socialIcons'/><h1>WHATSAPP</h1></div></a>
            </div>
          </div>

          </div>
      </section>
    </main>
      
    <ToastContainer/>

   </div>
  )
}

export default App
