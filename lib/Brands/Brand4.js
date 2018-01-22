import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import RectangleImage from '../Images/RectangleImage';

export default class Brand4 extends Component {
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
                <RectangleImage>
                    {CHILDS[0]}
                    logo
                </RectangleImage>
            </section>
        )
    }
}