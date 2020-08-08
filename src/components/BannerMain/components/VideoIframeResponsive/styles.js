import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative; /* ele vai fazer com q a gente consiga movimentar o obj na tela*/
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  } 
`;

export const ResponsiveIframe = styled.iframe`
  bottom: 0;
  height: 100%; 
  left: 0;
  position: absolute; /*pega a referencia dele de posicionamento do pai mais proximo q tem position relative ou absolute*/
  right: 0;
  top: 0;
  width: 100%;
  /*desde q nosso pai tenha algum tamanho denifido, esse height 100% ja vai aparecer*/ 
`;