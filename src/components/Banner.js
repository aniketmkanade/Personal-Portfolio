import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Java Developer", "Backend Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(()=> {
            tick();
        },delta)
        
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        setText(updatedText);

        if(isDeleting)
        {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} ms={6} xl={7}>
                            <span className="tagline"> Welcome to Aniket Kanade's portfolio</span>
                            <h1>{`Hi I am a `}<span className="wrap">{text}</span></h1>
                            <p>My name is Aniket Kanade, I'm a Developer based in Prague,Czech Republic. I have developed multiple websites and web projects.</p>
                            <button onClick={()=> console.log('connect')}>Lets Connect <ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}