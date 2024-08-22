
import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';
import { expect, test } from 'vitest';

test('renders "Hello World"', () => {
    render(<Hello name="you" />);
    expect(screen.getByText(/Hello `${name}`/)).toBeInTheDocument();
});