# react-stylux

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. It should also be noted that no items are responsive, and are only psuedo responsive to the extent that flex-wrap is responsive. 

Utilizing three simple component types, this project simplifies layout and front-end considerations for react projects. The three component types are: containers (subject to change), holders, and blocks. Containers (subject to change) define the horizonal space and act as a wrapper for all blocks. Holders then go inside of the container to define the space for the blocks. Holders can go inside of Holders to further define space. Each holder has a pre determinded child length and will render children placed into the holder.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Once you have run create-react-app, then you can use stylux, just:

```
npm install --save react-stylux
```
## How To Use Stylux

### Included in the base version of react-stylux is:
* Containers 1-5
* Holders 1-13
* MainHeading (subject to change) 1-5
* Heading (subject to change) 1-5
* SubHeading (subject to change) 1-5
* SecondarySubHeading (subject to change) 1-5
* Paragraphs (subject to change) 1-5
* PullQuotes (subject to change) 1-2
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
* Modul 1
* Modul 2
* Pull Quote 1
* Pull Quote 2
* Table 1
* Table 2
* Table 3
* Pie Chart 1


#### Currently almost done:
* Horizontal Ticker 1
* Toggler 1
* Toggler 2
* Toggler 3
* Carousel 2
* Carousel 3
* Carousel 4
* Oval Image
* NumberList 2


### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Layout Specific


#### Containers (possible name change expected)


##### Container1
```
<Container1
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    textColor = 'yellow'
    background = 'white'
    padding = '0'
    margin = '0'
    >
```
This accepts one child and renders it
```
<Container1>
    <Holder1>
    </Holder1>
</Container1>
```

##### Container2
```
<Container2
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 ='center'
    block2 ='1'
    justifyBlock2 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Container2>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container2>
```

##### Container3
```
<Container3
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 ='1'
    justifyBlock3 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin ='10px 0'
    >
```
This accepts three children and renders them
```
<Container3>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container3>
```

##### Container4
```
<Container4
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Container4>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container4>
```

##### Container5
```
<Container5
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Container5>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container5>
```


#### Holders 

##### Holder1
```
<Holder1
    display = 'flex'
    direction = 'row'
    block1direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Holder1>
    <Block2 />
    <Block2 />
</Holder1>
```

##### Holder2
```
<Holder2
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts three children and renders them
```
<Holder2>
    <Block2 />
    <Block2 />
    <Block2 />
</Holder2>
```

##### Holder3
```
<Holder3
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Holder3>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder3>
```

##### Holder4
```
<Holder4
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Holder4>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder4>
```

##### Holder5
```
<Holder5
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Holder5>
    <Block2 />
    <Block2 />
</Holder5>
```

##### Holder6
```
<Holder6
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts three children and renders them
```
<Holder6>
    <Block2 />
    <Block2 />
    <Block2 />
</Holder6>
```

##### Holder7
```
<Holder7
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Holder7>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder7>
```

##### Holder8
```
<Holder8
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Holder8>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder8>
```

##### Holder9
```
<Holder9
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    justifyBlock6 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts six children and renders them
```
<Holder9>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder9>
```

##### Holder10
```
<Holder10
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    justifyBlock7 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts seven children and renders them
```
<Holder10>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder10>
```

##### Holder11
```
<Holder11
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    justifyBlock8 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts eight children and renders them
```
<Holder11>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder11>
```

##### Holder12
```
<Holder12
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    justifyBlock8 = 'center'
    alignBlock9 = 'center'
    block9 = '1'
    justifyBlock9 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts nine children and renders them
```
<Holder12>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder12>
```

##### Holder13
```
<Holder12
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    justifyBlock8 = 'center'
    alignBlock9 = 'center'
    block9 = '1'
    justifyBlock9 = 'center'
    alignBlock10 = 'center'
    block10 = '1'
    justifyBlock10 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts ten children and renders them
```
<Holder13>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder13>
```


### Text Specific

#### Headings (all names subject to change)

Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

##### MainHeadings <H1 />

###### MainHeading1
```
<MainHeading1
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<MainHeading1>This is a Heading</MainHeading1>
```


###### MainHeading2
```
<MainHeading2
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<MainHeading2>This is a Heading</MainHeading2>
```


###### MainHeading3
```
<MainHeading3
    color = 'black'
    font = 'sans-serif'
    size = '9em'
    weight = '900'
    display = 'flex'
    align = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<MainHeading3>This is a Heading</MainHeading3>
```


###### MainHeading4
```
<MainHeading4
    color = 'lightgray'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<MainHeading4>This is a Heading</MainHeading4>
```


###### MainHeading5
**Not Finished**
```
<MainHeading5
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<MainHeading5>This is a Heading</MainHeading5>
```


##### Headings <H2 />
**brokenish**
###### Heading1
```
<Heading1
    color = 'black'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Heading1>This is a Heading</Heading1>
```


###### Heading2
```
<Heading2
    color = 'black'
    font = 'sans-serif'
    size = '4.705em'
    weight = '600'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Heading2>This is a Heading</Heading2>
```


###### Heading3
```
<Heading3
    color = 'black'
    font = 'sans-serif'
    size = '6.775em'
    weight = '600'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Heading3>This is a Heading</Heading3>
