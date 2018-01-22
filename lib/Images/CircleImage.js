import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

export default class CircleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const CIRCLEIMG = {
            borderRadius: "100%",
            overflowX: 'hidden',
            overflowY: 'hidden'
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={CIRCLEIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}