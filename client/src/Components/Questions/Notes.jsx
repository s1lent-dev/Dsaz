import React, { useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { useUpdateNotes } from '../../context/ApiCalls';

const Notes = ({ setIsNotesOpen, problem, topicId }) => {
  const { updateNotes, loading, error } = useUpdateNotes();
  const [selectedNotes, setSelectedNotes] = useState(problem.notes);
  const userData = useSelector((state) => state.user.userData);
  const AuthToken = userData.accessToken;

  const handleNotesChange = async () => {
    const body = { notes: selectedNotes };
    await updateNotes(
      `https://dsaz-server.vercel.app/api/sheets/updateNotes/${topicId}/${problem.problemId}`,
      AuthToken,
      body,
      userData.email
    );
    // After notes are successfully updated, show alert and close notes component
    setIsNotesOpen(false);
    alert('Notes successfully added!');
  };

  const handleSave = () => {
    // Call handleNotesChange only when Save button is clicked
    handleNotesChange();
  };

  return (
    <div className="notes-container">
      <div className="container">
        <div className="notes-header">
          <h1>Save Notes</h1>
          <button onClick={() => setIsNotesOpen(false)}>Close</button>
        </div>
        <div className="notes-input">
          <textarea
            rows="25"
            cols="70"
            placeholder="Write your notes here..."
            value={selectedNotes}
            onChange={(e) => setSelectedNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="notes-footer">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
