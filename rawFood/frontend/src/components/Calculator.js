import React, {useState} from 'react';


export default function Calculator({meat= 0, bone= 0, organ = 0}) {
  const [weightGoal, setWeightGoal] = useState(0.00)

  return(
    <div>
      <h3>Ratio: 80 / 10 / 10</h3>
      <p>Meat: {meat}</p>
      <div className="progress" role="progressbar" aria-label="meat progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: '25%' }}>25%</div>
      </div>

      <p>Bone: {bone}</p>
      <div className="progress" role="progressbar" aria-label="bone progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: '25%' }}>25%</div>
      </div>
      <p>Organ: {organ}</p>
      <div className="progress" role="progressbar" aria-label="organ progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: '25%' }}>25%</div>
      </div>
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