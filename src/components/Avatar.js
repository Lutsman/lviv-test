import * as React from 'react';

export const Avatar = props => {
    const {user} = props;

    return (
        <div className="avatar">
            <h3>{user}</h3>
        </div>
    );
};
