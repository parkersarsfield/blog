import React, {Fragment} from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Typist from 'react-typist'
import { rhythm } from '../utils/typography'

import bg from '../media/bg.jpg'
import 'react-typist/dist/Typist.css'

const heroStyle = css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    background: '#000',
    ':after': {
        content: ' ',
        position: 'absolute',
        background: 'red',
        top: 0,
        width: '100%',
        height: '100%',
        background: `url(${bg})`,
        backgroundPosition: 'center',
        opacity: '.2',
    }
})

const contentStyle = css({
    width: '100%',
    position:'absolute',
    //display: 'grid',
    //g ridTemplateColumns: 'repeat(12, 1fr)',
    zIndex: 1,
    color: '#eee',
    textAlign: 'center',
    fontWeight: 'lighter',
    fontSize: rhythm(1),
    maxWidth: '100%',
})

const Typer = ({config, textList, restart}) => {
    return (
        <Typist {...config}>
            {textList.map(thing => <span>{thing}<Typist.Backspace delay={2000} count={thing.length +1}/></span>)}
        </Typist>
    )
}

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            isTyping: true
        }
    }

    render() {
    const thingsIAm = ['software developer', 'sneakerhead', 'musician']

    const restart = () => {
        this.setState({isTyping: false})
        this.setState({isTyping: true})
    }

    const typerConfig = {
        avgTypingDelay: 100,
        onTypingDone: restart,
    }

    return (
        <div css={heroStyle}>
            <div css={contentStyle}>
                <p>Hi! I'm <span style={{fontWeight: 'normal'}}>Parker</span>. I am a:</p>
                {this.state.isTyping ? <Typer config={typerConfig} textList={thingsIAm} /> : null }
            </div>
        </div>
    )
    }
}
