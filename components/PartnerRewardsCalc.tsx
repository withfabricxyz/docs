import { useState } from "react";

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
  width: '4rem',
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
      <input style={style} value={value} onChange={(e) => adjustValue(e.target.value)} />
    </div>

  )
};

export const PartnerRewardsCalc = () => {
  const [fee, setFee] = useState(4);
  const [partnerShare, setPartnerShare] = useState(50);
  const [numCollections, setNumCollections] = useState(100);
  const [numSubscribers, setNumSubscribers] = useState(100);
  const [averagePrice, setAveragePrice] = useState(15);

  const protocolRevenue = numCollections * numSubscribers * averagePrice * (fee / 100);
  const partnerRevenue = protocolRevenue * (partnerShare / 100);

  return (
    <div>
      <div style={colStyle}>
        <div style={rowStyle}>
          <label>Protocol Fee</label>
          <BoundedNumberInput initialValue={fee} onChange={setFee} prefix='%' min={1} max={100} />
        </div>

        <div style={rowStyle}>
          <label>Partner Share</label>
          <BoundedNumberInput initialValue={partnerShare} onChange={setPartnerShare} prefix='%' min={1} max={100} />
        </div>

        <div style={rowStyle}>
          <label>Number of Collections</label>
          <BoundedNumberInput initialValue={numCollections} onChange={setNumCollections}  prefix='count' min={1} max={1000000000} />
        </div>

        <div style={rowStyle}>
          <label>Subs Per Collection</label>
          <BoundedNumberInput initialValue={numSubscribers} onChange={setNumSubscribers} prefix='count' min={1} max={1000000000}  />
        </div>

        <div style={rowStyle}>
          <label>Average Sub Price</label>
          <BoundedNumberInput initialValue={averagePrice} onChange={setAveragePrice} prefix='$' min={1} max={10000}  />
        </div>

        <hr />

        <div style={rowStyle}>
          <label>Partner Monthly Rewards</label>
          <p>${new Intl.NumberFormat('en-US').format(partnerRevenue)}</p>
        </div>

        <div style={rowStyle}>
          <label>Partner Annual Rewards</label>
          <p>${new Intl.NumberFormat('en-US').format(partnerRevenue * 12)}</p>
        </div>

      </div>
    </div>
  )
}