import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HelloComp } from '@/components/HelloComp';

describe('HelloComp', () => {
  it('should test green', () => {
    render(<HelloComp/>);
    const comp = screen.getByText('Hello World!');
    expect(comp).toHaveTextContent('Hello World!');
  });
});