import Confirm from './index';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('renders Label text', () => {
    const {getByLabelText} = render(<Confirm/>)
    getByLabelText('Confirm your reservation');
  })

  