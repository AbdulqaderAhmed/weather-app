import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Http, APIKEY } from "./api/Http";
import Card from "./components/card/Card";
import Search from "./components/search/Search";

export default function App() {
  const [data, setData] = useState(null);
  const [bg, setBg] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Ethiopia");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const fetchData = async () => {
    const res = await Http(`/current.json?q=%${query}%&key=${APIKEY}`);
    setData(res.data);
    setBg(res.data.current.temp_c);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div
      className={`${
        bg && (bg <= 15 ? "bg-cloudy" : "bg-sunny")
      } ease-linear duration-700 flex flex-col space-y-3 justify-center text-center items-center h-screen`}
    >
      <h1 className="text-2xl text-center font-bold underline text-white">
        Weather
      </h1>

      <div className="mx-auto">
        <Search setSearch={setSearch} sumbitBtn={handleSubmit} />
        <Card data={data} />
      </div>
    </div>
  );
}
