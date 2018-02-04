import React, { Component } from 'react';
import '../../css/reset.css';
import '../../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class H24 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            colorRev: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            smFontSize: props.smSize || '3em',
            mdFontSize: props.mdSize || '4em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime || 'linear',
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor || 'lightgray',
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = StyleSheet.create({
            heading: {
                width: this.state.width,
                height: this.state.height,
                color: this.state.color,
                textShadow: this.state.textShadow,
                borderLeft: this.state.bLeft,
                borderRight: this.state.bRight,
                borderTop: this.state.bTop,
                borderBottom: this.state.bBottom,
                border: this.state.border,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                textAlign: this.state.textAlign,
                padding: this.state.padding,
                margin: this.state.margin,
                overflowX: 'hidden',
                overflowY: 'hidden',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                heading: {
                    display: this.state.smDis,
                    color: this.state.color,
                    fontSize: this.state.smFontSize
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                heading: {
                    display: this.state.mdDis,
                    color: this.state.color,
                    fontSize: this.state.mdFontSize
                }
            },
        })
        return (
            <h2 style={HEADING.heading} id={this.state.id} className={this.state.className}
                onMouseEnter={() => this.setState({ color: HEADING.hoverStyle.color })}
                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{this.state.childs[0]}</h2>
        )
    }
}