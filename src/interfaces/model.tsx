export enum EnumAge {
  "Teenagers 18+" = "Teenagers",
  "Young 22+" = "Young",
  Mom = "Mom",
  Mature = "Mature",
  Granny = "Granny",
}

export enum EnumBodyType {
  Skinny = "Skinny",
  Athletic = "Athletic",
  Curvy = "Curvy",
  Bbw = "Bbw",
}

export enum EnumEthnicity {
  Arab = "Arab",
  Indian = "Indian",
  Asian = "Asian",
  Black = "Black",
  Latina = "Latina",
  White = "White",
}

export enum EnumHair {
  Black = "Black",
  "Blond(e)" = "Blond(e)",
  Brown = "Brown",
  Ginger = "Ginger",
  Grey = "Grey",
  Bald = "Bald",
}

export interface IModelProfile {
  userName: string;
  aboutMe: string;
  age: string;
  country: string;
  languages: any;
  birthday: string;
  gender: string;
  sexualPreference: string;
  ethnicity: string;
  eyes: string;
  hair: string;
  weight: string;
  height: string;
  smoke: string;
  drink: string;
  drugs: string;
  maritalStatus: string;
  occupationMajor: string;
  favoriteFood: string;
  automobile: string;
  bodyType: string;
  talents: string;
}

export interface IModelEditProfile {
  aboutMe?: string;
  userName?: string;
  age?: string;
  country?: string;
  languages?: any;
  birthday?: string;
  gender?: string;
  sexualPreference?: string;
  ethnicity?: string;
  eyes?: string;
  hair?: string;
  weight?: string;
  height?: string;
  smoke?: string;
  drink?: string;
  drugs?: string;
  maritalStatus?: string;
  occupationMajor?: string;
  favoriteFood?: string;
  automobile?: string;
  bodyType?: string;
  talents?: string;
}

export interface IEditModelProfileProps {
  modelId: string;
  values: IModelEditProfile;
}

interface IAges {
  Teenagers: string;
  Young: string;
  Mom: string;
  Mature: string;
  Granny: string;
}

export interface IBodyTypes {
  Skinny: string;
  Athletic: string;
  Curvy: string;
  Bbw: string;
}

export interface IEthnicity {
  Arab: string;
  Indian: string;
  Asian: string;
  Black: string;
  Latina: string;
  White: string;
}

export interface IHair {
  Black: string;
  "Blond(e)": string;
  Brown: string;
  Ginger: string;
  Grey: string;
  Bald: string;
}

export interface IAmountOfElements {
  all: string;
  age: IAges;
  bodyType: IBodyTypes;
  ethnicity: IEthnicity;
  hair: IHair;
}

export interface IGetFilterModels {
  searchQueryParam: string;
  value: {};
}

export interface IValueProps {
  value: {};
}

export interface IMessageList {
  roomId: string;
  userName: string;
  text: string;
}

export interface IMessagesBlockProps {
  messagesList: IMessageList[] | null;
  userName: string;
}
export interface IChatProps {
  roomId?: string;
  userName: string;
}
