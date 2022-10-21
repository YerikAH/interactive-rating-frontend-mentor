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
  padding: 2.063rem;
`;
export const ModalContentNoSubmit = styled.div``;

export const NoSubmitCircle = styled.div`
  background-color: rgb(45, 53, 63);
  width: 3.125rem;
  height: 3.125rem;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 1rem;
  border-radius: 255px;
  margin-bottom: 2.188rem;
`;
export const NoSubmitCircleImage = styled.img``;
export const NoSubmitTitle = styled.h1`
  font-size: 1.7rem;
  color: var(--white);
`;
export const NoSubmitText = styled.p`
  color: var(--medium-grey);
  font-size: 0.938rem;
  margin: 0.938rem 0 1.625rem 0;
`;

export const NoSubmitButtonContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 3.125rem);
  gap: 1.5rem;
`;
export const NoSubmitButtonChoice = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 255px;
  color: var(--medium-grey);
  background-color: rgb(45, 53, 63);
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  display: flex;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }
`;
export const NoSubmitButtonChoiceActive = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 255px;
  color: var(--medium-grey);
  background-color: var(--light-grey);
  color: var(--white);
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  border: none;
  transition: 0.3s;
`;

export const NoSubmitButtonSubmit = styled.button`
  cursor: pointer;
  border-radius: 255px;
  width: 100%;
  border: none;
  background-color: var(--orange);
  color: var(--white);
  margin-top: 2.188rem;
  padding: 0.93rem;
  transition: 0.3s;
  letter-spacing: 0.15em;
  font-weight: 700;
  &:hover {
    color: var(--orange);
    background-color: var(--white);
  }
`;

export const ModalContentSubmit = styled.div``;
