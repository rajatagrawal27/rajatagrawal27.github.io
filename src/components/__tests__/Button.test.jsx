import { render, screen } from '@testing-library/react'
import Button from '../Button'

test('renders a link with the given href and text', () => {
  render(<Button href="#projects">View Projects</Button>)
  const link = screen.getByRole('link', { name: 'View Projects' })
  expect(link).toHaveAttribute('href', '#projects')
  expect(link).toHaveClass('btn', 'btn--primary')
})

test('applies the ghost variant class', () => {
  render(<Button href="#" variant="ghost">Download CV</Button>)
  expect(screen.getByRole('link', { name: 'Download CV' })).toHaveClass('btn--ghost')
})
