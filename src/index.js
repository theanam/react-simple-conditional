import React, { Component } from 'react'
export default class Conditional extends Component {
    render() {
        const { children, condition, ...restOfProps } = this.props;
        if (!this.props.condition) return null;
        return (
            <div {...restOfProps}>
                {this.props.children}
            </div>
        )
    }
}
