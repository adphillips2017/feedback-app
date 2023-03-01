import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({rating, text, id}) {
  const { deleteFeedbackById } = useContext(FeedbackContext)

  return (
    <Card dark={ false }>
        <div className="num-display">{rating}</div>
        <button onClick={() => deleteFeedbackById(id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default FeedbackItem