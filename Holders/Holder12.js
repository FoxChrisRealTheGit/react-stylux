'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Holder 12 Component */
var Holder12 = function (_Component) {
    _inherits(Holder12, _Component);

    function Holder12(props) {
        _classCallCheck(this, Holder12);

        var _this = _possibleConstructorReturn(this, (Holder12.__proto__ || Object.getPrototypeOf(Holder12)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            block1BorderLeft: props.b1BLeft,
            block1BorderRight: props.b1BRight,
            block1BorderTop: props.b1BTop,
            block1BorderBottom: props.b1BBottom,
            block1Border: props.b1Border,
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            block2BorderLeft: props.b2BLeft,
            block2BorderRight: props.b2BRight,
            block2BorderTop: props.b2BTop,
            block2BorderBottom: props.b2BBottom,
            block2Border: props.b2Border,
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block3: props.block3 || '1',
            block3BorderLeft: props.b3BLeft,
            block3BorderRight: props.b3BRight,
            block3BorderTop: props.b3BTop,
            block3BorderBottom: props.b3BBottom,
            block3Border: props.b3Border,
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block4: props.block4 || '1',
            block4BorderLeft: props.b4BLeft,
            block4BorderRight: props.b4BRight,
            block4BorderTop: props.b4BTop,
            block4BorderBottom: props.b4BBottom,
            block4Border: props.b4Border,
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block5: props.block5 || '1',
            block5BorderLeft: props.b5BLeft,
            block5BorderRight: props.b5BRight,
            block5BorderTop: props.b5BTop,
            block5BorderBottom: props.b5BBottom,
            block5Border: props.b5Border,
            alignBlock5: props.alignBlock5 || 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block6: props.block6 || '1',
            block6BorderLeft: props.b6BLeft,
            block6BorderRight: props.b6BRight,
            block6BorderTop: props.b6BTop,
            block6BorderBottom: props.b6BBottom,
            block6Border: props.b6Border,
            alignBlock6: props.alignBloc6 || 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block7: props.block7 || '1',
            block7BorderLeft: props.b7BLeft,
            block7BorderRight: props.b7BRight,
            block7BorderTop: props.b7BTop,
            block7BorderBottom: props.b7BBottom,
            block7Border: props.b7Border,
            alignBlock7: props.alignBlock7 || 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block8: props.block8 || '1',
            block8BorderLeft: props.b8BLeft,
            block8BorderRight: props.b8BRight,
            block8BorderTop: props.b8BTop,
            block8BorderBottom: props.b8BBottom,
            block8Border: props.b8Border,
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
            block9: props.block9 || '1',
            block9BorderLeft: props.b9BLeft,
            block9BorderRight: props.b9BRight,
            block9BorderTop: props.b9BTop,
            block9BorderBottom: props.b9BBottom,
            block9Border: props.b9Border,
            alignBlock9: props.alignBlock9 || 'center',
            justifyBlock9: props.justifyBlock9 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px'
        };
        return _this;
    }

    _createClass(Holder12, [{
        key: 'render',
        value: function render() {
            var holderstyles = {
                width: '100%',
                display: this.state.display,
                flexDirection: this.state.direction,
                flexWrap: 'wrap',
                background: this.state.text,
                justifyContent: this.state.alignBlocks
            };
            var block1styles = {
                display: 'flex',
                flex: this.state.block1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block1BorderLeft,
                borderRight: this.state.block1BorderRight,
                borderTop: this.state.block1BorderTop,
                borderBottom: this.state.block1BorderBottom,
                border: this.state.b1Border,
                alignItems: this.state.alignBlock1,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock1
            };
            var block2styles = {
                display: 'flex',
                flex: this.state.block2,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block2BorderLeft,
                borderRight: this.state.block2BorderRight,
                borderTop: this.state.block2BorderTop,
                borderBottom: this.state.block2BorderBottom,
                border: this.state.b2Border,
                alignItems: this.state.alignBlock2,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock2
            };
            var block3styles = {
                display: 'flex',
                flex: this.state.block3,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block3BorderLeft,
                borderRight: this.state.block3BorderRight,
                borderTop: this.state.block3BorderTop,
                borderBottom: this.state.block3BorderBottom,
                border: this.state.b3Border,
                alignItems: this.state.alignBlock3,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock3
            };
            var block4styles = {
                display: 'flex',
                flex: this.state.block4,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block4BorderLeft,
                borderRight: this.state.block4BorderRight,
                borderTop: this.state.block4BorderTop,
                borderBottom: this.state.block4BorderBottom,
                border: this.state.b4Border,
                alignItems: this.state.alignBlock4,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock4
            };
            var block5styles = {
                display: 'flex',
                flex: this.state.block5,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block5BorderLeft,
                borderRight: this.state.block5BorderRight,
                borderTop: this.state.block5BorderTop,
                borderBottom: this.state.block5BorderBottom,
                border: this.state.b5Border,
                alignItems: this.state.alignBlock5,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock5
            };
            var block6styles = {
                display: 'flex',
                flex: this.state.block6,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block6BorderLeft,
                borderRight: this.state.block6BorderRight,
                borderTop: this.state.block6BorderTop,
                borderBottom: this.state.block6BorderBottom,
                border: this.state.b6Border,
                alignItems: this.state.alignBlock6,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock6
            };
            var block7styles = {
                display: 'flex',
                flex: this.state.block7,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block7BorderLeft,
                borderRight: this.state.block7BorderRight,
                borderTop: this.state.block7BorderTop,
                borderBottom: this.state.block7BorderBottom,
                border: this.state.b7Border,
                alignItems: this.state.alignBlock7,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock7
            };
            var block8styles = {
                display: 'flex',
                flex: this.state.block8,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block8BorderLeft,
                borderRight: this.state.block8BorderRight,
                borderTop: this.state.block8BorderTop,
                borderBottom: this.state.block8BorderBottom,
                border: this.state.b8Border,
                alignItems: this.state.alignBlock8,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock8
            };
            var block9styles = {
                display: 'flex',
                flex: this.state.block9,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderLeft: this.state.block9BorderLeft,
                borderRight: this.state.block9BorderRight,
                borderTop: this.state.block9BorderTop,
                borderBottom: this.state.block9BorderBottom,
                border: this.state.b9Border,
                alignItems: this.state.alignBlock9,
                margin: this.state.margin,
                justifyContent: this.state.justifyBlock9
            };
            var childs = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: holderstyles },
                _react2.default.createElement(
                    'div',
                    { style: block1styles },
                    childs[0] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block2styles },
                    childs[1] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block3styles },
                    childs[2] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block4styles },
                    childs[3] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block5styles },
                    childs[4] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block6styles },
                    childs[5] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block7styles },
                    childs[6] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block8styles },
                    childs[7] || _react2.default.createElement('div', null)
                ),
                _react2.default.createElement(
                    'div',
                    { style: block9styles },
                    childs[8] || _react2.default.createElement('div', null)
                )
            );
        }
    }]);

    return Holder12;
}(_react.Component);
/* End of Holder 12 Component */


exports.default = Holder12;