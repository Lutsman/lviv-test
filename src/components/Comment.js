import * as React from 'react';

import {Avatar} from "./Avatar";

export const Comment = props => {
    const {comment} = props;

    return (
        <div className="comment-item">
            <Avatar user={comment.user} />
            <p>{comment.text}</p>
        </div>
    );
};