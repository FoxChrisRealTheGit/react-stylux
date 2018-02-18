# react-stylux


This is currently an alpha stage project, documentation will be lack luster for a few weeks, website being working on.

- **responsive testing ongoing, no sizes are set as of right now**
- **videos being worked on to explain blocks and design choices**
- **beta will be released soon and this project will be open for collaboration**


Utilizing three simple component types, this project simplifies layout and front-end considerations for react projects. The three component types are: containers (subject to change), holders, and blocks. Containers (subject to change) define the horizonal space and act as a wrapper for all blocks. Holders then go inside of the container to define the space for the blocks. Holders can go inside of Holders to further define space. Each holder has a pre determinded child length and will render children placed into the holder.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux
```

## How To Use Stylux
### Table of Contents
- [What's included](#whats-included)
- [Step by Step](#step-by-step)
- [Animation Notes](#animation-notes)
- [Responsive Notes](#responsive-notes)
- [Layout](#layout-specific)
    - [Containers](#containers-possible-name-change-expected)
    - [Holders](#holder)
- [Text](#text-specific)
    - [Headings](#mainheadings)
    - [Paragraphs](#paragraphs-all-names-subject-to-change)
    - [Pull Quotes](#pull-quotes)
- [Images](#image-specific)
    - [Circle Image](#circleimage)
    - [Rounded Image](#roundedimage)
    - [Square Image](#squareimage)
    - [Oval Image](#ovalimage)
    - [Rectangle Image](#rectangleimage)
    - [Rounded Ractangle Image](#roundedrectangleimage)
    - [Tall Rectangle Image](#tallrectangleimage)
    - [Tall Rounded Rectangle Image](#tallroundedrectangleimage)
    - [Figure](#figure)
    - [Heroes](#heroes)
        - [Hero1](#hero1)
        - [Hero2](#hero2)
        - [Hero3](#hero3)
        - [Hero4](#hero4)
        - [Hero5](#hero5)
- [Navigation](#navigation-specific)
    - [Navbars](#navbars)
    - [SubNavbars](#subnavbars)
    - [Dropdowns](#dropdownnavs-there-needs-to-be-an-accesibility-rework)
    - [Brand](#brand)
- [Lists](#list-specific-possible-rework-expected)
    - [Number Lists](#number-list)
    - [Bullet Lists](#bullet-List)
- [Special Stuff](#special-stuff)
    - [Carousels](#carousels)
    - [Togglers](#togglers)
    - [Moduls](#moduls)
    - [Buttons](#buttons)
    - [Tables](#tables)
- [Known Bugs](#known-bugs)
- [Feature Wish List](#feature-wish-list)
- [Acknowledgments](#acknowledgments)
- [Changelog](#changelog)


### Whats Included:
* Container
* Holder
* H1 1-5
* H2 1-5
* H3 1-5
* H4 1-5
* P (Paragraphs) 1-5
* PLQ (Pull Quotes) 1-2
* Navbar 1
* SubNavbar 1-5
* Dropdowns 1-5
* Brand 1-5
* Togglers 1-4
* Moduls 1-2
* Horizontal Ticker 1
* See Saw Ticker 1
* Bullet List 1-2
* Number List 1-3
* Figure
* Circle Image
* Oval Image
* Rectangle Image
* Rounded Image
* Rounded Rectangle Image
* Square Image
* Tall Rectangle Image
* Tall Rounded Rectangle Image
* Hero 1-5
* Carousels 1-5
* Tables 1-3
* Pie Chart 1

#### Currently not done:
* Dropdown Nav 2
* DropDown Nav 4
* SubNavBar 3
* SubNavBar 4
* SubNavBar 5
* See Saw Ticker 1
* Toggler 4
* Modul 2
* Table 3
* Pie Chart 1 (having issue currently)


#### Currently almost done:
* Horizontal Ticker 1
* Table 1
* Table 2
* Toggler 1
* Toggler 2
* Toggler 3
* Carousel 2
* Carousel 3
* Carousel 4
* Oval Image
* NumberList 2
* Modul 1
* Pull Quote 1
* Pull Quote 2

### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container, Holder, and Navbar1:

```
import {
    Container,
    Holder,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container>
    <Holder>
        <NavBar1>
            <a href="">Item1</a>
            <a href="">Item2</a>
            <a href="">Item3</a>
        </NavBar1>
        <NavBar1>
            <a href="facebook.com"></a>
            <a href="twitter.com"></a>
            <a href="instagram.com"></a>
        </NavBar1>
    </Holder>
</Container>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container>
    <Holder
        block1="2">
        <NavBar1>
            <a href="">Item1</a>
            <a href="">Item2</a>
            <a href="">Item3</a>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <a href="facebook.com"></a>
            <a href="twitter.com"></a>
            <a href="instagram.com"></a>
        </NavBar1>
    </Holder>
</Container>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Animation Notes:

**The animation library is currently mostly from: animate.css, please see [Acknowledgments](#acknowledgments) for full acknowledgment.**

#### defaults

all blocks have access to:
- animationIterationCount in the form of: props.aniCount,
- animationTimingFunction in the form of: props.aniTime,
- animationName in the form of: props.aniName,
- animationDuration in the form of: props.aniDur,
- transformOrigin in the form of: props.transformOrigin,

animate.css recommends the following defaults:
aniDur ='1s'
aniFillMode = 'both'

if wanting an infinite animation:
aniCount = 'infinite'


#### Animation Names

to see what these do, please refer to animation [Acknowledgments](#acknowledgments) or go to http://daneden.me/animate
each animation will be associated with suggested defaults, these will be improved as more testing is accomplished.

- bounce
    - transform-origin: center bottom
- pulse
- handShake
    - animation-timing-function: ease-in-out
- jello
    - transform-origin: center
- bounceIn
    - animation-duration: 0.75s
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeOut
- flipInX (needs better integration)
- flipInY (needs better integration)
- flipOutX (needs better integration)
- flipOutY (needs better integration)
- hinge
    - animation-duration: 2s
- slideInLeft
- slideInRight
- slideOutLeft
- slideOutRight

### Responsive Notes:
There are two breakpoints on the follow elements:
* containers
* holders
* headings
* paragraphs
* images

#### Small Breakpoint:
use this through props as: smdis
the breakpoint for this is currently set at max-width: 440px (subject to change)

#### Medium Breakpoint:
use this through props as: mddis
the breakpoint for this is currently set at min-width: 441px and max-width: 760px (subject to change)


### Layout Specific


#### Containers (possible name change expected)


##### Container
```

<Container
    display = 'flex'
    direction = 'row'
    borderLeft
    borderRight
    borderTop
    borderBottom
    border
    alignBlock1 = 'center'
    block{x} = '1'
    justifyBlock{x} = 'center'
    block{x}smdis = 'flex'
    block{x}mddis = 'flex'
    background
    padding = '0'
    margin = '0'
    smdis = 'flex'
    mddis = 'flex'
    smflexDir = 'column'
    mdflexDir = 'column'
    >
```
- x = number of block, for example block1 = '2'
- This accepts up to ten children and renders then. This is still currently a useless item, but can be used for visual clarity when creating. Future use will implement a Provider to deliver themes.
```
<Container>
    <Holder1>
    </Holder1>
</Container>
```

#### Holder 

##### Holder
```
<Holder
    display = 'flex'
    direction = 'row'
    borderLeft
    borderRight
    borderTop
    borderBottom
    border
    block{x}direction = 'row'
    alignBlock{x} = 'center'
    block{x} = '1'
    block{x}BorderLeft
    block{x}BorderRight
    block{x}BorderTop
    block{x}BorderBottom
    block{x}Border
    justifyBlock{x} = 'center'
    block{x}smdis = 'flex'
    block{x}mddis = 'flex'
    alignBlock{x} = 'center'
    background
    padding = '0'
    margin = '10px 0'
    smdis = 'flex'
    mddis = 'flex'
    smflexDir
    mdflexDir
    >
```
- x = number of block, for example block1 = '2'
- This accepts up to twenty children and renders them. This is the current backbone for layout. Can be placed inside of itself to create very dynamic and responsive layouts.
```
<Holder>
    <Block2 />
    <Block2 />
</Holder>
```

### Text Specific

#### Headings (all names subject to change)
large size:
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

medium size: (not correct calculations)
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

small size: (not correct calculations)
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

##### MainHeadings <H1 />

###### MainHeading1
```
<H11
    color = 'black'
    font = 'inherit'
    size = '7em'
    smSize =  '3.939em'
    mdSize = '5.25em'
    weight = '900'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H11>This is a Heading</H11>
```


###### MainHeading2
```
<H12
    color
    font = 'sans-serif'
    size = '6em'
    smSize =  '3.376em'
    mdSize = '4.501em'
    weight = '900'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H12>This is a Heading</H12>
```


###### MainHeading3
```
<H13
    color
    font = 'sans-serif'
    size = '7.5em'
    smSize =  '4.4em'
    mdSize = '5.7em'
    weight = '900'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H13>This is a Heading</H13>
```


###### MainHeading4
```
<H14
    color = 'lightgray'
    font = 'sans-serif'
    size = '7em'
    smSize =  '3.939em'
    mdSize = '5.25em'
    weight = '900'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor  = 'lightgray'
    >
```
This accepts and renders one child
```
<H14>This is a Heading</H14>
```


###### MainHeading5
```
<H15
    color
    stroke = '3px'
    font = 'sans-serif'
    size = '7em'
    smSize =  '3.939em'
    mdSize = '5.25em'
    weight = '900'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H15>This is a Heading</H15>
```


##### Headings <H2 />
###### Heading1
```
<H21
    color
    font = 'sans-serif'
    size = '5.646em'
    smSize =  '3em'
    mdSize = '4em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H21>This is a Heading</H21>
```


###### Heading2
```
<H22
    color
    font = 'sans-serif'
    size = '4.705em'
    smSize =  '2.7em'
    mdSize = '3em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H22>This is a Heading</H22>
```


###### Heading3
```
<H23
    color
    font = 'sans-serif'
    size = '6.1em'
    smSize =  '3.5em'
    mdSize = '4.5em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H23>This is a Heading</H23>
```


###### Heading4
```
<H24
    color = 'lightgray'
    font = 'sans-serif'
    size = '5.646em'
    smSize =  '3em'
    mdSize = '4em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor  = 'lightgray'
    >
```
This accepts and renders one child
```
<H24>This is a Heading</H24>
```


###### Heading5
```
<Heading5
    color
    stroke = '3px'
    font = 'sans-serif'
    size = '5.646em'
    smSize =  '3em'
    mdSize = '4em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H25>This is a Heading</H25>
```


##### SubHeadings <H3 />

###### SubHeading1
```
<H31
    color
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H31>This is a Heading</H31>
```


###### SubHeading2
```
<H32
    color
    font = 'sans-serif'
    size =  '2.9075em'
    smSize =  '2em'
    mdSize = '2.5em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H32>This is a Heading</H32>
```


###### SubHeading3
```
<H33
    color
    font = 'sans-serif'
    size = '3.9em'
    smSize =  '3em'
    mdSize = '3.5em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H33>This is a Heading</H33>
```


###### SubHeading4
```
<H34
    color = 'lightgray'
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor = 'lightgray'
    >
```
This accepts and renders one child
```
<H34>This is a Heading</H34>
```


###### SubHeading5
```
<H35
    color
    stroke = '3px'
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '600'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H35>This is a Heading</H35>
```


##### SubHeadings <H4 />

###### SecondarySubHeading1
```
<H41
    color
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '100'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H41>This is a Heading</H41>
```

###### SecondarySubHeading2
```
<H42
    color
    font = 'sans-serif'
    size = '2.9025em'
    smSize =  '2em'
    mdSize = '2.5em'
    weight = '100'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H42>This is a Heading</H42>
```


###### SecondarySubHeading3
```
<H43
    color
    font = 'sans-serif'
    size = '3.9em'
    smSize =  '3em'
    mdSize = '3.5em'
    weight = '100'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H43>This is a Heading</H43>
```


###### SecondarySubHeading4
```
<H44
    color = 'lightgray'
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '100'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor  = 'lightgray'
    >
```
This accepts and renders one child
```
<H44>This is a Heading</H44>
```


###### SecondarySubHeading5
```
<H45
    color
    stroke = '3px'
    font = 'sans-serif'
    size = '3.489em'
    smSize =  '2.5em'
    mdSize = '3em'
    weight = '100'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<H45>This is a Heading</H45>
```


#### Paragraphs (all names subject to change)

Each of these paragraphs follow a specific pattern:
Large size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333
medium size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333
small size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333

##### Paragraphs <p />

###### Paragraph1
```
<P1
    color =
    font = 'serif'
    size = '1.333em'
    smSize =  '1.3em'
    mdSize = '1.3em'
    lineHeight = '1.5em'
    weight = '400'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '5px'
    margin = '1px'
    width = 'inherit'
    height
    hadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<P1>This is a Heading</P1>
```


###### Paragraph2
```
<P2
    color
    font = 'serif'
    size = '0.95em'
    smSize =  '0.95em'
    mdSize = '0.95em'
    lineHeight = '1.22em'
    weight = '400'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '5px'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<P2>This is a Heading</P2>
```


###### Paragraph3
```
<P3
    color
    font = 'serif'
    size = '1.6em'
    smSize =  '1.5em'
    mdSize = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '5px'
    margin = '1px'
    width = 'inherit'
    height
    sShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<P3>This is a Heading</P3>
```


###### Paragraph4
```
<P4
    color = 'lightgray'
    font = 'serif'
    size = '1.6em'
    smSize =  '1.5em'
    mdSize = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '5px'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor = 'lightgray'
    >
```
This accepts and renders one child
```
<P4>This is a Heading</P4>
```


###### Paragraph5
**Not Finished**
```
<P5
    color
    font = 'serif'
    size = '1.333em'
    smSize =  '1.3em'
    mdSize = '1.3em'
    lineHeight = '1.5em'
    weight = '400'
    variant
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '5px'
    margin = '1px'
    width = 'inherit'
    height
    shadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    hoverColor
    >
```
This accepts and renders one child
```
<P5>This is a Heading</P5>
```

##### Pull Quotes
**Not Finished**
###### Pullquote1

###### Pullquote2


### Image Specific

There are currently six predefined image sizes.
Large Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Medium Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Small Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px


#### Images (all names subject to change)

##### CircleImage
```
<CircleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<CircleImage>
{image}
this is the alt tag
</CircleImage>
```


##### RoundedImage
```
<RoundedImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RoundedImage>
{image}
this is the alt tag
</RoundedImage>
```


##### SquareImage
```
<SquareImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<SquareImage>
{image}
this is the alt tag
</SquareImage>
```


##### OvalImage
**Not Finished**
```
<OvalImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<OvalImage>
{image}
this is the alt tag
</OvalImage>
```


##### RectangleImage
```
<RectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RectangleImage>
{image}
this is the alt tag
</RectangleImage>
```


##### RoundedRectangleImage
```
<RoundedRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<RoundedRectangleImage>
{image}
this is the alt tag
</RoundedRectangleImage>
```


##### TallRectangleImage
```
<TallRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<TallRectangleImage>
{image}
this is the alt tag
</TallRectangleImage>
```


##### TallRoundedRectangleImage
```
<TallRoundedRectangleImage
    size = 'sm'
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: image and alt tag
```
<TallRoundedRectangleImage>
{image}
this is the alt tag
</TallRoundedRectangleImage>
```


##### Figure
**Not Finished**
```
<Figure
    figid
    figCapid
    figClassName
    figCapClassName
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts and renders two children: first child and a caption child
```
<Figure>
    <SquareImage size="md">
        {image}
        a neat alt tag
    </SquareImage>
    This is a neat caption
</Figure>

```


#### Heroes
These were made to integrate with the Carousels, but can be used where ever.

##### Hero1
```
<Hero1
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'cover'
    width = '100%'
    height = 'inherit'
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero1
    image={`url(${image})`}>
    ?
    ?
    ?
</Hero1>
```


##### Hero2
**Not Finished**
```
<Hero2
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'contain 80%'
    width = '100%'
    height = 'inherit'
    bottomBoxWidth = '100%'
    bottomBoxHeight = '25%'
    bottomBoxPadding
    bottomBoxBackgroundColor = 'rgba(0, 0, 0, 0.5)'
    heroid
    bottomid
    heroClassName
    bottomClassName
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts one child and a background
```
<Hero2
    image={`url(${image})`}>
    ?
</Hero2>
```


##### Hero3
**Not Finished**
```
<Hero3
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero3
    image={`url(${image})`}>
    ?
</Hero3>
```


##### Hero4
```
<Hero4
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    backgroundSize = 'cover'
    width = '100%'
    height
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero4
    image={`url(${image})`}>
    ?
</Hero4>
```


##### Hero5
```
<Hero5
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width 
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts seven children and a background
```
<Hero5
    image={`url(${image})`}>
    ?
    ?
    ?
    ?
    ?
    ?
    ?
</Hero5>
```


### Navigation Specific

#### Navbars

##### Navbar1
```
<Navbar1
    position
    top
    left
    right
    bottom
    font = 'serif'
    totalWidth = '100%'
    navbarWidth = '100%'
    height
    display = 'flex'
    direction = 'row'
    align = 'center'
    columnAlign = 'center'
    margin = '0'
    padding = '0'
    itemSpacing = '10px 0'
    mainBackground = 'inherit'
    itemBackground = 'inherit'
    color = 'black'
    fontSize = 1em
    fontWeight = '100'
    fontVariant = 'none'
    count = '0'
    smDis = 'flex' (if no count set, if count > 0 then 'none')
    mdDis = 'flex'
    hoverColor
    hamSmDis = 'flex' (if no count set, then 'none')
    hamMdDis = 'none'
    hamTop = '7%'
    hamSmDis = 'flex'
    hamMdDis = 'none'
    hamShadow = '1px 2px 2px black'
    hamBackground = 'white'
    hamPosition = 'absolute'
    navid
    itemsid
    navClassName
    itemsClassName
    >
```
This accepts unlimited? children and renders them.
Will render anything beyond count into the ham menu.
```
<Navbar1
    count ='3'>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
<navbar1>
```


#### SubNavBars

##### SubNavBar1
**Still working on**
```
<SubNavbar1
    position = 'sticky'
    top = '-1px'
    left
    right
    bottom
    zIndex= '200'
    font = 'serif'
    totalWidth = '100%'
    navbarWidth = '100%'
    height
    display = 'flex'
    direction = 'row'
    align = 'center'
    columnAlign = 'center'
    margin = '0'
    padding = '0'
    itemSpacing = '10px 0'
    mainBackground = 'black'
    itemBackground = 'inherit'
    color = 'whitesmoke'
    fontSize = 0.9em
    fontWeight = '100'
    fontVariant = 'none'
    navid
    itemsid
    navClassName
    listClassName
    itemsClassName
    smDis = 'none'
    mdDis ='flex'
    >
```
This accepts unlimited? children and renders them.
```
<SubNavbar1
    navbarWidth='70%'>
    <a href=''>Item1</a>
    <a href=''>Item2</a>
    <a href=''>Item3</a>
    <a href=''>Item4</a>
</SubNavbar1>
```
##### SubNavBar2
**will be added soon**


#### DropDownNavs (There needs to be an accesibility rework)

##### DropDownNav1
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav1
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 0 5px 5px'
    offset
    color = 'black'
    textAlign = 'left'
    margin
    padding
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A downward pointing arrow is rendered after title
```
<DropDownNav1>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav1>
```


##### DropDownNav3
**will be added soon**


##### DropDownNav5
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav5
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 5px 5px 0'
    offset
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A sideways pointing arrow is rendered after title
```
<DropDownNav5>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav5>
```


#### Brand
**Not Finished**

##### Brand1

##### Brand2

##### Brand3

##### Brand4

##### Brand5


### List Specific (possible rework expected)

#### Number List

##### NumberList1
```
<NumberList1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'decimal'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    id
    className
    >
```
This accepts unlimited? children split with \
```
<NumberList1>
    {'item1'}
    {'item2'}
    {'item3'}
</NumberList1>
```


##### NumberList2
**Not Finished**
```
<NumberList1
    listAmount = '1'
    id
    className
    >
```
This accepts unlimited? children split by the listAmount
```
<NumberList2>
    item1
    item2
    item3
</NumberList2>
```


##### NumberList3
```
<NumberList3
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'upper-roman'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    id
    className
    >
```
This accepts unlimited? children split with \
```
<NumberList3>
    {'item1'}
    {'item2'}
    {'item3'}
</NumberList3>
```


#### Bullet List

##### BulletList1
**Not Finished**
```
<BulletList1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'disc'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    itemPadding
    itemBGImage
    itemBGSize
    id
    className
    >
```
This accepts unlimited? children split with \
```
<BulletList1>
    {'item1'}
    {'item2'}
    {'item3'}
</BulletList1>
```


##### BulletList2
**Not Finished**
```
<BulletList2
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'square'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    itemPadding
    itemBGImage
    itemBGSize
    id
    className
    >
```
This accepts unlimited? children split with \
```
<BulletList1>
    {'item1'}
    {'item2'}
    {'item3'}
</BulletList1>
```


### Special Stuff

#### Carousels


##### Carousel1
```
<Carousel1
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    leftArrowid
    rightArrowid
    sliderid
    mainClassName
    leftArrowClassName
    rightArrowClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel1>
```


##### Carousel2
**Not Finished**
```
<Carousel2
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel2>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel2>
```


##### Carousel3
**Not Finished**
```
<Carousel3
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    leftArrowid
    rightArrowid
    sliderid
    mainClassName
    leftArrowClassName
    rightArrowClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel3>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel3>
```


##### Carousel4
**Not Finished**
```
<Carousel4
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel4>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel4>
```


##### Carousel5
```
<Carousel5
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel5>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel5>
```


#### Togglers


##### Toggler1
```
<Toggler1
    position = 'fixed'
    width = '100px'
    height = '100vh'
    top = '0'
    boxShadow = '1px 2px 2px black'
    background = 'white'
    buttonText = 'Toggler1'
    bColor = 'black',
    bBackground,
    bFontSize = '1.333em'
    bFontVariant,
    bFontWeight,
    bTextShadow,
    bMargin,
    bPadding,
    bBorderLeft,
    bBorderRight,
    bBorderTop,
    bBorderBottom,
    bBorder,
    border,
    bLeft,
    bRight,
    bTop,
    bRight,
    bTop,
    bBotton,
    left
    right
    mainid
    toggleid
    titleid
    titleClassName
    mainClassName
    toggleClassName
    >
```
This accepts multiple children, a holder can be placed to divide up the space
```
<Toggler1
    buttonText = "Click Me!!">
    <Holder5>
        <Navbar1>
            <a href="">Item1</a>
            <a href="">Item2</a>
            <a href="">Item3</a>
            <a href="">Item4</a>
        </Navbar1>
        <P1>
            some neat sentence
        </P1>
    </Holder5>
</Toggler1>
```


##### Toggler2
```
<Toggler2
    width = '400px'
    height
    togglePlace = 'column'
    background = 'white'
    buttonText = 'Toggler2'
    bColor = 'black',
    bBackground,
    bFontSize = '1.333em'
    bFontVariant,
    bFontWeight,
    bTextShadow,
    bMargin,
    bPadding,
    bBorderLeft,
    bBorderRight,
    bBorderTop,
    bBorderBottom,
    bBorder,
    border,
    bLeft,
    bRight,
    bTop,
    bRight,
    bTop,
    bBotton,
    position
    padding
    offset (will auto add + '%')
    boxShadow = '1px 2px 2px black'
    mainid
    toggleid
    titleid
    titleClassName
    mainClassName
    toggleClassName
    >
```
This accepts multiple children, a holder can be placed to divide up the space
```
<Toggler2
    buttonText = "Click To See"
    offset = "20"
    >
    A Paragraph of info can also be placed in here and render to look well and stuff.
</Toggler2>
```


##### Toggler3
**Not Finished**
```
<Toggler3
    width = '400px'
    height
    background = 'white'
    buttonText = 'Toggler2'
    position
    textVertical = 'center'
    textHorizontal = 'center'
    textHeight = '200px'
    textWidth = '300px'
    mainid
    toggleid
    panelClassName
    mainClassName
    toggleClassName
    >
```
This accepts multiple children split by \, odd children are rendered as panel names, and even children are rendered as the content of the panel.
```
<Toggler3>
    {'title'}
    {'some text'}
    {'another title'}
    {'moar text'}
    {'last title'}
    {'last text'}
    {'not last'}
    {'most last text'}
</Toggler3>
```


##### Toggler4
**Not Finished**

#### Moduls
**Not Finished**

##### Modul1
```
<Modul1
    boxTop = '40%'
    boxRight = '45%'
    boxLeft
    boxBottom
    boxPosition = 'fixed'
    boxBackground = 'white'
    boxHeight = '200px'
    boxWidth = '200px'
    boxAlign = 'center'
    boxJustify = 'center'
    buttonText = 'Modul 1'
    boxShadow = '1px 2px 2px black'
    btnBackground = 'white'
    bColor = 'black'
    bBackground
    bFontSize
    bFontVariant
    bFontWeight
    bTextShadow
    bMargin
    bPadding
    bBorderLeft
    bBorderRight
    bBorderTop
    bBorderBottom
    boxId
    titleId
    backId
    titleClassName
    boxClassName
    backClassName
    >
```
This accepts multiple children, a holder can be placed to divide up the space
```
<Modul1
    buttonText="Click Me!">
    <P1>This renders in the middle with a X in the upper right corner</P1>
</Modul1>
```
##### Modul2
**Started**

#### Buttons
**Still working on**
```
<FlatButton1
    onClick
    id
    className
    width
    height
    fontSize = '20px'
    color = 'black'
    hoverColor = 'white'
    hoverBackground = 'black'
    background = 'white'
    borderRadius = '28px'
    border = 'solid #000000 2px'
    padding = '10px 20px 10px 20px'
    margin
    aniCount,
    aniTime,
    aniName,
    aniDur,
    transformOrigin,
    aniFillMode,
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts and renders one child
```
<FlatButton1
    onClick={this.somethingToDo}>
    this is a button
</FlatButton1>
```

#### Tables


##### Table1
**Not Finished**
```
<Table1
    columns="3"
    rows= "3"
    head
    body
    tableId
    mainId
    mainClassName
    tableClassName
    >
```
This accepts unlimited? children and renders based on column and row value split by '\'
```
<Table1>
    {'head1'}
    {'head2'}
    {'head3'}
    {'body1'}
    {'body2'}
    {'body3'}
    {'body4'}
    {'body5'}
    {'body6'}
</Table1>
```
##### Table2
**Not Finished**
```
<Table2
    columns="3"
    rows= "3"
    body
    tableId
    mainId
    mainClassName
    tableClassName
    >
```
This accepts unlimited? children and renders based on column and row value split by '\'
```
<Table2>
    {'head1'}
    {'body1'}
    {'body2'}
    {'head2'}
    {'body3'}
    {'body4'}
    {'head3'}
    {'body5'}
    {'body6'}
</Table2>
```

## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog
**0.3.6**
* Currently best version with single Holder & Container


**0.2.0**
* Added media queries to containers, holders, headings, and pargaraphs
* added display ability through props

**0.1.0**
* major name changes will break all prior versions, see changelog
* Heading/Paragraph blocks have text align, height and width props available
* css reset hooked up to every block

**0.0.12**
* documentation added to readme

**0.0.10** works
* this is the furthest back that is mostly working


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give acknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object
* Massive credit for the animations to Daniel Eden - animate.css - http://daneden.me/animate

## Changelog
**0.3.6**
* Don't use versions 0.3.0-0.3.4 - they don't work sadly
* Added default holder & container condition to fix breaking with no children
* Container & Holder sm & md flexDirection updated
* Adding React.Fragment to check it out on Headers, Paragraphs, Holders, and Containers
* Adjusted padding & margin on Paragraphs and Headers
* Added flex: 1 as default to Paragraph and Headers to fill space completely
* Added fontVariant as props.variant for Paragraphs and Headers
* Added position on navbar and subnavbar but sticky needs better implementation for use. Fixed works though with props.left || .right || .bottom || .top

* Updated Readme for changes


**0.3.0**
* Removed Containers 1-5 for a dynamic Container
* Removed Holders 1-13 for a dynamic Holder
* full implementation for Container still not available, but the Holder is close to being done, it still needs optimization. Will Test current implemtation against other ways until best results are achieved.
* updated readme for changes

**0.2.9**
* added left prop to ham navbar1 to try and fix issue

**0.2.8**
* fixed ham navigation menu and added ham props
* animation not currently working with ham menu on navbar1
* added width and height props on button
* readme updated with subnav, button, and hamnav

**0.2.7**
* Added animation file, selected animations from animation.css
* Added animation placeholders to allow for easy animation
* readme updated for notes on use
* updated horizontal ticker to work with new animation library
* cursor: pointer added to flat button
* minor update to toggler 2
* dropdown child intake now with lifecycle
* minor animations added to dropdowns and carousel 1 & 5
* iteration count will stop on mouse over of carousel1 and will not start back up


**0.2.5**
* Added FlatButton1 for intial button testing and integration
* Added componentDidMount && componentWillRecieveProps to Holders and Containers
* Slight hack on navbar1 to work for current personal project with DevMountain. Needs more work to function correctly.
* SubNavbar1 now in first stages of being responsive
* Brand blocks are starting to get worked on, added size prop and outline for responsive behavior, but not responsive yet.
* Added return to Carousel blocks to see if it fixes unmounting error, will most likely need a lot more work.
* adjusted setting for toggler 2 to function better with absolute positioning. These changes are not currently usable through props and are hard coded, this will change soon.
* Started on Modul2, not implemented yet
* improved table of contents
* updated readme for changes

**0.2.3**
* Changed input so a backslash is not needed to seperate child elements, instead use {''} for anything not already wrapped in jsx or another component
* updated pull quote 1 margin so the name is not cut off
* updated pull quote 2 margin so it centers itself
* updated heading 5's to be outlines, outline color is controlled through prop stroke='color'
* dropdown nav 5 updated to have border rounding on outside borders and a shadow
* responsive navbar1 now available - needs massive work, several issues are known and will hopefully be worked out in a few days

* readme updated with table of contents linking to places
* updated readme for changes

**0.2.2**
* added overflow hidden to holders and containers
* add border, borderleft, borderright, bordertop, and borderbottom to holders and containers
* changed default sm & md flexdirection values and added props to adjust
* changed md max from 1200 to 760
* Hover states added to headings and paragraphs
* h3 default weight changed to 600
* h4 default weight changed to 100
* added pull quotes styles to superstylesheet

* updated readme for changes

**0.2.0**
* added smdis && mddis to every container, holder, heading blocks, paragraph blocks, and image blocks
* added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px
* adding in placeholder sizes until more responsive testing occurs
* readme updated for changes
* new animation and responsive design sections added to readme

**0.1.6**
* added lifecycle componentWillUnmount to carousels to stop interval
* added lifecycle componentWillRecieveProps to most blocks to allow for render updates

**0.1.5**
* added Table1 and Table2
* added animation path to blocks (feature not fully implemented)
* added the outline for animation integration into basic blocks (feature not fully implemented)
* moved most children to array into componentdidmount to set children on state
* fixed navbar1 classname & id
* lowered dropdownnav5 default text size
* fixed horizontal ticker 1
* readme updated for changes

**0.1.4**

* fixed dropdownnav1
* added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc...
* changed toggler1 position to fixed from absolute, still changeable through props.
* added modul1, popup with an x close in the upper right corner
* navigation font sizes adjusted (needs more work)

* readme updated for changes


**0.1.3**

* Fixed Holders 8-13 block 5 styles
* got rid of a tags in Brands, will rework Brand Blocks
* text-shadow added to headings and paragraphs
* border, border-left, border-right, border-top, border-bottom added to headings, paragraphs, holders, and toggler 1 & 2
* added box-shadow to dropdownnav1 and toggler1
* border-radius, text-align, and color added to dropdownnav1
* color also added to navbar, subnav 1 & 2
* got rid of default yellow hover highlight will be allow for easier adjusting of this soon
* toggler 1 now has z-index of 2000
* color, border, weight, shadow, margin, padding, variant, and background added to the toggler 1 & 2 button

* readme updated to reflect the changes

**0.1.0**
* text align added to heading and paragraph blocks
* Width and Height now available for heading and paragraph blocks

* mainHeading name changed to H1 + num
* Heading name changed to H2 + num
* SubHeading name changed to H3 + num
* SecondarySubHeading name changed to H4 + num
* Paragraph name changed to P + num
* PullQuote name changed to PLQ + num

* z Index of 1000 added to the DropDownNav1
* z Index of 200 added to the SubNavBAr1, this fixes a stacking issue

* css reset hooked up to every block

* readme updated to reflect changes

* fixed Holder4 block 3-5 styles

**0.0.12**
* readme was updated with minor documentation

**0.0.10**
* baselineish that things are mostly working