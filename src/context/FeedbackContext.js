import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

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

  const updateFeedback= (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedbackById,
      addFeedback,
      updateFeedback,
      editFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext