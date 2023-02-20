import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;

  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.189),
    inset 0 0 0 60px rgba(0, 0, 0, 0.189), 0 1px rgba(46, 186, 104, 0.08);

  transition: 0.5s linear;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(133, 23, 23, 0.08);
  }
`;
export const Button = styled.button`
  text-align: center;

  display: inline-block;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  text-decoration: none;
  margin: 10px;
  color: white;
  background: #7ca78c;

  box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
  transition: 0.3s;

  &:hover {
    background: #8ebe9f;
    box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: scale(1.15);
  }
`;
