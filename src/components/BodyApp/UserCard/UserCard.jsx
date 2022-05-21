import React from 'react';

import UserContacts from './UserContacts';

import followers from '../../../images/followers.svg';
import following from '../../../images/following.svg';
import axios from 'axios';

const UserCard = (props) => {
    const [userInfo, setUserInfo] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://api.github.com/users/gaearon').then(res => setUserInfo(res.data));
    }, []);

    //console.log(userInfo)

    return(
        <div className='user-card'>
            <div className="user-cover">
                <img src={userInfo.avatar_url} alt="cover" />
            </div>
            <div className="user-info">
                <p className="name">
                    {userInfo.name}
                </p>
                <a className='user-link' href={userInfo.html_url} target='_blank'>{userInfo.login}</a>
                <div className="contacts">
                    <UserContacts image={followers} quantity={userInfo.followers} word={'followers'} />
                    <UserContacts image={following} quantity={userInfo.following} word={'following'}/>
                </div>
            </div>
        </div>
    )
}

export default UserCard;