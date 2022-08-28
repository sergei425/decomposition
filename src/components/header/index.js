import HotNews from '../hot-news/'
import Nav from '../nav'
import Search from '../search'

export default function Header() {
  return (
    <header className="header">
      <HotNews/>
      <div className="header__wrap">
        <div className="logo"></div>
        <Nav/>
        <Search/>
        <p>Найдется все. Например, <span>фаза луны сегодня</span></p>
      </div>
    </header>
  )
}