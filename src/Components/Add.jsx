import React from 'react'

const Add = ({addNote,Note,setNote,editId,seteditId,updateHandler,submitHandler}) => {
  return (
    <div align="center" className="m-11">
        <form onSubmit={submitHandler}>
          <input type="text" value={editId} hidden onChange={(e)=>seteditId(e.target.value)}/>
          <input
            type="text"
            value={Note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Type your note here..."
            className="p-3"
          />
          <button className="bg-slate-600 text-white p-3" type="submit">
            Add Note
          </button>
        </form>
      </div>
  )
}

export default Add
