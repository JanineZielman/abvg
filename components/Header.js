import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const Header = ({ navigation, settings }) => {

  function toggleMenu() {
    var element = document.getElementById("navItems");
    element.classList.toggle("active");
  }

  return (
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
  );
};
