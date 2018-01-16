'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container5 = function (_Component) {
    _inherits(Container5, _Component);

    function Container5(props) {
        _classCallCheck(this, Container5);

        var _this = _possibleConstructorReturn(this, (Container5.__proto__ || Object.getPrototypeOf(Container5)).call(this, props));

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
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px 0'
        };
        return _this;
    }

    _createClass(Container5, [{
        key: 'render',
        value: function render() {
            var containerStyle = {
                display: this.state.display.display,
                flexDirection: this.state.direction
            };
            var block1style = {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin
            };
            var block2style = {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin
            };
            var block3style = {
                flex: this.state.block3,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock3,
                justifyContent: this.state.justifyBlock3,
                margin: this.state.margin
            };
            var block4style = {
                flex: this.state.block4,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock4,
                justifyContent: this.state.justifyBlock4,
                margin: this.state.margin
            };
            var block5style = {
                flex: this.state.block5,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock5,
                justifyContent: this.state.justifyBlock5,
                margin: this.state.margin
            };
            var childs = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: containerStyle },
                _react2.default.createElement(
                    'div',
                    { style: block1style },
                    childs[0] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block2style },
                    childs[1] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block3style },
                    childs[2] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block4style },
                    childs[3] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block5style },
                    childs[4] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Container5;
}(_react.Component);

exports.default = Container5;