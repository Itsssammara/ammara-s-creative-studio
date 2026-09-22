import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ammara Hoosen | Social Media Manager & Meta Ads Specialist" },
      {
        name: "description",
        content:
          "Cape Town social media manager and Meta Ads specialist helping small businesses turn content into clicks, conversations and customers.",
      },
      { property: "og:title", content: "Ammara Hoosen | Social Media Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Ammara Hoosen's social media management, content design and Meta Ads case studies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
