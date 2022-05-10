import {PureComponent} from 'react';

export default class Text extends PureComponent {
  render() {
    return (
      <p className="text">{this.props.count}</p>
    );
  }
}
