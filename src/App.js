import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedbackById = (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return

    setFeedback(feedback.filter(item => item.id !== id))
  }

  const addFeedback = (newFeedbackItem) => {
    newFeedbackItem.id = uuidv4()
    let newFeedback = [...feedback]
    newFeedback.unshift(newFeedbackItem)
    setFeedback(newFeedback)
  }

  return (
  <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedbackById}
        />
      </div>
  </>
  );
}

export default App