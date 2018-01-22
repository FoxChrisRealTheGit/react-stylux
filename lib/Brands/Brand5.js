import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Brand5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
        }
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
            </section>
        )
    }
}