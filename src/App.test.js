import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import App from './App';

test('renders nav element properly', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const nav = screen.getByTestId('nav');
  expect(nav).toBeInTheDocument();
});
