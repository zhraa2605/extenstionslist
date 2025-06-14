import  { useState } from "react";
import data from '../data/data.json'
import Card from "./card";

console.log(data)

const CardList = () => {
  const [cards,setCards] = useState(data);
  const [filter , setFilter] = useState("all");



    const toggleSwitch = (id) => {
    const updated = cards.map((card) =>
      card.id === id ? { ...card, isActive: !card.isActive } : card
    );
    setCards(updated);
  };


    const filterCards = () => {
    if (filter === "all") {
      return cards;
    } else if (filter === "active") {
      return cards.filter((card) => card.isActive);
    } else if (filter === "inactive") {
      return cards.filter((card) => !card.isActive);
    }
  };

  const removedCard = (id) => {
    const updated = cards.filter((card) => card.id !== id);
    setCards(updated);
  };

  return (
    <div>
    <div className="flex justify-between items-center m-2 mb-4">
      <h1 className="font-bold text-2xl mt-5 text-Neutral-900 dark:text-neutral-50">
        Extensions List
      </h1>

      <div className="flex flex-row space-x-1.5">
        <button
  className={`button ${filter === "all" ? "bg-red-500 text-white" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
            className={`button ${filter === "active" ? "bg-red-500 text-white" : ""}`}

     onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
            className={`button ${filter === "inactive" ? "bg-red-500 text-white" : ""}`}

     onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterCards().map((item ) => (
        <Card
        key={item.id}
          name={item.name}
          logo={item.logo}
          desc={item.description}
          isActive={item.isActive}
          toggleSwitch={() => toggleSwitch(item.id)} 
          removeCard={() => removedCard(item.id)}
        />
      ))}


    </div>

    </div>
  );
};

export default CardList;
