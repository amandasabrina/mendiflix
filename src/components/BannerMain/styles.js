import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover; /*usar td espaço disponivel q tiver*/
  color: white;
  height: 80vh;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
  /* 
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  } */
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  } 
  /* 
  position: relative;
  z-index: 10;
  */
`;

ContentAreaContainer.Item = styled.div`
  margin-bottom: 50px;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`    
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 32px;
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
    border-radius: 10px;
    
    background-color: rgba(0,0,0,0.5);
    color: var(--white);
    font-weight: 400;
    padding: 16px;
  } 
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`

  background-color: var(--white);
  border: 0;
  border-radius: 4px;
  color: var(--black);
  cursor: pointer;
  display: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 16px 24px;

  @media (max-width: 800px) {
    display: block;
  } 
`;

