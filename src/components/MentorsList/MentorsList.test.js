import MentorsList from './index';
import MentorItem from './MentorItem';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('renders mentor item', () => {
    const mentor = {name: 'Bobby', id: 1}  
    const {getByText} = render(<MentorItem mentor={mentor}/>)
    getByText(mentor.name)
  })  
  