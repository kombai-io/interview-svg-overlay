import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FullSvg } from '../src/FullSvg'

const svg = require('../data/sample1.svg.js')

const Home: NextPage = () => {
  return (
    <FullSvg svg={svg}/>
  )
}

export default Home
