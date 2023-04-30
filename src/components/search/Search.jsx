import React from "react";

export default function Search({ setSearch, sumbitBtn }) {
  return (
    <form onSubmit={sumbitBtn}>
      <input
        type="text"
        className="border-2 border-solid m-5 border-teal-950 rounded-xl shadow-md shadow-blue-400 px-2"
        onChange={(e) =>
          e.target.value !== "" && e.target.value !== " "
            ? setSearch(e.target.value)
            : setSearch("Ethiopia")
        }
      />
      <button
        type="submit"
        className="bg-gradient-to-tr from-indigo-600 to-orange-600 text-white px-5 rounded-xl shadow-md shadow-blue-400"
      >
        Search
      </button>
    </form>
  );
}
