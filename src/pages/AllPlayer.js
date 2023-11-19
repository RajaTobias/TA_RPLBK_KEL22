import React from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Players() {
  const [players, setPlayers] = React.useState([]);
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

  const handleDeleteButton = (index) => {
    let arr = players;
    arr.splice(index, 1);
    console.log(arr);
    setPlayers([...arr]);
  };

  const handleSearch = (searchName) => {
    (async function () {
      await axios
        .get(`https://www.balldontlie.io/api/v1/players?search=${searchName}`)
        .then((response) => {
          const result = response.data;
          setPlayers(result.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  };

  return (
    <Template title="All Player">
      {/* search bar */}
      <div className="flex">
        <div className="mt-4 xl:w-96">
          <input
            type="search"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleSearch2"
            onKeyUp={(e) => handleSearch(e.target.value)}
            placeholder="Cari player"
          />
        </div>
      </div>

      {/* players */}
      <div className="mt-4">
        {players.map((obj, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl bg-gray-200 flex justify-between items-center ${
              index > 0 ? "mt-4" : ""
            }`}
          >
            <span className="text-xl">
              {obj?.first_name} {obj?.last_name}
            </span>
            <div className="button-wrap">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() =>
                  navigate("/detail-player", { state: { detail: obj } })
                }
              >
                Detail
              </button>
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
          </div>
        ))}
      </div>
    </Template>
  );
}
