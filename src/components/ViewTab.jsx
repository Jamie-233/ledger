import React from 'react';
import PropTypes from 'prop-types';
import IconGenerator from './IconGenerator';
import { LIST_VIEW, CHART_VIEW } from '../utility';

const generateLinkClass = (current, view) => {
  return current === view ? 'nav-link active' : 'nav-link';
};

const ViewTab = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, LIST_VIEW)}
          onClick={e => onTabChange(e, LIST_VIEW)}
          href="#/"
        >
          <IconGenerator type="paper" color="#007bff" />
          LIST_VIEW
        </a>
      </li>
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, CHART_VIEW)}
          onClick={e => onTabChange(e, CHART_VIEW)}
          href="#/"
        >
          <IconGenerator type="pie" color="#007bff" />
          CHART_VIEW
        </a>
      </li>
    </ul>
  );
};

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default ViewTab;
