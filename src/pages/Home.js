import React from "react";
import Template from "../components/Template";

export default function Home() {
  return (
    <Template title="Beranda">
      <div className="text-center mt-10">
        <div className="bg-red-100 inline flex flex-col rounded-sm shadow-lg justify-center">
          <h1 className="mt-20 text-2xl text-blue-900">NBA APP</h1>
          <h1 className="mt-2 text-2xl text-blue-900">Sebuah aplikasi seputar tim dan pemain NBA</h1>
          <h1 className="mt-10">Build By Kelompok 22</h1>
          <h1 className="mt-2">M Irhamsyah Arrahim</h1>
          <h1 className="mt-2">M Fitra Arisaputra</h1>
          <h1 className="mt-2">Osvelina Margaretha Siregar</h1>
          <h1 className="mt-2 mb-20">Raja Tobias Dante</h1>
        </div>
      </div>
    </Template>
  );
}
