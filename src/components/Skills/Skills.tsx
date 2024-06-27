import { useState, useRef, useEffect, useMemo } from "react";
import { useTrail, animated as a } from "react-spring";
import { useIntersection } from "react-use";

import {  Grid, Typography, Container, Toolbar, Box } from "@mui/material";

import Icon from "./Icon";
import logos from "../../lib/logos";

type iconsArray = {
  label: string;
  logo: any;
  invert?: boolean;
  spin?: boolean;
};


function Skills() {
  const iconsArray: iconsArray[] = useMemo(
    () => [
      logos.typescript,
      logos.nodejs,
      logos.react,
      logos.mongodb,
      logos.cypress,
      logos.materialui,
      logos.javascript,
    ],
    []
  );

  const intersectionRef = useRef(null);
  const intersectionEnter = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const intersectionExit = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const [toggle, setToggle] = useState(false);

  const trail = useTrail(iconsArray.length, {
    config: { mass: 1, tension: 375, friction: 25 },
    trail: 400 / iconsArray.length,
    transform: toggle ? "scale(1)" : "scale(0)",
    from: { transform: "scale(0)" },
    reset: !toggle,
  });

  useEffect(() => {
    if (intersectionEnter?.isIntersecting) {
      setToggle(true);
    }
  }, [intersectionEnter]);

  useEffect(() => {
    if (!intersectionExit?.isIntersecting) {
      setToggle(false);
    }
  }, [intersectionExit]);

  return (
    <Box>
      <Toolbar id="skills" />
      <Container component="section">
        <Grid container>
          <Box>
            <Grid>
              <h3>
                My Tech Stack
              </h3>
              <div>
                <Grid
                  container
               //   className={classes.gridContainer}
                  ref={intersectionRef}
                >
                  {trail.map(({ transform }, index) => (
                    <Grid
                      key={iconsArray[index].label}
                      item
                //      className={classes.gridItem}
                      md={2}
                      xs={3}
                    >
                      <a.div
                        key={index}
                        style={{
                          transform,
                        }}
                      >
                        <a.div>
                          <Icon
                            label={iconsArray[index].label}
                            logo={iconsArray[index].logo}
                            spin={iconsArray[index].spin}
                            invert={iconsArray[index].invert}
                          ></Icon>
                        </a.div>
                      </a.div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;