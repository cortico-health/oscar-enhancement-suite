import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
const loadComponent = (src) => import(`../../assets/svg/${src}.svg`);
// import { define } from 'preactement';

const ASvg = ({src, ...props}) => {
  const [ renderComponent, setRenderComponent] = useState(undefined);

  useEffect(() => {
    loadComponent(src).then( data => {
      setRenderComponent(<data.ReactComponent {...props}></data.ReactComponent>)
    })
  },[]);

  return (
      <>
      {
        renderComponent
      }
      </>

  )
}

// export default define('a-svg', () => ASvg, { attributes:['src']});
export default ASvg;