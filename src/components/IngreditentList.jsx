import React, { Component } from 'react'

import Ingredient from './Ingredient'
import './IngredientList.css'

class IngredientList extends Component {
    // console.log(ingredients[0].name)
    render() {
        const { ingredients, handleClick } = this.props
        const allIngredients = ingredients.map((ing, i) => (
            <Ingredient
                handleClick={handleClick}
                ing={ing}
                itemKey={i}
            />
        ))
        // console.log(ing)
        return <div className='ingredient-list'>{allIngredients}</div>
    }
}

export default IngredientList
