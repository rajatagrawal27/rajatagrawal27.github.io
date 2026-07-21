import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const props = {
  title: 'Certificate Manager',
  description: 'Dashboard for issuing certificates.',
  tech: ['React', 'Node'],
  gradient: 'linear-gradient(135deg, #fff, #000)',
  links: { demo: 'https://example.com', code: 'https://github.com/rajatagrawal27' },
}

test('renders title, description, and tech badges', () => {
  render(<ProjectCard {...props} />)
  expect(screen.getByRole('heading', { name: 'Certificate Manager' })).toBeInTheDocument()
  expect(screen.getByText('Dashboard for issuing certificates.')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Node')).toBeInTheDocument()
})

test('external links open safely in a new tab', () => {
  render(<ProjectCard {...props} />)
  const demo = screen.getByRole('link', { name: /live demo/i })
  expect(demo).toHaveAttribute('target', '_blank')
  expect(demo).toHaveAttribute('rel', 'noopener noreferrer')
})
