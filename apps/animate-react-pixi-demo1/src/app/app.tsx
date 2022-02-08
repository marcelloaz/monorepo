import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const StyledApp = styled.div`
background-color: #01d17a;
flex-direction: column;
height: 10vh;
min-height : 98vh;
max-height: 100%;
width: 200;
margin: 20;
justify-content: space-between;

`;

const Button = styled.a`

`;


export function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });


  return (<>
    <StyledApp>
      <>

      <div >Hello</div>
      {/* <NxWelcome title="animate-react-pixi-demo1" /> */}
      </>

    </StyledApp>

    </>

  );
}

export default App;
