import React, {Component} from 'react';
import '../css/SuperStyleSheet.css';

/* Start of Rounded Images */
export default class RoundedImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const ROUNDEDIMG = {
            borderRadius: '30%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={ROUNDEDIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}

/* End of Rounded Images */