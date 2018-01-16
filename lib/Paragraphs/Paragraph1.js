import React, {Component} from 'react';

export default class Paragraph1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }

        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{CHILDS[0]}</p>
        )
    }
}