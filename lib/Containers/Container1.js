import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
export default class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            alignBlock1: props.alignBlock1 || 'center',
            block1: props.block1 || '1',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
        }
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 440px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },
        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
            </section>
        )
    }
}