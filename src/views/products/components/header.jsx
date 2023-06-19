import { AiOutlineSearch } from 'react-icons/ai'

export default function Header ({ search, handleSearch }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl md:text-5xl font-semibold">Products</h1>

      <div className="bg-[#d5e8ff] rounded border border-[#324baa] flex items-center justify-between w-1/2">
        <span className="py-4 px-4 bg-white rounded-l border-r border-[#324baa] disabled:opacity-50 inline-flex items-center focus:outline-none">
          <AiOutlineSearch />
        </span>

        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={search}
          className="bg-transparent py-1 px-4 focus:outline-none w-full"
        />
      </div>

    </div>
  )
}