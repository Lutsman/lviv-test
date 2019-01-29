import * as React from 'react';

import {Avatar} from "./Avatar";

export const Comment = props => {
    const {comment, handleDelete} = props;

    return (
        <div className="comment-item">
            <div className="comment-avatar">
                <Avatar user={comment.user} />
            </div>
            <div className="comment-content">
                <p>{comment.text}</p>
                <button
                    className="button-delete"
                    onClick={handleDelete}>
                    <i className="fa fa-times-circle" aria-hidden="true"/>
                </button>
            </div>
        </div>
    );
};
