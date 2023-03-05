import { useState } from "react";
import style from "./index.module.css";

import { NewAuction } from "../NewAuction";
import { Arrow } from "../Arrow";
import { ProfilePhoto } from "../ProfilePhoto";
import { Search } from "../Search";

export const Header = () => {
  const link = [
    "Home",
    "Auctions",
    "My auctions",
    "My searches",
    "My deposits",
    "My bids",
    " Services",
  ];
  const [select, setSelect] = useState<number>(4);

  return (
    <div className={style.header_wrapper}>
      <div className={style.header_content}>
        <div className={style.header_top}>
          <img
            className={style.header_logo}
            alt="logo"
            src="/images/logo 1.png"
          />
          <div className={style.header_right}>
            <div className={style.search_auction}>
              <Search />
              <NewAuction />
            </div>
            <div className={style.arrow_profil_photo}>
              <Arrow />
              <ProfilePhoto />
            </div>
          </div>
        </div>
        <div className={style.header_line}></div>
        <div className={style.header_bottom}>
          <ul className={style.ul_link}>
            {link.map((item, index) => (
              <li
                className={select === index ? style.active_link : style.link}
                onClick={() => setSelect(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
