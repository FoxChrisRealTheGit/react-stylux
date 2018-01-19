import React, {Component} from 'react';
import '../css/reset.css'

/* Start of Holder 5 Component */
export default class Holder5 extends Component {
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
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 5 Component */