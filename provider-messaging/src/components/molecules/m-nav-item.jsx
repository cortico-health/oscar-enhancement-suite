import classNames from 'classnames';
import { createRef } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect,useRef } from 'preact/hooks';
import ASvg from '../atoms/a-svg';

const MNavItem = ({
    activeClassName = "",
    className = "mx-auto p-3 rounded-full",
    icon = "",
    svgClass = "",
    name = "Nav Item",
    ...props
}) => {
    /* NOTE: the id name is temporary, until the tooltip is added */
    return (
        <>
            <Link
                activeClassName={ activeClassName }
                className={ className }
                data-tooltip-target={ `tooltip-${icon}` }
                data-tooltip-placement="right"
                { ...props }
            >
                <ASvg
                    className={ svgClass }
                    src={ icon }
                />
            </Link>

            <div
                id={ `tooltip-${icon}` }
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"

            >
                { name }
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    )
}

export default MNavItem