export function Deleting(props) {
    console.log(props);
    return <img src="remove.png" onClick={() => {props.onDelete()}}/>
}
