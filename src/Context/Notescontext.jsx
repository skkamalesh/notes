import React from "react";
export const NotesDataContext = React.createContext(null);
function Notescontext({ children }) {
  const API = "https://6516668b09e3260018c9b748.mockapi.io/NotesData";

  return (
    <NotesDataContext.Provider value={{ API }}>
      {children}
    </NotesDataContext.Provider>
  );
}

export default Notescontext;
