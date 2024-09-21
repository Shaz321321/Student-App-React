export default function TableItem(props) {
    return (
        <tr>
            <td>{props.item?.id}</td>
            <td>{props.item?.name}</td>
            <td>{props.item?.email}</td>
            <td>{props.item?.rollNo}</td>
            <td>{props.item?.city}</td> {/* Show city */}
            <td>{props.item?.age}</td> {/* Show age */}
            <td>{props.item?.class}</td> {/* Show class */}
            <td>
    <button onClick={() => props.onClickUpdateHandler(props.item)} className="button button-update">Update</button>
    <button onClick={() => props.onClickDeleteHandler(props.item.id)} className="button button-delete">Delete</button>
</td>

        </tr>
    );
}
