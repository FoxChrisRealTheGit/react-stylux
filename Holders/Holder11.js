'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Holder 11 Component */
var Holder11 = function (_Component) {
    _inherits(Holder11, _Component);

    function Holder11(props) {
        _classCallCheck(this, Holder11);

        var _this = _possibleConstructorReturn(this, (Holder11.__proto__ || Object.getPrototypeOf(Holder11)).call(this, props));

        _this.state = {
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
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(Holder11, [{
        key: 'render',
        value: function render() {
            var holderstyles = _nestingstyles2.default.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: 'column'
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: 'column'
                    }
                }
            });
            var block1styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock1
                },
                '@media screen and (max-width: 481px)': {
                    block1styles: {
                        display: this.state.block1smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block1styles: {
                        display: this.state.block1mddis
                    }
                }

            });
            var block2styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock2
                },
                '@media screen and (max-width: 481px)': {
                    block2styles: {
                        display: this.state.block2smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block2styles: {
                        display: this.state.block2mddis
                    }
                }

            });
            var block3styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock3
                },
                '@media screen and (max-width: 481px)': {
                    block3styles: {
                        display: this.state.block3smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block3styles: {
                        display: this.state.block3mddis
                    }
                }

            });
            var block4styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock4
                },
                '@media screen and (max-width: 481px)': {
                    block4styles: {
                        display: this.state.block4smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block4styles: {
                        display: this.state.block4mddis
                    }
                }

            });
            var block5styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock5
                },
                '@media screen and (max-width: 481px)': {
                    block5styles: {
                        display: this.state.block5smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block5styles: {
                        display: this.state.block5mddis
                    }
                }

            });
            var block6styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock6
                },
                '@media screen and (max-width: 481px)': {
                    block6styles: {
                        display: this.state.block6smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block6styles: {
                        display: this.state.block6mddis
                    }
                }

            });
            var block7styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock7
                },
                '@media screen and (max-width: 481px)': {
                    block7styles: {
                        display: this.state.block7smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block7styles: {
                        display: this.state.block7mddis
                    }
                }

            });
            var block8styles = _nestingstyles2.default.create({
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
                    justifyContent: this.state.justifyBlock8
                },
                '@media screen and (max-width: 481px)': {
                    block8styles: {
                        display: this.state.block8smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 1200px)': {
                    block8styles: {
                        display: this.state.block8mddis
                    }
                }

            });
            var childs = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: holderstyles.holderstyles },
                _react2.default.createElement(
                    'div',
                    { style: block1styles.block1styles },
                    childs[0] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block2styles.block2styles },
                    childs[1] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block3styles.block3styles },
                    childs[2] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block4styles.block4styles },
                    childs[3] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block5styles.block5styles },
                    childs[4] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block6styles.block6styles },
                    childs[5] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block7styles.block7styles },
                    childs[6] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block8styles.block8styles },
                    childs[7] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Holder11;
}(_react.Component);
/* End of Holder 11 Component */


exports.default = Holder11;