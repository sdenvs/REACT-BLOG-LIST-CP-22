import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="mb-5">
      <div className="d-flex justify-content-between">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
