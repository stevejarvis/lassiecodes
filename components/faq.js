import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Faq(slug, question, answer) {
  const link = `#${slug}`
  return (
    <div>
      <h3 id={slug}><a href={link}><FontAwesomeIcon icon="fa-solid fa-link"/></a> {question}</h3>
      <p> {answer} </p>
    </div>
  )      
}
