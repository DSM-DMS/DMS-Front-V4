import React, { useState, useEffect } from 'react';

const withAnimation = (WrappedComponent) => {
  return ({show, ...props}) => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
      if(show) setRender(true);
    }, [show])

    const handleAnimationEnd = () => {
      if(!show) setRender(false);
    }

    return (
      shouldRender && <WrappedComponent 
          show={show} 
          handleAnimationEnd={handleAnimationEnd}
          {...props}
        />
    )
  }
}

export default withAnimation;