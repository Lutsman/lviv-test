import * as React from 'react';

import {Avatar} from "./Avatar";

export const Comment = props => {
    const {comment, handleDelete} = props;

    return (
        <div className="comment-item">
            <Avatar user={comment.user} />
            <p>{comment.text}</p>
            <button
                className="button-delete"
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
