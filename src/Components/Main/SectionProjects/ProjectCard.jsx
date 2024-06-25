import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
function ProjectCard({ name, id, style }) {
  return (
    <div className="section-projects__col">
      <div className="card" style={style}>
        <FrontCard name={name} id={id}></FrontCard>
        <BackCard name={name} id={id}></BackCard>
      </div>
    </div>
  );
}

export default ProjectCard;
