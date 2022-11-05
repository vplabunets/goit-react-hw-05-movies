import styled from 'styled-components';

export const MovieForm = styled.form`
  margin: 10px 0 10px 10px;
`;
export const MovieInput = styled.input`
  height: 34px;
`;
export const Button = styled.button`
  margin-left: 10px;
  width: 110px;
  height: 34px;
  font-size: 12px;
  line-height: 1.33px;
  border-radius: 5px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: black;

  &:hover,
  &:focus {
    background-color: rgb(220, 71, 11);
    color: #f7f7f7;
  }
`;
export const ByNameMovieList = styled.ul`
  padding: 10px;
`;
