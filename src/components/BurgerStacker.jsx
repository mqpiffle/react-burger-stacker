import React, { Component } from 'react'

import './BurgerStacker.css'

class BurgerStacker extends Component {
    render() {
        const { ingredientStack, handleRemove, clear } = this.props

        const burgerBits = ingredientStack.map(ing => (
            <div
                className='burger-stacker__ingredient'
                style={{ backgroundColor: `${ing.color}` }}
            >
                <h3>{ing.name}</h3>
                <button
                    className='burger-stacker__remove'
                    onClick={handleRemove}
                >
                    -
                </button>
            </div>
        ))

        return (
            <div className='burger-stacker'>
                {burgerBits}
                <button
                    className='btn'
                    onClick={clear}
                >
                    Clear Burger
                </button>
            </div>
        )
    }
}

export default BurgerStacker
