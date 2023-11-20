import React from "react";

export default function Card({
  first_name,
  last_name,
  height_inches,
  team_name,
}) {
  return (
    <>
      <div className="bg-red-100 inline flex flex-col rounded-sm shadow-lg mt-10 mb-10 mx-0 justify-center p-16" style={{ backgroundColor: '#c8102e' }}>
        <h1 className="text-center" style={{ color: 'white' }}>First Name : {first_name}</h1>
        <h1 className="text-center" style={{ color: 'white' }}>Last Name : {last_name}</h1>
        <h1 className="text-center" style={{ color: 'white' }}>Position : {height_inches}</h1>
        <h1 className="text-center" style={{ color: 'white' }}>Team : {team_name}</h1>
      </div>
    </>
  );
}
