import React from "react";

export default function Card({
  first_name,
  last_name,
  height_inches,
  team_name,
}) {
  return (
    <>
      <div className="bg-red-100 inline flex flex-col rounded-sm shadow-lg mt-10 mb-10 mx-0 justify-center p-16">
        <h1 className="text-center">First Name : {first_name}</h1>
        <h1 className="text-center">Last Name : {last_name}</h1>
        <h1 className="text-center">Position : {height_inches}</h1>
        <h1 className="text-center">Team : {team_name}</h1>
      </div>
    </>
  );
}
