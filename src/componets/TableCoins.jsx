import { CoinRow } from "./CoinRow"

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']

export const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) |
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins) return <div>no coins</div>
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr className=" text-nowrap bd-highlight">
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  )
}
export default TableCoins