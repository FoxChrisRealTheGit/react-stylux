import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

/* Start of Rounded Rectangle Image */
export default class RoundedRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const ROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        return (
            <img style={ROUNDEDRECTANGLEIMG} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Rounded Rectangle Image */