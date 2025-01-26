import styled from "styled-components";

export const JokerContainer = styled.div`
  margin-top: 1rem;

  background-color:rgb(30, 30, 30);

  padding: 5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > section {
    background-color: #ededed;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 32px;
    border-radius: 50%;
  }
`;

export const JokerLineContainer = styled.div`
  background-color: #111;
  padding: 0.5rem 0.75rem;
  max-width: 45ch;

  border-radius: 4px;

  p {
    text-align: center;
  }
`;

export const DeliveryBlock = styled.p`
  color: transparent;
  background-color: aquamarine;
  border-radius: 4px;
  position: relative;
  padding: 0.5rem;

  &::after {
    content: 'hover me';
    position: absolute;
    color: #CC5500;
    font-weight: bold;
    left: 0;
    width: 100%;
  }

  &:hover {
    background-color: transparent;
    color: #ededed;
  }

  &:hover::after {
    display: none;
  }
`;

export const GenerateJokerButton = styled.button`
  padding: 0.75rem 1rem;
  margin: 0 auto;
  background-color: #111;
  color: #ededed;
  border: 1px solid transparent;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);

  border-radius: 6px;

  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: transparent;
    color: #FFF;
    border-color: #111;
    box-shadow: none;
  }
`;