export interface SerializableMonth {
  firstDate: string;
  firstDateOffsetHours: -4 | -5;
  days: {
    avails: SerializableAvailability[];
  }[];
}

export interface SerializableAvailability {
  id: number;
  start: string;
  startOffsetHours: -4 | -5;
  length: number;
  cost: number;
  booked: boolean;
  type: string;
}

export type IndexedAvailability = {
  // year
  [key: number]: {
    // month
    [key: number]: {
      // date
      [key: number]: SerializableAvailability[];
    };
  };
};

export { EventType } from '@prisma/client';
