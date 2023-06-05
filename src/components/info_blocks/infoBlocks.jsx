import './infoBlocks.css'
import PropTypes from 'prop-types'
const InformationBlock = ({ img, title, text, link, text2 }) => {
  return (
    <div className='info_Blocks'>
      <img src={img} height='75px' />
      <h3>{title}</h3>
      <p>
        {text}
        <a href={link}> {text2}</a>
      </p>
    </div>
  )
}

InformationBlock.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  text2: PropTypes.string,
}
export default InformationBlock
