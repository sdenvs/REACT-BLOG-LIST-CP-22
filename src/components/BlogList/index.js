// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsListm} = props
  console.log(blogsListm)

  return (
    <ul className="ulList">
      {blogsListm.map(eachItem => (
        <BlogItem key={eachItem.id} details={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
