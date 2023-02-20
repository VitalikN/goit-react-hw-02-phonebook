import React from 'react';

import { List, Item, Button } from './Contacts.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              видалити
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};
