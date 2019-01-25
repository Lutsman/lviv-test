import * as React from 'react';

export const ArticlePreview = props => {
    const {article, handleDelete} = props;

    return (
        <div className="article-preview">
            <a href="/">
                {article.content.slice(0, 100)}
                <span className="counter">
                    {article.comments.length}
                </span>
            </a>
            <button
                className="btn-delete"
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
