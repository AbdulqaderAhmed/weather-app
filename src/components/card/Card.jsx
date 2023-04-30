import React from "react";

export default function Card({ data }) {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-tr from-gray-400 to-gray-50 shadow-md shadow-blue-400 rounded-md mx-auto py-5">
      {data ? (
        <>
          <h3 className="text-xl font-bold">{data && data.location.name}</h3>
          <p className="font-mono font-medium">
            {data && data.current.temp_c}&#8451;
          </p>
          <img
            src={data && data.current.condition.icon}
            alt={data && data.current.condition.text}
            className="mx-auto"
          />
          <p className="font-mono font-medium">
            {data && data.current.condition.text}
          </p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
