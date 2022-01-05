export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms?:    Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        FlagImage;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
}

export interface FlagImage {
  png: string;
  svg: string;
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  USD?: Aed;
  LKR?: Aed;
  EUR?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  LRD?: Aed;
  XOF?: Aed;
  IQD?: Aed;
  RWF?: Aed;
  SGD?: Aed;
  MZN?: Aed;
  HNL?: Aed;
  PKR?: Aed;
  IRR?: Aed;
  RUB?: Aed;
  XAF?: Aed;
  TWD?: Aed;
  CZK?: Aed;
  GEL?: Aed;
  BIF?: Aed;
  RSD?: Aed;
  CNY?: Aed;
  CLP?: Aed;
  GBP?: Aed;
  JEP?: Aed;
  KHR?: Aed;
  MDL?: Aed;
  BOB?: Aed;
  CHF?: Aed;
  COP?: Aed;
  PGK?: Aed;
  LYD?: Aed;
  AUD?: Aed;
  KWD?: Aed;
  SAR?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  KID?: Aed;
  LSL?: Aed;
  NGN?: Aed;
  STN?: Aed;
  PEN?: Aed;
  EGP?: Aed;
  QAR?: Aed;
  INR?: Aed;
  ALL?: Aed;
  ETB?: Aed;
  UZS?: Aed;
  DJF?: Aed;
  AED?: Aed;
  AZN?: Aed;
  TND?: Aed;
  CAD?: Aed;
  LAK?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  BSD?: Aed;
  HRK?: Aed;
  TZS?: Aed;
  SLL?: Aed;
  AMD?: Aed;
  AFN?: Aed;
  RON?: Aed;
  BRL?: Aed;
  AWG?: Aed;
  UYU?: Aed;
  ZMW?: Aed;
  BAM?: BAM;
  VND?: Aed;
  MVR?: Aed;
  MUR?: Aed;
  ILS?: Aed;
  JOD?: Aed;
  BHD?: Aed;
  UAH?: Aed;
  SHP?: Aed;
  LBP?: Aed;
  MXN?: Aed;
  YER?: Aed;
  KMF?: Aed;
  WST?: Aed;
  MKD?: Aed;
  BYN?: Aed;
  THB?: Aed;
  MMK?: Aed;
  TJS?: Aed;
  AOA?: Aed;
  XCD?: Aed;
  PLN?: Aed;
  SYP?: Aed;
  BDT?: Aed;
  VUV?: Aed;
  MRU?: Aed;
  SEK?: Aed;
  XPF?: Aed;
  ARS?: Aed;
  TTD?: Aed;
  KZT?: Aed;
  FKP?: Aed;
  SOS?: Aed;
  BGN?: Aed;
  FJD?: Aed;
  CVE?: Aed;
  ANG?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  NOK?: Aed;
  MGA?: Aed;
  CRC?: Aed;
  NIO?: Aed;
  BWP?: Aed;
  GYD?: Aed;
  IMP?: Aed;
  OMR?: Aed;
  ERN?: Aed;
  IDR?: Aed;
  MOP?: Aed;
  SRD?: Aed;
  PHP?: Aed;
  GGP?: Aed;
  NPR?: Aed;
  UGX?: Aed;
  KES?: Aed;
  PAB?: Aed;
  ZWL?: Aed;
  KPW?: Aed;
  ISK?: Aed;
  GMD?: Aed;
  PYG?: Aed;
  CDF?: Aed;
  VES?: Aed;
  HTG?: Aed;
  KGS?: Aed;
  BND?: Aed;
  BTN?: Aed;
  KRW?: Aed;
  BMD?: Aed;
  SDG?: BAM;
  GNF?: Aed;
  MWK?: Aed;
  SZL?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
