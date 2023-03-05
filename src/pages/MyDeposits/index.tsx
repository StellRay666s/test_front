import React from 'react'
import { Content } from '../../components/Content'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import style from './index.module.css'
import axios from 'axios'

export interface Deposite {
  title: string;
  reference: string;
  status: boolean;
  depositeStatus: boolean;
  dateDeposite: string;
  price: number;
}


export const MyDeposits = () => {

  return (
    <div>
    <Header/>
    <div className={style.content_background}>
    <Content/>
    <Footer/>
    </div>
    </div>
  )
}
