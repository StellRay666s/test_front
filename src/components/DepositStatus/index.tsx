import React from 'react'
import style from './index.module.css'


export const DepositeStatus = ({status = false}) => {
  return (
    <div className={status?style.wrapper_deposite_status_active: style.wrapper_deposite_status_closed}>
        {status ? 'ACTIVE':'CLOSED' }
    </div>
  )
}
