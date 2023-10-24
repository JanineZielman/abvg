import { PrismicImage, PrismicRichText } from "@prismicio/react";

export const Projects = ({
  projects
}) => {
  return (
    <div className="container projects">
      {projects.map((item, i) => {
        function toggle(){
          document.getElementById(item.uid).classList.toggle("active");
        }
        return(
          <div key={`project${i}`} className={`project`} onClick={toggle} id={item.uid}>
            <div className="info">
              <p className="title">{item.data.title}</p>
              <p className="location">{item.data.location}</p>
            </div>
            <PrismicImage field={item.data.image}/>
            <div className="description">
              <PrismicRichText field={item.data.description}/>
            </div>
            <div className="images">
              {item.data.images.map((imageItem, j) => {
                return(
                  <PrismicImage key={`image${j}`} field={imageItem.image}/>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};
