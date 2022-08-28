import './style.css'

export default function Currency() {
  const currency = ['USD MOEX 53.52 +0.09', 'EUR MOEX 70.86 +0.14', 'НЕФТЬ 64.90 +1.63%', '...']
  return (
    <ul className="currency">
      {currency.map((el, i) => (
        <li key={i}>
          <a href="#s">{el}</a>
        </li>
      ))}
    </ul>
  )
}