import * as React from 'react';

export class ButtonBack extends React.Component {
    static contextTypes = {
        router: () => null,
    };

    render() {
        const {children} = this.props;

        return (
            <button
                className="button-back"
                onClick={this.handleClick}>
                {children}
            </button>
        );
    }

    handleClick = () => this.context.router.history.goBack();
}
