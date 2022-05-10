import {PureComponent} from 'react';

export default class AddButton extends PureComponent {
  render() {
    return (
      <button
        className="add-btn"
        onClick={this.props.clicker}
      >
        {this.props.title}
      </button>
    );
  }
}
