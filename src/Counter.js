import {PureComponent} from 'react';
import Button from "./Button";
import Text from "./Text";

export default class Counter extends PureComponent {
  state = {
    decActive: false,
    incActive: false,
    decInterval: null,
    incInterval: null,
    speed: 200
  }
  decMDown =() => {
    if(!this.state.decActive) {
      const decInterval = setInterval( () => this.props.decBtnClick(), this.state.speed);
      this.setState({decActive: true, decInterval: decInterval});
    }
  };
  decMUp = () => {
    if(this.state.decActive) {
      clearInterval(this.state.decInterval);
      this.setState({decActive: false, decInterval: null});
    }
  };
  incMDown =() => {
    if(!this.state.incActive) {
      const incInterval = setInterval( () => this.props.incBtnClick(), this.state.speed);
      this.setState({incActive: true, incInterval: incInterval});
    }
  };
  incMUp = () => {
    if(this.state.incActive) {
      clearInterval(this.state.incInterval);
      this.setState({incActive: false, incInterval: null});
    }
  };
  render() {
    return (
      <div className="counter">
        <Button title="-"
          clicker={this.props.decBtnClick}
          mDown={this.decMDown} mUp={this.decMUp}
        />
        <Text count={this.props.count} />
        <Button title="+"
          clicker={this.props.incBtnClick}
          mDown={this.incMDown} mUp={this.incMUp}
        />
      </div>
    );
  }
}
