import React from "react";

const Nav = () => {
    return (
        <>
            <nav >
                <div id="logo">Logo</div>
                <div>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog </li>
                    <li>Staff</li>
                </div>
            </nav>
        </>
    );
}


const HeroSection = () => {
    return (
      <>
        <div>
          <h1>Hero Section</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
          </p>
        </div>
      </>
    );
  }


  const Card = () => {
    return (
        <>
            <div id="card">
                <h2>Card Heading</h2>
                <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
          </p>
            </div>
        </>
    );
  }

export {Nav, HeroSection,Card};


