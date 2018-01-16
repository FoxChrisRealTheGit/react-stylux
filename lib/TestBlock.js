import React from 'react';

export default class Block2 extends React.Component {
    render() {
        const block2 = {
            width: '100px',
            height: '100px',
            background: 'black',
            margin: '0 auto',
        }

        return (
            < section style={block2} >
                <div />
            </section >
        );
    }
}