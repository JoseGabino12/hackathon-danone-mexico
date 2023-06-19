export default function TabContent ({ 
  handleChange,
  handleAdd,
  handleReset,
  energeticValue
}) {
  return (
    <div className="bg-white shadow border border-[#324BAA] p-8 text-[#324BAA] rounded-lg -mt-1.5 flex gap-5">
      <input
        placeholder="Entry a calories"
        onChange={handleChange}
        className='p-2 border-2'
        value={energeticValue}
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}