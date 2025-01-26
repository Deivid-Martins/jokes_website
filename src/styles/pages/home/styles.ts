import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 5.375rem);
  flex-direction: column;
  background-color: #292929;

  & > h2 {
    background-color:rgb(30, 30, 30);
    padding: 1rem;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
`;