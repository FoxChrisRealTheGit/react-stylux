'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

require('../../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLQ2 = function (_Component) {
    _inherits(PLQ2, _Component);

    function PLQ2(props) {
        _classCallCheck(this, PLQ2);

        var _this = _possibleConstructorReturn(this, (PLQ2.__proto__ || Object.getPrototypeOf(PLQ2)).call(this, props));

        _this.state = {

            blockid: props.blockid,
            textid: props.testid,
            citeid: props.citeid,
            blockclassName: props.blockClassName,
            textclassName: props.textClassName,
            citeclassName: props.citeClassName,
            childs: ''
        };
        return _this;
    }

    _createClass(PLQ2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children.split('\\'));
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children.split('\\'));
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'blockquote',
                { id: this.state.blockid, className: 'pullQuote2 ' + this.state.blockClassName },
                _react2.default.createElement(
                    'p',
                    { id: this.state.textid, className: 'pullQuote2-text ' + this.state.textClassName },
                    this.state.childs[0]
                ),
                _react2.default.createElement(
                    'cite',
                    { id: this.state.citeid, className: this.state.citeClassName },
                    this.state.childs[1]
                )
            );
        }
    }]);

    return PLQ2;
}(_react.Component);

exports.default = PLQ2;