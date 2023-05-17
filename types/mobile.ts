export interface Variant {
  ram: string;
  rom: string;
  official: number;
  unofficial: number;
}

export interface Mobile {
  _id: string;
  category: string;
  brandName: string;
  model: string;
  releasedDate: string;
  networkBrands: string;
  simType: string;
  dimension: string;
  weight: string;
  build: string;
  screenSize: string;
  screenType: string;
  resolution: string;
  protection: string;
  os: string;
  fingerprint: string;
  sdCard: string;
  variant: Variant[];
  romOption: string;
  ramOption: string;
  processor: string;
  cpu: string;
  gpu: string;
  port: string;
  audioJack: string;
  sound: string;
  color: string;
  battery: string;
  charging: any;
  mainCamera: any;
  mainFeatures: string;
  fontCamera: any;
  frontFeatures: string;
  wifi: string;
  bluetooth: string;
  gps: string;
  otg: string;
  fm: string;
  nfc: string;
  sensor: string;
  others: any;
  inTheBox: any;
  imgUrl: string;
  updatedAt: string;
  model_id?: string;
}

export interface MobileShortInfo {
  _id: string;
  brandName: string;
  model: string;
  variant: Variant[];
  imgUrl: string;
  updatedAt: string;
  model_id: string;
}
