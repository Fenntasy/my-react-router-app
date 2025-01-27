import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link, useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader() {
  return {
    key: "Subpage"
  }
}

export default function Home() {
  const data = useLoaderData<typeof loader>();
  return <>
    <Link className="text-blue-500 underline" to="/subpage">{data.key}</Link>
  </>;
}
