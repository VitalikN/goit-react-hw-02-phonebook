import React from 'react';
import css from './Contacts.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
