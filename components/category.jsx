import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <>
      <List>
        <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice /> <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/Pakistani"}>
          <FaHamburger /> <h4>Pakistani</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
          <GiChopsticks /> <h4>Japanese</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles /> <h4>Thai</h4>
        </SLink>
      </List>
    </>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.8);
  @media (min-width: 200px) and (max-width: 1200px) {
    width: 6rem;
    height: 6rem;
  }

  h4 {
    font-size: 0.8rem;
    color: white;
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    @media (min-width: 200px) and (max-width: 1200px) {
      font-size: 0.7rem;
    }
  }

  svg {
    color: white;
    font-size: 2rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
