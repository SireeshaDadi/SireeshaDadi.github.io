import { useRef, memo } from "react";
import { useSpring, animated as a } from "react-spring";
import { Box, Typography } from "@mui/material";
import  './styles.scss';

export type IconProps = {
  label: string;
  path?: string;
  url?:string;
  invert?: boolean;
  spin?: boolean;
};

const Icon: React.FC<IconProps> = ({ label, path, invert, spin }) => {
  const logoRef = useRef<HTMLImageElement | null>(null);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 500, friction: 15 },
  }));

  const calc = (x: number, y: number) => [
    -(y - (logoRef.current?.getBoundingClientRect().top! + logoRef.current?.getBoundingClientRect().bottom!) / 2) / 20,
    (x - (logoRef.current?.getBoundingClientRect().left! + logoRef.current?.getBoundingClientRect().right!) / 2) / 20,
    1.2,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(25px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <Box className={`root ${spin ? "animate-spin" : ""}`}>
      <Typography align="center" variant="caption" gutterBottom>
        {label}
      </Typography>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          width: "100%",
          height: "auto",
          flexGrow: 1,
          filter: `invert(${invert ? "100%" : "0%"})`,
          animation: spin ? "$App-logo-spin infinite 20s linear" : "",
        }}
        className="logoContainer"
      >
        <a.img
          ref={logoRef}
          style={{ transform: props.xys.interpolate(trans) }}
          height={100}
          width={100}
          src={path}
          alt={label}
          className={path}
        />
      </div>
    </Box>
  );
};

export default memo(Icon, (prevProps, nextProps) => {
  // Memoization based on invert prop
  return prevProps.invert === nextProps.invert;
});
