import useSWR from 'swr';

export interface PaymentIntentInput {
  name: string;
  phone: string;
  email: string;
}

const fetcher = (data: PaymentIntentInput) =>
  fetch('api/paymentIntent', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

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
  const { data } = useSWR(['api/paymentIntent', payload], () =>
    fetcher(payload)
  );

  return { secret: data?.secret };
};
