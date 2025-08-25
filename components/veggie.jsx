import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Viggie() {
  const [viggie, setViggie] = useState([]);

  useEffect(() => {
    const getViggie = async () => {
      const check = localStorage.getItem("viggie");
      if (check) {
        setViggie(JSON.parse(check));
      } else {
        try {
          const response = await fetch(`https://dummyjson.com/recipes`);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const allRecipes = data.recipes;
          const filteredRecipes = allRecipes.filter((recipe) => {
            return !recipe.name.toLowerCase().includes("chicken");
          });
          console.log(filteredRecipes);
          localStorage.setItem("viggie", JSON.stringify(filteredRecipes || []));
          setViggie(filteredRecipes || []);
        } catch (error) {
          console.error("Failed to fetch popular recipes:", error);
        }
      }
    };

    getViggie();
  }, []);

  return (
    <>
      <Wrapper>
        <h3>Viggie</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
            breakpoints: {
              900: {
                perPage: 2,
                gap: "1.5rem",
              },
              600: {
                perPage: 1,
                gap: "1rem",
              },
            },
          }}
        >
          {viggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.name}</p>
                    <img src={recipe.image} alt={recipe.name} />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 4rem;

  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    margin: 2rem 1rem;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Card = styled.div`
  height: 18rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    height: 14rem;

    p {
      font-size: 0.9rem;
    }
  }
`;

export default Viggie;
