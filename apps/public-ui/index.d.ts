/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
