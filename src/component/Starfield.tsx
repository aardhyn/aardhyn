import { type CSSProperties, useEffect, useRef, useState } from "react";
import { styled } from "panda/jsx";

const SECOND_MS = 1000;
const FPS = 32;
const OPACITY = 0.02;
const OPACITY_STEP = 1.1;
const SIZE_STEP = 1.006;
const SPEED_STEP = 1.03;
const SPAWN_DISTANCE_PX = 20;

type Vec2 = { x: number; y: number };
type Star = {
  position: Vec2;
  speed: number;
  size: number;
  angle: number;
  opacity: number;
  color: CSSProperties["color"];
};

function Star({ star }: { star: Star }) {
  const {
    position: { x, y },
    size,
    opacity,
    color,
  } = star;

  return (
    <circle
      cx={x}
      cy={y}
      r={size}
      fill={color as string}
      fillOpacity={opacity}
    />
  );
}

function randomColor(saturation: number, lightness: number) {
  return `hsl(${random(1, 255)}, ${saturation}%, ${lightness}%)`;
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function isVisible(position: Vec2, w: number, h: number) {
  return position.x > 0 && position.x < w && position.y > 0 && position.y < h;
}

// todo: compute the stars position on a unit vector each frame an interpolate
// the position based on the current size of the starfield.

export function Starfield({
  width = "100%",
  height = "100%",
}: {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}) {
  const [stars, setStars] = useState<Star[]>([]);
  const ref = useRef<SVGSVGElement>(null);
  const [w, h] = [
    ref.current?.clientWidth ?? 0,
    ref.current?.clientHeight ?? 0,
  ];
  const center: Vec2 = { x: w / 2, y: h / 2 };

  const update = () => {
    const visibleStars = stars.filter((star) => isVisible(star.position, w, h));

    const angle = random(0, 360);
    const newStar = {
      position: {
        x: center.x + Math.cos(angle) * SPAWN_DISTANCE_PX,
        y: center.y + Math.sin(angle) * SPAWN_DISTANCE_PX,
      },
      angle,
      opacity: OPACITY,
      speed: random(0.1, 3),
      size: random(0.5, 1),
      color: randomColor(100, 90),
    };

    setStars([
      ...visibleStars.map((star) => ({
        ...star,
        size: star.size * SIZE_STEP,
        speed: star.speed * SPEED_STEP,
        opacity: star.opacity * OPACITY_STEP,
        position: {
          x: star.position.x + Math.cos(star.angle) * star.speed,
          y: star.position.y + Math.sin(star.angle) * star.speed,
        },
      })),
      newStar,
    ]);
  };

  const timerId = useRef<number>(undefined);
  const startUpdate = () => {
    timerId.current = setInterval(() => update(), SECOND_MS / FPS);
  };
  useEffect(() => {
    startUpdate();
    return () => {
      clearInterval(timerId.current);
    };
  }, [stars]);

  return (
    <Root ref={ref} css={{ width, height }}>
      {stars.map((star, index) => (
        <Star key={index} star={star} />
      ))}
    </Root>
  );
}

const Root = styled("svg", {
  base: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
});
