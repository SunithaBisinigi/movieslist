import {Likes} from './likes.js'
import {Delete} from './delete.js'
export function MovieRow() {
    return(
        <div classname="row movie">
  <div classname="col pic">
    <img src="movie.png" />
  </div>
  <div classname="col data">
    <h1>Twilight</h1>
    <p>welcome to India</p>
    <h3>Description</h3>
    <p>Sunitha</p>
    <div classname="r act">
      <Likes />
      <Delete />
    </div>
  </div>
</div>

      );
}
