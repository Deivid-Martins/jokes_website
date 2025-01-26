import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color:rgb(25, 25, 25);
  color:#d66761;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  align-items: center;

  max-width: 2800px;
  margin: 0 auto;

  & > a {
    margin-left: 2rem;
    padding: 0.25rem;
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;

    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      display: block;
    }
  }

  @media (max-width: 500px) {
    a {
      margin-left: 0;
    }
  }
`;

export const HeaderLinksContainer = styled.div`
  a {
    text-decoration: none;
    padding: 0.50rem 0.75rem;
    border-radius: 6px;
    margin-right: 2rem;
    font-weight: bold;
    color: #ededed;
    border: 1px solid rgb(97, 161, 214);
    transition: background-color 0.2s;
    
    &:hover {
      background-color: rgb(97, 161, 214);
    }
  }

  @media (max-width: 500px) {
    a {
      margin-right: 0;
    }
  }
`;