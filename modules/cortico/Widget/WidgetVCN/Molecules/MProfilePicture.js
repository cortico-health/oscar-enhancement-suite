import classNames from 'classnames';
import ASvg from '../Atoms/ASvg';
import DefaultAvatar from "../../../../../resources/icons/avatar.svg";

/* Either it will return the picture or set the avatar. */

const MProfilePicture = ({ avatar,className = "" }) => {
    if (!avatar) {
        return (
            <ASvg className={ className } src={ DefaultAvatar } />
        )
    }
    return (
        <img className={ classNames("object-cover rounded-full",className) } src={ avatar } alt="" />
    )
}

export default MProfilePicture