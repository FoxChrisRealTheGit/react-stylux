import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import SquareImage from '../Images/SquareImage';

export default class Brand1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
        }
    }
    render() {
        const BRAND = {
            display: this.state.display,
            flexDirection: this.state.direction,
            //width: '15%',
            alignItems: 'center',
        }
        const BRAND_NAME = {
            display: 'flex',
            fontWeight: '900',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={BRAND}>
                <SquareImage
                    size='tn'>
                    {CHILDS[0]}
                    logo
                    </SquareImage>
                <p style={BRAND_NAME}>{CHILDS[1]}</p>

            </div>
        )
    }
}