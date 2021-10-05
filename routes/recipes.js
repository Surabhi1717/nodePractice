var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res) => {
    const ids = req.query.ids || '';
    console.log("ids",ids)
    if(ids){
        
    } else {
        res.status(400);
    }

    const selectedRecipe = recipes.filter(i => {
        return i.id === ids;
    })[0];

    console.log("selectedRecipe",selectedRecipe)
    if(selectedRecipe) {
        console.log("selectedRecipe   -- if",selectedRecipe)
        const ingredients = selectedRecipe.ingredients;
        console.log("ingredients",ingredients)
        res.status(200).send({ingredients});
    } else {
        res.status(404).send('NOT_FOUND')
    }

})

module.exports = router;

