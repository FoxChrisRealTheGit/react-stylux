import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class P2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            colorRev: props.color,
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '0.95em',
            smFontSize: props.smSize || '0.95em',
            mdFontSize: props.mdSize || '0.95em',
            lineHeight: props.lineHeight || '1.22em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
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
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverColor: props.hovColor,
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
        const PARAGRAPH = StyleSheet.create({
            paragraph: {
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
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                textAlign: this.state.textAlign,
                padding: this.state.padding,
                margin: this.state.margin,
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                paragraph: {
                    display: this.state.smDis,
                    color: this.state.color,
                    fontSize: this.state.smFontSize
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                paragraph: {
                    display: this.state.mdDis,
                    color: this.state.color,
                    fontSize: this.state.mdFontSize
                }
            },
        })
        return (
            <p style={PARAGRAPH.paragraph} id={this.state.id} className={this.state.className}
                onMouseEnter={() => this.setState({ color: PARAGRAPH.hoverStyle.color })}
                onMouseLeave={() => this.setState({ color: this.state.colorRev })}>{this.state.childs[0]}</p>
        )
    }
}