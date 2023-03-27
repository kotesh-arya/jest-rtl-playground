import { render, screen } from '@testing-library/react';
import Application from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);
    //---------Querying/Finding Elements using getByRole Method------------------ [1]

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

    //---------Querying/Findind Elements using getByPlaceholderText Method------------------ [2]

    const placeholderElement = screen.getByPlaceholderText('Fullname');
    expect(placeholderElement).toBeInTheDocument();

    //---------Querying/Findind Elements using getByText Method------------------ [3]

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    //---------Querying/Findind Elements using getByLabelText Method------------------- [4]
    const nameElement3 = screen.getByLabelText('Name');
    expect(nameElement3).toBeInTheDocument();

    //---------Querying/Findind Elements using getByDisplayValue Method------------------- [5]

    const nameElement4 = screen.getByDisplayValue('kotesh');
    expect(nameElement4).toBeInTheDocument();

    //---------Querying/Findind Elements using getByAltText Method------------------- [6]
    // This query method returns the element that has the alt text passed into this method
    // Example elements which will covered by this method are :- image, input, Aria, Custom HTML elements
    const imageElement = screen.getByAltText('human-profile');
    expect(imageElement).toBeInTheDocument();

    //---------Querying/Findind Elements using getByTitle Method------------------- [7]
    // This method gets the element with matching title attribute value
    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    //---------Querying/Findind Elements using getByTestId Method------------------- [8]
    //  This method gets element with matching data-testid attribute :)
    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
  });
});
