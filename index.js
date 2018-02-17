'use strict';

var _TestBlock = require('./TestBlock');

var _TestBlock2 = _interopRequireDefault(_TestBlock);

var _Container = require('./Containers/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Holder = require('./Holders/Holder');

var _Holder2 = _interopRequireDefault(_Holder);

var _MainHeading = require('./Headings/MainHeadings/MainHeading1');

var _MainHeading2 = _interopRequireDefault(_MainHeading);

var _MainHeading3 = require('./Headings/MainHeadings/MainHeading2');

var _MainHeading4 = _interopRequireDefault(_MainHeading3);

var _MainHeading5 = require('./Headings/MainHeadings/MainHeading3');

var _MainHeading6 = _interopRequireDefault(_MainHeading5);

var _MainHeading7 = require('./Headings/MainHeadings/MainHeading4');

var _MainHeading8 = _interopRequireDefault(_MainHeading7);

var _MainHeading9 = require('./Headings/MainHeadings/MainHeading5');

var _MainHeading10 = _interopRequireDefault(_MainHeading9);

var _Heading = require('./Headings/H2/Heading1');

var _Heading2 = _interopRequireDefault(_Heading);

var _Heading3 = require('./Headings/H2/Heading2');

var _Heading4 = _interopRequireDefault(_Heading3);

var _Heading5 = require('./Headings/H2/Heading3');

var _Heading6 = _interopRequireDefault(_Heading5);

var _Heading7 = require('./Headings/H2/Heading4');

var _Heading8 = _interopRequireDefault(_Heading7);

var _Heading9 = require('./Headings/H2/Heading5');

var _Heading10 = _interopRequireDefault(_Heading9);

var _SubHeading = require('./Headings/SubHeadings/SubHeading1');

var _SubHeading2 = _interopRequireDefault(_SubHeading);

var _SubHeading3 = require('./Headings/SubHeadings/SubHeading2');

var _SubHeading4 = _interopRequireDefault(_SubHeading3);

var _SubHeading5 = require('./Headings/SubHeadings/SubHeading3');

var _SubHeading6 = _interopRequireDefault(_SubHeading5);

var _SubHeading7 = require('./Headings/SubHeadings/SubHeading4');

var _SubHeading8 = _interopRequireDefault(_SubHeading7);

var _SubHeading9 = require('./Headings/SubHeadings/SubHeading5');

var _SubHeading10 = _interopRequireDefault(_SubHeading9);

var _SecondarySubHeading = require('./Headings/SecondarySubHeadings/SecondarySubHeading1');

var _SecondarySubHeading2 = _interopRequireDefault(_SecondarySubHeading);

var _SecondarySubHeading3 = require('./Headings/SecondarySubHeadings/SecondarySubHeading2');

var _SecondarySubHeading4 = _interopRequireDefault(_SecondarySubHeading3);

var _SecondarySubHeading5 = require('./Headings/SecondarySubHeadings/SecondarySubHeading3');

var _SecondarySubHeading6 = _interopRequireDefault(_SecondarySubHeading5);

var _SecondarySubHeading7 = require('./Headings/SecondarySubHeadings/SecondarySubHeading4');

var _SecondarySubHeading8 = _interopRequireDefault(_SecondarySubHeading7);

var _SecondarySubHeading9 = require('./Headings/SecondarySubHeadings/SecondarySubHeading5');

var _SecondarySubHeading10 = _interopRequireDefault(_SecondarySubHeading9);

var _Paragraph = require('./Paragraphs/Paragraph1');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Paragraph3 = require('./Paragraphs/Paragraph2');

var _Paragraph4 = _interopRequireDefault(_Paragraph3);

var _Paragraph5 = require('./Paragraphs/Paragraph3');

var _Paragraph6 = _interopRequireDefault(_Paragraph5);

var _Paragraph7 = require('./Paragraphs/Paragraph4');

var _Paragraph8 = _interopRequireDefault(_Paragraph7);

var _Paragraph9 = require('./Paragraphs/Paragraph5');

var _Paragraph10 = _interopRequireDefault(_Paragraph9);

var _FlatButton = require('./Buttons/FlatButton1');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CircleImage = require('./Images/CircleImage');

var _CircleImage2 = _interopRequireDefault(_CircleImage);

var _OvalImage = require('./Images/OvalImage');

var _OvalImage2 = _interopRequireDefault(_OvalImage);

var _Figure = require('./Images/Figure');

var _Figure2 = _interopRequireDefault(_Figure);

var _RectangleImage = require('./Images/RectangleImage');

var _RectangleImage2 = _interopRequireDefault(_RectangleImage);

var _RoundedImage = require('./Images/RoundedImage');

var _RoundedImage2 = _interopRequireDefault(_RoundedImage);

var _RoundedRectangleImage = require('./Images/RoundedRectangleImage');

var _RoundedRectangleImage2 = _interopRequireDefault(_RoundedRectangleImage);

var _SquareImage = require('./Images/SquareImage');

var _SquareImage2 = _interopRequireDefault(_SquareImage);

var _TallRectangleImage = require('./Images/TallRectangleImage');

var _TallRectangleImage2 = _interopRequireDefault(_TallRectangleImage);

var _TallRoundedRectangleImage = require('./Images/TallRoundedRectangleImage');

var _TallRoundedRectangleImage2 = _interopRequireDefault(_TallRoundedRectangleImage);

var _Hero = require('./Images/Heros/Hero1');

var _Hero2 = _interopRequireDefault(_Hero);

var _Hero3 = require('./Images/Heros/Hero2');

var _Hero4 = _interopRequireDefault(_Hero3);

var _Hero5 = require('./Images/Heros/Hero3');

var _Hero6 = _interopRequireDefault(_Hero5);

var _Hero7 = require('./Images/Heros/Hero4');

var _Hero8 = _interopRequireDefault(_Hero7);

var _Hero9 = require('./Images/Heros/Hero5');

var _Hero10 = _interopRequireDefault(_Hero9);

var _Navbar = require('./NavBars/NavBars/Navbar1');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SubNavBar = require('./NavBars/SubNavBar/SubNavBar1');

var _SubNavBar2 = _interopRequireDefault(_SubNavBar);

var _SubNavBar3 = require('./NavBars/SubNavBar/SubNavBar2');

var _SubNavBar4 = _interopRequireDefault(_SubNavBar3);

var _DropDownNav = require('./NavBars/DropDowns/DropDownNav1');

var _DropDownNav2 = _interopRequireDefault(_DropDownNav);

var _DropDownNav3 = require('./NavBars/DropDowns/DropDownNav2');

var _DropDownNav4 = _interopRequireDefault(_DropDownNav3);

var _DropDownNav5 = require('./NavBars/DropDowns/DropDownNav5');

var _DropDownNav6 = _interopRequireDefault(_DropDownNav5);

var _Brand = require('./Brands/Brand1');

var _Brand2 = _interopRequireDefault(_Brand);

var _Brand3 = require('./Brands/Brand2');

var _Brand4 = _interopRequireDefault(_Brand3);

var _Brand5 = require('./Brands/Brand3');

var _Brand6 = _interopRequireDefault(_Brand5);

var _Brand7 = require('./Brands/Brand4');

var _Brand8 = _interopRequireDefault(_Brand7);

var _Brand9 = require('./Brands/Brand5');

var _Brand10 = _interopRequireDefault(_Brand9);

var _Carousel = require('./Carousels/Carousel1');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Carousel3 = require('./Carousels/Carousel2');

var _Carousel4 = _interopRequireDefault(_Carousel3);

var _Carousel5 = require('./Carousels/Carousel3');

var _Carousel6 = _interopRequireDefault(_Carousel5);

var _Carousel7 = require('./Carousels/Carousel4');

var _Carousel8 = _interopRequireDefault(_Carousel7);

var _Carousel9 = require('./Carousels/Carousel5');

var _Carousel10 = _interopRequireDefault(_Carousel9);

var _Toggler = require('./Togglers/Toggler1');

var _Toggler2 = _interopRequireDefault(_Toggler);

var _Toggler3 = require('./Togglers/Toggler2');

var _Toggler4 = _interopRequireDefault(_Toggler3);

var _Toggler5 = require('./Togglers/Toggler3');

var _Toggler6 = _interopRequireDefault(_Toggler5);

var _Modul = require('./Togglers/Moduls/Modul1');

var _Modul2 = _interopRequireDefault(_Modul);

var _BulletList = require('./Lists/Bullet/BulletList1');

var _BulletList2 = _interopRequireDefault(_BulletList);

var _BulletList3 = require('./Lists/Bullet/BulletList2');

var _BulletList4 = _interopRequireDefault(_BulletList3);

var _NumberList = require('./Lists/Number/NumberList1');

var _NumberList2 = _interopRequireDefault(_NumberList);

var _NumberList3 = require('./Lists/Number/NumberList2');

var _NumberList4 = _interopRequireDefault(_NumberList3);

var _NumberList5 = require('./Lists/Number/NumberList3');

var _NumberList6 = _interopRequireDefault(_NumberList5);

var _Table = require('./Tables/Table1');

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = require('./Tables/Table2');

var _Table4 = _interopRequireDefault(_Table3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Block2: _TestBlock2.default,
    Container: _Container2.default,
    Holder: _Holder2.default,
    H11: _MainHeading2.default,
    H12: _MainHeading4.default,
    H13: _MainHeading6.default,
    H14: _MainHeading8.default,
    H15: _MainHeading10.default,
    H21: _Heading2.default,
    H22: _Heading4.default,
    H23: _Heading6.default,
    H24: _Heading8.default,
    H25: _Heading10.default,
    H31: _SubHeading2.default,
    H32: _SubHeading4.default,
    H33: _SubHeading6.default,
    H34: _SubHeading8.default,
    H35: _SubHeading10.default,
    H41: _SecondarySubHeading2.default,
    H42: _SecondarySubHeading4.default,
    H43: _SecondarySubHeading6.default,
    H44: _SecondarySubHeading8.default,
    H45: _SecondarySubHeading10.default,
    P1: _Paragraph2.default,
    P2: _Paragraph4.default,
    P3: _Paragraph6.default,
    P4: _Paragraph8.default,
    P5: _Paragraph10.default,
    FlatButton1: _FlatButton2.default,
    CircleImage: _CircleImage2.default,
    Figure: _Figure2.default,
    OvalImage: _OvalImage2.default,
    RectangleImage: _RectangleImage2.default,
    RoundedImage: _RoundedImage2.default,
    RoundedRectangleImage: _RoundedRectangleImage2.default,
    SquareImage: _SquareImage2.default,
    TallRectangleImage: _TallRectangleImage2.default,
    TallRoundedRectangleImage: _TallRoundedRectangleImage2.default,
    Hero1: _Hero2.default,
    Hero2: _Hero4.default,
    Hero3: _Hero6.default,
    Hero4: _Hero8.default,
    Hero5: _Hero10.default,
    NavBar1: _Navbar2.default,
    SubNavBar1: _SubNavBar2.default,
    SubNavBar2: _SubNavBar4.default,
    DropDownNav1: _DropDownNav2.default,
    DropDownNav3: _DropDownNav4.default,
    DropDownNav5: _DropDownNav6.default,
    Brand1: _Brand2.default,
    Brand2: _Brand4.default,
    Brand3: _Brand6.default,
    Brand4: _Brand8.default,
    Brand5: _Brand10.default,
    Carousel1: _Carousel2.default,
    Carousel2: _Carousel4.default,
    Carousel3: _Carousel6.default,
    Carousel4: _Carousel8.default,
    Carousel5: _Carousel10.default,
    Toggler1: _Toggler2.default,
    Toggler2: _Toggler4.default,
    Toggler3: _Toggler6.default,
    Modul1: _Modul2.default,
    BulletList1: _BulletList2.default,
    BulletList2: _BulletList4.default,
    NumberList1: _NumberList2.default,
    NumberList2: _NumberList4.default,
    NumberList3: _NumberList6.default,
    Table1: _Table2.default,
    Table2: _Table4.default
};