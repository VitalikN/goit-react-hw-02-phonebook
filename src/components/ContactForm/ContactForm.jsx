import React, { Component } from 'react';
import shortid from 'shortid';
import { Form, Container, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, nameInputId, handleChange, numberInputId } = this;
    const { name, number } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <Container>
          <Label htmlFor={nameInputId}>
            Name
            <Input
              value={name}
              onChange={handleChange}
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={numberInputId}>
            Number
            <Input
              id={numberInputId}
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </Container>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
