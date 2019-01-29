import * as React from 'react';

export const Avatar = props => {
    const {user} = props;

    return (
        <div className="avatar">
            <div className="image-wrapper">
                <i className="fa fa-user-circle" aria-hidden="true"/>
            </div>
            <h6>{user}</h6>
        </div>
    );
};
