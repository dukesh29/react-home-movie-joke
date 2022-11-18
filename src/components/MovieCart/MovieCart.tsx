import React, {Component} from 'react';
import './MovieCart.css';

interface Props {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: React.MouseEventHandler;
  id: string;
}

class MovieCart extends Component<Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.id !== nextProps.id || this.props.title !== nextProps.title;
  }

  render() {
    return (
      <div className="movieEl">
        <input type="text" value={this.props.title}
               onChange={event => this.props.onChange(event)}/>
        <button type="button" onClick={this.props.onDelete}>X</button>
      </div>
    );
  }
}

export default MovieCart;