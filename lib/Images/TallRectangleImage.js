import React, {Component} from 'react';
import '../css/reset.css'
import '../css/SuperStyleSheet.css';

/* Start of Tall Rectangle Image */
export default class TallRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const image = {
            margin: '0 auto',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={image} id={this.state.id} className={`tallrecimg-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}
/* End of Tall Rectangle Image */