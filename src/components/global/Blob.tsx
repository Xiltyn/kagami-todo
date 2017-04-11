import * as React from 'react';

export default class Blob extends React.Component<any, any> {
    render() {
        return(
            <div className="blob">
                <span unselectable={true}>
                    {this.props.children}
                </span>
            </div>
        )
    }
}