import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg'; 

type Choice = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export default function MultipleChoiceEditor() {
  const { cid } = useParams(); 
  const [title, setTitle] = useState(''); 
  const [points, setPoints] = useState(0); 
  const [question, setQuestion] = useState(''); 
  const [choices, setChoices] = useState<Choice[]>([{ id: 1, text: '', isCorrect: false }]); 
  const [nextId, setNextId] = useState(2); 

  const addChoice = () => {
    setChoices([...choices, { id: nextId, text: '', isCorrect: false }]);
    setNextId(nextId + 1);
  };

  const removeChoice = (id: number) => {
    setChoices(choices.filter(choice => choice.id !== id));
  };

  const handleChoiceTextChange = (id: number, text: string) => {
    setChoices(choices.map(choice =>
      choice.id === id ? { ...choice, text } : choice
    ));
  };

  const handleCorrectChoiceChange = (id: number) => {
    setChoices(choices.map(choice =>
      ({ ...choice, isCorrect: choice.id === id })
    ));
  };

  const navigate = useNavigate();
  const handleSave = () => {
    // save logic 
    console.log('Saving question:', { title, points, question, choices });
    navigate(`/Kanbas/Courses/${cid}/Quizzes/create/Questions`);
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
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
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
            value={points} 
            onChange={(e) => setPoints(Number(e.target.value))} 
            placeholder="Enter points..."
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Question
          <Editor 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
          />
        </label>
      </div>
      <br />
      <div>
        <label className='mb-1'>Choices</label>
        {choices.map(choice => (
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
