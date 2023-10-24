import { PrismicLink } from "@prismicio/react";
import { useRouter } from 'next/router'

export const ThemeMenu = ({
  themeMenu
}) => {
  const router = useRouter()
  return (
    <div className="themeMenu">
      {themeMenu.data.themes.map((item, i) => {
        let active = router.query.uid == item.theme.uid;
        return(
          <PrismicLink key={`themeMenu${i}`} field={item.theme} className={`${active}`}>
            {item.theme.uid}
          </PrismicLink>
        )
      })}
    </div>
  );
};
