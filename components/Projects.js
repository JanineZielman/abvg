import { PrismicImage, PrismicRichText } from "@prismicio/react";

export const Projects = ({
  projects
}) => {
  const options = { month: "long" };
  return (
    <div className="container projects">
      {projects.map((item, i) => {
        function toggle(){
          document.getElementById(item.uid).classList.toggle("active");
        }
        let date = new Date(item.data.start_date);
        console.log(item)
        return(
          <div key={`project${i}`} className={`project`} onClick={toggle} id={item.uid}>
            <div className="info">
              <p className="title">{item.data.title}</p>
              <p className="location">{item.data.location}</p>
              <div className="project-info">
                <div className="project-info-item">
                  <span>Start</span> <p className="cap">{new Intl.DateTimeFormat("nl-NL", options).format(date)} {date.getFullYear()}</p>
                </div>
                {item.data.project_info.map((info,k) => {
                  return(
                    <div className="project-info-item">
                      <span>{info.label}</span> <p>{info.text}</p>
                    </div>
                  )
                })}
              </div>
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
                      <iframe key={`embed${j}`} src={contentItem.embed.embed_url}/>
                    }
                    {contentItem.pdf.url &&
                      <iframe key={`pdf${j}`} src={`https://docs.google.com/gview?url=${contentItem.pdf.url}&embedded=true`}></iframe>
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
