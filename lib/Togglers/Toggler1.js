import React, {Component} from 'react';

export default class Toggler1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            position: props.position || 'absolute',
            width: props.width || '100px',
            height: props.height || '100vh',
            top: props.top || '0',
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
            left: props.left,
            right: props.right,
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
            display: this.state.show ? 'inline' : 'none',
            width: this.state.width,
            height: this.state.height,
            position: this.state.position,
            background: this.state.background,
            right: this.state.right,
            left: this.state.left,
            top: this.state.top,
        }
        const CLICKBOX = {
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