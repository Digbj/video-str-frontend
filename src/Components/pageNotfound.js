import React from 'react'
import { Link } from 'react-router-dom';
function PageNotfound() {
  return (
    <div className="pagenot">
      <p>Page Not Found!</p>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default PageNotfound