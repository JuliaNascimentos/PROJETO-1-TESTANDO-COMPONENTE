import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterButton from './CounterButton';

test("Deve ser exibido 1 ao clicar no botão", () => {
    render(<CounterButton />);

    const button = screen.getByText('Incrementar');

    fireEvent.click(button);

    expect(screen.getByText("Contagem: 1")).toBeInTheDocument();
});

