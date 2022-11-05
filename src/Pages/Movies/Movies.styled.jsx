import colors from 'utils/colors';
import styled from 'styled-components';
export const MoviesWrap = styled.div`
  padding: 10px;
`;
export const MovieForm = styled.form`
  margin: 10px 0 10px 10px;
`;
export const MovieInput = styled.input`
  padding-left: 10px;
  height: 34px;
  width: 310px;
  border-radius: 10px;
  border: none;
`;
export const Button = styled.button`
  margin-left: 10px;
  width: 150px;
  height: 34px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color:${colors.maintextc};
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    color: ${colors.accentc}};
  } ;

  &:focus {
    background-color: ${colors.mainbackgroundc};
  }
`;

export const ByNameMovieList = styled.ul`
  padding: 10px;
`;
export const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
`;
