import { CSS, styled } from "@stitches/react";
import { useEffect, useRef, useState } from "react";

type Vec2 = {
  x: number;
  y: number;
};
type Star = {
  position: Vec2;
  angle: number;
  speed: number;
  opacity: number;
  size: number;
  color: CSS["color"];
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

const fps = 1000 / 60;
const opacity = 0.02;
const opacityStep = 1.1;
const sizeStep = 1.006;
const speedStep = 1.03;
const spawnDistance = 20;

// todo: replace position with distance from center
//       so resizing ( changing the center ) moves
//       the starfield

export default function Starfield({
  width,
  height,
}: {
  width: CSS["width"];
  height: CSS["height"];
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
        x: center.x + Math.cos(angle) * spawnDistance,
        y: center.y + Math.sin(angle) * spawnDistance,
      },
      angle,
      opacity,
      speed: random(0.1, 3),
      size: random(0.5, 1),
      color: randomColor(100, 90),
    };

    setStars([
      ...visibleStars.map((star) => ({
        ...star,
        size: star.size * sizeStep,
        speed: star.speed * speedStep,
        opacity: star.opacity * opacityStep,
        position: {
          x: star.position.x + Math.cos(star.angle) * star.speed,
          y: star.position.y + Math.sin(star.angle) * star.speed,
        },
      })),
      newStar,
    ]);
  };

  // set update
  const timerId = useRef<number>();
  const startUpdate = () => {
    timerId.current = setInterval(() => update(), fps);
  };
  useEffect(() => {
    startUpdate();
    return () => clearInterval(timerId.current);
  }, [stars]);

  return (
    <Root
      ref={ref}
      css={{
        width,
        height,
      }}
    >
      {stars.map((star, index) => (
        <Star key={index} star={star} />
      ))}
    </Root>
  );
}

const Root = styled("svg", {
  position: "absolute",
  pointerEvents: "none",
});
