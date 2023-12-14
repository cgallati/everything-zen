export enum PartyType {
  Couple = 'COUPLE',
  Friends = 'FRIENDS',
  Bachelorette = 'BACHELORETTE',
  Birthday = 'BIRTHDAY',
  Other = 'OTHER',
}

export interface Availability {
  id: number;
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
  firstDateOffsetHours: -4 | -5
}

export interface Guest {
  name: string;
  phone: string;
  email: string;
}

export type Charter = {
  id: number;
  guest: Guest;
  partyType: string;
  time: Date | string;
  partySize: number;
  duration: number;
};
