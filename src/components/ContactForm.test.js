import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
    render(<ContactForm />)
});

test('renders the contact form header', ()=> {
    render(<ContactForm />)
    const header = screen.getByText(/contact form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Contact Form")

});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<ContactForm />)
    const firstName = screen.getByLabelText(/first name/i);
    userEvent.type(firstName, "abcd")
    const error = await screen.findByTestId("error")
    expect(error).toBeInTheDocument();
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<ContactForm />)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const eMail = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)
    userEvent.type(firstName, "")
    userEvent.type(lastName, "")
    userEvent.type(eMail, "")



});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<ContactForm />)
    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "validemail@email.com");
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<ContactForm/>);
    const emailInput = screen.getByLabelText(/email/i)
    userEvent.type(emailInput, "invalidemail")
    const error = await screen.findByTestId("error")
    expect(error).toBeInTheDocument()
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {

});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {

});

test('renders all fields text when all fields are submitted.', async () => {

});