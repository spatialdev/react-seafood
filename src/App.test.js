jest.mock("react-ga")
import '../__TESTS__/createUrlObject.mock.js'
import { render, screen } from '@testing-library/react'
import React from 'react';
import App from './app';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  render(<App />);
});
