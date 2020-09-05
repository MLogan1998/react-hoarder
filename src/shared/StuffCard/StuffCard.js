import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import stuffData from '../../helpers/data/stuffData';
import itemShape from '../../helpers/props/itemShape';
import './StuffCard.scss';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
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
          <i class="fas fa-trash-alt" onClick={this.deleteItemEvent}></i>
        </div>
      </div>
    );
  }
}

export default StuffCard;
