import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Editor from 'react-simple-wysiwyg'; 

export default function TrueFalseEditor() {
    const cid = useParams();
  const [title, setTitle] = useState(''); 
  const [points, setPoints] = useState(0); 
  const [question, setQuestion] = useState(''); 
  const [isTrue, setIsTrue] = useState(true); 
  const navigate = useNavigate(); 
  const handleSave = () => {
    // save logic
    const questionData = {
      title,
      points,
      question,
      isTrue,
    };
    console.log('Saving question:', questionData);
    
    navigate("Questions/"); 
  };

  return (
    <div>
      <h2>True/False Question Editor</h2>
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
          Correct Answer
          <div className='form-check'>
            <input 
              type="radio" 
              id="trueOption" 
              name="answer" 
              checked={isTrue} 
              onChange={() => setIsTrue(true)} 
              className='form-check-input'
            />
            <label htmlFor="trueOption" className='form-check-label'>
              True
            </label>
          </div>
          <div className='form-check'>
            <input 
              type="radio" 
              id="falseOption" 
              name="answer" 
              checked={!isTrue} 
              onChange={() => setIsTrue(false)} 
              className='form-check-input'
            />
            <label htmlFor="falseOption" className='form-check-label'>
              False
            </label>
          </div>
        </label>
      </div>
      <hr />
      <div>
        <button className='btn btn-danger me-3' onClick={handleSave}>Save/Update Question</button>
        <Link className='btn btn-secondary'  to={`/Kanbas/Courses/${cid}/Quizzes/create/Questions`}>Cancel</Link>
      </div>
    </div>
  );
}
