const BoilingVerdict = (props) => {
  if (props.celcius >= 100) {
    return <p>The water would boil</p>;
  } else {
    return <p>The water would not boil</p>;
  }
};

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};

function toCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input); // callback
  const rounded = Math.round(output * 1000) / 1000;
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
  const handleCelciusChange = (e) => {
    setTemperature(e.target.value);
    setScale("c");
  };
  const celcius =
    scale === "f" ? tryConvert(temperature, toCelcius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        onChange={handleCelciusChange}
        temperature={celcius}
      />
      <TemperatureInput
        scale="f"
        onChange={handleFahrenheitChange}
        temperature={fahrenheit}
      />
      <BoilingVerdict celcius={celcius} />
    </div>
  );
};

ReactDOM.render(<Calculator />, document.querySelector("#root"));
