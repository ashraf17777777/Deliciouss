/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const url = `https://dummyjson.com/recipes/tag/${name}`;
    console.log("📡 Fetching from:", url); // <-- log URL

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("✅ Response:", data); // <-- log API response
      setCuisine(data.recipes || []);
    } catch (err) {
      console.error("❌ Error fetching cuisine:", err);
    }
  };
  useEffect(() => {
    console.log("params:", params); // ✅ Add this line

    getCuisine(params.type);
  }, [params.type]);

  console.log("Rendering cuisine:", cuisine);

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.length === 0 ? (
        <p>No recipes found for this cuisine.</p>
      ) : (
        cuisine.map((item) => (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </Link>
          </Card>
        ))
      )}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
