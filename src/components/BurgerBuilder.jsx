// import { useState } from 'react'
import React, { Component } from 'react'

import IngredientList from './IngreditentList'
import BurgerStacker from './BurgerStacker'

import './BurgerBuilder.css'

class BurgerBuilder extends Component {
    state = {
        ingredientStack: [],
    }
    // const [ingredientStack, setIngredientStack] = useState([])

    ingredients = [
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' },
    ]

    // click handler
    handleClick = e => {
        // console.log('e.target: ', e)
        e.preventDefault()
        // setIngredientStack([, ...ingredientStack])
        this.setState(prevState => {
            const newIng = [JSON.parse(e.target.value), ...this.ingredientStack]
            return {
                ingredientStack: { ...this.state.ingredientStack, ...newIng },
            }
        })
    }

    clearBurger = () => {
        // setIngredientStack([])
        this.setState({ ingredientStack: [] })
    }

    handleRemove = e => {
        // console.log('e.target: ', e)
        e.preventDefault()
        const removeFirst = this.state.ingredientStack.slice(1)
        // console.log(removeFirst)
        // setIngredientStack([...removeFirst])
        this.setState({ ingredientStack: [...removeFirst] })
    }

    // console.log(ingredientStack)
    render() {
        return (
            <div className='burger-builder'>
                <ul className='ingredient-list-container'>
                    <IngredientList
                        ingredients={this.ingredients}
                        handleClick={this.handleClick}
                    />
                </ul>
                <BurgerStacker
                    ingredientStack={this.state.ingredientStack}
                    handleRemove={this.handleRemove}
                    clear={this.clearBurger}
                />
            </div>
        )
    }
}
export default BurgerBuilder
