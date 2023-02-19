import React, { Component } from 'react';
import { ContactList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import contactList from './contacts.json';

export class App extends Component {
  state = {
    contacts: contactList,
  };
  addContact = text => {
    console.log(text);
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
