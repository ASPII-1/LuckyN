import Dice from './Dice'
import { generate, sum } from './utils'
import { useState } from "react";
import './LuckyN.css'
import Button from './Button';
export default function LuckyN({ diceno, result, color }) {
    const [dice, setDice] = useState(generate(diceno));
    const winner = sum(dice) === result
    function roll() {
        setDice(generate(diceno));
    }
    return (
        <main className='Lucky7'>
            <h1>Lucky {result} {winner && "You won!"}</h1>
            <section >
                <Dice dice={dice} color={color} />
            </section>
            <Button click={roll} label="Re-ROLL" />
        </main>
    )
}