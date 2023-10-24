import { PrismicImage } from "@prismicio/react";
import Link from "next/link";

export const Projects = ({
  projects
}) => {
  return (
    <div className="container projects">
      {projects.map((item, i) => {
      return(
        <Link href={`/project/${item.uid}`} key={`project${i}`} className={`project`}>
          <div className="info">
            <p className="title">{item.data.title}</p>
            <p className="location">{item.data.location}</p>
          </div>
          <PrismicImage field={item.data.image}/>
        </Link>
      )
      })}
    </div>
  );
};
