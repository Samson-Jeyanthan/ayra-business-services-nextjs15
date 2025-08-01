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

interface ISocialMedias {
  name: string;
  icon: string;
  href: string;
}

export const SOCIAL_MEDIAS: ISocialMedias[] = [
  {
    name: "Facebook",
    icon: "/svgs/facebook.svg",
    href: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: "/svgs/twitter.svg",
    href: "https://twitter.com/",
  },
  {
    name: "Linkedin",
    icon: "/svgs/linkedin.svg",
    href: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    icon: "/svgs/instagram.svg",
    href: "https://www.instagram.com/",
  },
];

interface IServices {
  name: string;
  value: string;
  description: string;
  isMore: boolean;
}

export const SERVICES: IServices[] = [
  {
    name: "Recruitment Services",
    value: "service-1",
    description:
      "Finding the right talent is crucial for any organization. Our recruitment services are designed to connect you with the ideal candidates who not only possess the necessary skills and experience but also align with your company culture. From executive search to specialized roles, we leverage our extensive network and expertise to streamline your hiring process, saving you time and resources. We focus on understanding your specific requirements to ensure a perfect match every time.",
    isMore: false,
  },
  {
    name: "Fuel Card Services",
    value: "service-2",
    description:
      "Managing fuel expenses can be a significant challenge for businesses with fleets. Our fuel card services offer a convenient and cost-effective solution to streamline your fuel management. We provide secure and easy-to-use fuel cards that offer competitive pricing, detailed reporting, and simplified administration, giving you greater control and visibility over your fuel consumption and expenses.",
    isMore: true,
  },
  {
    name: "Media Services",
    value: "service-3",
    description:
      "In today's visually driven world, compelling content is paramount. Our creative media team specializes in crafting engaging and impactful visuals and narratives that resonate with your target audience. Whether you need stunning graphic design, captivating video production, professional photography, or compelling copywriting, we're here to help you tell your story effectively and elevate your brand presence.",
    isMore: true,
  },
  {
    name: "Web & App Development Services",
    value: "service-4",
    description:
      "In the digital age, a strong online presence is non-negotiable. Our app and web development services provide cutting-edge solutions tailored to your unique business goals. From intuitive and user-friendly mobile applications to responsive and robust websites, we build platforms that enhance user experience, drive engagement, and support your growth. We focus on modern design, seamless functionality, and scalable architecture to ensure your digital presence is future-proof.",
    isMore: true,
  },
];

export interface IWhyPartnerData {
  title: string;
  description: string;
}

export const WHY_PARTNER_STAFF: IWhyPartnerData[] = [
  {
    title: "Beyond Recruitment",
    description:
      "A Holistic Approach to Your Success. Our commitment to your growth extends far beyond talent acquisition",
  },
  {
    title: "Creative Media",
    description:
      "From engaging videos to compelling graphic design, our team crafts media that captures attention and elevates your brand, ensuring your message resonates powerfully.",
  },
  {
    title: "Fuel Card Services",
    description:
      "Gain greater control and visibility over your fleet expenses with our efficient fuel card solutions, designed to simplify management and reduce costs.",
  },
  {
    title: "App and Web Development",
    description:
      "We build intuitive, robust websites and mobile applications tailored to your business, enhancing your digital presence and streamlining your operations.",
  },
];
