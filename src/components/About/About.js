import React, { useEffect, useState } from "react";
import Header from "../HeaderHome/Header";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  useEffect(() => {
    let prevScrollPos = document.documentElement.scrollTop;
    const headerContainer = document.querySelector(".header-container");
    const headerHeight = headerContainer.offsetHeight;

    function handleScroll() {
      const currentScrollPos = document.documentElement.scrollTop;

      if (currentScrollPos > prevScrollPos) {
        headerContainer.style.top = `-${headerHeight}px`;
      } else {
        headerContainer.style.top = "0";
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="relative">
        <img src="/about.jpg" alt="" />
        <p className="absolute bottom-[70px] left-[63px] text-white text-[48px] leading-[48px]">
          ABOUT <span className="italic">2P-FASHION</span>{" "}
        </p>
      </div>
      <Container className="my-[60px]">
        <Row>
          <Col>
            <img className="w-[600px] h-[600px]" src="/women.png" />
          </Col>
          <Col>
            <img className="w-[600px] h-[600px]" src="/men.png" />
          </Col>
        </Row>
      </Container>
      <h2 className="text-center">The Founders</h2>
      <Footer />
    </>
  );
}
export default About;
