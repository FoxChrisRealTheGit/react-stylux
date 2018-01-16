import React, { Component } from 'react';
import SquareImage from '../Images/SquareImage';

export default class Brand3 extends Component {
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
                    <SquareImage>
                        {CHILDS[0]}
                        logo
                    </SquareImage>
                </a>
            </section>
        )
    }
}