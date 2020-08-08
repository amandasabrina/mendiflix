import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 50px;
`;


function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />                
                    {children}
                </Main>
            <Footer />                                  
        </>
    );
}

export default PageDefault;