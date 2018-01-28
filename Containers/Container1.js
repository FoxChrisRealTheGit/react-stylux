'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container1 = function (_Component) {
    _inherits(Container1, _Component);

    function Container1(props) {
        _classCallCheck(this, Container1);

        var _this = _possibleConstructorReturn(this, (Container1.__proto__ || Object.getPrototypeOf(Container1)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignBlock1: props.alignBlock1 || 'center',
            block1: props.block1 || '1',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            textColor: props.textColor || 'yellow',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(Container1, [{
        key: 'render',
        value: function render() {
            var containerStyle = _nestingstyles2.default.create({
                containerstyles: {
                    display: this.state.display.display,
                    flexDirection: this.state.direction
                },
                '@media (max-width: 440px)': {
                    containerstyles: {
                        display: this.state.smdis,
                        flexDirection: 'column'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                    containerstyles: {
                        display: this.state.mddis,
                        flexDirection: 'column'
                    }
                }
            });
            var block1style = _nestingstyles2.default.create({
                block1styles: {
                    flex: this.state.block1,
                    background: this.state.background,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: this.state.alignBlock1,
                    justifyContent: this.state.justifyBlock1,
                    margin: this.state.margin
                },
                '@media screen and (max-width: 440px)': {
                    block1styles: {
                        display: this.state.block1smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                    block1styles: {
                        display: this.state.block1mddis
                    }
                }
            });
            var childs = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: containerStyle.containerstyles },
                _react2.default.createElement(
                    'div',
                    { style: block1style.block1styles },
                    childs[0] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Container1;
}(_react.Component);

exports.default = Container1;