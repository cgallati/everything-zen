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

export interface SerializableMonth {
  firstDate: string;
  firstDateOffsetHours: -4 | -5;
  days: {
    avails: SerializableAvailability[];
  }[];
}

export interface SerializableAvailability {
  start: string;
  startOffsetHours: -4 | -5;
  length: number;
  cost: number;
  booked: boolean;
  type: string;
}

export interface Guest {
  name: string;
  phone: string;
  email: string;
}
