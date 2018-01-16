import React, {Component} from 'react';
import '../css/SuperStyleSheet.css';

/* Start of Rounded Rectangle Image */
export default class RoundedRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const ROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={ROUNDEDRECTANGLEIMG} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}

/* End of Rounded Rectangle Image */