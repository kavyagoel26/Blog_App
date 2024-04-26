import { useState } from "react";


function Search({ onSearch }) { // Pass onSearch prop
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event) => { // Handle submit for clarity
      event.preventDefault();
      onSearch(searchQuery); // Call onSearch prop function
    };
  
    return (
    //   <form className="search-form" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Search blog posts..."
    //       value={searchQuery}
          
    //     />
    //     <button type="submit">Search</button>
    //   </form>

<form className="max-w-md mx-auto">   
<label className ="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border
     border-gray-300 rounded-lg bg-white focus:ring-blue-500 dark:bg-gray-100
      dark:border-gray-300  dark:text-white dark:focus:ring-blue-500
       dark:focus:border-blue-500"  required value={searchQuery} onChange={handleChange} />
    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>

    );
  }
  export default Search