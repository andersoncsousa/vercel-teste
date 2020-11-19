import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../Components/layout'

export default class primeiroPost extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Caiqueira Show</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Link href="#">
                    <a className="foo" target="_blank" rel="noopener noreferrer">
                        Primeiro post do caiqueeeiraaaaaa
                    </a>
                </Link>
                <Layout>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>
                </Layout>
            </>
        )
    }
}
