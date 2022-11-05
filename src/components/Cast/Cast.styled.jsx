import styled from 'styled-components';

export const CastList = styled.ul`
  margin: 30px;
  max-width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, calc((100% - 30px) / 3));
`;
export const ActorPicture = styled.img`
  height: 80%;
  border-radius: 30px;
  width: 100%;
`;
