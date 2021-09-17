class Welcome extends React.Component {
  constructor(props) {
    super(props); // 이 이후부터는 props를 직접 사용하지 말고 this.props로 사용(props 변경에 따른 state update를 노릴 경우)
    this.state = { name: "default kms", color: "godlike asshole" };
    console.log("constructor activated");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps");
    console.log(nextProps, currentState); // 여기서 이 둘은 복제품들(Pure Function)
    return { name: "getDerived" }; // 자유로운 state값 변경(setState 필요 없음)
    // Props의 데이터를 참고 가능하다
    // Deprecated
  }

  render() {
    console.log("RENDERING");
    return (
      <div>
        {this.props.name} {this.state.name}
      </div>
    );
  }
  componentDidUpdate(prevProps, state) {
    console.log("component DidUpdate Activated after reRendred");
    console.log(prevProps, state);
    // comparing prevProps, currentProps and re-asking API from server
    // careful for infinite rendering if you update state in this method
    //(must be conditional)
  }
  componentDidMount() {
    console.log(
      "componentDidMount Activated : normally subscribing data, side effect",
      "asking API"
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount : deleting subscription, timers ...");
    console.log("Working things before moved from virtual DOM");
  }
}

const App = (props) => {
  const [name, setName] = React.useState("Button");
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setName(Math.floor(Math.random() * 1000) / 1000);
        }}
      >
        {name}
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Unmount" : "Mount"}
      </button>
      {show ? <Welcome name={name}></Welcome> : <div>Unmounted</div>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react-container"));
