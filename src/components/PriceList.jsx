import React from 'react';
import PropTypes from 'prop-types';
import IconGenerator from './IconGenerator';
import { TYPE_INCOME } from '../utility';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="col-1">
              <IconGenerator
                type="code"
                backgroundColor="#007bff"
                className="rounded-circle"
              />
            </span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 font-weight-bold">
              {item.category.type === TYPE_INCOME ? '+' : '-'}
              {item.price}$
            </span>
            <span className="col-2">{item.date}</span>
            <a href="#/" onClick={() => onModifyItem(item)}>
              <IconGenerator
                type="edit"
                backgroundColor="#28a745"
                className="rounded-circle"
              />
            </a>
            <a href="#/" onClick={() => onModifyItem(item)}>
              <IconGenerator
                type="delete"
                backgroundColor="#dc3545"
                className="rounded-circle"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default PriceList;
