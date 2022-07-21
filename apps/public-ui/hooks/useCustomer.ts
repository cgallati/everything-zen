import { useFetch, useLocalStorage, useSessionStorage } from 'usehooks-ts';
import { useEffect, useState } from 'react';

const stringifyCustomer = (customer: Omit<Customer, 'id'>) =>
  JSON.stringify(customer);

export const useCustomer = (name: string, phone: string, email: string) => {
  const { data, error } = useFetch<Customer>('api/getOrCreateCustomer', {
    method: 'PUT',
    body: stringifyCustomer({
      name: 'Test',
      phone: '1234',
      email: 'test@email.com',
    }),
  });

  return { data: data?.id, error, loading: !data && !error };
};
