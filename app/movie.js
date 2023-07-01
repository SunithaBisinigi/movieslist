export function MovieRow() {
    return(
        <div className="row movie">
            <div className="col pic" />
            <div className="col data">
                <h1>{}</h1>
                <p>{}</p>
                <h3>Description</h3>
                <p>{}</p>
                <div className="r act" />
            </div>
        </div>
      );
}
