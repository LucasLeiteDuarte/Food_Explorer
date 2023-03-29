import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  width: 100%;

  position: sticky;
  top: 0;
  z-index: 999;

  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Content = styled.div`
  display: flex;
  width: 100vh;
  justify-content: space-between;
  align-items: center;

  gap: 32px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Logout = styled.button`
  display: flex;
  align-self: center;

  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 3.2rem;
  }

  > svg:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

export const Search = styled.div`
  align-self: center;

  width: 581px;
  height: 48px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 581px;
    height: 48px;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 216px;
  height: 56px;

  border: none;
  border-radius: 0.5rem;

  gap: 1.1rem;

  font-size: 14px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 0 3rem;
  @media (min-width: 768px) {
    max-width: 21.6rem;
  }
`;
export const ButtonOut = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
