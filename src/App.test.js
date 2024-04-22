import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { combineReducers, applyMiddleware, createStore } from 'redux';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}

const renderWithRedux = (component, reducers,
  { initialState, store } = {}) => {
  const combinedReducers = combineReducers({ ...reducers });
  store = createStore(combinedReducers, initialState, applyMiddleware(thunk))
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>
          {component}
        </Provider>
      </Router>
    ),
    store
  }
}

describe('renders app', () => {
  it('renders not initialized app', () => {
    const reducers = {
      app: () => ({}),
    }
    renderWithRedux(<App />, { ...reducers })

    expect(screen.getByText(/Приложение загружается/i)).toBeInTheDocument();
  });
  it('renders initialized app', () => {
    const reducers = {
      app: () => ({ initialized: true }),
      auth: () => ({ isAuth: false }),
      profilePage: () => ({ profile: null }),
    }

    renderWithRedux(<App />, { ...reducers })
    expect(screen.queryByText(/Приложение загружается/i)).toBeNull();
    expect(screen.getByText(/re:social/i)).toBeInTheDocument();
  });
  it('renders initialized app with unknown user', () => {
    const reducers = {
      app: () => ({ initialized: true }),
      auth: () => ({ isAuth: false }),
      profilePage: () => ({ profile: null }),
    }

    renderWithRedux(<App />, { ...reducers })
    expect(screen.queryByText(/Приложение загружается/i)).toBeNull();
    expect(screen.getAllByText(/log in/i)[0]).toBeInTheDocument();
  });
  it('renders initialized app with auth user', () => {
    const reducers = {
      app: () => ({ initialized: true }),
      auth: () => ({ isAuth: true }),
      profilePage: () => ({ profile: null }),
    }

    renderWithRedux(<App />, { ...reducers })
    expect(screen.queryByText(/Приложение загружается/i)).toBeNull();
  });
})
