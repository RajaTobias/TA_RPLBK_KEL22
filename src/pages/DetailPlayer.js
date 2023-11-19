import React from "react";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate, useLocation } from "react-router-dom";
import Template from "../components/Template";

const DetailPlayer = () => {
  const [players, setPlayers] = React.useState([]);
  const [team, setTeam] = React.useState([]);

  const { state } = useLocation();
  const { detail } = state;

  console.log(detail);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async function () {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players`)
        .then(function (response) {
          const result = response.data;
          setPlayers(result.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    })();
  }, []);

  return (
    <Template title="Detail Player">
      <Card
        first_name={detail.first_name}
        last_name={detail.last_name}
        height_inches={detail.position}
        team_name={detail.team.full_name}
      />
      <div className="mt-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </Template>
  );
};

export default DetailPlayer;
