import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Catalog from './Catalog';
import Layout from './Layout';
import App from '../App';

describe('app component', () => {
	test('snapshot test for Catalog component', () => {
		const { container } = render(
			<App>
				<Layout>
					<Catalog />
				</Layout>
			</App>
		);
		expect(container).toMatchSnapshot();
	});
});
