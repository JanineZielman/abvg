import { PrismicLink } from "@prismicio/react";


export const ThemeMenu = ({
  themeMenu
}) => {
  return (
    <div className="themeMenu">
      {themeMenu.data.slices.map((item, i) => {
        return(
          <PrismicLink key={`themeMenu${i}`} field={item.primary.theme}>
            {item.primary.theme.uid}
          </PrismicLink>
        )
      })}
    </div>
  );
};
