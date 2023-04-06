

const BookmarkIcon = ({fill, pathfill}) => {
  return (
    <svg className="bookmark-icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={fill} cx="28" cy="28" r="28"/><path fill={pathfill} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
  )
}

export default BookmarkIcon