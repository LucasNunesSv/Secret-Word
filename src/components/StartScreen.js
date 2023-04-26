import './StartScreen.css'
import logo from "../assets/LogoPng.png"

const StartScreen = ({startGame}) => {
  return (
    <div className="startContainer">
        <div className='start'>
            <img src={logo} alt="" />
            <h1>Bem vindo ao game <br /><span>Secret Word</span></h1>
            <p>Clique no botão abaixo para iniciar o jogo</p>
            <button onClick={startGame}>Start Game</button>
        </div>
    </div>
  )
}

export default StartScreen