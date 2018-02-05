import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class FlatButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            width: props.width,
            height: props.height,
            childs: '',
            fontSize: props.fontSize || '20px',
            color: props.color || '#000000',
            hoverColor: props.hover || 'white',
            hoverBackground: props.hoverBackground || '#000000',
            revColor: props.color || '#000000',
            background: props.background || '#ffffff',
            revBackground: props.background || '#ffffff',
            borderRadius: props.borderRadius || '28px',
            border: props.border || 'solid #000000 2px',
            padding: props.padding || '10px 20px 10px 20px',
            margin: props.margin,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
        }
        this.changeHover = this.changeHover.bind(this);
        this.changeHoverBack = this.changeHoverBack.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    changeHover() {
        let background = this.state.hoverBackground;
        let color = this.state.hoverColor;
        this.setState({ color: color, background: background })
    }
    changeHoverBack() {
        let revbackground = this.state.revBackground;
        let revcolor = this.state.revColor;
        this.setState({ color: revcolor, background: revbackground })
    }

    render() {
        const BUTTONSTYLE = {
            borderRadius: this.state.borderRadius,
            color: this.state.color,
            fontSize: this.state.fontSize,
            background: this.state.background,
            padding: this.state.padding,
            border: this.state.border,
            cursor: 'pointer',
            animationIterationCount: this.state.animationIterationCount,
            animationTimingFunction: this.state.animationTimingFunction,
            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            transformOrigin: this.state.transformOrigin,
            animationFillMode: this.state.animationFillMode,
            width:this.state.width,
            height: this.state.height,
        }

        return (
            <button style={BUTTONSTYLE} id={this.state.id} className={this.state.className}
                onClick={this.state.onClick}
                onMouseEnter={this.changeHover}
                onMouseLeave={this.changeHoverBack}
            >{this.state.childs[0]}</button>
        )
    }
}