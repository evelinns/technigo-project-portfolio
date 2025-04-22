export const FeaturedProjectsCard = (props) => {
  return <div className="project-card">
    <img className="project-img" src={props.img} alt="" />
    <h4>{props.title}</h4>
    <p>{props.blurb}</p>
    <div className="btn-container" key={props.name}>
      <a className="btn main" href={props.netlify} target="_blank">Live Demo</a>
      <a className="btn" href={props.github} target="_blank">View Code</a>
    </div>
  </div>
}