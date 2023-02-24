import { useEffect, useState  } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Recipes.css';

const Recipes = () => {
    const [recipeAPIData, setRecipeAPIData] = useState([])

    useEffect(() => {
        const recipesUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
        console.log(recipesUrl);
        fetch(recipesUrl)
          .then((res) => res.json())
          .then((data) => {
            console.log("API for recipes is successful", data);
            const getRecipes = data.meals;
            setRecipeAPIData(getRecipes);
          });
      }, []);
    

    console.log(`This is the recipe API data: `, recipeAPIData);

    const recipes = recipeAPIData.map((el) => {
        return (
            <Card className="Card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.strMealThumb} />
            <Card.Body>
              <Card.Title>{el.strMeal}</Card.Title>
              <Card.Text>{el.strTags}</Card.Text>
            </Card.Body>
          </Card>
        )
    })

    return (
        <div>
            <br />
            <h1 className="Recipe-Header">Recipes</h1>
            <Container className="Container" fluid="true">
                
                
                
                {recipes}
            </Container>
        </div>
    )
}

export default Recipes