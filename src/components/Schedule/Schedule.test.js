import Slot from './Slot';
import {RenderSlotItem} from './Slot';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('renders list of slots', () => {
    const slotList = [...Array(10).keys()]
    const {getAllByTestId} = render(<Slot slotList={slotList}/>)
    const slotItems = getAllByTestId('slot-time').map(li => li.textContent)
    const testSlotContent = slotList.map(li => {
        if(li < 10) return `0${li}:00`
        else return `${li}:00`;
    })
    expect(slotItems).toEqual(testSlotContent);
  })

  test('renders Single slot by appending 0', () => {
    const slot = 5
    const {getByText} = render(<RenderSlotItem slot={slot}/>)
    
    getByText(`0${slot}:00`)
  })

  test('renders Single slot without appending 0', () => {
    const slot = 15
    const {getByText} = render(<RenderSlotItem slot={slot}/>)
    
    getByText(`${slot}:00`)
  })
 
  