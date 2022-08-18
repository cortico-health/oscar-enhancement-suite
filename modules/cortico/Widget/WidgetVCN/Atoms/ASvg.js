import { h } from 'preact';

const ASvg = ({ src,...props }) => {

    return (
        <img src={ src } { ...props } />
    )
}

// export default define('a-svg', () => ASvg, { attributes:['src']});
export default ASvg;