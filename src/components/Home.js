import React, { useEffect, useState, useRef, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Animated } from "react-animated-css";
import bottleImage from "../assets/bottle.avif";
import bottleImage2 from "../assets/bottle2.avif";
import bottleImage3 from "../assets/bottle3.avif";
import { LanguageContext } from "../language/LanguageContext";

export default function Home(props) {
  const { dictionary, language } = useContext(LanguageContext);

  const home = useRef();
  const wines = useRef();
  const learn_more = useRef();
  const scrolldown = useRef();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let observerHome = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observerHome = observerHome.disconnect();
          }
        }),
      { rootMargin: "0px 0px 0px 0px" }
    );
    observerHome.observe(home.current);

    let observerWine = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            observerWine = observerWine.disconnect();
          }
        }),
      { rootMargin: "0px 0px -20px 0px" }
    );
    observerWine.observe(wines.current);
  });

  const onWineIn = (e) => {
    let card = document.getElementById(e.target.id);
    if (card) {
      let image = card.getElementsByTagName("img")[0];
      image.style.transform = "translate(0, -10px)";
      card.style.backgroundColor = "#111";
    } else {
      return;
    }
  };

  const onWineOut = (e) => {
    let card = document.getElementById(e.target.id);
    if (card) {
      let image = card.getElementsByTagName("img")[0];
      image.style.transform = "translate(0, 0px)";
      card.style.backgroundColor = "#232221ef";
    } else {
      return;
    }
  };

  return (
    <>
      <div ref={home}></div>
      <Container fluid className="container_myhome">
        <Navbar
          className="navbar"
          handleUpdateLanguage={props.handleUpdateLanguage}
          language={language}
        />
        <div id="overlay"></div>
        <Container className="container_home disable-select">
          <Row className="row_title">
            <Col className="col_title">
              <h1 className={language === "zh-CN" ? "h1_cn" : ""}>
                {dictionary.home_title}
              </h1>
            </Col>
          </Row>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={1000}
            isVisible={visible}
          >
            <Row className="row_learn_more">
              <p
                ref={learn_more}
                className={
                  language === "zh-CN"
                    ? "text_learn_more cn_learn_more"
                    : "text_learn_more"
                }
              >
                {dictionary.learn_more}
              </p>
              <Col className="col_scrolldown">
                <div ref={scrolldown} className="scrolldown"></div>
              </Col>
            </Row>
          </Animated>
        </Container>

        <Row ref={wines} className="row_wines disable-select">
          <Col className="col_wines">
            <Link
              to="/wines"
              onMouseEnter={(e) => onWineIn(e)}
              onMouseLeave={(e) => onWineOut(e)}
            >
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1500}
                isVisible={!visible}
              >
                <Card id="card1" className="card_wine">
                  <Card.Img
                    className="image_wine"
                    variant="top"
                    src={bottleImage}
                  />
                  <Card.Body>
                    <Card.Title
                      style={
                        language === "zh-CN" ? { fontFamily: "hanzhen" } : {}
                      }
                    >
                      {dictionary.home_wine_name_1}
                    </Card.Title>
                    <Card.Text
                      style={language === "zh-CN" ? { fontSize: "1rem" } : {}}
                    >
                      {dictionary.home_wine_description_1}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
            </Link>
          </Col>

          <Col className="col_wines">
            <Link
              to="/wines"
              onMouseEnter={(e) => onWineIn(e)}
              onMouseLeave={(e) => onWineOut(e)}
            >
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1500}
                isVisible={!visible}
              >
                <Card id="card2" className="card_wine">
                  <Card.Img
                    className="image_wine"
                    variant="top"
                    src={bottleImage2}
                  />
                  <Card.Body>
                    <Card.Title
                      style={
                        language === "zh-CN" ? { fontFamily: "hanzhen" } : {}
                      }
                    >
                      {dictionary.home_wine_name_2}
                    </Card.Title>
                    <Card.Text
                      style={language === "zh-CN" ? { fontSize: "1rem" } : {}}
                    >
                      {dictionary.home_wine_description_2}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
            </Link>
          </Col>

          <Col className="col_wines">
            <Link
              to="/wines"
              onMouseEnter={(e) => onWineIn(e)}
              onMouseLeave={(e) => onWineOut(e)}
            >
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1500}
                isVisible={!visible}
              >
                <Card id="card3" className="card_wine">
                  <Card.Img
                    className="image_wine"
                    variant="top"
                    src={bottleImage3}
                  />
                  <Card.Body>
                    <Card.Title
                      style={
                        language === "zh-CN" ? { fontFamily: "hanzhen" } : {}
                      }
                    >
                      {dictionary.home_wine_name_3}
                    </Card.Title>
                    <Card.Text
                      style={language === "zh-CN" ? { fontSize: "1rem" } : {}}
                    >
                      {dictionary.home_wine_description_3}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Animated>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
