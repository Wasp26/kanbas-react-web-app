import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Editor from 'react-simple-wysiwyg';
import { addQuestion } from './reducer'; 

const initialState = {
  title: '',
  points: 0,
  question: '',
  choices: [{ id: 1, text: '', isCorrect: false }],
  nextId: 2
};

export default function MultipleChoiceEditor() {
  const { cid, id } = useParams(); 
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addChoice = () => {
    setFormState(prevState => ({
      ...prevState,
      choices: [...prevState.choices, { id: prevState.nextId, text: '', isCorrect: false }],
      nextId: prevState.nextId + 1
    }));
  };

  const removeChoice = (choiceId:any) => {
    setFormState(prevState => ({
      ...prevState,
      choices: prevState.choices.filter(choice => choice.id !== choiceId)
    }));
  };

  const handleChoiceTextChange = (choiceId:any, text:any) => {
    setFormState(prevState => ({
      ...prevState,
      choices: prevState.choices.map(choice => 
        choice.id === choiceId ? { ...choice, text } : choice
      )
    }));
  };

  const handleCorrectChoiceChange = (choiceId:any) => {
    setFormState(prevState => ({
      ...prevState,
      choices: prevState.choices.map(choice => 
        ({ ...choice, isCorrect: choice.id === choiceId })
      )
    }));
  };

  const handleFieldChange = (field:any, value:any) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSave = () => {
    const questionData = {
      id: id, 
      type: 'multiple-choice',
      title: formState.title,
      points: formState.points,
      text: formState.question,
      choices: formState.choices
    };

    dispatch(addQuestion(questionData));
    navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor/create/Questions`); 
  };

  return (
    <div>
      <h2>Multiple Choice Question Editor</h2>
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
      <div>
        <br />
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
        <label className='mb-1'>Choices</label>
        {formState.choices.map(choice => (
          <div key={choice.id} className='d-flex mb-3'>
            <input
              type="radio"
              className='me-3'
              checked={choice.isCorrect}
              onChange={() => handleCorrectChoiceChange(choice.id)}
            />
            <textarea 
              value={choice.text} 
              className='form-control w-25 me-3'
              onChange={(e) => handleChoiceTextChange(choice.id, e.target.value)} 
              placeholder="Enter choice text here..."
            />
            <button 
              className='btn btn-secondary h-100'
              onClick={() => removeChoice(choice.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <br />
        <button 
          className='btn btn-secondary'
          onClick={addChoice}
        >
          Add Choice
        </button>
      </div>
      <hr />
      <div>
        <button 
          className='btn btn-danger me-3' 
          onClick={handleSave}
        >
          Save/Update Question
        </button>
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
