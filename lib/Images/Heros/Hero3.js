import React, {Component} from 'react';
import '../../css/reset.css'
import Holder1 from '../../Holders/Holder1';

export default class Hero3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className,
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
            alignItems: 'center',
            justifyContent: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder1>
                    {CHILDS[0]}
                </Holder1>
            </div>
        )
    }
}
