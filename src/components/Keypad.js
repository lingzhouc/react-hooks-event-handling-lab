function Keypad (){

    const handlePassword = () => {
        return console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handlePassword}></input>
        </div>
    )
}

export default Keypad;