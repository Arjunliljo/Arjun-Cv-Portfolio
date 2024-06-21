import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
function ProjectCard({ name, type, id, style }) {
  console.log(id);
  return (
    <div className="section-projects__col">
      <div className="card" style={style}>
        <FrontCard name={name} id={id}></FrontCard>
        <BackCard type={type} id={id}></BackCard>
      </div>
    </div>
  );
}

export default ProjectCard;
