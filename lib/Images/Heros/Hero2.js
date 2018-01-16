import React, {Component} from 'react';
import Holder5 from '../../Holders/Holder5';

export default class Hero2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'contain 80%',
            width: props.width || '100%',
            height: props.height || 'inherit',
            bottomBoxWidth: props.bottomBoxWidth || '100%',
            bottomBoxHeight: props.bottomBoxHeight || '25%',
            bottomBoxPadding: props.bottomBoxPadding,
            bottomBoxBackgroundColor: props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)',
            heroid: props.heroid,
            bottomid: props.bottomid,
            heroClassName: props.heroClassName,
            bottomClassName: props.bottomClassName,
        }
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
        const BOTTOMBACKGROUND = {
            backgroundColor: this.state.bottomBoxBackgroundColor,
            width: this.state.bottomBoxWidth,
            height: this.state.bottomBoxHeight,
            padding: this.state.bottomBoxPadding,
            overflow: 'hidden',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE} id={this.state.heroid} className={this.state.heroClassName}>
                <div style={BOTTOMBACKGROUND} id={this.state.bottomid} className={this.state.bottomClassName}>
                    <Holder5>
                        {CHILDS[0]}
                    </Holder5>
                </div>
            </div>
        )
    }
}