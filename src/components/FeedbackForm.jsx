import { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (!feedbackEdit.edit) return

    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleTextChange = ({target: {value}}) => {
    setText(value)

    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (value !== '' && value.trim().length < 10) {
      setMessage('Text must be at least 10 characters.')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length < 10) return

    const newFeedback = { text, rating }

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
      addFeedback(newFeedback)
    }

    setText('')
  }

  return (
    <Card>
      <form  onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selected={rating} select={setRating} />

        <div className="input-group">
          <input
            placeholder='Write a review.'
            type="text"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        <div className="message">{message}</div>
      </form>
    </Card>
  )
}

export default FeedbackForm