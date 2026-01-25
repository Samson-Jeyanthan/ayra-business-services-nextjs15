import { IWhyPartnerData } from "@/constants";

export interface ICommonHero {
  title: string;
  description: string;
  linkTo: string;
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
  inputType: "text" | "email" | "password" | "number" | "time";
  formLabel: string;
  placeholder?: string;
  formDescription?: string;
};

export type TTextArea = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  inputName: string;
  formLabel?: string;
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
  className?: string;
};

export type TSwitchButton = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  formLabel: string;
  inputName: string;
};

export type TRadioButton = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  formLabel: string;
  inputName: string;
  formDescription?: string;
  options: { _id: string; name: string }[];
};

export type TCheckBox = Pick<
  TFormInput,
  "form" | "inputName" | "formDescription"
> & {
  formLabel?: string;
  checkboxLabel: string;
};

export type TPopupCalendar = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  formLabel: string;
  inputName: string;
  formDescription?: string;
  prevValue?: string;
  className?: string;
  disableFunc?: () => boolean;
};

export type TStageURLProps = {
  params: { stepNo: string };
};

export type IImageMediaProps = {
  mediaURL: string;
};

export interface IMediaProps {
  mediaType: "image" | "video" | "audio" | "pdf" | "svg" | "youtube-url";
  mediaURL: string;
  thumbnailURL: string;
}

export interface IYesNoOptions {
  _id: string;
  name: string;
}
