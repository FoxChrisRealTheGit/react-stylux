'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H14 = function (_Component) {
    _inherits(H14, _Component);

    function H14(props) {
        _classCallCheck(this, H14);

        var _this = _possibleConstructorReturn(this, (H14.__proto__ || Object.getPrototypeOf(H14)).call(this, props));

        _this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(H14, [{
        key: 'render',
        value: function render() {
            var HEADING = {
                width: this.state.width,
                height: this.state.height,
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                textAlign: this.state.textAlign,
                padding: this.state.padding,
                margin: this.state.margin,
                overflowX: 'hidden',
                overflowY: 'hidden'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'h1',
                { style: HEADING, id: this.state.id, className: this.state.className },
                CHILDS[0]
            );
        }
    }]);

    return H14;
}(_react.Component);

exports.default = H14;