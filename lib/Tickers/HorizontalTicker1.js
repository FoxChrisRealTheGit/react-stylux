import React, {Component} from 'react';
import './css/SuperStyleSheet.css';

export default class HorizontalTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: [],
        }
    }
    componentDidMount() {
        let t_item = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            t_item.push(CHILDS[g])
        }
        this.setState({
            slide1: t_item
        })
    }
    render() {
        const TICKERWRAPPER = {
            width: '100%',
            overflow: 'hidden',
            paddingLeft: '100%',
            display: 'flex',
        }
        const TICKER_ITEM = {
            display: 'flex',
            padding: '0 2em',

        }
        const HORIZONTALTICKER2 = {
            paddingLeft: '50%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        const TICKERITEM = this.state.slide1.map((x, i) => {
            return (
                <div key={i} style={TICKER_ITEM} >{x}</div>
            )
        })
        return (
            <div style={TICKERWRAPPER}>
                <div className="horizontal-ticker">
                    {TICKERITEM}
                </div>
            </div>
        )
    }
}