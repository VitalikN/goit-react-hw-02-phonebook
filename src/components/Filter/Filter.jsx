import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ onValue, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={onValue} onChange={onChange} />
  </Label>
);
Filter.prototype = {
  onValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
