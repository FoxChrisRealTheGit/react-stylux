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

var Heading1 = function (_Component) {
    _inherits(Heading1, _Component);

    function Heading1(props) {
        _classCallCheck(this, Heading1);

        var _this = _possibleConstructorReturn(this, (Heading1.__proto__ || Object.getPrototypeOf(Heading1)).call(this, props));

        _this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(Heading1, [{
        key: 'render',
        value: function render() {
            var HEADING = {
                width: 'inherit',
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                padding: this.state.padding,
                margin: this.state.margin,
                overflowX: 'hidden',
                overflowY: 'hidden'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'h2',
                { style: HEADING, id: this.state.id, className: this.state.className },
                CHILDS[0]
            );
        }
    }]);

    return Heading1;
}(_react.Component);

exports.default = Heading1;