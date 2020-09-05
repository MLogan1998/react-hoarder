import React from 'react';

import StuffCard from '../../shared/StuffCard/StuffCard';

import stuffData from '../../helpers/data/stuffData';
import authData from '../../helpers/data/authData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  componentDidMount() {
    this.goGetStuff();
  }

  goGetStuff = () => {
    stuffData.getStuffByUid(authData.getUid())
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => console.error(('couldnt get stuff', err)));
  }

  deleteItem = (pinId) => {
    stuffData.deleteItem(pinId)
      .then(() => {
        this.goGetStuff();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { stuff } = this.state;
    const stuffCards = stuff.map((item) => <StuffCard key={item.id} item={item} deleteItem={this.deleteItem}/>);
    return (
      <div>
        <h1 className="text-center">My Stuff</h1>
        <div className="stuffWrapper">
          {stuffCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
