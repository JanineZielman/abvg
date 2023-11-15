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
            <div className="content">
              {item.data.content?.map((contentItem, j) => {
                return(
                  <>
                    <PrismicImage key={`image${j}`} field={contentItem.image}/>
                    {contentItem.text[0] &&
                      <div className="text" key={`text${j}`}>
                        <PrismicRichText field={contentItem.text}/>
                      </div>
                    }
                    {contentItem.embed.embed_url &&
                      <iframe src={contentItem.embed.embed_url}/>
                    }
                    {contentItem.pdf.url &&
                      <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${contentItem.pdf.url}`}></embed>
                    }
                  </>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};
