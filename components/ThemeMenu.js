import { PrismicLink } from "@prismicio/react";
import { useRouter } from 'next/router'

export const ThemeMenu = ({
  themeMenu
}) => {
  const router = useRouter()
  return (
    <div className="themeMenu">
      {themeMenu.data.slices.map((item, i) => {
        let active = router.query.uid == item.primary.theme.uid;
        return(
          <PrismicLink key={`themeMenu${i}`} field={item.primary.theme} className={`${active}`}>
            {item.primary.theme.uid}
          </PrismicLink>
        )
      })}
    </div>
  );
};
