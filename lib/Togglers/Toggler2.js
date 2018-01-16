import React, {Component} from 'react';

export default class Toggler2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler2',
            position: props.position,
            padding: props.padding,
            offset: props.offset + '%',
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const TOGGLERBOX = {
            display: this.state.show ? 'flex' : 'none',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            padding: this.state.padding,
            margin: `0 0 0 ${this.state.offset}`,
            overflow: 'hidden',
        }
        const CLICKBOX = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div id={this.state.mainid} className={this.state.mainClassName}>
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {CHILDS}
                </div>
            </div>
        )
    }
}