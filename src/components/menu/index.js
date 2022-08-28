import './style.css'

export default function Menu() {
  const menu = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'еще']
  return (
    <ul className="menu">
      {menu.map((el, i) => (
        <li key={i}>
          <a href="#s">{el}</a>
        </li>
      ))}
    </ul>
  )
}