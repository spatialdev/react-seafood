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

describe('testing main', () => {
  let container
  let user

  beforeEach(() => {
      user = userEvent.setup()
  })

  test('test right drawer opening button', async () => {
      //console.log(container)
      //const button = container.querySelector('#vendorButton')
      //const user = userEvent.setup()
      //const button = screen.getByText('Vendor List')
      //console.log(button)
      ///const user = userEvent.setup()
      const { container } = render(<App />)
      await user.click(screen.getByText('Vendor List'))
      const drawer = container.querySelector('#main')
      console.log(drawer)
      expect(drawer).not.toHaveStyle('display: none')
  })
})

