import { render, screen } from '@testing-library/react'
import App from './App'

test('renders every section of the portfolio', () => {
  render(<App />)
  for (const id of ['home', 'about', 'skills', 'projects', 'experience', 'contact']) {
    expect(document.getElementById(id)).toBeInTheDocument()
  }
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'View Projects' })).toBeInTheDocument()
})
