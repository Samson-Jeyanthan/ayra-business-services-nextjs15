import { IWhyPartnerData } from "@/constants";

export interface ICommonHero {
  title: string;
  description: string;
  image_one: string;
  image_two: string;
}

export interface IAbout {
  title: string;
  description: string;
}

export interface IWhyPartner {
  title: string;
  description: string;
  data: IWhyPartnerData[];
}
