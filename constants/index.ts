interface IRibbonNames {
  name: string;
}

export const RIBBON_NAMES: IRibbonNames[] = [
  {
    name: "Recruitment Services",
  },
  {
    name: "Fuel Card Services",
  },
  {
    name: "Media Services",
  },
  {
    name: "Web Development",
  },
  {
    name: "App Development",
  },
];

interface INavLinks {
  name: string;
  href: string;
  scroll: boolean;
}

export const NAV_LINKS: INavLinks[] = [
  {
    name: "About",
    href: "/#about",
    scroll: true,
  },
  {
    name: "Services",
    href: "/#services",
    scroll: true,
  },
  {
    name: "Looking for Work",
    href: "/looking-for-work",
    scroll: false,
  },
  {
    name: "Looking for Staff",
    href: "/looking-for-staff",
    scroll: false,
  },
];

interface IWhyChoose {
  name: string;
  image: string;
  description: string;
}

export const WHY_CHOOSE: IWhyChoose[] = [
  {
    name: "Cost  Effective",
    image: "/svgs/cost-effective.svg",
    description:
      "At Ayra Business Services, we're constantly striving to reduce your overall expenditure where possible. We work hard to ensure our supply of skilled professionals is always as cost-effective as it can be, delivering exceptional value without compromising on quality or reliability.",
  },
  {
    name: "Transparent",
    image: "/svgs/transparent.svg",
    description:
      "Transparency builds trust, and trust is everything to us. We believe in honest, open, and collaborative communication from day one. When you partner with us for workforce solutions, you'll benefit from fixed-margin supply and complete transparency on all financials. There are no hidden fees or surprises. We'll always be clear about what we can and can't do, and we'll work to give you realistic timescales, so you can plan with confidence.",
  },
  {
    name: "Proactive",
    image: "/svgs/proactive.svg",
    description:
      "We pride ourselves on being proactive partners. This means we don't just react to your requests; we work to deeply understand your business and workforce needs. By anticipating challenges, staying ahead of industry trends, and truly getting to know your operations, we aim to provide you with solutions that not only meet but consistently exceed your expectations.",
  },
  {
    name: "Progressive",
    image: "/svgs/progressive.svg",
    description:
      "The world of business is always evolving, and so are we. We're committed to being progressive and constantly innovating to enhance the efficiency and effectiveness of our services. By staying at the forefront of industry practices and adopting cutting-edge technologies, we aim to offer you the best level of service for the lowest possible cost. Our goal is to ensure you always receive exceptional value and superior results.",
  },
];
