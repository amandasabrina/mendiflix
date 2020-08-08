import styled from "styled-components";
 //`` -> tag de template string

//  const Button = styled.button`
//     border: 1px solid var(--white);
//     border-radius: 4px;
//     color: var(--white);
//     font-size: 16px;
//     font-weight: bold;
//     padding: 16px 24px;
//     text-decoration: none;
//     transition: opacity .3s;

//     &:hover, 
//     &:focus {
//         opacity: .5;
//     }

//     @media (max-width: 800px) {
//         background-color: var(--primary);
//         border: 0;
//         border-radius: 0;
//         bottom: 0;
//         color: var(--white);
//         left: 0;
//         outline: 0;
//         position: fixed;
//         right: 0;
//         text-align: center;
//     }
// FEITO PELA MENINA
// `;

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover, 
    &:focus {
        opacity: .5;
    }
`;

export default Button;