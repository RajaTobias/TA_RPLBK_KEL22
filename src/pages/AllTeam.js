import React from "react";
import Template from "../components/Template";
import axios from "axios";

export default function CreateQuiz() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      await axios
        .get(`https://www.balldontlie.io/api/v1/teams`)
        .then(function (response) {
          const result = response.data;
          setTeams(result.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    })();
  }, []);

  const handleDeleteButton = (index) => {
    let arr = teams;
    arr.splice(index, 1);
    console.log(arr);
    setTeams([...arr]);
  };

  const handleSearch = (searchName) => {
    (async function () {
      await axios
        .get(`https://www.balldontlie.io/api/v1/teams?search=${searchName}`)
        .then((response) => {
          const result = response.data;
          setTeams(result.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  };

  return (
    <Template title="All Team">
      {/* teams */}
      <div className="mt-4">
        {teams.map((obj, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl bg-gray-200 flex justify-between items-center ${
              index > 0 ? "mt-4" : ""
            }`}
          >
            <span className="text-xl">{obj?.full_name}</span>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleDeleteButton(index)}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </Template>
  );
}
