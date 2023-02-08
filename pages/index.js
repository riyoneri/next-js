import { Fragment } from "react"

import Link from 'next/link'

const HomePage = () => {
    return <Fragment>
        <h1>This is Home Page</h1>
        <ul>
            <li>
                <Link href="/news/next-js-is-a-great-framework">Nextjs is a great framework</Link>
            </li>
            <li>
                <Link href="/news/something-else">Something else</Link>
            </li>
        </ul>
    </Fragment>
}

export default HomePage