import React, { Component } from 'react';
import '../css/reset.css'

export default class Container2 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px 0',  
        }
    }
    render() {
        const containerStyle ={
            display: this.state.display.display,
            flexDirection: this.state.direction,
        }
        const block1style ={
            flex: this.state.block1,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock1,
            justifyContent: this.state.justifyBlock1,
            margin: this.state.margin,
        }
        const block2style ={
            flex: this.state.block2,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            justifyContent: this.state.justifyBlock2,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
                <div style={block1style}>{childs[0] || <div />}</div>
                <div style={block2style}>{childs[1] || <div />}</div>
            </section>
        )
    }
}