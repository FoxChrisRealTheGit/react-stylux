import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

export default class HorizontalTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: [],
            animationIterationCount: props.aniCount || 'infinite',
            animationTimingFunction: props.aniTime || 'linear',
            animationName: props.aniName || 'horizontal-ticker',
            animationDuration: props.aniDur || '25s',
            transformOrigin: props.transformOrigin,
            smdis: props.smDis,
            mddis: props.mdDis,
        }
    }
    componentDidMount() {
        let t_item = [];
        const TICKER_ITEM = {
            display: 'inline',
            padding: '0 2em',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            t_item.push(CHILDS[g])
        }
        const TICKERITEM = t_item.map((x, i) => {
            return (
                <div key={i} style={TICKER_ITEM} >{x}</div>
            )
        })
        this.setState({
            slide1: TICKERITEM
        })
    }
    render() {
        const TICKERWRAPPER = {
            width: '100%',
            overflow: 'hidden',
            paddingLeft: '100%',
            display: 'flex',
        }
        const horizontal_ticker = {
            Display: 'relative',
            lineHeight: '4rem',
            whiteSpace: 'nowrap',
            paddingRight: '100%',
            animationIterationCount: this.state.animationIterationCount,
            animationTimingFunction: this.state.animationTimingFunction,
            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            transformOrigin: this.state.transformOrigin,
        }
        return (
            <div style={TICKERWRAPPER}>
                <div style={horizontal_ticker}>
                    {this.state.slide1}
                </div>
            </div>
        )
    }
}