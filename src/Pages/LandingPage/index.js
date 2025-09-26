import "./index.css";
import Section from "../../components/Section";

import BreakfastImage from "../../assets/breakfast.png";
import CategoryCard from "../../components/CateroryCard";
import ChocolateImage from "../../assets/chocolate.png";
import dessert from "../../assets/dessert.png";
import meat from "../../assets/meat.png";
import vegan from "../../assets/vegan.png";

const categoriesData = [
    {
        id:1,
        name:"Breakfast",
        url : BreakfastImage
    },
    {
      id:2,
      name:"Chocolate",
      url : ChocolateImage
    },{
      id:3,
      name:"Dessert",
      url : dessert
    },{
      id:4,
      name:"Meat",
      url : meat
    }
  ]

const LandingPage = () => {
  return (
    <div className="landing-page">
        <Section />
        <h1>Categories</h1>
        <ul>
          {categoriesData.map(category => (<CategoryCard data={category} />))}
        </ul>
    </div>
    )
}

export default LandingPage;