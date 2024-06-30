import vercelIcon from "./vercelIcon.svg";
import tracmatesIcon from "./tracmatesIcon.svg";

const BtnWeb = ({ link, isTeamProject }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={isTeamProject ? tracmatesIcon: vercelIcon} alt="deploy service" />
      Visit Site
    </a>
  );
};

export default BtnWeb;
