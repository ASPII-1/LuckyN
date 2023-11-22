import Die from './Die'
import './Dice.css'
export default function Dice({ dice, color }) {
    return (
        <>
            <section className="Dice">
                {
                    dice.map((single, index) => (
                        <Die key={index} val={single} color={color} />
                    ))
                }
            </section>
        </>
    )
}