```


###### Heading4
```
<Heading4
    color = 'lightgray'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Heading4>This is a Heading</Heading4>
```


###### Heading5
**Not Finished**
```
<Heading5
    color = 'black'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Heading5>This is a Heading</Heading5>
```


##### SubHeadings <H3 />

###### SubHeading1
```
<SubHeading1
    color = 'black'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SubHeading1>This is a Heading</SubHeading1>
```


###### SubHeading2
```
<SubHeading2
    color = 'black'
    font = 'sans-serif'
    size = '2.9075em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SubHeading2>This is a Heading</SubHeading2>
```


###### SubHeading3
```
<SubHeading3
    color = 'black'
    font = 'sans-serif'
    size = '4.187em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SubHeading3>This is a Heading</SubHeading3>
```


###### SubHeading4
```
<SubHeading4
    color = lightgray'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SubHeading4>This is a Heading</SubHeading4>
```


###### SubHeading5
**Not Finished**
```
<SubHeading5
    color = 'black'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SubHeading5>This is a Heading</SubHeading5>
```


##### SubHeadings <H4 />

###### SecondarySubHeading1
```
<SecondarySubHeading1
    color = 'black'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SecondarySubHeading1>This is a Heading</SecondarySubHeading1>
```

###### SecondarySubHeading2
```
<SecondarySubHeading2
    color = 'black'
    font = 'sans-serif'
    size = '1.7975em'
    weight = '200'
    display = 'flex'
    align = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SecondarySubHeading2>This is a Heading</SecondarySubHeading2>
```


###### SecondarySubHeading3
```
<SecondarySubHeading3
    color = 'black'
    font = 'sans-serif'
    size = '2.588em'
    weight = '200'
    display = 'flex'
    align = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SecondarySubHeading3>This is a Heading</SecondarySubHeading3>
```


###### SecondarySubHeading4
```
<SecondarySubHeading4
    color = 'lightgray'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SecondarySubHeading4>This is a Heading</SecondarySubHeading4>
```


###### SecondarySubHeading5
**Not Finished**
```
<SecondarySubHeading4
    color = 'black'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<SecondarySubHeading5>This is a Heading</SecondarySubHeading5>
```


#### Paragraphs (all names subject to change)

Each of these paragraphs follow a specific pattern:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333

##### Paragraphs <p />

###### Paragraph1
```
<Paragraph1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = '1.5em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '10px 10%'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Paragraph1>This is a Heading</Paragraph1>
```


###### Paragraph2
```
<Paragraph2
    color = 'black'
    font = 'serif'
    size = '0.9em'
    lineHeight = '1.22em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '10px 10%'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Paragraph2>This is a Heading</Paragraph2>
```


###### Paragraph3
```
<Paragraph3
    color = 'black'
    font = 'serif'
    size = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '10px 10%'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Paragraph3>This is a Heading</Paragraph3>
```


###### Paragraph4
```
<Paragraph4
    color = 'lightgray'
    font = 'serif'
    size = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '10px 10%'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Paragraph4>This is a Heading</Paragraph4>
```


###### Paragraph5
**Not Finished**
```
<Paragraph4
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = '1.5em'
    weight = '400'
    display = 'flex'
    align = 'center'
    padding = '10px 10%'
    margin = '0'
    id
    className
>
```
This accepts and renders one child
```
<Paragraph5>This is a Heading</Paragraph5>
```

##### Pull Quotes <blockquote />
**Not Finished**
###### Pullquote1

###### Pullquote2


### Image Specific

There are currently six predefined image sizes.
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
    bottomClassNAme
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
    fontSize = 1em
    fontWeight = '100'
    fontVariant = 'none'
    navid
    itemsid
    navClassName
    itemsClassName
    >
```
This accepts unlimited? children and renders them
```
<Navbar1>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
<navbar1>
```


#### SubNavBars

##### SubNavBar1
**will be added soon**

##### SubNavBar2
**will be added soon**


#### DropDownNavs (There needs to be an accesibility rework)

##### DropDownNav1
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav1
    background
    offset = '10px'
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
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
    offset
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
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
    item1\
    item2\
    item3\
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
    item1\
    item2\
    item3\
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
    item1\
    item2\
    item3\
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
    item1\
    item2\
    item3\
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
    position = 'absolute'
    width = '100px'
    height = '100vh'
    top = '0'
    background = 'white'
    buttonText = 'Toggler1'
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
        <Paragraph1>
            some neat sentence
        </Paragraph1>
    </Holder5>
</Toggler1>
```


##### Toggler2
```
<Toggler2
    width = '400px'
    height
    background = 'white'
    buttonText = 'Toggler2'
    position
    padding
    offset (will auto add + '%')
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
    title\
    some text\
    another title\
    moar text\
    last title\
    last text\
    not last\
    most last text
</Toggler3>
```


##### Toggler4
**Not Finished**

#### Moduls
**Not Finished**
* Modul1

* Modul2



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

**0.0.10** works
* this is the furthest back that is mostly working


## Authors

* **Christopher Fox** -
* **Kaycee Ingram** -


## License

**this will be updated with proper license**


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching us to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work


## Changelog

**0.0.12**
* readme was updated with minor documentation

**0.0.10**
* baselineish that things are mostly working