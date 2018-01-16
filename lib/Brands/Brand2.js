import React, { Component } from 'react';
import RectangleImage from '../../Images/RectangleImage';

export default class Brand2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
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
                <a href={this.state.link}>
                    <RectangleImage
                        size='exsm'>
                        {CHILDS[0]}
                        logo
                    </RectangleImage>
                </a>
            </section>
        )
    }
}