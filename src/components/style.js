import styled from "styled-components";

export const Container = styled.div `
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 16px;
  border: 1px solid var(--black);
  color: var(--black);

  button {
    margin-top: 80px;
    align-self: flex-end;
  }
`;