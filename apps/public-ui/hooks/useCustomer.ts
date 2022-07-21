import { useFetch, useLocalStorage, useSessionStorage } from 'usehooks-ts';
import { useEffect, useState } from 'react';

const stringifyCustomer = (customer: Omit<Customer, 'id'>) =>
  JSON.stringify(customer);

export const useCustomer = () => {
  const { state, setState } = useState<'loading'>();
  const { data, error } = useFetch<Customer>('api/getOrCreateCustomer', {
    method: 'POST',
    body: stringifyCustomer({
      name: 'Test',
      phone: '',
      email: '',
    }),
  });

  return;
};
