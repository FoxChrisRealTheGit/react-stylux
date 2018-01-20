import React, { Component } from 'react';
import '../css/reset.css'
/* Start of Holder 1 Component */
export default class Holder1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            block1Direction: props.block1direction || 'row',
            block1: props.block1 || '1',
            block1BorderLeft: props.b1BLeft,
            block1BorderRight: props.b1BRight,
            block1BorderTop: props.b1BTop,
            block1BorderBottom: props.b1BBottom,
            block1Border: props.b1Border,
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            block2BorderLeft: props.b2BLeft,
            block2BorderRight: props.b2BRight,
            block2BorderTop: props.b2BTop,
            block2BorderBottom: props.b2BBottom,
            block2Border: props.b2Border,
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
        }
    }

    render() {
        const holderstyles = {
            width: '100%',
            display: this.state.display,
            flexDirection: this.state.direction,
            flexWrap: 'wrap',
            background: this.state.text,
            justifyContent: this.state.alignBlocks,
        };
        const block1styles = {
            display: 'flex',
            flex: this.state.block1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock1,
            borderLeft: this.state.block1BorderLeft,
            borderRight: this.state.block1BorderRight,
            borderTop: this.state.block1BorderTop,
            borderBottom: this.state.block1BorderBottom,
            border: this.state.b1Border,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            borderLeft: this.state.block2BorderLeft,
            borderRight: this.state.block2BorderRight,
            borderTop: this.state.block2BorderTop,
            borderBottom: this.state.block2BorderBottom,
            border: this.state.b2Border,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={holderstyles}>
                <div style={block1styles}>{childs[0] || <div />}</div>
                <div style={block2styles}>{childs[1] || <div />}</div>
            </section>
        )
    }
}