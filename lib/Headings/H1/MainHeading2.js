import React, {Component} from 'react';
import '../../css/reset.css';

export default class H12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '7em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.setState.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{childs[0]}</h1>
        )
    }
}