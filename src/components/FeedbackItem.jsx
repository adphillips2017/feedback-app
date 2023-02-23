import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({rating, text, id, handleDelete}) {
  return (
    <Card dark={ false }>
        <div className="num-display">{rating}</div>
        <button onClick={() => handleDelete(id)} className="close">
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