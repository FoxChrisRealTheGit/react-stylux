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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel3 = function (_Component) {
    _inherits(Carousel3, _Component);

    function Carousel3(props) {
        _classCallCheck(this, Carousel3);

        var _this = _possibleConstructorReturn(this, (Carousel3.__proto__ || Object.getPrototypeOf(Carousel3)).call(this, props));

        _this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            sliderClassName: props.sliderClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        _this.slideLeft = _this.slideLeft.bind(_this);
        _this.slideRight = _this.slideRight.bind(_this);
        return _this;
    }

    _createClass(Carousel3, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var slides = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            for (var g = 0; g < CHILDS.length; g += 1) {
                slides.push(CHILDS[g]);
            }
            var intervalTime = setInterval(this.slideRight, this.state.slideTimer);
            this.setState({ sliderImages: slides, intervalTime: intervalTime });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var slides = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            for (var g = 0; g < CHILDS.length; g += 1) {
                slides.push(CHILDS[g]);
            }
            var intervalTime = setInterval(this.slideRight, this.state.slideTimer);
            this.setState({ sliderImages: slides, intervalTime: intervalTime });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            return clearInterval(this.state.intervalTime);
        }
    }, {
        key: 'slideLeft',
        value: function slideLeft() {
            if (this.state.cur === 0) {
                return this.setState({ cur: this.state.sliderImages.length - 1 });
            } else {
                return this.setState({ cur: this.state.cur - 1 });
            }
        }
    }, {
        key: 'slideRight',
        value: function slideRight() {
            if (this.state.cur >= this.state.sliderImages.length - 1) {
                return this.setState({ cur: 0 });
            } else {
                return this.setState({ cur: this.state.cur + 1 });
            }
        }
    }, {
        key: 'currentSlide',
        value: function currentSlide(x) {
            this.setState({ cur: x });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var LEFT_ARROW = {
                borderWidth: '30px 40px 30px 0',
                borderColor: 'transparent ' + this.state.arrowColor + ' transparent transparent',
                left: '0',
                marginLeft: '30px'
            };
            var RIGHT_ARROW = {
                borderWidth: '30px 0 30px 40px',
                borderColor: 'transparent transparent transparent ' + this.state.arrowColor,
                right: '0',
                marginRight: '30px'
            };
            var WRAP = {
                width: '100%',
                height: this.state.height,
                overflowX: 'hidden',
                background: this.state.background,
                overflowY: 'hidden',
                display: 'flex',
                padding: this.state.padding
            };
            var SLIDER = {
                width: '100%',
                overflowX: 'hidden',
                height: this.state.height
            };
            var SLIDE = {
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                height: this.state.height
                // display:'block'
            };
            var SLIDE_CONTENT = {
                width: '100%',
                height: this.state.height,
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
                transformOrigin: this.state.transformOrigin,
                animationFillMode: this.state.animationFillMode
            };
            var CIRCLES = {
                cursor: 'pointer',
                height: '15px',
                width: '15px',
                margin: '2px 2px',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
                textAlign: 'center'
            };
            var CIRCLESDIV = {
                textAlign: 'center',
                width: '100%',
                position: 'relative'
            };
            var RENDERSLIDES = this.state.sliderImages.map(function (x, i) {
                return _react2.default.createElement(
                    'div',
                    { key: i, style: SLIDE },
                    _react2.default.createElement(
                        'div',
                        { style: SLIDE_CONTENT },
                        x
                    )
                );
            });
            var DOTS = this.state.sliderImages.map(function (x, i) {
                return _react2.default.createElement('span', { key: i, style: CIRCLES, onClick: function onClick() {
                        return _this2.currentSlide(i);
                    } });
            });
            return _react2.default.createElement(
                Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { style: WRAP, id: this.state.mainid, className: this.state.mainClassName },
                    _react2.default.createElement('div', { style: LEFT_ARROW, id: this.state.leftArrowid, className: 'arrow ' + this.state.leftArrowClassName, onClick: function onClick() {
                            return _this2.slideLeft();
                        } }),
                    _react2.default.createElement(
                        'div',
                        { style: SLIDER, id: this.state.sliderid, className: this.state.sliderClassName },
                        RENDERSLIDES[this.state.cur]
                    ),
                    _react2.default.createElement('div', { style: RIGHT_ARROW, id: this.state.rightArrowid, className: 'arrow ' + this.state.rightArrowClassName, onClick: function onClick() {
                            return _this2.slideRight();
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { style: CIRCLESDIV },
                    DOTS
                )
            );
        }
    }]);

    return Carousel3;
}(_react.Component);

exports.default = Carousel3;