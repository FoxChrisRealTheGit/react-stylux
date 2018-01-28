import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
/* Start of Holder 12 Component */
export default class Holder12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
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
            block6: props.block6 || '1',
            block6BorderLeft: props.b6BLeft,
            block6BorderRight: props.b6BRight,
            block6BorderTop: props.b6BTop,
            block6BorderBottom: props.b6BBottom,
            block6Border: props.b6Border,
            alignBlock6: props.alignBloc6 || 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block6smdis: props.block6smdis || 'flex',
            block6mddis: props.block6mddis || 'flex',
            block7: props.block7 || '1',
            block7BorderLeft: props.b7BLeft,
            block7BorderRight: props.b7BRight,
            block7BorderTop: props.b7BTop,
            block7BorderBottom: props.b7BBottom,
            block7Border: props.b7Border,
            alignBlock7: props.alignBlock7 || 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block7smdis: props.block7smdis || 'flex',
            block7mddis: props.block7mddis || 'flex',
            block8: props.block8 || '1',
            block8BorderLeft: props.b8BLeft,
            block8BorderRight: props.b8BRight,
            block8BorderTop: props.b8BTop,
            block8BorderBottom: props.b8BBottom,
            block8Border: props.b8Border,
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
            block8smdis: props.block8smdis || 'flex',
            block8mddis: props.block8mddis || 'flex',
            block9: props.block9 || '1',
            block9BorderLeft: props.b9BLeft,
            block9BorderRight: props.b9BRight,
            block9BorderTop: props.b9BTop,
            block9BorderBottom: props.b9BBottom,
            block9Border: props.b9Border,
            alignBlock9: props.alignBlock9 || 'center',
            justifyBlock9: props.justifyBlock9 || 'center',
            block9smdis: props.block9smdis || 'flex',
            block9mddis: props.block9mddis || 'flex',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
        }
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
            },
            '@media (max-width: 440px)': {
                holderstyles: {
                    display: this.state.smdis,
                    flexDirection: 'column'
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                holderstyles: {
                    display: this.state.mddis,
                    flexDirection: 'column'
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
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
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
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
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
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
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
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
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
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                block5styles: {
                    display: this.state.block5mddis,
                }
            },

        });
        const block6styles = StyleSheet.create({
            block6styles: {
                display: 'flex',
                flex: this.state.block6,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block6BorderLeft,
                borderRight: this.state.block6BorderRight,
                borderTop: this.state.block6BorderTop,
                borderBottom: this.state.block6BorderBottom,
                border: this.state.b6Border,
                alignItems: this.state.alignBlock6,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock6,
            },
            '@media screen and (max-width: 440px)': {
                block6styles: {
                    display: this.state.block6smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                block6styles: {
                    display: this.state.block6mddis,
                }
            },

        });
        const block7styles = StyleSheet.create({
            block7styles: {
                display: 'flex',
                flex: this.state.block7,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block7BorderLeft,
                borderRight: this.state.block7BorderRight,
                borderTop: this.state.block7BorderTop,
                borderBottom: this.state.block7BorderBottom,
                border: this.state.b7Border,
                alignItems: this.state.alignBlock7,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock7,
            },
            '@media screen and (max-width: 440px)': {
                block7styles: {
                    display: this.state.block7smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                block7styles: {
                    display: this.state.block7mddis,
                }
            },

        });
        const block8styles = StyleSheet.create({
            block8styles: {
                display: 'flex',
                flex: this.state.block8,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block8BorderLeft,
                borderRight: this.state.block8BorderRight,
                borderTop: this.state.block8BorderTop,
                borderBottom: this.state.block8BorderBottom,
                border: this.state.b8Border,
                alignItems: this.state.alignBlock8,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock8,
            },
            '@media screen and (max-width: 440px)': {
                block8styles: {
                    display: this.state.block8smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                block8styles: {
                    display: this.state.block8mddis,
                }
            },

        });
        const block9styles = StyleSheet.create({
            block9styles: {
                display: 'flex',
                flex: this.state.block9,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block9BorderLeft,
                borderRight: this.state.block9BorderRight,
                borderTop: this.state.block9BorderTop,
                borderBottom: this.state.block9BorderBottom,
                border: this.state.b9Border,
                alignItems: this.state.alignBlock9,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock9,
            },
            '@media screen and (max-width: 440px)': {
                block9styles: {
                    display: this.state.block9smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                block9styles: {
                    display: this.state.block9mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={holderstyles.holderstyles}>
                <div style={block1styles.block1styles}>{childs[0] || <div />}</div>
                <div style={block2styles.block2styles}>{childs[1] || <div />}</div>
                <div style={block3styles.block3styles}>{childs[2] || <div />}</div>
                <div style={block4styles.block4styles}>{childs[3] || <div />}</div>
                <div style={block5styles.block5styles}>{childs[4] || <div />}</div>
                <div style={block6styles.block6styles}>{childs[5] || <div />}</div>
                <div style={block7styles.block7styles}>{childs[6] || <div />}</div>
                <div style={block8styles.block8styles}>{childs[7] || <div />}</div>
                <div style={block9styles.block9styles}>{childs[8] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 12 Component */