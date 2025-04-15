import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`

//* "const name = obj.name;"
//* "const {name} = obj;"
//* Desestruturação de objetos (especificamente) também! (?)

//"SASS": "Syntactically Awesome Style Sheets", em relação ao "&:disabled {(...)}"
//Propriedades e desestruturação de propriedades, em relação ao "color: ${({ theme }) => theme.COLORS.BACKGROUND_800}"