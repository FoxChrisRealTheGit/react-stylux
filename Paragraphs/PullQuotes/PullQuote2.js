'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PullQuote2 = function (_Component) {
    _inherits(PullQuote2, _Component);

    function PullQuote2(props) {
        _classCallCheck(this, PullQuote2);

        var _this = _possibleConstructorReturn(this, (PullQuote2.__proto__ || Object.getPrototypeOf(PullQuote2)).call(this, props));

        _this.state = {

            blockid: props.blockid,
            textid: props.testid,
            citeid: props.citeid,
            blockclassName: props.blockClassName,
            textclassName: props.textClassName,
            citeclassName: props.citeClassName
        };
        return _this;
    }

    _createClass(PullQuote2, [{
        key: 'render',
        value: function render() {
            var CHILDS = _react2.default.Children.toArray(this.props.children.split('\\'));
            return _react2.default.createElement(
                'blockquote',
                { id: this.state.blockid, className: 'pullQuote2 ' + this.state.blockClassName },
                _react2.default.createElement(
                    'p',
                    { id: this.state.textid, className: 'pullQuote2-text ' + this.state.textClassName },
                    CHILDS[0]
                ),
                _react2.default.createElement(
                    'cite',
                    { id: this.state.citeid, className: this.state.citeClassName },
                    CHILDS[1]
                )
            );
        }
    }]);

    return PullQuote2;
}(_react.Component);

exports.default = PullQuote2;