import React from "react";
// import Potato from "./Potato";

function Food({ name }) {
  // Food를 JSX component로 쓸 거라서 첫글자 대문자
  /* console.log(fav);
  콘솔 창에 JSX fav값을 출력한다. 
  function Food({ fav })는 (props.fav)와 같음
  한 conponent에서 여러 props를 사용하려면
  function Food(props) -> props.fav 처럼 사용하는게 편함 */
  return <h1>i love {name}</h1>;
  /* Food가 가진 모든 fav를 loop로 출력함 */
}

// 일단은 array를 하나 만듬
const FoodILike = [
  {
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    name: "Samgiopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG&f=1&nofb=1"
  },
  {
    name: "Bibimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1"
  },
  {
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%253A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F9907F84D5C558B9429&f=1&nofb=1"
  },
  {
    name: "Kimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F16610E42512D8B7C15&f=1&nofb=1"
  }
];

function App() {
  return (
    <div className="App">
      {FoodILike.map(dish => (
        <Food name={dish.name} />
      ))}
      {/* map으로 FoodILike array 안의 dish를 정의하고 dish들 안에 정의된 name들을
      호출함. 그리고 Food 함수로 props를 보냄. */}
      {/* <Food fav="kimchi" />
      component는 첫글자 대문자 필수 Food 
       위 같이 props를 만들어줌 fav가 props임
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" /> */}
      {/* <Potato /> */}
      {/* Potato 내용이 hello 내용 아래에 입력됨(index.js에 따로 Potato를 쓸 필요
      없음) */}
    </div>
  );
}

export default App;
