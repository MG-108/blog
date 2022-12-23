import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/contextProvider";
import { getPagination } from "../services";

const Pagination = () => {
  const { pages, setPages, skip, setSkip } = useStateContext();

  useEffect(() => {
    getPagination().then((newPagination) => setPages(newPagination));
  }, []);
  return (
    <div className="flex space-x-5 justify-center items-center">
      <div>
        <button
          onClick={() => {
            setSkip(skip - 2);
          }}
          disabled={!pages.hasPreviousPage}
          className="px-3 py-1 bg-indigo-600 text-white disabled:bg-gray-400"
        >
          Anterior
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setSkip(skip + 2);
          }}
          disabled={!pages.hasNextPage}
          className="px-3 py-1 bg-indigo-600 text-white disabled:bg-gray-400"
        >
          Proxima
        </button>
      </div>
      <div>
        <button>Paginas Totais:{pages.pageSize} </button>
      </div>
    </div>
  );
};

export default Pagination;
