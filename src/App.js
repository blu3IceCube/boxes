import React from "react"
import "./styles.css"
import boxes from "./boxes"
import Box from "./components/Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    function toggle(id) {
        setSquares(prevSquares => {
            // One simpler way to flip state
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })

            // Another complex way to flip state

            // const newSquares = []
            // for(let i = 0; i < prevSquares.length; i++) {
            //     const currentSquare = prevSquares[i]
            //     if(currentSquare.id === id) {
            //         const updatedSquare = {
            //             ...currentSquare,
            //             on: !currentSquare.on
            //         }
            //         newSquares.push(updatedSquare)
            //     } else {
            //         newSquares.push(currentSquare)
            //     }
            // }
            // return newSquares

        })
    }

    const squareElements = squares.map(square => {
        return <Box  
                    key={square.id}
                    on={square.on}
                    toggle={() => toggle(square.id)}    
                />
    })

    return (
        <div className="box-container">
            {squareElements}
        </div>
    )
}