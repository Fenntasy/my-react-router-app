import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("/subpage", "routes/subpage.tsx")] satisfies RouteConfig;
