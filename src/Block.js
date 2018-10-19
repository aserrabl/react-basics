import React, {Component} from 'react';
import classNames from 'classnames';
import './Block.css';

class Block extends Component {
  constructor(props) {
    super(props);
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
          {this.props.columns.map((el) =>
            (<div className={'column'}>
              <label>{el.text}</label>
              <div className={'number'}>{el.number} €</div>
            </div>))}
        </div>
      </div>)
  }
}

export default Block;
