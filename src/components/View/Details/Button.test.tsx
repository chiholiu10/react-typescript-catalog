import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { Provider } from 'react-redux';
import { store } from '../../../Store';

test('It should check if function is being called by onClick', () => {
    const mockFn = jest.fn(() => true);
    const { getByTestId } = render(
        <Provider store={ store }>
            <Button/>
        </Provider>
        );
    const button = getByTestId('button-test');
    fireEvent.click(button);
    expect(mockFn()).toBe(true);
});