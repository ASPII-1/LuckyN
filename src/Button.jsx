import './Button.css'
export default function Button({ click, label = "Click Here" }) {
    return (
        <button className="Button" onClick={click}>{label}</button>
    )
}