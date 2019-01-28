import * as React from 'react';
import {Link} from 'react-router-dom';

export const ArticlePreview = props => {
    const {article, handleDelete} = props;

    return (
        <div className="article-preview">
            <Link to={`/articles/single/${article.id}`}>
                {article.title}
                <span className="counter">
                    {article.comments ? article.comments.length : 0}
                </span>
            </Link>
            <button
                className="button-delete"
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
