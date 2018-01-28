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

/* Start of Holder 5 Component */
var Holder5 = function (_Component) {
    _inherits(Holder5, _Component);

    function Holder5(props) {
        _classCallCheck(this, Holder5);

        var _this = _possibleConstructorReturn(this, (Holder5.__proto__ || Object.getPrototypeOf(Holder5)).call(this, props));

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
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px 0'
        };
        return _this;
    }

    _createClass(Holder5, [{
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
                )
            );
        }
    }]);

    return Holder5;
}(_react.Component);
/* End of Holder 5 Component */


exports.default = Holder5;