import * as React from 'react';

export const Header = props => {
    const {btnBack, children} = props;

    return (
        <header>
            <div className="">
                {btnBack && <button className="button-back">Back</button>}
                {children}
            </div>
        </header>
    );
};
