import { render, screen } from '@testing-library/react';
import Application from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    //---------Querying Elements using getByRole Method------------------

    // Querying different elements which fall under same role using the getByRole Options object

    // using name option
    const pageHeading = screen.getByRole('heading', {
      name: 'Job Application Form',
    });
    expect(pageHeading).toBeInTheDocument();
    const formHeading = screen.getByRole('heading', {
      name: 'Section 1',
    });
    expect(formHeading).toBeInTheDocument();

    // Using level option especially for headings

    const headingOne = screen.getByRole('heading', {
      level: 1,
    });
    expect(headingOne).toBeInTheDocument();
    const headingTwo = screen.getByRole('heading', {
      level: 2,
    });
    expect(headingTwo).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
