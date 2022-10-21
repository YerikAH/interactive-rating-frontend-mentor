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
  overflow: auto;
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
  grid-template-columns: repeat(5, 1.4rem);
  gap: 1.5rem;
  justify-content: space-between;
  @media (min-width: 350px) {
    grid-template-columns: repeat(5, 1.8rem);
  }
  @media (min-width: 370px) {
    grid-template-columns: repeat(5, 2rem);
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(5, 3.125rem);
  }
`;
export const NoSubmitButtonChoice = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 255px;
  color: var(--medium-grey);
  background-color: rgb(45, 53, 63);
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  display: flex;
  transition: 0.3s;
  @media (min-width: 350px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (min-width: 350px) {
    width: 2.8rem;
    height: 2.8rem;
  }
  @media (min-width: 500px) {
    width: 3.125rem;
    height: 3.125rem;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }
`;
export const NoSubmitButtonChoiceActive = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 255px;
  color: var(--medium-grey);
  background-color: var(--light-grey);
  color: var(--white);
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  border: none;

  @media (min-width: 350px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (min-width: 350px) {
    width: 2.8rem;
    height: 2.8rem;
  }
  @media (min-width: 500px) {
    width: 3.125rem;
    height: 3.125rem;
  }
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

export const SubmitContentResponsiveImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
export const SubmitContentImage = styled.img`
  width: 100%;
  max-width: 10.125rem;
`;
export const SubmitContentValueOfFather = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
export const SubmitContentValueOf = styled.span`
  background-color: rgb(45, 53, 63);
  color: var(--orange);
  border-radius: 255px;
  padding: 0.4rem 0.7rem;
  font-size: 0.89rem;
`;

export const SubmitContentTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  color: var(--white);
  margin: 1.5rem 0 0 0;
  @media (min-width: 500px) {
    margin: 2rem 0 0 0;
  }
`;
export const SubmitContentText = styled.p`
  text-align: center;
  color: var(--medium-grey);
  line-height: 25px;
  margin: 0.9rem 0 0 0;
  font-size: 0.9rem;
`;
