import styled from "styled-components";

export const BgCenterModal = styled.div`
  background-color: var(--black);
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
`;
export const ModalContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(34, 41, 51, 1) 50%,
    rgba(23, 30, 40, 1) 100%
  );
  max-width: 25.625rem;
  height: 26.25rem;
  border-radius: 1rem;
`;
export const ModalContentNoSubmit = styled.div``;

export const NoSubmitCircle = styled.div`
  background-color: rgb(45, 53, 63);
  width: 3.125rem;
  height: 3.125rem;
`;
export const NoSubmitCircleImage = styled.img``;
export const NoSubmitTitle = styled.h1`
  font-size: 1.7rem;
  color: var(--white);
`;
export const NoSubmitText = styled.p`
  color: var(--medium-grey);
  font-size: 0.938rem;
`;

export const NoSubmitButtonContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 3.125rem);
`;
export const NoSubmitButtonChoice = styled.button``;
export const NoSubmitButtonSubmit = styled.button``;

export const ModalContentSubmit = styled.div``;
