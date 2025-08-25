import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const getRecipe = async (name) => {
    const data = await fetch(`https://dummyjson.com/recipes/${name}`);
    const response = await data.json();
    setDetails(response);
    console.log(response);
  };

  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return (
    <>
      <Wrapper>
        <Card>
          <h2>{details.name}</h2>
          <img src={details.image} alt="image" />
        </Card>
        <Info>
          <Button
            onClick={() => {
              setActiveTab("Instructions");
            }}
            className={activeTab === "Instructions" ? "active" : ""}
          >
            Instructions
          </Button>
          <Button
            onClick={() => {
              setActiveTab("Ingredients");
            }}
            className={activeTab === "Ingredients" ? "active" : ""}
          >
            Ingredients
          </Button>
          {activeTab === "Instructions" && (
            <div>
              <h3>{details.instructions}</h3>
            </div>
          )}
          {activeTab === "Ingredients" && (
            <ul>
              {details.ingredients &&
                details.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
          )}
        </Info>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  img {
    width: 70%;
    border-radius: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Card = styled.div`
  flex: 1 0 50%;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  cursor: pointer;
  font-weight: 600;
  margin-right: 2rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
