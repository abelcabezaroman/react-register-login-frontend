import React from 'react'

export default function HelloUser () {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('##ABEL## >> default >>  HelloUser', user);
    return (<div>
        Hello {user.name}
    </div>);
}
