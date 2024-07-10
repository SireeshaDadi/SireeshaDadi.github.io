import { useState, useRef, useEffect } from "react";
import { useTrail, animated as a, SpringValue } from "react-spring";
import { useIntersection } from "react-use";
import {  Grid, Typography, Container, Toolbar, Box } from "@mui/material";
import { SkillIcons } from "../../lib/logos";
import SkillIcon from "./SkillIcon";


export interface Skill  {
  logo: SkillIcons[keyof SkillIcons];
  transform?: SpringValue<string>;
};

export type SkillProps = {
  skills : Skill[];
}


const Skills: React.FC<SkillProps> = ({skills}) => {


  const intersectionRef = useRef(null);
  const intersectionResult =  useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const isEnteringView = intersectionResult?.isIntersecting ?? false;

  const [areSkillsVisible, setAreSkillsVisible] = useState(false);

  const trail = useTrail(skills.length, {
    config: { mass: 1, tension: 375, friction: 25 },
    trail: 400 / skills.length,
    transform: areSkillsVisible ? "scale(1)" : "scale(0)",
    from: { transform: "scale(0)" },
    reset: !areSkillsVisible,
  });

  useEffect(() => {
    setAreSkillsVisible(isEnteringView);
  }, [isEnteringView]);

  return (
    <Box>
      
      <Toolbar id="skills" />
      <Container component="section">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" id="tech-stack">
              My Tech Stack
            </Typography>

            <Grid container ref={intersectionRef}>
              {trail.map(({ transform }, index) => (
                <Grid key={skills[index].logo?.label} item md={2} xs={3}>
                  <SkillIcon skill={{ ...skills[index] }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;