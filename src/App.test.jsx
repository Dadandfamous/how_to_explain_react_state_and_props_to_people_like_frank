import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  const { unmount } = render(<App />)
  unmount()
})

it('renders users list heading', () => {
  render(<App />)
  expect(screen.getByText(/Users List/i)).toBeInTheDocument()
})
