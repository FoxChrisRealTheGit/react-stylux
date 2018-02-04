import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/animations.css';

export default class Modul2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: [],
            show: false,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
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
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <div>

                </div>
            </div>
        )
    }
}