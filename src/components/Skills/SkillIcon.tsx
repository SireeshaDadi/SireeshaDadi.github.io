import Icon from "../util/Icon/Icon";
import { animated as a, SpringValue } from 'react-spring';
import { Skill } from "./Skills";
import { FC } from "react";


interface SkillIconProps {
    skill: Skill;
  }


const SkillIcon: FC<SkillIconProps> = ({ skill }) => {

    const { label, path, spin, invert } = skill.logo;
  
    return (
      <a.div style={{ transform : skill.transform as any}}>
        <a.div>
          <Icon label={label} path={path} spin={spin} invert={invert} />
        </a.div>
      </a.div>
    );
  };
  
  export default SkillIcon;