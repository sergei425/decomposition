export default function HotNewsList() {
  const menu = ['Путин упростил...', 'В команде Зеленского...', '"Турпомощь" прокоментировала...', 'Суд закрыл дело...', 'На Украине призвали...']
  return (
    <ul className="news-list">
      {menu.map((el, i) => (
        <li key={i}>
          <a href="#s">{el}</a>
        </li>
      ))}
    </ul>
  )
}