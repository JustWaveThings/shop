import React from 'react';
import {
    render,
    screen,
} from '@testing-library/react';
import Home from '../components/Home';

describe('Home Component', () => {
    test('renders the correct heading', () => {
        render(
            <Home />
        );
        expect(
            screen.getByRole(
                'heading'
            )
                .textContent
        ).toMatch(
            /You have your reasons.../i
        );
    });
});
