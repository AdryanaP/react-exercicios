export default function Person(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.city}</p>
        </div>
    )
}