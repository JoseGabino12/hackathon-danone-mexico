export default function TabIndex ({ changeTab, limit }) {
  return (
    <ul className="grid grid-flow-col text-center text-[#324BAA] p-1">
      <li>
        <button onClick={() => changeTab(1)} className={limit == 1 ? "flex justify-center bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-[#324BAA] p-4" : "flex justify-center p-4"}>
          Breakfast
        </button>
      </li>
      <li>
        <button onClick={() => changeTab(2)} className={limit == 2 ? "flex justify-center bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-[#324BAA] p-4" : "flex justify-center p-4"}>
          Lunch
        </button>
      </li>
      <li>
        <button onClick={() => changeTab(3)} className={limit == 3 ? "flex justify-center bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-[#324BAA] p-4" : "flex justify-center p-4"}>
          Dinner
        </button>
      </li>
      <li>
        <button onClick={() => changeTab(4)} className={limit == 4 ? "flex justify-center bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-[#324BAA] p-4" : "flex justify-center p-4"}>
          Snacks
        </button>
      </li>
    </ul>
  )
}