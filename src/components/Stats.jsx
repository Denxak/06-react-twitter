import React from 'react'
import Avatar from './Avatar'
import { useDispatch, useSelector } from 'react-redux';
import { changeStat } from '../actions/statsAction';

const Stats = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const stats = useSelector(state => state.stats);
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => { dispatch(changeStat('followers', 1)); }}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStat('followers', -1));
                    }}>
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => { dispatch(changeStat('following', 1)); }}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStat('following', -1));
                    }}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}

export default Stats