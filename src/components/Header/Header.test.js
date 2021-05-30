import Header from './index';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('renders "CareerFoundry" when there are no title', () => {
    const {getByText} = render(<Header/>)
    getByText(/CareerFoundry/i)
  })

test('renders Header with title', () => {
    const title = 'Agenda'  
    const {getByText} = render(<Header title={title}/>)
    getByText(title)
  })  
  