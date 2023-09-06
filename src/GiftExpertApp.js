import React from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Zodiac"]);

  const onAddCategory = (category) => {
    setCategories([...list, category]);
  };

  return (
  <>
    <h1>GiftExpertApp</h1>;

    <AddCategory onAddCategory={onAddCategory} />
    {
      categories.map((category, key) => 
      {
        return <GifGrid  category={category} key={key}/>
      }
      )
    }
  </>
  )
};

export default GiftExpertApp;
