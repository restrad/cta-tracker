export interface Error {
  stpid: string;
  msg: string;
}

export interface Prd {
  tmstmp: string;
  typ: string;
  stpnm: string;
  stpid: string;
  vid: string;
  dstp: number;
  rt: string;
  rtdd: string;
  rtdir: string;
  des: string;
  prdtm: string;
  tablockid: string;
  tatripid: string;
  dly: boolean;
  prdctdn: string;
  zone: string;
}

export interface Stop {
  stpid: string;
  stpnm: string;
  lat: number;
  lon: number;
}

export interface Direction {
  dir: string;
}

export interface Route {
  rt: string;
  rtnm: string;
  rtclr: string;
  rtdd: string;
}

export interface BustimeResponse {
  error?: Error[];
  prd?: Prd[];
  stops?: Stop[];
  directions?: Direction[];
  routes?: Route[];
}

