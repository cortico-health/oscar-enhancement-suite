import { Link } from 'preact-router/match';
import ASvg from '../atoms/a-svg';

const MNavItem = ({
    activeClassName = "",
    className = "mx-auto p-3 rounded-full",
    icon = "",
    svgClass = "",
    ...props
}) => {

    return (
        <Link
            activeClassName={ activeClassName }
            className={ className }
            { ...props }
        >
            <ASvg className={ svgClass } src={ icon } />
        </Link>
    )
}

export default MNavItem