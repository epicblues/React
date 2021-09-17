const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  } else {
    return <p>The water would not boil</p>;
  }
};

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature); // String을 엄격하게 검사('' 같이 빈 문자열이 0으로 바뀌는 것 방지)
  // 조금만 규칙에 어긋나도 NaN을 return한다.
  if (Number.isNaN(input)) {
    // isNaN('')은 false를 return한다. 자바스크립트의 독특한 규칙 따라서 parseFloat로 검증
    return "";
  }
  const output = convert(input); // callback
  const rounded = Math.round(output * 1000) / 1000; // 자바스크립트에서만 하는 반올림 방식?
  return rounded.toString();
}

const TemperatureInput = (props) => {
  const scale = props.scale;
  const onChange = props.onChange;
  const temperature = props.temperature;
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[scale]}</legend>
      <label>
        Temp :
        <input
          type="number"
          name={scale}
          onChange={onChange}
          value={temperature}
        />
      </label>
    </fieldset>
  );
};

const Calculator = (props) => {
  const [temperature, setTemperature] = React.useState("");
  const [scale, setScale] = React.useState("c");
  const handleFahrenheitChange = (e) => {
    setTemperature(e.target.value);
    setScale("f");
  };
  const handleCelsiusChange = (e) => {
    setTemperature(e.target.value);
    setScale("c");
  };
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  // 첫 렌더링 때에 scale 이 c이므로 tryConvert fahrenheit 식을 수행한다.
  //그런데 tryConvert에서 ''은 숫자가 아니라 ''을 return 하므로 fahrenheit이 숫자 변형을 하지 않고 빈칸이 된다.
  // 이벤트가 발생하는 순간부터 숫자가 두 input에 입력된다.
  return (
    <div>
      <TemperatureInput
        scale="c"
        onChange={handleCelsiusChange}
        temperature={celsius}
      />
      <TemperatureInput
        scale="f"
        onChange={handleFahrenheitChange}
        temperature={fahrenheit}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
};

ReactDOM.render(<Calculator />, document.querySelector("#root"));
