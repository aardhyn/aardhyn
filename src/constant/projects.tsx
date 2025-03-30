import { G } from "../component/Typography";
import type { ReactNode } from "react";

export type Project = {
  title: string;
  description: ReactNode;
  asset: string;
  meta?: string;
  link: {
    live?: string;
    source?: string;
  };
};

export const PROJECTS = [
  {
    title: "Component",
    asset: "component.png",
    description: (
      <>
        Visual programming editor built using <G color="cool">React</G> and{" "}
        <G color="cool">C++23</G> with <G color="cool">WebAssembly</G> for a
        Bachelor of Information Technology Special Topic
      </>
    ),
    link: {
      live: "https://component.aardhyn.dev",
      source: "https://github.com/aardhyn/component",
    },
  },
  {
    title: "Webstack",
    asset: "webstack.png",
    meta: "Job",
    description: (
      <>
        A <G color="cool">no-code</G> website creation and CMS platform owned
        and operated in New Zealand. Aiming to strike the balance between
        simplicity and flexibility.
      </>
    ),
    link: {
      live: "https://app.webstack.co.nz",
    },
  },
  {
    title: "Inv.",
    asset: "invoice.png",
    meta: "Client Project",
    description: (
      <>
        Simple invoice generation and management software optimized for small
        businesses and self-employed individuals. Written in{" "}
        <G color="cool">React</G> with a <G color="cool">Rust</G> and{" "}
        <G color="cool">Postgres</G> backend.
      </>
    ),
    link: {
      source: "https://github.com/aardhyn/invoice",
      // live: "https://invoice.aardhyn.dev", // fixme: not deployed
    },
  },
] satisfies Project[];
