import React, {Component} from 'react';
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';
import StyleSheet from 'nestingstyles';
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
            childs: '',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
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
            <blockquote id={this.state.blockid} className={`pullQuote2 ${this.state.blockClassName}`}>
                <p id={this.state.textid} className={`pullQuote2-text ${this.state.textClassName}`}>{this.state.childs[0]}</p>
                <cite id={this.state.citeid} className={this.state.citeClassName}>{this.state.childs[1]}</cite>
            </blockquote>
        )
    }
}