import { useEffect, useState } from 'react';

interface PaymentIntentInput {
  name: string,
  phone: string,
  email: string,
  amount: number
}
const stringifyBody = (body: PaymentIntentInput) =>
  JSON.stringify(body);

export const usePaymentIntent = (
  name: string,
  phone: string,
  email: string,
  amount: number,
) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (name && phone && email && amount) {
      fetch('api/paymentIntent', {
        method: 'PUT',
        body: stringifyBody({
          name,
          phone,
          email,
          amount
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((r) => r.json())
        .then((response) => {
          setData(response.body);
        })
        .catch(setError);
    }
  }, [name, phone, email, amount]);

  return { data, error, loading: !data && !error };
};
