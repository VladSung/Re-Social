import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('renders error page', () => {
    it('renders error page default', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <ErrorPage />
            </Router>
        )
        expect(screen.getByText(/520/i)).toBeInTheDocument()
        expect(screen.getByText(/unknown error/i)).toBeInTheDocument()
    })
    it('renders error page with error data', () => {
        const history = createMemoryHistory()
        const error = { code: 404, desc: 'page not found' }
        render(
            <Router history={history}>
                <ErrorPage errorCode={error.code} description={error.desc} />
            </Router>
        )
        expect(screen.getByText('404')).toBeInTheDocument()
        expect(screen.getByText(/page not found/i)).toBeInTheDocument()
    })
})