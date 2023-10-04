// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// import LandingPage from './LandingPage';

// const mockStore = configureStore([]);

// describe('LandingPage component', () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     const initialState = {
//       dashboardLinkClicked: false,
//     };
    
//     store = mockStore(initialState);

//     // eslint-disable-next-line testing-library/no-render-in-setup
//     component = render(
//       <Provider store={store}>
//         <Router>
//           <LandingPage />
//         </Router>
//       </Provider>
//     );
//   });

//   it('renders the landing page correctly', () => {
//     expect(screen.getByText('Welcome to SpaceX App')).toBeInTheDocument();
//     expect(screen.getByText('Go to Dashboard')).toBeInTheDocument();
//   });

//   it('dispatches an action when the "Go to Dashboard" button is clicked', () => {
//     fireEvent.click(screen.getByText('Go to Dashboard'));

//     const actions = store.getActions();
//     expect(actions).toEqual([{ type: 'SET_DASHBOARD_LINK_CLICKED', payload: true }]);
//   });
// });
