import { useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const colStyle = {
  display: 'flex',
  'flex-direction': 'column',
  gap: '0.5rem',
  'align-content': 'stretch',
}

const rowStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  'min-height': '2rem',
}

const inputWrapStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'gap': '0.5rem',
  'align-items': 'center',
}

const inputStyle = {
  border: 'solid 1px #ccc',
  'border-radius': '0.25rem',
  padding: '0.25rem 0.5rem',
  'text-align': 'right',
  width: '6rem',
}

const BoundedNumberInput = ({ initialValue, onChange, prefix, min, max }: { initialValue: number, prefix: string, min: number, max: number, onChange: (pct: number) => void }) => {
  const [value, setValue] = useState(String(initialValue));
  const [valid, setValid] = useState(true);

  function isValid(num: number) {
    if (isNaN(num)) return false;
    if (min && num < min) return false;
    if (max && num > max) return false;
    return true;
  }

  function adjustValue(value: string) {
    setValue(value);
    const val = Number(value);
    if (isValid(val)) {
      setValid(true);
      onChange(val);
    } else {
      setValid(false);
    }
  }

  const style = valid ? inputStyle : { ...inputStyle, 'border-color': 'red', 'outline-color': 'red' };

  return (
    <div style={inputWrapStyle}>
      <span>({prefix})</span>
      <input style={style} value={value} onChange={(e) => adjustValue(e.target.value)} type="integer" />
    </div>

  )
};

const Graph = ({ data }: { data: any[] }) => {
  if(data.length === 0) return <div>Unable to compute curve</div>
  return (
    <BarChart width={800} height={250} data={data}>
      <XAxis dataKey="period" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="multiplier" fill="#0077b6" />
    </BarChart>
  );
};


export const RewardCurve = () => {
  const [numPeriods, setNumPeriods] = useState(6);
  const [formulaBase, setFormulaBase] = useState(2);
  const [periodSeconds, setPeriodSeconds] = useState(86400);
  const [minMultiplier, setMinMultiplier] = useState(0);

  const data = [];
  for (let i = 0; i <= numPeriods; i++) {
    data.push({
      period: i + 1,
      multiplier: Math.max(minMultiplier, formulaBase ** (numPeriods - i))
    });
  }

  for(let i = 1;i <= 8; i++) {
    data.push({
      period: numPeriods + i,
      multiplier: minMultiplier
    });
  }

  return (
    <div>
      <div style={colStyle}>
        <div style={rowStyle}>
          <label>Number of Periods</label>
          <BoundedNumberInput initialValue={numPeriods} onChange={setNumPeriods} prefix='count' min={1} max={120} />
        </div>

        <div style={rowStyle}>
          <label>Formula Base</label>
          <BoundedNumberInput initialValue={formulaBase} onChange={setFormulaBase} prefix='value' min={1} max={100} />
        </div>

        <div style={rowStyle}>
          <label>Period Duration</label>
          <BoundedNumberInput initialValue={periodSeconds} onChange={setPeriodSeconds}  prefix='seconds' min={1} max={1000000000} />
        </div>


        <div style={rowStyle}>
          <label>Min Multiplier</label>
          <BoundedNumberInput initialValue={minMultiplier} onChange={setMinMultiplier} prefix='value' min={0} max={10000}  />
        </div>

        <br />

        <Graph data={data} />

      </div>
    </div>
  )
}