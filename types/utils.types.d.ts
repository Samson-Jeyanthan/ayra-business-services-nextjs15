import { IWhyPartnerData } from "@/constants";

export interface ICommonHero {
  title: string;
  description: string;
  img_one: string;
  img_two: string;
  inverse_img: boolean;
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

export type TFormInput = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  inputName: string;
  inputType: "text" | "email" | "password" | "number";
  formLabel: string;
  placeholder?: string;
  formDescription?: string;
};

export type TTextArea = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  inputName: string;
  formLabel: string;
  placeholder?: string;
  formDescription?: string;
  maxLength?: number;
};

export type TDropdown = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  formLabel: string;
  inputName: string;
  formDescription?: string;
  options: { _id: string; name: string }[];
  prevValue?: string;
};
