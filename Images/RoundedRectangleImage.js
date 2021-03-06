'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Rounded Rectangle Image */
var RoundedRectangleImage = function (_Component) {
    _inherits(RoundedRectangleImage, _Component);

    function RoundedRectangleImage(props) {
        _classCallCheck(this, RoundedRectangleImage);

        var _this = _possibleConstructorReturn(this, (RoundedRectangleImage.__proto__ || Object.getPrototypeOf(RoundedRectangleImage)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            hoverShadow: props.hovShadow
        };
        return _this;
    }

    _createClass(RoundedRectangleImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var ROUNDEDRECTANGLEIMG = _nestingstyles2.default.create({
                roundedrectangleimg: {
                    borderRadius: "30%",
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                },
                hoverStyle: {
                    color: this.state.hoverShadow
                },
                '@media screen and (max-width: 440px)': {
                    roundedrectangleimg: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    roundedrectangleimg: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement(
                Fragment,
                null,
                _react2.default.createElement('img', { style: ROUNDEDRECTANGLEIMG.roundedrectangleimg, id: this.state.id, className: 'recimg-' + this.state.size + ' ' + this.state.className, src: this.state.childs[0], alt: this.state.childs[1],
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ color: ROUNDEDRECTANGLEIMG.hoverStyle.color });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ color: _this2.state.color });
                    } })
            );
        }
    }]);

    return RoundedRectangleImage;
}(_react.Component);

exports.default = RoundedRectangleImage;