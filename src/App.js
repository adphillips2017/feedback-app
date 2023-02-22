import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedbackById = (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return

    setFeedback(feedback.filter(item => item.id !== id))
  }

  return (
  <>
      <Header />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedbackById}
        />
      </div>
  </>
  );
}

export default App