import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import React, { useState } from 'react'

export const Header = ({ navigation, settings }) => {
  const [navActive, setNavActive] = useState(false);

  function toggleMenu() {
    var element = document.getElementById("navItems");
    element.classList.toggle("active");
    if(navActive == true){
      setNavActive(false)
    } else {
      setNavActive(true)
    }
  }

  return (
    <>
    <header>
      <div className="navigation">
        <div className="menu" onClick={toggleMenu}>
          <div className="logo">
            {prismicH.isFilled.image(settings.data.logo) && (
              <PrismicNextImage field={settings.data.logo} alt="logo"/>
            )}
          </div>
          <img className="menu-icon" src="/menu.svg"/> 
        </div>
        <nav id="navItems" onClick={toggleMenu}>
          {navigation.data?.links.map((item) => (
            <div
              key={prismicH.asText(item.label)}
              className="menu-link"
            >
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </div>
          ))}
        </nav>
      </div>
    </header>
    {navActive &&
      <div className="spacer"></div>
    }
    </>
  );
};
