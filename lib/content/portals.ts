/**
 * Technology portals & prototypes linked from MSG surfaces.
 * OMS PERADA is positioned as a Perkasa UVP; ARAH is a fleet control prototype.
 */

export type TechnologyPortalStatus = "live" | "prototype";

export type TechnologyPortal = {
  id: string;
  title: string;
  shortTitle: string;
  /** Brand / company context shown on cards */
  brand: string;
  badge: string;
  status: TechnologyPortalStatus;
  statusLabel: string;
  summary: string;
  description: string;
  url: string;
  ctaLabel: string;
  capabilities: string[];
};

export const technologyPortals: TechnologyPortal[] = [
  {
    id: "oms-perada",
    title: "Order Management System PERADA",
    shortTitle: "OMS PERADA",
    brand: "Perkasa",
    badge: "UVP Perkasa",
    status: "live",
    statusLabel: "Live Portal",
    summary:
      "Order management portal for PERADA operations—one of Perkasa’s unique value propositions for controlled order execution.",
    description:
      "OMS PERADA is the Order Management System for PERADA, positioned as a Perkasa UVP. It supports order intake, tracking, and operational control through a dedicated login portal.",
    url: "https://oms.perada.net/login",
    ctaLabel: "Open OMS PERADA",
    capabilities: [
      "Order intake and processing",
      "Operational order tracking",
      "Role-based portal access",
      "PERADA order workflow control",
    ],
  },
  {
    id: "arah-fleet",
    title: "ARAH — Fleet Management System",
    shortTitle: "ARAH",
    brand: "ARAH",
    badge: "Fleet Prototype",
    status: "prototype",
    statusLabel: "Prototype",
    summary:
      "Prototype for controlling and monitoring fleet operations—visibility, coordination, and operational oversight.",
    description:
      "ARAH is a Fleet Management System prototype for controlling and monitoring fleet activity. Use it to explore fleet visibility, operational control, and monitoring workflows.",
    url: "https://arah-app-delta.vercel.app/",
    ctaLabel: "Open ARAH Prototype",
    capabilities: [
      "Fleet controlling & coordination",
      "Monitoring and operational visibility",
      "Vehicle and route oversight themes",
      "Prototype dashboard for fleet ops",
    ],
  },
];

export function getTechnologyPortal(id: string) {
  return technologyPortals.find((portal) => portal.id === id);
}
