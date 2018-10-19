import React, {Component} from 'react';
import classNames from 'classnames';
import './Block.css';

class Block extends Component {
  constructor() {
    super();
    this.state = {collapsed: false};
  }

  render() {
    return (
      <div className={classNames('block', {'collapsed': this.state.collapsed})}>
        <div className={'header-block'}>
          <div className={'collapse'}
            onClick={() => {
              this.setState({collapsed: !this.state.collapsed})
            }}>
            {this.state.collapsed ? '+' : '-'}
          </div>
        </div>
        <div className={'columns'}>
          <div className={'column'}>
            <label>Revenue Yesterday</label>
            <div className={'number'}>1234 €</div>
          </div>
          <div className={'column'}>
            <label>Revenue Today</label>
            <div className={'number'}>5678 €</div>
          </div>
          <div className={'column'}>
            <label>Against yesterday at this time</label>
            <div className={'percentage'}>
              <div className={'icon'}>v</div>
              <div className={'number'}>4%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
