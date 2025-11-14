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
    
    // Check for card titles - the arrow is rendered as → character
    const nextjsCardTitle = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h2' && content.includes('Next.js')
    })
    expect(nextjsCardTitle).toBeInTheDocument()
    
    const herokuCardTitle = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h2' && content.includes('Heroku')
    })
    expect(herokuCardTitle).toBeInTheDocument()
    
    const cicdCardTitle = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h2' && content.includes('CI/CD')
    })
    expect(cicdCardTitle).toBeInTheDocument()
    
    const githubActionsCardTitle = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h2' && content.includes('GitHub Actions')
    })
    expect(githubActionsCardTitle).toBeInTheDocument()
  })
})

