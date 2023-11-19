import React from "react";
import Card from "../components/Card";
import Template from "../components/Template";
import axios from "axios";
import { useState } from "react";
// import { Button } from "@material-tailwind/react";

export default function RandomPlayer() {
  const [players, setPlayers] = React.useState([]);
  const [team, setTeam] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      const num = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      await axios
        .get(`https://www.balldontlie.io/api/v1/players/${num}`)
        .then(function (response) {
          const result = response.data;
          setPlayers(result);
          setTeam(result.team.name);
          console.log(result.team.name);
        })
        .catch(function (error) {
          console.error(error);
        });
    })();
  }, []);

  const handleClick = () => {
    (async function () {
      const num = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      await axios
        .get(`https://www.balldontlie.io/api/v1/players/${num}`)
        .then(function (response) {
          const result = response.data;
          setPlayers(result);
          setTeam(result.team.name);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    })();
  };

  return (
    <Template title="Player of the Random">
      <Card
        first_name={players.first_name}
        last_name={players.last_name}
        height_inches={players.position}
        team_name={team}
      />
      <div className="mt-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleClick()}
        >
          Random
        </button>
        {/* <Button className="btn btn-blue"> Random </Button> */}
      </div>
    </Template>
  );
}
