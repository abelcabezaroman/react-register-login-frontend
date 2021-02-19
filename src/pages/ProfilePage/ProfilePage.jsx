import React from 'react'
import { getCookieUtil } from '../../shared/utils/getCookieUtil';

export default function ProfilePage () {
    const stringUser = getCookieUtil('user');
    const user = JSON.parse(stringUser ? stringUser : '{}');

    return (<div>
        Hello {user.name}
    </div>);
}
