import {PureComponent} from 'react';
import Counter from "./Counter";
import AddButton from "./AddButton";
import "./index.css";

export default class App extends PureComponent {
  state = {
    counters: null,
    step: 10,
    count: 0
  };
  addBtnClick = () => {
    let counters = this.state.counters === null ? [] : this.state.counters.slice();
    let count = this.state.count;
    counters.push(count);
    count = count < 90 ? count+this.state.step : 0;
    this.setState({counters: counters, count: count});
  };
  delBtnClick = (i) => {
    if(this.state.counters === null) return;
    const counters = this.state.counters.slice();
    counters.splice(i,1);
    this.setState({counters: counters});
  };
  decButtonClick = (i) => {
    const counters = this.state.counters.slice();
    if( counters[i] > 0 ) {
      --counters[i];
      this.setState({counters: counters});
    }
  };
  incButtonClick = (i) => {
    const counters = this.state.counters.slice();
    if( counters[i] < 99 ) {
      ++counters[i];
      this.setState({counters: counters});
    }
  };
  render() {
    return (
      <main>
        {this.state.counters === null
          ? null
          : ( this.state.counters.map((item, i) =>
              <div className="container">
                <Counter
                  key={i}
                  count={item}
                  decBtnClick={() => {this.decButtonClick(i)}}
                  incBtnClick={() => {this.incButtonClick(i)}}
                />
                <AddButton title="Remove"
                  clicker={() => {this.delBtnClick(i)}}
                />
              </div>
            ) )
        }
        <hr/>
        <AddButton title="Add counter" clicker={this.addBtnClick} />
      </main>
    );
  }
}
