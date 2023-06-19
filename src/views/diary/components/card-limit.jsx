import { useState, useEffect } from 'react'
import TabIndex from './tab-index'
import TabContent from './tab-content'

export default function CardLimit ({ getProductsWithSearch }) {
  const [limit, setLimit] = useState(1)
  const [totalEnegeticValue, setTotalEnegeticValue] = useState(0)
  const [energeticValue, setEnergeticValue] = useState('')

  const changeTab = (value) => {
    setLimit(value)
  }

  const handleChange = (e) => {
    setEnergeticValue(e.target.value)
  }
  
  const handleAdd = () => {
    energeticValue === ''
      ? setTotalEnegeticValue(totalEnegeticValue + 0)
      : setTotalEnegeticValue(totalEnegeticValue + parseInt(energeticValue))
      
    setEnergeticValue('')
  }

  const handleReset = () => {
    setTotalEnegeticValue(0)
    setEnergeticValue('')
  }

  useEffect(() => {
    getProductsWithSearch(totalEnegeticValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalEnegeticValue])

  
  return (
    <div className="border-2 p-5 items-center flex flex-col gap-5">
      <div className='bg-[#e8f3ff] p-2 rounded-lg my-2 self-start w-full'>
        <p className='text-[#324BAA] font-bold'>Set your maximum calorie limit here!</p>
      </div>

      <div className="w-28 h-28 flex flex-col rounded-full border-2 justify-center items-center text-center border-dashed border-[#324baa] text-[#324BAA]">
        <p>{totalEnegeticValue}</p>
        <p>Remaining</p>
      </div>

      <div className="p-8 w-full">
        <TabIndex changeTab={changeTab} limit={limit} />
        <TabContent
          handleChange={handleChange}
          handleAdd={handleAdd}
          handleReset={handleReset}
          energeticValue={energeticValue}
        />
      </div>
    </div>
  )
}