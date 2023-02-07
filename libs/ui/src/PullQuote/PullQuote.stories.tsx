import { PullQuote } from './PullQuote';

export default {
  title: 'Pull Quote',
  component: PullQuote,
};

export const Hello = {
  render: () => (
    <PullQuote >
      Food can be a hassle, so we have formed partnerships with local catering
      to make your charter focused on relaxing.
    </PullQuote>
  ),
};
