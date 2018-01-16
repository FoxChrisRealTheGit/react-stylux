'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownNav1 = function (_Component) {
    _inherits(DropDownNav1, _Component);

    function DropDownNav1(props) {
        _classCallCheck(this, DropDownNav1);

        var _this = _possibleConstructorReturn(this, (DropDownNav1.__proto__ || Object.getPrototypeOf(DropDownNav1)).call(this, props));

        _this.state = {
            display: 'none',
            background: props.background,
            offset: props.offset || '10px',
            color: 'white',
            margin: '',
            padding: '',
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName
            // this.enter = this.enter.bind(this);
            // this.left = this.left.bind(this);
        };return _this;
    }
    // enter(){
    //     this.setState =({display: 'block'});
    // }
    // left(){
    //     this.setState =({display: 'none'});
    // }

    _createClass(DropDownNav1, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var DROPDOWN = {
                position: 'absolute',
                display: this.state.display,
                margin: '0 0 0 ' + this.state.offset,
                width: this.state.width,
                padding: '5px',
                textAlign: 'center',
                flex: 1,
                background: this.state.background
            };
            var DropDown_NavBar_Li = {};
            var HASCHILDS = {
                fontSize: '1.333em'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var NAVBAR = CHILDS.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: DropDown_NavBar_Li },
                    arr[i + 1]
                );
            });
            return _react2.default.createElement(
                'nav',
                { id: this.state.mainid, className: 'dropdownnav1 ' + this.state.mainClassName },
                _react2.default.createElement(
                    'li',
                    { style: HASCHILDS, id: this.state.titleid, className: 'DropDown ' + this.state.titleClassName,
                        onMouseOver: function onMouseOver() {
                            return _this2.setState({ display: 'block' });
                        },
                        onMouseOut: function onMouseOut() {
                            return _this2.setState({ display: 'none' });
                        } },
                    CHILDS[0],
                    _react2.default.createElement(
                        'ul',
                        { style: DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                        NAVBAR
                    )
                )
            );
        }
    }]);

    return DropDownNav1;
}(_react.Component);

exports.default = DropDownNav1;