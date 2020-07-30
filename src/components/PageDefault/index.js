import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer'
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

//<> = React.Fragment

//export default function PageDefault(props) { abaixo usando o destruct é uma forma mais prática
export default function PageDefault({children}) {
    return (
      <> 
        <Menu/>
          <Main>
              {children}
          </Main>
        <Footer />
      </>
    );
}