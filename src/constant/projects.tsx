import {
  CubeIcon,
  ReaderIcon,
  PlayIcon,
  ShadowIcon,
} from "@radix-ui/react-icons";
import { G } from "../component/Typography";

export const PROJECTS = [
  {
    title: "Component",
    icon: <CubeIcon />,
    description: (
      <>
        A visual programming editor and game engine on the web written in{" "}
        <G cool>React</G> and <G cool>C++23</G> with <G cool>WebAssembly</G>,
        for a final year Bachelor of Information Technology Special Topic paper.
      </>
    ),
    links: {
      live: "component.aardhyn.dev",
      source: "github.com/aardhynLavender/component",
    },
  },
  {
    title: "Notes",
    icon: <ReaderIcon />,
    description: (
      <>
        A minimal notes app written in <G cool>React</G> and{" "}
        <G cool>TypeScript</G>. Aiming to do a small set of things really really
        well. So simple the software doesn't even have a name.
      </>
    ),
    links: {
      live: "notes.aardhyn.dev",
      source: "github.com/aardhynLavender/note-app-react",
    },
  },
  {
    title: "Rhythm",
    icon: <PlayIcon />,
    description: (
      <>
        A bullet hell rhythm game written in <G cool>C++23</G> and{" "}
        <G cool>SDL3</G>, with a custom level editor written in{" "}
        <G cool>TypeScript</G> and <G cool>Solid</G>. This ones not quite ready
        to show yet.
      </>
    ),
    links: {},
  },
  {
    title: "Breakout",
    description: (
      <>
        A simple Breakout clone written in <G cool>C#</G> and{" "}
        <G cool>WinForms</G> for a first year Bachelor of Information Technology
        assignment.
      </>
    ),
    icon: <ShadowIcon />,
    links: {
      source: "github.com/aardhynLavender/breakout",
    },
  },
];
export type Project = (typeof PROJECTS)[number];
