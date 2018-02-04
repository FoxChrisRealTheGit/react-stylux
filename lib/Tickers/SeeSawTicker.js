import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

export default class SeeSawTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: [],
            smdis: props.smDis,
            mddis: props.mdDis,
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