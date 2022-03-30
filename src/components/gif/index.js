const GifComponent = (props) =>{
    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td><img src={props.url}></img></td>
                <td>ID: {props.id}</td>
                <td>Upload Date: {props.date}</td>
                <td>Rating: {props.rating}</td>
            </tr>
        </>
    );    
}

export {GifComponent};

