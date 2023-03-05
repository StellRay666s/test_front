import React from 'react'
import { DepositeStatus } from '../DepositStatus'
import style from './index.module.css'

export interface DepositeData {
    title: string;
    reference: string;
    status: boolean;
    depositeStatus: boolean;
    dateDeposite: string;
    price: number;
  }

export const Deposite = (item:DepositeData) => {
  return (
    <div className={style.deposite_wrapper} >
        <div className={style.deposite_left} > 
        <img src='/images/webaliser-_TPTXZd9mOo-unsplash 1.png' />
       <div className={style.title_description} ><h3>{item.title}</h3>
        <span>Reference: {item.reference}</span>
       </div>
       </div>
   
       <div className={style.deposite_status}>
            <DepositeStatus status={item.status}/>
       </div>
       <div className={style.deposite_right}>
        <div className={style.incorporated}>
            <div>{item.depositeStatus ? 'Incorporated' : 'Returned'}</div>
            <span>Deposite status</span>
        </div>
        <div className={style.incorporated}>
            <div>{item.dateDeposite}</div>
            <span>Date of deposite</span>
        </div>
        <div className={style.vertical_line}></div>
        <div className={style.incorporated}>
            <div>{item.price}</div>
            <span>quantity</span>
        </div>
       </div>
       </div>
   
  )
}
