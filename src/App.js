import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Recipes from "./Components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "b98f42fa";
  const APP_KEY = "2a7ce9dbeb7fea0bb7a9277e85b16885";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;