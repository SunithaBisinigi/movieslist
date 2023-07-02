import {Likes} from './likes.js'
import {Dislike} from './likes.js'
import {Deleting} from './delete.js'
export function MovieRow() {
    return(
<>
<div className="main container">
  <div className="col pic">
    <img src="movie.png" id="mpic" />
  </div>
  <div className="col data">
    <div className="info det">
      <h1>Twilight</h1>
      <p>welcome to India</p>
      <h3>Description</h3>
      <p>Sunitha</p>
    </div>
    <div className="info action">
      <div className="actcol">
        <Likes />
      </div>
      <div className="actcol delt">
        <Deleting />
      </div>
    </div>
  </div>
</div>  
<div className="mline"/> 
</>  
);
}
