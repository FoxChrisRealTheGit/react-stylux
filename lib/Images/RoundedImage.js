import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

/* Start of Rounded Images */
export default class RoundedImage extends Component {
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
        const ROUNDEDIMG = {
            borderRadius: '30%',
        }
        return (
            <img style={ROUNDEDIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Rounded Images */