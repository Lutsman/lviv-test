import * as React from 'react';

import {ButtonBack} from "./ButtonBack";

export const Header = props => {
    const {btnBack, children} = props;

    return (
        <header>
            <div className="">
                {btnBack && <ButtonBack>Back</ButtonBack>}
                {children}
            </div>
        </header>
    );
};
