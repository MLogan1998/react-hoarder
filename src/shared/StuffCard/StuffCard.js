import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../helpers/props/itemShape';
import './StuffCard.scss';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/mystuff/${item.id}`;
    return (
      <div className="card">
        <div className="card-body">
        <div className="card-title">
          <h4 className="text-center">{item.itemName}</h4>
        </div>
        </div>
        <div className="card-footer">
          <Link to={singleLink}><i className="fas fa-info-circle"></i></Link>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    );
  }
}

export default StuffCard;
