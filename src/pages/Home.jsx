import Tv from "../components/TV/TV"
import Printer from "../components/Printer/Printer.jsx"
import Intercom from "../components/Intercom/Intercom.jsx"
import './Pages.css';

const Home = () => {
    return (
        <div>
            <Tv />
            <div className="hozContainer heading bottom">
                <div className='sideLines Blue' />
                <div className='hiddenElement title'> ABOUT ME</div>
                <div className='sideLines Reverse Blue' />
            </div>
            <div className="imgSection">
                <div className="Container">
                    <div className="textBox left">
                        <h2>Hello there!</h2> My name is <b>Luis Enrique Sarmiento</b>, a Computer Science student at Northeastern University, currently based in Boston, MA.
                        Originally from Venezuela and completing my studies in Panama, my unique journey has been fueled by a
                        passion for tech, problem-solving, and innovation.
                        <br /><br />
                        Since I was young, I became entranced with the impact technology had in the world, and became fascinated with its ability
                        to bring forth social change and improve the lives of others.
                    </div>
                    <div className="box right" />
                </div>
                <div className="Container">
                    <div className="box left" />
                    <div className="textBox right">
                        I'm dedicated to using my skills to create tangible, positive change. Whether it's through coding, leading or collaborating
                        with others, I'm determined to push the boundaries of innovation and create sustainable,
                        ethical solutions to the problems of today and tomorrow.
                        <br /><br />
                        When I'm not buried in code, you might find me exploring the vibrant tech scene
                        in Boston or brainstorming new ideas for my next project. I'm excited about the
                        future and eager to see where my journey in tech will take me next.
                    </div>
                </div>
            </div>
            <div className="hozContainer heading">
                <div className='sideLines Left Pink' />
                <div className='title'> DOCUMENTS</div>
                <div className='sideLines Reverse Pink' />
            </div>
            <Printer />

            <div className="hozContainer heading">
                <div className='sideLines yellow' />
                <div className='title'> CONTACT ME</div>
                <div className='sideLines Reverse yellow' />
            </div>
            <Intercom />
            <br />
        </div>
    );
}

export default Home;