import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Inserção de dois comentários no post', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comenta'), {
            target: {
                value: 'Que lindo!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comenta'), {
            target: {
                value: 'Maravilhoso!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getAllByTestId('campo-form')).toHaveLength(2);
    })
});

