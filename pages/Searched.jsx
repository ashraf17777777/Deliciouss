import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const params = useParams();

  const getResult = async (name) => {
    const url = `https://dummyjson.com/recipes/search?q=${name}`;
    console.log("📡 Fetching from:", url); // <-- log URL

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("✅ Response:", data); // <-- log API response
      setSearchedRecipe(data.recipes || []);
    } catch (err) {
      console.error("❌ Error fetching cuisine:", err);
    }
  };

  useEffect(() => {
    getResult(params.search);
  }, [params.search]);

  return (
    <>
      <Grid>
        {searchedRecipe.map((item) => {
          return (
            <Card>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem; /* or use margin for older support */
  justify-content: space-between;
`;
const Card = styled.div`
  flex: 0 1 25rem;
  max-width: 100%;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #333;
  }
`;

export default Searched;
