import React, {Component} from 'react';
import '../../css/reset.css';
import '../../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class H11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font || 'inherit',
            fontSize: props.size || '7em',
            smFontSize: props.smSize || '3.939em',
            mdFontSize: props.mdSize || '5.25em',
            fontWeight: props.fontWeight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            border: props.border,
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            //theme: props.theme || 'inherit',   
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor,
        }
    }
    componentDidMount(nextProps) {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({
            childs: CHILDS
        })
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
            <h1 style={HEADING.heading} id={this.state.id} className={this.state.className}
                onMouseEnter={() => this.setState({ color: HEADING.hoverStyle.color })}
                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{this.state.childs[0]}</h1>
        )
    }
}