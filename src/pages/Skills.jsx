import Intercom from "../components/Intercom/Intercom";
// The Skills Page
const Skills = () => {

    const isMobile = window.innerWidth <= 768;

    return (
        <div className="section">
            <div className="vert-container">
                <div className="hoz-container heading">
                    <div className='sideLines Orange' />
                    <div className='title'> SKILLS </div>
                    <div className='sideLines Reverse Orange' />
                </div>
            </div>
            <div className={`skill-section ${isMobile ? 'skill-section-mobile' : ''}`}>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>HTML</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>CSS</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>JavaScript</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Java</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Python</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>React</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Vite</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Swift</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Pandas</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Boto3</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>AWS</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Version Control</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Microsoft 365</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Canva</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Adobe</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Data Structures</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Communication</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Command line</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Leadership</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Teamwork</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Jira</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Figma</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>Spanish</div>
                <div className={`skill-square ${isMobile ? 'skill-mobile' : ''}`}>French</div>
            </div>
            <div className="hoz-container heading">
                <div className='sideLines Orange' />
                <div className='title'> CONTACT ME</div>
                <div className='sideLines Reverse Orange' />
            </div><Intercom />
        </div>
    );
}

export default Skills;