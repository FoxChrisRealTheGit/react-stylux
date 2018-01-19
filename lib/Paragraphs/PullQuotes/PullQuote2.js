import React, {Component} from 'react';
import '../../css/SuperStyleSheet.css';

export default class PLQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            blockid: props.blockid,
            textid: props.testid,
            citeid: props.citeid,
            blockclassName: props.blockClassName,
            textclassName: props.textClassName,
            citeclassName: props.citeClassName,
        }
    }
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        return (
            <blockquote id={this.state.blockid} className={`pullQuote2 ${this.state.blockClassName}`}>
                <p id={this.state.textid} className={`pullQuote2-text ${this.state.textClassName}`}>{CHILDS[0]}</p>
                <cite id={this.state.citeid} className={this.state.citeClassName}>{CHILDS[1]}</cite>
            </blockquote>
        )
    }
}