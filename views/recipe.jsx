const React = require('react');

class Recipe extends React.Component{
    render(){

        let title = this.props.recipe.title
        let ingredients = this.props.recipe.ingredients
        let instructions = this.props.recipe.instructions

        return(
            <html>
                <body>
                  <div>
                        <h1>Title: {title}</h1>
                        <h2>Ingredients: {ingredients}</h2>
                        <h2>Instructions: {instructions}</h2>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = Recipe