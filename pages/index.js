import {useState} from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../style/utils.module.css'

function Home(){
    return (
        <>
        <div>
            <h1>Caiqueraaaa</h1>
            <Contador/>
        </div>
        <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Caiqueira</p>
            <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>
        </Layout>
        </>
    )    
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>+</button>
        </div>
    )
}

export default Home