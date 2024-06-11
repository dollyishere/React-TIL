import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// 부모 컴포넌트로부터 노드 제공 받기
ChildProperty.propTypes = {
  children: PropTypes.node,
}

export default ChildProperty;