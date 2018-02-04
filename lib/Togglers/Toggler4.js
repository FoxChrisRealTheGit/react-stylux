import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Toggler4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <div>
            </div>
        )
    }
}