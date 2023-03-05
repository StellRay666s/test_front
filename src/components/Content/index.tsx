import React from 'react'
import { Deposite } from '../Deposits'
import { Pagination } from '../Pagination'
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

export const Content = () => {
  const [deposites, setDeposites] = React.useState<Deposite[]>([])

async function getData(){
  try {
    const response = await axios.get("http://localhost:8000/deposits");

    if (response.status === 200) {
      setDeposites(response.data)
    }
  } catch (err) {
    console.log(err);
  }
}

  React.useEffect(()=>{
  getData()
},[])
  return (
    <div className={style.wrapper_content} >
        <h1>My deposits</h1>
        <div>
  {deposites.map(item=><Deposite title={item.title} price={item.price} reference={item.reference} status={item.status} depositeStatus={item.depositeStatus} dateDeposite={item.dateDeposite} />)
          } 
            <Pagination/>
        </div>
    </div>
  )
}
