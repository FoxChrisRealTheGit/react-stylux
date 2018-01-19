import React, {Component} from 'react';
import '../css/reset.css'
import '../css/SuperStyleSheet.css';

/* Start of Figure Blocks */
export default class Figure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            figid: props.figid,
            figCapid: props.figCapid,
            figClassName: props.figClassName,
            figCapClassName: props.figCapClassName,
        }
    }
    render() {
        const CAPTION = {
            padding: '10px',
            color: 'gray',
            textAlign: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <figure id={this.state.figid} className={this.state.figClassName}>
                {CHILDS[0]}
                <figcaption style={CAPTION} id={this.state.figCapid} className={this.state.figCapClassName}>
                    {CHILDS[1]}
                </figcaption>
            </figure>
        )
    }
}
