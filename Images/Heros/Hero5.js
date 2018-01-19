'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Hero5 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

var _Holder = require('../../Holders/Holder7');

var _Holder2 = _interopRequireDefault(_Holder);

var _Holder3 = require('../../Holders/Holder2');

var _Holder4 = _interopRequireDefault(_Holder3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero5 = exports.Hero5 = function (_Component) {
    _inherits(Hero5, _Component);

    function Hero5(props) {
        _classCallCheck(this, Hero5);

        var _this = _possibleConstructorReturn(this, (Hero5.__proto__ || Object.getPrototypeOf(Hero5)).call(this, props));

        _this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(Hero5, [{
        key: 'render',
        value: function render() {
            var HEROSTYLE = {
                background: this.state.background,
                backgroundImage: this.state.backgroundImage,
                backgroundRepeat: this.state.backgroundRepeat,
                backgroundPosition: this.state.backgroundPosition,
                backgroundSize: this.state.backgroundSize,
                width: this.state.width,
                height: this.state.height,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'div',
                { style: HEROSTYLE, id: this.state.id, className: this.state.className },
                _react2.default.createElement(
                    _Holder2.default,
                    null,
                    CHILDS[0],
                    _react2.default.createElement(
                        _Holder4.default,
                        null,
                        CHILDS[1],
                        CHILDS[2],
                        CHILDS[3]
                    ),
                    _react2.default.createElement(
                        _Holder4.default,
                        null,
                        CHILDS[4],
                        CHILDS[5],
                        CHILDS[6]
                    )
                )
            );
        }
    }]);

    return Hero5;
}(_react.Component);