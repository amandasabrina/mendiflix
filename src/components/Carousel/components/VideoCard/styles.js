import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  width: 298px;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
  /* 
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  } */
`;
