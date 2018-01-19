import React, {Component} from 'react';
import '../css/reset.css'
import '../css/SuperStyleSheet.css';

/* Start of Tall Rounded Rectangle Image */
export default class TallRoundedRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const TALLROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={TALLROUNDEDRECTANGLEIMG} id={this.state.id} className={`tallrecimg-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}
/* End of Tall Rounded Rectangle Iage */