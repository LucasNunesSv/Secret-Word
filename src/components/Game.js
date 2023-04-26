import './Game.css'
import {useState, useRef} from 'react'

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongletters, guesses, score}) => {
  
  const [letter,setLetter] = useState();
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    
    setLetter("");

    letterInputRef.current.focus();

  }
  
  return (
    <div className='game'>
        <p className='points'>
            Pontuação: <span>{score}</span>
        </p>
        <h1>Advinhe a palavra secreta</h1>
        <h3 className='tip'>
            Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p className='guess'>Você ainda tem {guesses} tentativa(s)</p>
        <div className="wordContainer">
            {letters.map((letter, i) => (
                guessedLetters.includes(letter) ? (
                    <span key={i} className='letter'>
                        {letter}
                    </span>
                ) : (
                    <span key={i} className='blankSquare'></span>
                )

            ))}
        </div>
        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra: </p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='letter' maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
                <button>Jogar</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já utilizadas: </p>
            {wrongletters.map((letter, i) => (
                <span className='wrongLetter' key={i}>{letter}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game