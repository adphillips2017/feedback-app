import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [useBackend, setUseBackend] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    if (!useBackend) {
      setFeedback(FeedbackData)
      setIsLoading(false)
    } else {
      fetchFeedback()
    }
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_oder=desc')
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
      isLoading,
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