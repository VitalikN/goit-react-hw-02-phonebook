import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0 30px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 5px;
`;

export const Button = styled.button`
  text-align: center;

  display: inline-block;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
  text-decoration: none;
  margin: 5px;
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
