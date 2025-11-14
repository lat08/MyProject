import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('renders welcome message', () => {
    render(<Home />)
    const welcomeText = screen.getByText(/Welcome to/i)
    expect(welcomeText).toBeInTheDocument()
  })

  it('renders MyProject title', () => {
    render(<Home />)
    const title = screen.getByText(/MyProject/i)
    expect(title).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Home />)
    const description = screen.getByText(/A simple Next.js application deployed on Heroku/i)
    expect(description).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<Home />)
    const nextjsCard = screen.getByText(/Next.js/i)
    const herokuCard = screen.getByText(/Heroku/i)
    expect(nextjsCard).toBeInTheDocument()
    expect(herokuCard).toBeInTheDocument()
  })
})

