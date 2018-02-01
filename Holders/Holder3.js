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

/* Start of Holder 3 Component */
var Holder3 = function (_Component) {
    _inherits(Holder3, _Component);

    function Holder3(props) {
        _classCallCheck(this, Holder3);

        var _this = _possibleConstructorReturn(this, (Holder3.__proto__ || Object.getPrototypeOf(Holder3)).call(this, props));

        _this.state = {
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
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir,
            mdflexDir: props.mdflexDir

        };
        return _this;
    }

    _createClass(Holder3, [{
        key: 'render',
        value: function render() {
            var holderstyles = _nestingstyles2.default.create({
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
                    border: this.state.border
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
                        flexDirection: this.setState.mdflexDir
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
                '@media screen and (max-width: 440px)': {
                    block1styles: {
                        display: this.state.block1smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
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
                '@media screen and (max-width: 440px)': {
                    block2styles: {
                        display: this.state.block2smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
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
                '@media screen and (max-width: 440px)': {
                    block3styles: {
                        display: this.state.block3smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
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
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: this.state.block4smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: this.state.block4mddis
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
                )
            );
        }
    }]);

    return Holder3;
}(_react.Component);

exports.default = Holder3;