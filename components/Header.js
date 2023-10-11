import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ alternateLanguages = [], navigation, settings }) => {

  // function toggleMenu() {
  //   var element = document.getElementById("navItems");
  //   element.classList.toggle("active");
  // }

  return (
    <header>
      {/* <div className="navigation">
        <div className="socials">
          {settings.data.slices?.[1]?.items?.map((item, i) => {
            return(
              <PrismicLink field={item.link} key={`socials${i}`}>
                <PrismicNextImage field={item.icon}/>
              </PrismicLink>
            )
          })}
        </div>
        <Link className="logo" href={`/${settings.lang}`}>
          {prismicH.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} alt="logo"/>
          )}
        </Link>
        <img className="menu-icon" onClick={toggleMenu} src="/menu.svg"/>
        <nav id="navItems">
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
          <div className="socials">
            {settings.data.slices?.[1]?.items?.map((item, i) => {
              return(
                <PrismicLink field={item.link} key={`socialsmob${i}`}>
                  <PrismicNextImage field={item.icon}/>
                </PrismicLink>
              )
            })}
          </div>
        </nav>
      </div> */}
    </header>
  );
};
