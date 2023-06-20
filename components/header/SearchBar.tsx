import { MouseEvent } from "react";
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const openModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    //modals.setShowSearch(true)
  };

  return (
    <div
      id="searchDropdown"
      className="mx-4 h-auto w-auto border border-transparent rounded relative min-w-[72px]"
    >
      <div
        onClick={openModal}
        className={`flex items-center bg-bbaby-brightest border border-bbaby-border h-[40px] hover:border-reddit_text rounded-[20px] ${
          modals.showSearch && "rounded-b-none border-bbaby-text"
        }`}
      >
        <form
          action="/search/"
          autoComplete="off"
          method="get"
          role={"search"}
          onSubmit={doSearch}
          className="w-full flex"
        >
          <label className="flex" htmlFor="header-search-bar">
            <div className="flex items-center pr-[9px] pl-[15px]">
              <BsSearch className="h-5 w-5 align-middle text-[20px] leading-5 text-[#818384]" />
            </div>
          </label>
          <input
            type="search"
            id="header-search-bar"
            name="b"
            className="w-full appearance-none text-[16px] md:text-[14px] leading-[14px] bg-reddit_dark-brightest mr-4 text-reddit_text placeholder:text-reddit_text-darker outline-none"
            placeholder="Search Bbaby"
            value={searchText}
            onChange={(ev) => setSearchText(ev.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
