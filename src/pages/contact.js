import React from 'react'
import {css} from 'glamor'

const form = css({
    color: 'red'
})

const Contact = () => {
    return (
        <div css={form}>
            <form name="contact" method="POST" netlify>
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default Contact
