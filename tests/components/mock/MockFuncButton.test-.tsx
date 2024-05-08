import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { MockFuncButton } from '@/components/mock/MockFuncButton';

const mockFunc = jest.fn();

describe('MockFuncButton', () => {
  it('must be called on fire event', () => {
    render(<MockFuncButton func={mockFunc}/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockFunc).toHaveBeenCalled();
  });
});