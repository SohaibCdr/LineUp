import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getJobseekerInfo } from '../backend/sohaib/DashboardJobseeker';
const handleCardClick = (cardId) => {
    // Handle card click event
    console.log(`Clicked card with ID: ${cardId}`);
  };
const Job = () => {
 const [cards,setcards] = useState([])
 const fetchData = async () => {
    try {
        const Data = [await getJobseekerInfo()];
        setcards(Data);
       
    
    } catch (error) {
       console.error("Error fetching :", error);
          }
 };
useEffect(()=>{
 fetchData();

},[])
console.log('info :'+cards)


// Refresh the page
//location.reload();

    // const [cards, setCards] = useState([]);
  
    // useEffect(() => {
    //   // Fetch data from an API or use mock data
    //   const fetchData = async () => {
    //     // Example fetch call
    //     const response = await fetch('https://api.example.com/cards');
    //     const data = await response.json();
    //     setCards(data);
    //   };
  
    //   fetchData();
    // }, []);
  
    return (
      <div className="app w-[610px]">

 {   
 cards.map((card,index) => (

          <Card
            key={index}
            fullname={card.fullname}
            phone={card.phone}
            email={card.email}
            b_date={card.b_date}
            b_place={card.b_place}
            adress={card.adress}
            status={card.status}
            password={card.password}
             logo={card.imageUrl}
            onClick={() => handleCardClick(card.id)}
          />
        )) } 
      </div>
    );
  }
  
  export default Job ;