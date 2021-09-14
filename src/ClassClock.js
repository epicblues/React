import { Component } from 'react';

class ClassClock extends Component {
  constructor(props) {
    super(props); // 인스턴스 멤버 props에 생성자 매개변수로 받은 객체 탑재
    this.state = {
      date: new Date()
    }
    
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    },1000)
  }

  componentWillUnmount() {
    console.log('이 컴포넌트가 사라지고 인터벌이 사라졌습니다!')
    clearInterval(this.timerID)
  }


  render() {
    return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is { this.state.date.toLocaleString() }</h2>
    </div>
    );
  }
}

export default ClassClock