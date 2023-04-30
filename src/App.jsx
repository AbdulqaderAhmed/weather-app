import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Http, APIKEY } from "./api/Http";
import Card from "./components/card/Card";
import Search from "./components/search/Search";

export default function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Ethiopia");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const fetchData = async () => {
    const res = await axios(
      `http://api.weatherapi.com/v1/current.json?q=${query}&key=${APIKEY}`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="container flex flex-col gap-2 text-center">
      <h1 className="text-2xl text-center font-bold underline">Weather</h1>

      <div className="mx-auto">
        <Search setSearch={setSearch} sumbitBtn={handleSubmit} />
        <Card data={data} />
      </div>
    </div>
  );
}
