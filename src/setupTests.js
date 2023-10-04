import '@testing-library/jest-dom/extend-expect'; 
import { configure } from '@testing-library/react';

//(React Testing Library)
configure({ testIdAttribute: 'data-test' }); 
