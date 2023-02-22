import React from 'react'
import Header from './Header';
import {Product} from './Product';
// import '../styles/App.css';
import { Banner } from './Banner';
import {Footer} from './Footer';
const Home = () => {


  return (<>
  <Header/>
  <Banner/>
  <Product/>
  <Footer/>
  </>
  )
}


export default Home;