import css from './TransactionHistory.module.css'
import clsx from 'clsx'

export default function TransactionHistory({ items }) {
  return (
    <table className={css.tableContainer}>
      <thead className={css.titleBox}>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.infoTransaction}>
        {items.map((elem) => (
          <tr key={elem.id} className={css.colorItem}>
            <td className={css.text}>{elem.type}</td>
            <td className={clsx(css.text, css.centerText)}>{elem.amount}</td>
            <td className={clsx(css.text, css.centerText)}>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
