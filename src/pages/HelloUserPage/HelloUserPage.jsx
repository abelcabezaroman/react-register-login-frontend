import React from 'react'

export default function HelloUserPage () {
    const user = JSON.parse(localStorage.getItem('user'));

    return (<div>
        Hello {user.name}
    </div>);
}
