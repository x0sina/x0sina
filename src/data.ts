export type Project = {
  id: string; number: string; name: string; type: string; summary: string;
  url: string; tags: string[]; details: string[]; source: string; image?: string;
}
export const projects: Project[] = [
  {
    id: "subscription", number: "01", name: "PasarGuard Template", type: "INTERFACE / SUBSCRIPTION EXPERIENCE",
    summary: "A clearer connection. A responsive, multilingual subscription experience for the PasarGuard ecosystem.",
    url: "https://github.com/PasarGuard/subscription-template", tags: ["TypeScript", "React", "shadcn/ui"],
    image: "/assets/subscription.png", source: "https://github.com/PasarGuard/subscription-template/blob/main/README.md",
    details: ["Language switching across English, Persian, Chinese, and Russian.", "Responsive layout with dark mode.", "QR codes and one-click copying for connection links.", "WireGuard configurations can be copied or downloaded as .conf files."],
  },
  {
    id: "panel", number: "02", name: "PasarGuard Panel", type: "INFRASTRUCTURE / PROXY MANAGEMENT",
    summary: "An open-source management interface for censorship-resistant infrastructure. Complex networks, brought into focus.",
    url: "https://github.com/PasarGuard/panel", tags: ["React", "Python", "REST API"],
    source: "https://github.com/PasarGuard/panel/blob/main/README.md",
    details: ["Web dashboard and REST API for proxy account management.", "Multi-node infrastructure support and traffic statistics.", "Xray-core and WireGuard support.", "Multi-language interfaces and role-based administrator access."],
  },
  {
    id: "marzban", number: "03", name: "Marzban Sub", type: "INTERFACE / CONNECTION SHARING",
    summary: "Subscription details, made approachable. A customizable page that helps people find and use their connection links.",
    url: "https://github.com/x0sina/marzban-sub", tags: ["HTML", "Tailwind CSS", "PHP"],
    source: "https://github.com/x0sina/marzban-sub/blob/main/README.md",
    details: ["Subscription page template for the Marzban panel.", "English, Persian, and Russian language support.", "Quick addition of subscription links to client applications.", "Copyable configurations and an optional PHP-hosted version."],
  },
]
export const links = { github: "https://github.com/x0sina", telegram: "https://t.me/x0sina", website: "https://x0sina.com" }
