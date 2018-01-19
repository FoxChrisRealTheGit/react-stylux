import React, {Component} from 'react';
import '../css/reset.css'
import '../css/SuperStyleSheet.css';

/* Start of Oval Images */
export default class OvalImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
        }
    }
    render() {
        const OVALIMG = {
            borderRadius: '30%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={OVALIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={CHILDS[0]} alt={CHILDS[1]} />
        )
    }
}
/* End of Oval Images */