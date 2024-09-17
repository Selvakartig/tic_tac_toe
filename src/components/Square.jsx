
export default function Square({squareVal, onSquareClick}){
   
    return <button 
            className="square" 
            onClick={onSquareClick}
            >
                {squareVal}
            </button>
}