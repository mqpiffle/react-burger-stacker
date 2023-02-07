import { useState } from 'react'

import IngredientList from './IngreditentList'
import BurgerStacker from './BurgerStacker'

import './BurgerBuilder.css'

const BurgerBuilder = () => {
    const [ingredientStack, setIngredientStack] = useState([])

    const ingredients = [
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
    const handleClick = e => {
        // console.log('e.target: ', e)
        e.preventDefault()
        setIngredientStack([JSON.parse(e.target.value), ...ingredientStack])
    }

    const clearBurger = () => {
        setIngredientStack([])
    }

    const handleRemove = e => {
        // console.log('e.target: ', e)
        e.preventDefault()
        const removeFirst = ingredientStack.slice(1)
        console.log(removeFirst)
        setIngredientStack([...removeFirst])
    }

    // console.log(ingredientStack)
    return (
        <div className='burger-builder'>
            <ul className='ingredient-list-container'>
                <IngredientList
                    ingredients={ingredients}
                    handleClick={handleClick}
                />
            </ul>
            <BurgerStacker
                ingredientStack={ingredientStack}
                handleRemove={handleRemove}
                clear={clearBurger}
            />
        </div>
    )
}
export default BurgerBuilder
