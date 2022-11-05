import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, calc((100vw - 20px) / 3));
`;
export const ActorPicture = styled.img`
  height: 400px;
  width: 300px;
`;
