import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
/* Start of Holder 4 Component */
export default class Holder4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            block1BorderLeft: props.b1BLeft,
            block1BorderRight: props.b1BRight,
            block1BorderTop: props.b1BTop,
            block1BorderBottom: props.b1BBottom,
            block1Border: props.b1Border,
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            block2BorderLeft: props.b2BLeft,
            block2BorderRight: props.b2BRight,
            block2BorderTop: props.b2BTop,
            block2BorderBottom: props.b2BBottom,
            block2Border: props.b2Border,
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            block3: props.block3 || '1',
            block3BorderLeft: props.b3BLeft,
            block3BorderRight: props.b3BRight,
            block3BorderTop: props.b3BTop,
            block3BorderBottom: props.b3BBottom,
            block3Border: props.b3Border,
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block3smdis: props.block3smdis || 'flex',
            block3mddis: props.block3mddis || 'flex',
            block4: props.block4 || '1',
            block4BorderLeft: props.b4BLeft,
            block4BorderRight: props.b4BRight,
            block4BorderTop: props.b4BTop,
            block4BorderBottom: props.b4BBottom,
            block4Border: props.b4Border,
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block4smdis: props.block4smdis || 'flex',
            block4mddis: props.block4mddis || 'flex',
            block5: props.block5 || '1',
            block5BorderLeft: props.b5BLeft,
            block5BorderRight: props.b5BRight,
            block5BorderTop: props.b5BTop,
            block5BorderBottom: props.b5BBottom,
            block5Border: props.b5Border,
            alignBlock5: props.alignBlock5 || 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block5smdis: props.block5smdis || 'flex',
            block5mddis: props.block5mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir,
            mdflexDir: props.mdflexDir,
            childs: [],
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        return this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const holderstyles = StyleSheet.create({
            holderstyles: {
                width: '100%',
                display: this.state.display,
                flexDirection: this.state.direction,
                flexWrap: 'wrap',
                background: this.state.text,
                justifyContent: this.state.alignBlocks,
                overflow: 'hidden',
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                holderstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                holderstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1styles = StyleSheet.create({
            block1styles: {
                display: 'flex',
                flex: this.state.block1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block1BorderLeft,
                borderRight: this.state.block1BorderRight,
                borderTop: this.state.block1BorderTop,
                borderBottom: this.state.block1BorderBottom,
                border: this.state.b1Border,
                alignItems: this.state.alignBlock1,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock1,
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
        const block2styles = StyleSheet.create({
            block2styles: {
                display: 'flex',
                flex: this.state.block2,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block2BorderLeft,
                borderRight: this.state.block2BorderRight,
                borderTop: this.state.block2BorderTop,
                borderBottom: this.state.block2BorderBottom,
                border: this.state.b2Border,
                alignItems: this.state.alignBlock2,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock2,
            },
            '@media screen and (max-width: 440px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        const block3styles = StyleSheet.create({
            block3styles: {
                display: 'flex',
                flex: this.state.block3,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block3BorderLeft,
                borderRight: this.state.block3BorderRight,
                borderTop: this.state.block3BorderTop,
                borderBottom: this.state.block3BorderBottom,
                border: this.state.b3Border,
                alignItems: this.state.alignBlock3,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock3,
            },
            '@media screen and (max-width: 440px)': {
                block3styles: {
                    display: this.state.block3smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                block3styles: {
                    display: this.state.block3mddis,
                }
            },

        });
        const block4styles = StyleSheet.create({
            block4styles: {
                display: 'flex',
                flex: this.state.block4,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block4BorderLeft,
                borderRight: this.state.block4BorderRight,
                borderTop: this.state.block4BorderTop,
                borderBottom: this.state.block4BorderBottom,
                border: this.state.b4Border,
                alignItems: this.state.alignBlock4,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock4,
            },
            '@media screen and (max-width: 440px)': {
                block4styles: {
                    display: this.state.block4smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                block4styles: {
                    display: this.state.block4mddis,
                }
            },

        });
        const block5styles = StyleSheet.create({
            block5styles: {
                display: 'flex',
                flex: this.state.block5,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block5BorderLeft,
                borderRight: this.state.block5BorderRight,
                borderTop: this.state.block5BorderTop,
                borderBottom: this.state.block5BorderBottom,
                border: this.state.b5Border,
                alignItems: this.state.alignBlock5,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock5,
            },
            '@media screen and (max-width: 440px)': {
                block5styles: {
                    display: this.state.block5smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                block5styles: {
                    display: this.state.block5mddis,
                }
            },

        });
        return (
            <section style={holderstyles.holderstyles}>
                <div style={block1styles.block1styles}>{this.state.childs[0] || <div />}</div>
                <div style={block2styles.block2styles}>{this.state.childs[1] || <div />}</div>
                <div style={block3styles.block3styles}>{this.state.childs[2] || <div />}</div>
                <div style={block4styles.block4styles}>{this.state.childs[3] || <div />}</div>
                <div style={block5styles.block5styles}>{this.state.childs[4] || <div />}</div>
            </section>
        )
    }
}