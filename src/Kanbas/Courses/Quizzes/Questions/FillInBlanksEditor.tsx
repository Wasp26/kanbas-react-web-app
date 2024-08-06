import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg'; 

export default function FillInBlanksEditor() {
    const cid = useParams();
  const [title, setTitle] = useState(''); 
  const [points, setPoints] = useState(0); 
  const [question, setQuestion] = useState(''); 
  const [blanks, setBlanks] = useState<string[]>(['']); 
  const navigate = useNavigate(); 

  const addBlank = () => {
    setBlanks([...blanks, '']); 
  };

  const removeBlank = (index: number) => {
    setBlanks(blanks.filter((_, i) => i !== index)); 
  };

  const handleBlankChange = (index: number, value: string) => {
    const updatedBlanks = blanks.map((blank, i) => (i === index ? value : blank));
    setBlanks(updatedBlanks); 
  };

  const handleSave = () => {
    const questionData = {
      title,
      points,
      question,
      blanks: blanks.map(blank => blank.trim().toLowerCase()), 
    };
    console.log('Saving question:', questionData);
    // save logic
    navigate("Questions/"); 
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
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
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
        <label>
          Blanks (Possible Correct Answers)
          {blanks.map((blank, index) => (
            <div key={index} className='d-flex mb-2'>
              <input
                type="text"
                className='form-control w-50 me-2'
                value={blank}
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
