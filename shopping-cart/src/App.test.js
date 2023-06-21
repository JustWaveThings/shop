import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('app component', () => {
	test('renders header title', () => {
		render(<App />);
		const element = screen.getByText(/the shop/i);
		expect(element).toBeInTheDocument();
	});

	test('renders header subheading', () => {
		render(<App />);
		const element = screen.getByText(/your one-stop shop/i);
		expect(element).toBeInTheDocument();
	});

	test('renders cart qty 0 on initial load', () => {
		render(<App />);
		const element = screen.getByTestId('cartQty').textContent;
		expect(element).toMatch(/0/);
	});

	test('renders home page on initial load', () => {
		render(<App />);
		expect(screen.getByRole('heading').textContent).toMatch(
			/chopping prices on what you want/i
		);
	});

	test('does not render empty cart on initial load', () => {
		render(<App />);
		expect(screen.getByRole('heading').textContent).not.toMatch(
			/your cart is empty/i
		);
	});

	test('snapshot test for app component', () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	test('click on cta button loads catalog', async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole('button', { name: 'Shop Now!' });

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(
			/loading products.../i
		);
	});
	test('click on catalog button loads catalog', async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole('link', { name: 'Catalog' });

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(
			/loading products.../i
		);
	});

	test('click on cart icon loads cart', async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole('link', { name: 'Shopping Cart Icon' });

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(
			/your cart is empty!/i
		);
	});
	test('click on "the Shop" texts stays on home page', async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole('link', { name: 'the Shop' });

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(
			/Chopping prices on what you want!/i
		);
	});
});
