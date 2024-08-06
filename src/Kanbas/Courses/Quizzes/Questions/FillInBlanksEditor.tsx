import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg'; 
import { addQuestion } from './reducer'; // Import the addQuestion action

const initialState = {
  title: '',
  points: 0,
  question: '',
  blanks: [{ id: 1, text: '' }],
  nextId: 2
};

export default function FillInBlanksEditor() {
  const { cid, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);

  const handleFieldChange = (field: string, value: any) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleBlankChange = (index: number, value: string) => {
    const updatedBlanks = formState.blanks.map((blank, idx) =>
      idx === index ? { ...blank, text: value } : blank
    );
    setFormState(prevState => ({
      ...prevState,
      blanks: updatedBlanks
    }));
  };

  const addBlank = () => {
    setFormState(prevState => ({
      ...prevState,
      blanks: [...prevState.blanks, { id: prevState.nextId, text: '' }],
      nextId: prevState.nextId + 1
    }));
  };

  const removeBlank = (index: number) => {
    const updatedBlanks = formState.blanks.filter((_, idx) => idx !== index);
    setFormState(prevState => ({
      ...prevState,
      blanks: updatedBlanks
    }));
  };

  const handleSave = () => {
    const questionData = {
      id: id,
      type: 'fill-in-blanks',
      title: formState.title,
      points: formState.points,
      text: formState.question,
      blanks: formState.blanks.map(blank => ({ ...blank, text: blank.text.toLowerCase() })) // Convert blanks to lowercase
    };

    dispatch(addQuestion(questionData)); // Dispatch the action to save the question
    navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/create/Questions`); // Redirect to QuizQuestionsEditor
  };

  return (
    <div>
      <h2>Fill in the Blanks Question Editor</h2>
      <div>
        <label>
          Title
          <input 
            type="text" 
            className='form-control'
            value={formState.title} 
            onChange={(e) => handleFieldChange('title', e.target.value)} 
            placeholder="Enter question title..."
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Points
          <input 
            type="number" 
            className='form-control'
            value={formState.points} 
            onChange={(e) => handleFieldChange('points', Number(e.target.value))} 
            placeholder="Enter points..."
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Question
          <Editor 
            value={formState.question} 
            onChange={(e) => handleFieldChange('question', e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Blanks (Possible Correct Answers)
          {formState.blanks.map((blank, index) => (
            <div key={index} className='d-flex mb-2'>
              <input
                type="text"
                className='form-control w-50 me-2'
                value={blank.text}
                onChange={(e) => handleBlankChange(index, e.target.value)}
                placeholder="Enter a possible correct answer..."
              />
              <button 
                className='btn btn-danger'
                onClick={() => removeBlank(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button 
            className='btn btn-secondary'
            onClick={addBlank}
          >
            Add Blank
          </button>
        </label>
      </div>
      <hr />
      <div>
        <button className='btn btn-danger me-3' onClick={handleSave}>Save/Update Question</button>
        <Link 
          className='btn btn-secondary'  
          to={`/Kanbas/Courses/${cid}/Quizzes/Editor/create/Questions`}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
