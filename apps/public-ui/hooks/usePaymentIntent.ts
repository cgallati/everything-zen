import { useEffect, useState } from 'react';
import { Availability } from '@everything-zen/ui-components';

export interface PaymentIntentInput {
  name: string;
  phone: string;
  email: string;
  amount: number;
  description: string;
}

const stringifyBody = (body: PaymentIntentInput) => JSON.stringify(body);

export const usePaymentIntent = (
  name: string,
  phone: string,
  email: string,
  avail: Availability
) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const { cost, start } = avail;

  useEffect(() => {
    if (name && phone && email && cost && !data) {
      // TODO useSWR and queries to dedupe this
      fetch('api/paymentIntent', {
        method: 'PUT',
        body: stringifyBody({
          name,
          phone,
          email,
          amount: cost * 100,
          description: start.toString(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((response) => {
          setData(response);
        })
        .catch(setError);
    }
  }, [name, phone, email, cost, start, data, setData]);

  return { secret: data?.secret, error };
};
