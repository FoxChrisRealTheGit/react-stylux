'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlatButton1 = function (_Component) {
    _inherits(FlatButton1, _Component);

    function FlatButton1(props) {
        _classCallCheck(this, FlatButton1);

        var _this = _possibleConstructorReturn(this, (FlatButton1.__proto__ || Object.getPrototypeOf(FlatButton1)).call(this, props));

        _this.state = {
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            width: props.width,
            height: props.height,
            childs: '',
            fontSize: props.fontSize || '20px',
            color: props.color || '#000000',
            hoverColor: props.hover || 'white',
            hoverBackground: props.hoverBackground || '#000000',
            revColor: props.color || '#000000',
            background: props.background || '#ffffff',
            revBackground: props.background || '#ffffff',
            borderRadius: props.borderRadius || '28px',
            border: props.border || 'solid #000000 2px',
            padding: props.padding || '10px 20px 10px 20px',
            margin: props.margin,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        _this.changeHover = _this.changeHover.bind(_this);
        _this.changeHoverBack = _this.changeHoverBack.bind(_this);
        return _this;
    }

    _createClass(FlatButton1, [{
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
        key: 'changeHover',
        value: function changeHover() {
            var background = this.state.hoverBackground;
            var color = this.state.hoverColor;
            this.setState({ color: color, background: background });
        }
    }, {
        key: 'changeHoverBack',
        value: function changeHoverBack() {
            var revbackground = this.state.revBackground;
            var revcolor = this.state.revColor;
            this.setState({ color: revcolor, background: revbackground });
        }
    }, {
        key: 'render',
        value: function render() {
            var BUTTONSTYLE = {
                borderRadius: this.state.borderRadius,
                color: this.state.color,
                fontSize: this.state.fontSize,
                background: this.state.background,
                padding: this.state.padding,
                border: this.state.border,
                cursor: 'pointer',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode,
                width: this.state.width,
                height: this.state.height
            };

            return _react2.default.createElement(
                'button',
                { style: BUTTONSTYLE, id: this.state.id, className: this.state.className,
                    onClick: this.state.onClick,
                    onMouseEnter: this.changeHover,
                    onMouseLeave: this.changeHoverBack
                },
                this.state.childs[0]
            );
        }
    }]);

    return FlatButton1;
}(_react.Component);

exports.default = FlatButton1;