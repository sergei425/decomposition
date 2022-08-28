import './style.css'
import HotNewsList from './../hot-news-list/index';
import Currency from '../currency';
import Presently from './../presently/index';

export default function HotNews() {
  return (
    <div className="header__hot-news">
      <div className="header__hot-wrap">
        <Presently/>
        <HotNewsList/>
        <Currency/>
      </div>
      <div className="mistakes">
        work on mistakes
      </div>
    </div>
  )
}