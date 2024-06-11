// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import MyComponent from './01/MyComponent';
// import PropsComponent from './01/PropsComponent';
// import ChildComponent from './01/ChildComponent';
// import BooleanComponent from './01/BooleanComponent';
// import ChildComponent2 from './01/ChildComponent2';
// import DefaultPropsComponent from './01/DefaultPropsComponent';
// import ChildProperty from './01/ChildProperty';
// import StateExample from './01/StateExample';
// import ForceUpdateExample from './01/ForceUpdateExample';
// import LifecycleExample from './01/LifecycleExample';
// import Counter from './01/Counter';
// import NewCounter from './01/NewCounter';
// import SFC from './01/SFC';
// import ListExample from './01/ListExample';
// import Counter2 from './01/Counter2';
// import ScrollSpy from './01/ScrollSpy';
// import Counter3 from './01/Counter3';
// import Input from './01/input';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = { count: 1 };
//     // this.increaseCount = this.increaseCount.bind(this);
//     // this.state = {count:10};
//     // this.resetCount = this.resetCount.bind(this);
//     // this.setState({hasDestroyed: true});
//   }
//   increaseCount() {
//     this.setState(({ count }) => ({ count: count + 1 }));
//   }
//   // resetCount() {
//   //   this.setState(({count}) => ({count : count + 10}));
//   // }
//   // componentDidMount() {
//   //   this.setState({hasDestroyed: true});
//   // }
//   render() {
//     return (
//       <div className='body'>
//         {/* <Counter2 count={this.state.count} onAdd={this.increaseCount.bind(this)} /> 해당 함수 호출 범위 App 컴포넌트에 한정(this) */}
//         {/* <MyComponent name="dolly" />
//         <PropsComponent name="히히" />
//         <ChildComponent
//           boolValue={true}
//           numValue={1}
//           arrayValue={[1, 2, 3]}
//           objValue={{name : '제목', age: 30}}
//           nodeValue={<h1>노드</h1>}
//           funcValue={() => { console.log('메시지'); }} />
//         <div><b>지루할 때: </b><BooleanComponent bored /></div>
//         <div><b>즐거울 때: </b><BooleanComponent/></div>
//         <div><ChildComponent2 objValue={{ age : 20}} requiredStringValue="문자"/></div>
//         <DefaultPropsComponent />
//         <ChildProperty>
//           <div><span>자식 노드</span></div>
//         </ChildProperty>
//         <StateExample />
//         <ForceUpdateExample />
//         {this.state.hasDestroyed? null : <LifecycleExample />}

//         <div><Counter count={this.state.count} /></div>
//         <div><NewCounter count={this.state.count} /></div>
//         <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>

//         <SFC />
//         <ListExample /> */}
//         {/* <ScrollSpy/> */}
        
//         {/* <Counter3 /> */}

//         <h2>상품 등록 폼</h2>
//         <form>
//           <Input label="제품명 " type="text" /><br />
//           <Input label="가격 " type="price" /><br />
//           <Input label="상품 수량 " type="number" /><br />
//           <Input label="구매 가능 연락처 " type="text" /><br />
//           <input type="submit" value="상품 등록" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
