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

var Container1 = function (_Component) {
    _inherits(Container1, _Component);

    function Container1(props) {
        _classCallCheck(this, Container1);

        var _this = _possibleConstructorReturn(this, (Container1.__proto__ || Object.getPrototypeOf(Container1)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignBlock1: props.alignBlock1 || 'center',
            block1: props.block1 || '1',
            justifyBlock1: props.justifyBlock1 || 'center',
            textColor: props.textColor || 'yellow',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '0'
        };
        return _this;
    }

    _createClass(Container1, [{
        key: 'render',
        value: function render() {
            var containerStyle = {
                display: this.state.display.display,
                flexDirection: this.state.direction
            };
            var block1style = {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
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
                )
            );
        }
    }]);

    return Container1;
}(_react.Component);

exports.default = Container1;