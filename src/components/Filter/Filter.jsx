import React from 'react';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ onValue, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={onValue} onChange={onChange} />
  </Label>
);
