import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default ({data}) => {
    console.log(data)
    return (<div>
        <h1>About Me</h1>
        <p>My name is Parker Sarsfield. I'm a software developer, musician, and a sneaker fanatic.</p>
        <p>I currently live in Nashville, TN, but I will be moving to Northern Virginia to start my career as a software engineer at Capital One.</p>
    </div>
    )
}


