import React, {Component} from 'react';
import '../css/reset.css'
import '../css/SuperStyleSheet.css';

/* Start of Square Images */
export default class SquareImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}

/* End of Square Images */