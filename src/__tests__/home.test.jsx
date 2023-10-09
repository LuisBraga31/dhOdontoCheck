import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup  } from '@testing-library/react';

import Home from '../pages/Home/Home';
import App from '../App';
import Navbar from '../Components/NavBar/Navbar';


beforeEach(() => {
  render(<App />);
})

afterEach(() => {
    cleanup();
});

describe('Testando renderização de Componentes', () => {
  
    it('Testando renderizacao da Home', () => {
        const { getByText } = render(<Home />);
    
        expect(getByText('DH Odonto')).toBeTruthy();
    });

    it('Verificando se há um H1 na página', async () => {
        const { queryByText } = await render(<Home />);
        const h1 = await screen.queryByText('DH Odonto');

        expect(h1).not.toBeNull();
    });

    it('Testando se botão existe', async () => {
        // Setup
        const { queryByText } = await render(<Home />);
        const button = await screen.queryByText('Login');

        // Expectations
        expect(button).not.toBeNull();
    });

    it('Testando renderizacão de uma classeName', () => {
        const { container } = render(<Home />);
        
        // Verifica se um elemento específico dentro do componente Home está presente
        const homeElement = container.querySelector('.container'); // Substitua pela classe desejada
        expect(homeElement).toBeTruthy();
      });
});