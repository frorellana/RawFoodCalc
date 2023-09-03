import React, {useEffect, useState} from 'react';


export default function Calculator({selections}) {
  const [weightGoal, setWeightGoal] = useState(0.00)
  const [totalMeat, setTotalMeat] = useState(0.00)
  const [totalBone, setTotalBone] = useState(0.00)
  const [totalOrgan, setTotalOrgan] = useState(0.00)
  const [totalAmount, setTotalAmount] = useState(0.00)
  useEffect(() => {
  console.log
  let amountSum = 0;
  let meatSum = 0;
  let boneSum = 0;
  let organSum = 0;
  for(let info of selections) {
    meatSum += info.meat * info.amount;
    boneSum += info.bone * info.amount;
    organSum += info.organ * info.amount;
    amountSum += info.amount
  }
  const meatPer = meatSum/amountSum * 100;
  const bonePer = boneSum/amountSum * 100;
  const organPer = organSum/amountSum * 100;
  setTotalAmount(amountSum);
  setTotalMeat(meatSum ? meatPer.toFixed(2) : 0);
  setTotalBone(boneSum ? bonePer.toFixed(2) : 0);
  setTotalOrgan(organSum ? organPer.toFixed(2) : 0);
  console.log('use effect in calc', selections)

  }, [selections])

  

  return(
    <div className='calc'>
      <h5>Ratio</h5>
      <p>Percentages of Meat / Bone / Organ in {totalAmount.toFixed(2)} lbs</p>
      <select class="form-select" aria-label="Default select example">
        <option value ="80 / 10 / 10">80 / 10 / 10</option>
        {/* <option value="75 / 15 / 10">75 / 15 / 10</option> */}
        
      </select>
      <p>Meat:</p>
      <div className="progress" role="progressbar" aria-label="meat progress" aria-valuenow={totalMeat} aria-valuemin="0" aria-valuemax="80"  style={{ height: '20px' }}>
        <div className={`progress-bar${totalMeat > 81 ? ' bg-danger' : totalMeat > 79? ' bg-success' : ''} progress-bar-striped progress-bar-animated`} style={{ width: `${totalMeat}%` }}>{totalMeat}%</div>
      </div>

      <p>Bone:</p>
      <div className="progress" role="progressbar" aria-label="bone progress" aria-valuenow={totalBone} aria-valuemin="0" aria-valuemax="10" style={{ height: '20px' }}>
        <div className={`progress-bar${totalBone > 11 ? ' bg-danger' : totalBone > 9? ' bg-success' : ''} progress-bar-striped progress-bar-animated`} style={{ width: `${totalBone}%` }}>{totalBone}%</div>
      </div>
      <p>Organ:</p>
      <div className="progress" role="progressbar" aria-label="organ progress" aria-valuenow={totalOrgan} aria-valuemin="0" aria-valuemax="10" style={{ height: '20px' }}>
        <div className={`progress-bar${totalOrgan > 11 ? ' bg-danger' : totalOrgan > 9? ' bg-success' : ''} progress-bar-striped progress-bar-animated`} style={{ width: `${totalOrgan}%` }}>{totalOrgan}%</div>
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