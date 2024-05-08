import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { IntegrationTest } from '@/components/integration/IntegrationTest';

describe('IntegrationTest Component', () => {
  it('must integrate properly', () => {
    render(<IntegrationTest/>);

    const originalText = 'Texto em cor ORIGINAL';
    const alteredText = 'Texto em cor ALTERADA';

    screen.getByText(originalText); //getBy() realiza diretamente a verificação do expect()

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const removedParagraph = screen.queryByText(originalText);
    expect(removedParagraph).not.toBeInTheDocument();

    const newParagraph = screen.queryByText(alteredText);
    expect(newParagraph).toBeInTheDocument();
  });
});