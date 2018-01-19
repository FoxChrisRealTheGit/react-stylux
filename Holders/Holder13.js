'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Holder 13 Component */
var Holder13 = function (_Component) {
    _inherits(Holder13, _Component);

    function Holder13(props) {
        _classCallCheck(this, Holder13);

        var _this = _possibleConstructorReturn(this, (Holder13.__proto__ || Object.getPrototypeOf(Holder13)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5 || 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block6: props.block6 || '1',
            alignBlock6: props.alignBloc6 || 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block7: props.block7 || '1',
            alignBlock7: props.alignBlock7 || 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block8: props.block8 || '1',
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
            block9: props.block9 || '1',
            alignBlock9: props.alignBlock9 || 'center',
            justifyBlock9: props.justifyBlock9 || 'center',
            block10: props.block10 || '1',
            alignBlock10: props.alignBlock10 || 'center',
            justifyBlock10: props.justifyBlock10 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px'
        };
        return _this;
    }

    _createClass(Holder13, [{
        key: 'render',
        value: function render() {
            var holderstyles = {
                width: '100%',
                display: this.state.display,
                flexDirection: this.state.direction,
                flexWrap: 'wrap',
                background: this.state.text,
                justifyContent: this.state.alignBlocks
            };
            var block1styles = {
                display: 'flex',
                flex: this.state.block1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock1
            };
            var block2styles = {
                display: 'flex',
                flex: this.state.block2,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock2
            };
            var block3styles = {
                display: 'flex',
                flex: this.state.block3,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock3,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock3
            };
            var block4styles = {
                display: 'flex',
                flex: this.state.block4,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock4,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock4
            };
            var block5styles = {
                display: 'flex',
                flex: this.state.block4,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock4,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock5
            };
            var block6styles = {
                display: 'flex',
                flex: this.state.block6,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock6,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock6
            };
            var block7styles = {
                display: 'flex',
                flex: this.state.block7,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock7,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock7
            };
            var block8styles = {
                display: 'flex',
                flex: this.state.block8,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock8,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock8
            };
            var block9styles = {
                display: 'flex',
                flex: this.state.block9,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock9,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock9
            };
            var block10styles = {
                display: 'flex',
                flex: this.state.block10,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock10,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock10
            };
            var childs = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: holderstyles },
                _react2.default.createElement(
                    'div',
                    { style: block1styles },
                    childs[0] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block2styles },
                    childs[1] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block3styles },
                    childs[2] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block4styles },
                    childs[3] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block5styles },
                    childs[4] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block6styles },
                    childs[5] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block7styles },
                    childs[6] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block8styles },
                    childs[7] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block9styles },
                    childs[8] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block10styles },
                    childs[9] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Holder13;
}(_react.Component);
/* End of Holder 13 Component */


exports.default = Holder13;