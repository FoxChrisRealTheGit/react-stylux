import React, { Component } from 'react';
import '../css/reset.css'

export default class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignBlock1: props.alignBlock1 || 'center',
            block1: props.block1 || '1',
            justifyBlock1: props.justifyBlock1 || 'center',
            textColor: props.textColor || 'yellow',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const containerStyle = {
            display: this.state.display.display,
            flexDirection: this.state.direction,
        }
        const block1style = {
            flex: this.state.block1,
            background: this.state.background,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock1,
            justifyContent: this.state.justifyBlock1,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
                <div style={block1style}>{childs[0] || <div />}</div>
            </section>
        )
    }
}