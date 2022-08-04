import { useEffect, useState } from 'preact/hooks';

const loadComponent = (src) => import(`../../assets/svg/${src}.svg`);

const ASvg = ({src, ...props}) => {
  const [renderComponent, setRenderComponent] = useState(undefined);

  useEffect(() => {
    console.log(loadComponent("avatar").then(data => data));
    loadComponent(src).then(data => {
      setRenderComponent(<data.ReactComponent {...props}></data.ReactComponent>)
    })
  }, []);

  return (
    renderComponent
  )
}

export default ASvg;