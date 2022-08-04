import { Availability } from '@everything-zen/ui-components';
import useSWR from 'swr';

export interface PaymentIntentInput {
  name: string;
  phone: string;
  email: string;
  amount: number;
  description: string;
}

const stringifyBody = (body: PaymentIntentInput) => JSON.stringify(body);
const fetcher = (key: string, data: PaymentIntentInput) =>
  fetch('api/paymentIntent', {
    method: 'PUT',
    body: stringifyBody({ ...data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
const canFetch = ({
  name,
  phone,
  amount,
  description,
  email,
}: PaymentIntentInput) => name && phone && amount && description && email;

export const usePaymentIntent = (
  name: string,
  phone: string,
  email: string,
  avail: Availability
) => {
  const { cost, start } = avail;
  const payload = {
    name,
    phone,
    email,
    amount: cost * 100,
    description: start.toString(),
  };
  const { data } = useSWR(
    canFetch({ ...payload }) && ['api/paymentIntent', payload],
    (url) => fetcher(url, payload)
  );

  return { secret: data?.secret };
};
