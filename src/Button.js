import {PureComponent} from 'react';

export default class Button extends PureComponent {
  render() {
    return (
      <button
        className="btn"
        onClick={this.props.clicker}
        onMouseDown={this.props.mDown}
        onMouseUp={this.props.mUp}
        onMouseOut={this.props.mUp}
      >
        {this.props.title}
      </button>
    );
  }
}
