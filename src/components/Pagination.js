import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 shadow-sm fixed bottom-0 bg-white">
      <div className="w-11/12 max-w-[450px] flex justify-between py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="bg-white rounded-md px-2 py-1 border-2 font-semibold"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="bg-white rounded-md px-2 py-1 border-2  font-semibold"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
