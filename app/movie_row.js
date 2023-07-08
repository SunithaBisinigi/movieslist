import {Likes} from './likes.js'
import {Dislike} from './likes.js'
import {Deleting} from './delete.js'

export default function MovieRow(props) {
    return(
        <>
            <div className="main container">
                <div className="col pic">
                    <img src="movie.png" id="mpic" />
                </div>
                <div className="col data">
                    <div className="info det">
                        <h1>{props.name}</h1>
                        <p>2023.1h 28m  | Biography,Documentary</p>
                        <h3>Description</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="info action">
                        <div className="actcol">
                            <Likes />
                        </div>
                        <div className="actcol delt">
                            <Deleting 
                                onDelete={props.onDelete}
                                id={props.movie_id}
                            />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="mline"/> 
        </>  
    );
}
