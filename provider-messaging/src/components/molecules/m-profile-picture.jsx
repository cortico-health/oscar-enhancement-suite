import classNames from 'classnames'
import React from 'react'
import ASvg from '../atoms/a-svg'

/* Either it will return the picture or set the avatar. */

const MProfilePicture = ({ avatar,className = "" }) => {
    if (!avatar) {
        return (
            <div className={ classNames(
                "overflow-hidden bg-gray-200 rounded-full",
                className
            ) }>
                <ASvg src="user-circle" />
            </div>
        )
    }
    return (
        <img className={ classNames("object-cover rounded-full",className) } src={ avatar } alt="" />
    )
}

export default MProfilePicture