import '../styles.css'

const Button = ({ changeUser, randomColor, colors }) => {
    return (
        <button className="button" style={{color: colors[randomColor]}} onClick={changeUser} ><i class="fa-solid fa-arrow-right"></i></button>
    );
};
export default Button;