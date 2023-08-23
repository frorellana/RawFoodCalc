import React, {useState} from 'react';


export default function Calculator({meat= 0, bone= 0, organ = 0}) {
  const [weightGoal, setWeightGoal] = useState(0.00)

  return(
    <div>
      <h3>Ratio: 80 / 10 / 10</h3>
      <p>Meat: {meat}</p>
      <p>Bone: {bone}</p>
      <p>Organ: {organ}</p>
      {/* <label>
        Pounds:
        <input
          value={weightGoal}
          onChange={e => setWeightGoal(e.target.value)}
          type="number"
        />
        </label> */}
    </div>
  )
}