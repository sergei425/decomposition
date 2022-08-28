import Date from '../date/'
import './style.css'

export default function Presently() {
  const currency = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем', ]
  return (
    <div className="presently">
      <ul className="presently-list">
        {currency.map((el, i) => (
          <li key={i}>
            <a href="#s">{el}</a>
          </li>
        ))}
      </ul>
      <Date/>
    </div>
  );
}