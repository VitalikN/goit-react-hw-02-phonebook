import React, { Component } from 'react';
import { ContactList } from './Contacts/Contacts';
import contactList from './contacts.json';
export class App extends Component {
  state = {
    contacts: contactList,
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
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
