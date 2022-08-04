import classNames from 'classnames'
import React from 'react'
import ASvg from '../atoms/a-svg'

/* Either it will return the picture or set the avatar. */

const MProfilePicture = ({ avatar,className = "" }) => {
    if (!avatar) {
        return (
            <ASvg className={ classNames(className) } src="avatar" />
        )
    }
    return (
        <img className={ classNames("object-cover rounded-full",className) } src={ avatar } alt="" />
    )
}

export default MProfilePicture