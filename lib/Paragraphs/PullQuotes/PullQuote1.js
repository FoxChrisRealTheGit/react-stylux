import React, { Component } from 'react';
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';

export default class PLQ1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            blockid: props.blockid,
            textid: props.textid,
            citeid: props.citeid,
            blockClassName: props.blockClassName,
            textClassName: props.textClassName,
            citeClassName: props.citeClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children.split('\\'))
        this.setState({ childs: CHILDS })
    }
    render() {
        return (
            <blockquote id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`}>
                <p id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{this.state.childs[0]}</p>
                <cite id={this.state.citeid} className={this.state.citeClassName}>{this.state.childs[1]}</cite>
            </blockquote>
        )
    }
}