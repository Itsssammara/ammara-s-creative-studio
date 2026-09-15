import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ammara Hoosen | Social Media Portfolio" },
      {
        name: "description",
        content: "Explore Ammara Hoosen's social media design, brand marketing, Meta Ads, and creative campaign portfolio.",
      },
      { property: "og:title", content: "Ammara Hoosen | Social Media Portfolio" },
      {
        property: "og:description",
        content: "Social media design, brand marketing, and creative campaigns by Cape Town-based specialist Ammara Hoosen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
