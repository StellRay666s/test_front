import React from 'react'
import style from './index.module.css'

export const Footer = () => {
  return (
    <div className={style.wrapper_footer} >
      <div className={style.footer_content}>
        <div className={style.footer_first_column}>
          <img src='/images/logo 1.png'  />
          <p>From Subasta tu casa we help you to sell your property in a different way, if it is worth more, they will pay you more and if it is worth less, you can know how much they can pay you for it, and if you are a buyer, you will pay a fair price, no more and no less.</p>
        </div>
        <div className={style.second_column}>
          <h3>Sections</h3>
          <div className={style.footer_block_links}>
          <ul><li>Auctions</li><li>My auctions</li></ul>
          <ul><li>My searches</li><li>My auctions</li></ul>
          <ul><li>My bids</li><li>Services</li></ul>
          </div>
        </div>
        <div className={style.third_column}>
          <h3>Folow us on:</h3>
       <div className={style.footer_image_socnetwork}><img src='/images/facebook.png'/><img src='/images/instagram.png'/></div>
        </div>  
      </div>
      <div className={style.footer_line}></div>
      <div className={style.bottom_content} >
          <span>Legal text of the page</span>
          <div className={style.payment_method}>
              <img src='/images/master_card_logo.png'/>
              <img src='/images/visa_logo.png'/>
              <img/>
          </div>
      </div>
    </div>
  )
}
