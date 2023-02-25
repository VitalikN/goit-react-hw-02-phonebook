import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import contactList from './contacts.json';
import { Filter } from './Filter/Filter';
import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: contactList,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.state.contacts.filter(
      contact => contact.name === name || contact.number === number
    ).length
      ? alert(`${newContact.name}: ${newContact.number} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  render() {
    const { filter } = this.state;
    const { addContact, onChangeFilter, onFilterContacts, deleteContact } =
      this;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <Title>Contacts</Title>
        <Filter onValue={filter} onChange={onChangeFilter} />
        <ContactList
          contacts={onFilterContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}
