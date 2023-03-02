import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item}) {
  const { deleteFeedbackById, editFeedback } = useContext(FeedbackContext)

  return (
    <Card dark={ false }>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedbackById(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
}

export default FeedbackItem