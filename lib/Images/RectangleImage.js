import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

/* Start of Regular Rectangle Image */
export default class RectangleImage extends Component {
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
        const image = {
            margin: '0 auto',
        }
        return (
            <img style={image} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Regular Rectangle Image */