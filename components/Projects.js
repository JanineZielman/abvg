import { PrismicRichText, PrismicImage, PrismicLink } from "@prismicio/react";

export const Projects = ({
  projects
}) => {
  return (
    <div className="container projects">
      {projects.map((item, i) => {
      return(
        <a href={`/project/${item.uid}`} key={`project${i}`} className="project">
          <div className="info">
            <p className="title">{item.data.title}</p>
            <p className="location">{item.data.location}</p>
          </div>
          <PrismicImage field={item.data.image}/>
        </a>
      )
      })}
    </div>
  );
};
