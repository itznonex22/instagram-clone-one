import { SearchIcon } from '@heroicons/react/outline'

const Searchbar = () => {
  return (
    <div className="bg-gray-200 px-4 py-1.5 rounded-lg md:flex items-center gap-2 text-gray-400 hidden">
      <SearchIcon className="w-5 h-5" />
      <input type="text" placeholder="Search" className="bg-transparent focus:outline-none" />
    </div>
  )
}

export default Searchbar
