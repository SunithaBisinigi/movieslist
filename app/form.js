export function Form() {
    return (
        <div id="form">
            <pre>
                <img src="form.png" id="form_cross" />
                <h1>Fill this form to add Movie</h1> 
            </pre>
            <form>
                <label htmlFor="Title">Name of the Movie :</label>
                <br />
                <input type="text" class="input mtitle" />
                <br /><br />   
                <label htmlFor="year">Year of Release</label>
                <br />
                <input type="text" class="input year" />
                <br /><br />
                <label>Movie Duration</label>
                <pre>
                    <input type="text" class="input hrs" />
                    <label>Hours   </label>
                    <input type="text" class="input min" />
                    <label>Min</label>
                </pre>
                <label>Movie Genre</label><br />
                <label>Select all that is applicable</label><br />
                <input type="checkbox" class="gen drama" defaultValue="drama" />
                <label htmlFor="drama">Drama</label><br />
                <input type="checkbox" class="gen Biography" defaultValue="Biography" />
                <label htmlFor="Biography">Biography</label><br />
                <input type="checkbox" class="gen romance" defaultValue="romance" />
                <label htmlFor="romance">Romance</label><br />
                <input type="checkbox" class="gen comedy" defaultValue="comedy" />
                <label htmlFor="comedy">Comedy</label><br />
                <input type="checkbox" class="gen adven" defaultValue="adven" />
                <label htmlFor="adven">Adventure</label><br />
                <input type="checkbox" class="gen fam" defaultValue="fam" />
                <label htmlFor="fam">Family</label><br />
                <input type="checkbox" class="gen doc" defaultValue="doc" />
                <label htmlFor="doc">Documentary</label><br />
                <br />
                <label>Description</label><br />
                <input type="text" class="input description" />
                <br />
                <p>Upload Image of Movie</p>
                <button class="input upload" onclick=" ">Upload
                </button>
            </form><br /><br /><br /><br />
            <img src="addmovie.png" id="adding" /><br /><br /><br /><br />
         </div>
    );
}
