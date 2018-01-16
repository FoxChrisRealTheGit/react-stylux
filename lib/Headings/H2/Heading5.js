import React, {Component} from 'react';

export default class Heading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{CHILDS[0]}</h2>
        )
    }
}