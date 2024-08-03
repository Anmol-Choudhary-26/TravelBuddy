import Main from '../page/main';
import React from 'react';
import Mobilemain from '../page/mobilemain';


const MyComponent = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return width < breakpoint ? <Mobilemain /> : <Main />;
  }

  export default MyComponent;