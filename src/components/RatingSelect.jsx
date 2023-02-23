import PropTypes from 'prop-types'

function RatingSelect({ select, selected}) {
  const handleChange = (e) => {
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

RatingSelect.protoTypes = {
  selected: PropTypes.number.isRequired,
  select: PropTypes.func.isRequired
}

export default RatingSelect