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

var Container2 = function (_Component) {
    _inherits(Container2, _Component);

    function Container2(props) {
        _classCallCheck(this, Container2);

        var _this = _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            childs: []
        };
        return _this;
    }

    _createClass(Container2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return this.setState({ childs: CHILDS });
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
            var containerStyle = _nestingstyles2.default.create({
                containerstyles: {
                    display: this.state.display.display,
                    flexDirection: this.state.direction,
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border
                },
                '@media (max-width: 440px)': {
                    containerstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 760px)': {
                    containerstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            });
            var block1style = _nestingstyles2.default.create({
                block1styles: {
                    flex: this.state.block1,
                    background: this.state.background,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: this.state.alignBlock1,
                    justifyContent: this.state.justifyBlock1,
                    margin: this.state.margin
                },
                '@media screen and (max-width: 481px)': {
                    block1styles: {
                        display: this.state.block1smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 760px)': {
                    block1styles: {
                        display: this.state.block1mddis
                    }
                }

            });
            var block2style = _nestingstyles2.default.create({
                block2styles: {
                    flex: this.state.block2,
                    background: this.state.background,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: this.state.alignBlock2,
                    justifyContent: this.state.justifyBlock2,
                    margin: this.state.margin
                },
                '@media screen and (max-width: 481px)': {
                    block2styles: {
                        display: this.state.block2smdis
                    }
                },
                '@media screen and (min-width: 482px) and (max-width: 760px)': {
                    block2styles: {
                        display: this.state.block2mddis
                    }
                }

            });
            return _react2.default.createElement(
                'section',
                { style: containerStyle.containerstyles },
                _react2.default.createElement(
                    'div',
                    { style: block1style.block1styles },
                    this.state.childs[0] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block2style.block2styles },
                    this.state.childs[1] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Container2;
}(_react.Component);

exports.default = Container2;