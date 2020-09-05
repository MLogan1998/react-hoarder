import React from 'react';
import { Link } from 'react-router-dom';

import stuffData from '../../helpers/data/stuffData';

import './SingleItem.scss';

class SingleItem extends React.Component {
  state= {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error(err));
  }

  deleteItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;

    stuffData.deleteItem(itemId)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editLink = `/edit/${itemId}`;

    return (
      <div className="single-wrapper">
        <h1>{item.itemName}</h1>
        <img className="single-img" src={item.itemImage} alt={item.itemName}></img>
        <div>
          <p className="single-description">{item.itemDescription}</p>
          <i className="fas fa-trash-alt fa-2x single-trash" onClick={this.deleteItem}></i>
          <Link to={editLink}><i className="fas fa-edit fa-2x single-trash ml-3"></i></Link>
        </div>
      </div>
    );
  }
}

export default SingleItem;
