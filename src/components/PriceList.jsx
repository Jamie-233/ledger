import React from 'react'
import IconGenerator from './IconGenerator'

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="col-1">
              <IconGenerator type="code" style={{ background: '#007bff', padding: '5px' }} />
            </span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 font-weight-bold">
              {item.category.type === 'income' ? '+' : '-'}
              {item.price}$
            </span>
            <span className="col-2">{item.date}</span>
            <a href="#/" onClick={() => onModifyItem(item)}>
              <IconGenerator type="edit" style={{ background: '#28a745', padding: '5px' }} />
            </a>
            <a href="#/" onClick={() => onModifyItem(item)}>
              <IconGenerator type="delete" style={{ background: '#dc3545', padding: '5px' }} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PriceList
