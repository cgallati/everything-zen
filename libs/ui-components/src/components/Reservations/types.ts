export enum PartyType {
  Couple = 'COUPLE',
  Friends = 'FRIENDS',
  Bachelorette = 'BACHELORETTE',
  Birthday = 'BIRTHDAY',
  Other = 'OTHER',
}

export interface Availability {
  start: Date;
  length: number;
  cost: number;
  booked: boolean;
  type: string;
}

export interface Month {
  firstDate: Date;
  days: {
    avails: Availability[];
  }[];
}

export interface Guest {
  name: string;
  phone: string;
  email: string;
}
