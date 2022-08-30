import '../styles.css'
import Button from './Button'

const Quote = ({ indexq, jsonq, changeUser, colors, randomColor }) => {
    document.body.style = `background: ${colors[randomColor]}`;
    return (
        <div className="quotesBox" style={{color: colors[randomColor]}}>
            <ul>
                <li>
                    <i class="fa-solid fa-quote-left">  </i>   
                    { jsonq[indexq].quote} 
                </li>
                <li>
                    {jsonq[indexq].author}
                </li>
            </ul>
            <Button changeUser={changeUser} randomColor={randomColor} colors={colors} />
        </div>
    )
}
export default Quote