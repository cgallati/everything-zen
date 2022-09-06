import useSWR from 'swr';

export interface PaymentIntentInput {
  name: string;
  phone: string;
  email: string;
}

const fetcher = (key: string, data: PaymentIntentInput) =>
  fetch('api/paymentIntent', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

const canFetch = ({ name, phone, email }: PaymentIntentInput) =>
  name && phone && email;

export const usePaymentIntent = (
  name: string,
  phone: string,
  email: string
) => {
  const payload = {
    name,
    phone,
    email,
  };
  const { data } = useSWR(
    canFetch(payload) && ['api/paymentIntent', payload],
    (url) => fetcher(url, payload)
  );

  return { secret: data?.secret };
};
