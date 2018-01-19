'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('./css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalTicker = function (_Component) {
    _inherits(HorizontalTicker, _Component);

    function HorizontalTicker(props) {
        _classCallCheck(this, HorizontalTicker);

        var _this = _possibleConstructorReturn(this, (HorizontalTicker.__proto__ || Object.getPrototypeOf(HorizontalTicker)).call(this, props));

        _this.state = {
            slide1: []
        };
        return _this;
    }

    _createClass(HorizontalTicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var t_item = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            for (var g = 0; g < CHILDS.length; g += 1) {
                t_item.push(CHILDS[g]);
            }
            this.setState({
                slide1: t_item
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var TICKERWRAPPER = {
                width: '100%',
                overflow: 'hidden',
                paddingLeft: '100%',
                display: 'flex'
            };
            var TICKER_ITEM = {
                display: 'flex',
                padding: '0 2em'

            };
            var HORIZONTALTICKER2 = {
                paddingLeft: '50%'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var TICKERITEM = this.state.slide1.map(function (x, i) {
                return _react2.default.createElement(
                    'div',
                    { key: i, style: TICKER_ITEM },
                    x
                );
            });
            return _react2.default.createElement(
                'div',
                { style: TICKERWRAPPER },
                _react2.default.createElement(
                    'div',
                    { className: 'horizontal-ticker' },
                    TICKERITEM
                )
            );
        }
    }]);

    return HorizontalTicker;
}(_react.Component);

exports.default = HorizontalTicker;