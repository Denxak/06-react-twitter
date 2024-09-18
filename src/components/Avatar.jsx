import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../actions/userAction';

const Avatar = ({ size }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url')
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name')
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name} />
    )
}

export default Avatar