'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

require('../../css/animations.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLQ1 = function (_Component) {
    _inherits(PLQ1, _Component);

    function PLQ1(props) {
        _classCallCheck(this, PLQ1);

        var _this = _possibleConstructorReturn(this, (PLQ1.__proto__ || Object.getPrototypeOf(PLQ1)).call(this, props));

        _this.state = {

            blockid: props.blockid,
            textid: props.textid,
            citeid: props.citeid,
            blockClassName: props.blockClassName,
            textClassName: props.textClassName,
            citeClassName: props.citeClassName,
            childs: '',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(PLQ1, [{
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
                { id: this.state.blockid, className: 'pullQuote1 ' + this.state.blockClassName },
                _react2.default.createElement(
                    'p',
                    { id: this.state.textid, className: 'pullQuote1-text ' + this.state.textClassName },
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

    return PLQ1;
}(_react.Component);

exports.default = PLQ1;