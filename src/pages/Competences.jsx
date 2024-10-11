import React from "react";
import Carousel from "react-multi-carousel";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import "react-multi-carousel/lib/styles.css";
import '../assets/styles/Competences.css'
/*import reactjs from '../assets/images/reactjs.png'
import tkinter from '../assets/images/tkinter.png'
import python from '../assets/images/python.png'
import php from '../assets/images/php.png'
import java from '../assets/images/java.png'
import Javascript from '../assets/images/javascript.png'
import vuejs from '../assets/images/vuejs.png'
import threejs from '../assets/images/threejs.png'
import csharp from '../assets/images/csharp.png'
import javamobile from '../assets/images/java-mobile.png'
import ruby from '../assets/images/ruby.png'
import htmlcss from '../assets/images/html-css.png'
import p55 from '../assets/images/p55.png'
import p60 from '../assets/images/p60.png'
import p65 from '../assets/images/p65.png'
import p70 from '../assets/images/p70.png'
import p75 from '../assets/images/p75.png'*/
// import p85 from '../assets/images/p85.png'
// import p90 from '../assets/images/p90.png'
// import CompetenceItem from '../components/Competence/CompetenceItem';
// import Slider from '../components/Slider/Slider';
import Carousel3D from '../components/Carousel3D/Carousel3D';
import data from '../components/data/data';
import ProgressBarWithLabel  from '../components/ProgressBar/ProgressBarWithLabel';

const Competences = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <>
            <section id="programmations">
                <div className="comp">
                    <JackInTheBox>
                        <div className="container shadow-6">
                            <h2 style={{ color: '#fff' }}>Programmations</h2>
                            <p>Je vous présente ci-dessous mes compétences en programmation</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <ProgressBarWithLabel percentage={70} label="Reactjs" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={90} label="Tkinter" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={70} label="Python" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={65} label="PHP" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={60} label="Java" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={75} label="Javascript" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={65} label="VueJS" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={60} label="Three.js" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={55} label="C#" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={80} label="HTML & CSS" />
                                </div>
                                <div className="item">
                                    <ProgressBarWithLabel percentage={65} label="Laravel" />
                                </div>
                                <div className="item">
                                   <ProgressBarWithLabel percentage={65} label="Ruby" />
                                </div>
                            </Carousel>
                        </div> 
                    </JackInTheBox>   
                </div>
            </section>
            {/*<Fade damping={1}>
                <CompetenceItem />
            </Fade>*/}
            {/*<Fade damping={1}>
                <div className="center">
                    <Slider data={data} activeSlide={2} />
                </div>
            </Fade>*/}
            <section id="autres-competences">
                <Fade damping={1}>
                    <Carousel3D />
                </Fade>
            </section>
        </>
    )
}

export default Competences;