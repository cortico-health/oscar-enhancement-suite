import classNames from 'classnames';
import ASvg from '../Atoms/ASvg';
import DefaultAvatar from "../../../../../resources/icons/avatar.svg";

/* Either it will return the picture or set the avatar. */

const MProfilePicture = ({ avatar = null,className = "" }) => {
    if (!avatar) {
        return (
            <ASvg className={ classNames("tw-rounded-full tw-w-12 tw-h-12 tw-cursor-pointer",className) } src={ DefaultAvatar } />
        )
    }
    return (
        <img className={ classNames("tw-object-cover tw-rounded-full tw-w-12 tw-h-12 tw-cursor-pointer",className) } src={ avatar } alt="" />
    )
}

export default MProfilePicture