import Head from 'next/head'
import Link from 'next/link'
import redirectCumtom from 'next/router'
import { Router } from 'next/dist/lib/router';
import "../style.css"
import { Button } from 'antd';


export default () =>
    <div>
        <Head>
            <title>My pages title</title>
        </Head>
        <div className="example">Hello World!</div>
        <div className="block" >
            <img className="" src="static/ดาว.jpg" ></img>
        </div>
        <div className="block" >
            <p>Welcome to next.js!</p>
        </div>
        <div className="box" >
        <Link href='/fetch?id=1'>
            <Button type="primary"> Button 1</Button>
        </Link>
        <Link href='/fetch?id=2'>
            <Button type="primary"> Button 2</Button>
        </Link>
        <Link href='/fetch?id=3'>
            <Button type="primary"> Button 3</Button>
        </Link>
        <Link href='/fetch?id=4'>
            <Button type="primary"> Button 4</Button>
        </Link>
        <Link href='/fetch?id=5'>
            <Button type="primary"> Button 5</Button>
        </Link>
        </div >
    </div>