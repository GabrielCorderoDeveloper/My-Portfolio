import { render, screen } from '@testing-library/react';
import tests from './test';

describe("All the tests", () => {
    test('Tags should render', () => {
        render(<tests/>);

        expect(screen.getByText('Hi')).toBeDefined();
    })
})