
export const CoinRow = ({coin, index}) => {
  console.log(coin,index)
  return (
    <tr>
      <td className="ms-2">{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "3%" }}/>
        <span className="ms-4 fw-bold ">{coin.name}</span>
        <span className="ms-3 fst-italic">{coin.symbol}</span>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }>
        {coin.price_change_percentage_24h}
      </td>
      <td>
        ${coin.total_volume.toLocaleString()}
      </td>
    </tr>
  )
}
