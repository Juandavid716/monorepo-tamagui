import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/dashboard';

describe('Test', () => {
  it('should have Docs text', () => {
    render(<Dashboard />); // ARRANGE

    const myElem = screen.getByText('Posts'); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
