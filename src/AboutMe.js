import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import logo from './img/mypicture.jpg';
import style from './stylesheets/AboutMe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'


const me = {
  '姓名': "陳哲安(Andy Chen)",
  '學歷': "國立政治大學資訊科學系",
  'E-mail': "an5566x@gmail.com",
  '擅長語言': "JavaScript, Python",
};

const rounded = "rounded"

class AboutMe extends Component {
  render() {
    return (
      <div className="mb-5 bg-mycolor text-dark" id="aboutme">
        <h2 className="text-center mb-4">關於我</h2>
        <Container>
          <Row>
            <Col md="6" className={`${style.img}`}>
              <img src={logo} className={`${rounded} ${style.imgTransform}` } alt="123" />
            </Col>
            <Col md="6" className="mx-auto my-auto">
              <ul className="text-center">{Object.keys(me).map((key) => {
                const value = me[key];
                if(key === "E-mail") return(<li key={key}>{key}: <a href={value}>{value}</a></li>);

                return( <li key={key}>{key}: {value}</li>);
              })}</ul>
              <div className="d-flex justify-content-center">
                <Button className="mr-2" href="https://github.com/Dasre">
                  <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
                </Button>
                <Button href="https://Dasre.github.io">
                  <FontAwesomeIcon icon={faBlogger} size="3x"></FontAwesomeIcon>
                </Button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMe;