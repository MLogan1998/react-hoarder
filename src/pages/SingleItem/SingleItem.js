import React from 'react';
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

  render() {
    const { item } = this.state;

    return (
      <div className="single-wrapper">
        <h1>{item.itemName}</h1>
        <img className="single-img" src={item.itemImage} alt={item.itemName}></img>
        <div>
          <p className="single-description">{item.itemDescription}</p>
        </div>
      </div>
    );
  }
}

export default SingleItem;
