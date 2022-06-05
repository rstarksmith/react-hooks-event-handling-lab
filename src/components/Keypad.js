import react from "react"

function Keypad() {
    function enterPassword(event){
        console.log ('Entering password...')
    }

    return (
        <input type="password" onChange={enterPassword} />
    )
}

export default Keypad