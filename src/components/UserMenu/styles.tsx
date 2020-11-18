import styled from "styled-components";

export const Menu = styled.div`
  width: 25vw;
  min-height: 25vh;
  background-color: var(--white);
  border-radius: 2px;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  grid-gap: 2vh;
  & > input,
  button {
    height: 5vh;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 1px;
  }
  @media screen and (max-width: 500px) {
    width: 80vw;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const Input = styled.input``;
export const Button = styled.button`
  background-color: var(--main);
  color: var(--white);
  cursor: pointer;
`;
