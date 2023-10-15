import './Header.css'
import { Link } from 'react-router-dom';
function Header(props)
{
    return( <div className="main">
    <div className="left">
      <h1>DEV@Deakin</h1>
    </div>
    <div className ="center">
      <input  placeholder="Search.." className="search" />
    </div>
    <div className="right">
    <span className="post">Post</span>
    <a href="/login" class="login">Log in</a>
    </div>
  </div>
  )
}
export default Header
