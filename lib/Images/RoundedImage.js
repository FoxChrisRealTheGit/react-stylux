import React, { Component } from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
/* Start of Rounded Images */
export default class RoundedImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
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
            hoverShadow: props.hovShadow,
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
        const ROUNDEDIMG = StyleSheet.create({
            roundedimg: {
                borderRadius: '30%',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
            },
            hoverStyle: {
                color: this.state.hoverShadow
            },
            '@media screen and (max-width: 440px)': {
                roundedimg: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                roundedimg: {
                    display: this.state.mdDis,
                }
            },
        })
        return (
            <Fragment>
                <img style={ROUNDEDIMG.roundedimg} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]}
                    onMouseEnter={() => this.setState({ color: ROUNDEDIMG.hoverStyle.color })}
                    onMouseLeave={() => this.setState({ color: this.state.color })} />
            </Fragment>
        )
    }
}