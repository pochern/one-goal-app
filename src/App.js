import React, { useState, useEffect } from 'react';
import './App.css';
import SimpleListMenu from './SimpleListMenu'

const theme = {}

function App() { 
  const [goalData, setGoalData] = useState('')
  const [goalId, setGoalId] = useState('')
  const [goalCompleted, setGoalCompleted] = useState('')
  const [allGoals, setAllGoals] = useState('')
  const [unfinishedGoals, setUnfinishedGoals] = useState('')
	useEffect(() => {
    fetch('data')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setGoalData(data.goals[data.goals.length-1].text)
      setGoalId(data.goals[data.goals.length-1].id)
      setGoalCompleted(data.goals[data.goals.length-1].completed)
      setAllGoals(data.goals)
      setUnfinishedGoals(data.goals.filter(goal => goal.completed === 'false'))
    })
	}, [])

  return (
    <div className = 'App'>
      <SimpleListMenu 
        unfinishedSavedGoals={(unfinishedGoals!=='') && unfinishedGoals} 
        savedGoal={goalData}
        savedGoalId={goalId}
        savedGoalCompleted={goalCompleted}
        allSavedGoals={allGoals}
      />
    </div>
  
  );
}

export default App;
