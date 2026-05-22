import data_product from '../assets/data'
import Item from '../items/Item'
import './Popular.css'

const Popular = () => {
  return (
    <div className='best-selling'>
      <h1>BEST SELLING : WOMEN</h1>
      <hr />
      <div className="best-selling-items">
        {data_product.map((item, i) => <Item key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>)}
      </div>
    </div>
  )
}

export default Popular
