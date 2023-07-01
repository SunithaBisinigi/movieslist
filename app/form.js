export function Form() {
    return (
    <>
  <pre>
    <h1>Fill this form to add Movie</h1> <img scr="form.png" id="form_cross" onclick=" "/>
  </pre>
  <form>
    <label htmlFor="Title">Name of the Movie :</label>
    <br />
    <input type="text" id="name" />
    <br />
    <label htmlFor="year">Year of Release</label>
    <br />
    <input type="range" min={1000} max={2999} defaultValue={2000} />
    <br />
    <label>Movie Duration</label>
    <pre>
      <input type="number" />
      <label>Hours </label>
      {"  "}
      <input type="number" />
      <label>Min</label>
    </pre>
    <label>Movie Genre</label>
    <p>Select all that is applicable</p>
    <br />
    <input type="checkbox" id="drama" defaultValue="drama" />
    <label htmlFor="drama">Drama</label>
    <input type="checkbox" id="Biography" defaultValue="Biography" />
    <label htmlFor="Biography">Biography</label>
    <input type="checkbox" id="romance" defaultValue="romance" />
    <label htmlFor="romance">Romance</label>
    <input type="checkbox" id="comedy" defaultValue="comedy" />
    <label htmlFor="comedy">Comedy</label>
    <input type="checkbox" id="adven" defaultValue="adven" />
    <label htmlFor="adven">Adventure</label>
    <input type="checkbox" id="fam" defaultValue="fam" />
    <label htmlFor="fam">Family</label>
    <input type="checkbox" id="doc" defaultValue="doc" />
    <label htmlFor="doc">Documentary</label>
    <br />
    <label>Description</label>
    <input type="text" />
    <br />
    <p>Upload Image of Movie</p>
    <p id="upload" onclick=" ">
      Upload
    </p>
  </form>
</>

);
}
