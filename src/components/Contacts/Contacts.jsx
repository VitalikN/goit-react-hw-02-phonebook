import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

import { List, Item, Chip } from './Contacts.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Chip>
              <FiTrash2 type="button" onClick={() => onDeleteContact(id)} />
            </Chip>
          </Item>
        ))}
      </List>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
