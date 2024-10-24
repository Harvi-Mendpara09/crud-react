import React from "react";

const Show = ({ Notes, deleteHandler,editHandler }) => {
  return (
    <div align="center" className="flex gap-10 flex-wrap w-1/2 justify-center">
      {Notes.map((n, i) => {
        return (
          <div key={i} className="shadow-lg w-fit p-5">
            <h2 className="mt-4">
              {n.note}

              
            </h2>
            <button className="bg-blue-700 text-white p-2 mt-2 me-1"  onClick={() => {
                  editHandler(n.id);
                }}>
                edit
              </button>
              <button
                className="bg-red-700 text-white p-2"
                onClick={() => {
                  deleteHandler(n.id);
                }}
              >
                delete
              </button>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
