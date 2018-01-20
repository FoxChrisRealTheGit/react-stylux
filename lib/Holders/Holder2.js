import React, { Component } from 'react';
import '../css/reset.css'

/* Start of Holder 2 Component */
export default class Holder2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
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
            block3: props.block3 || '1',
            block3BorderLeft: props.b3BLeft,
            block3BorderRight: props.b3BRight,
            block3BorderTop: props.b3BTop,
            block3BorderBottom: props.b3BBottom,
            block3Border: props.b3Border,
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
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
            borderLeft: this.state.block1BorderLeft,
            borderRight: this.state.block1BorderRight,
            borderTop: this.state.block1BorderTop,
            borderBottom: this.state.block1BorderBottom,
            border: this.state.b1Border,
            alignItems: this.state.alignBlock1,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderLeft: this.state.block2BorderLeft,
            borderRight: this.state.block2BorderRight,
            borderTop: this.state.block2BorderTop,
            borderBottom: this.state.block2BorderBottom,
            border: this.state.b2Border,
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderLeft: this.state.block3BorderLeft,
            borderRight: this.state.block3BorderRight,
            borderTop: this.state.block3BorderTop,
            borderBottom: this.state.block3BorderBottom,
            border: this.state.b3Border,
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={holderstyles}>
                <div style={block1styles}>{childs[0] || <div />}</div>
                <div style={block2styles}>{childs[1] || <div />}</div>
                <div style={block3styles}>{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 2 Component */