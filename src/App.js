import React from "react";
import PropTypes from "prop-types";
// import Potato from "./Potato";

// 일단은 array를 하나 만듬
const FoodILike = [
  {
    id: 1,
    // map을 써서 각각의 {}가 정의되면 모두 같은 정의를 갇기 때문에 id가 필요함
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 5
  },
  {
    id: 2,
    name: "Samgiopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG&f=1&nofb=1",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%253A%252F%252Ft1.daumcdn.net%252Fcfile%252Ftistory%252F9907F84D5C558B9429&f=1&nofb=1",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F16610E42512D8B7C15&f=1&nofb=1",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  // Food를 JSX component로 쓸 거라서 첫글자 대문자
  /* console.log(fav);
  콘솔 창에 JSX fav값을 출력한다. 
  function Food({ fav })는 (props.fav)와 같음
  한 conponent에서 여러 props를 사용하려면
  function Food(props) -> props.fav 처럼 사용하는게 편함 */
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
      {/* image는 src(source라는 뜻)를 써야됨 */}
    </div>
  );
  /* Food가 가진 모든 fav를 loop로 출력함 */
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  /* 내용물이 string인지 number인지 */
  /*require은 필수 인지 아닌지*/
};

/* function renderFood(dish) {return <Food name={dish.name} picture={dish.image} />;}
아래 {FoodILike.map(renderFood)}를 dish라고 재정의 하고 이전 방식과 같이 return 할 수 있다. */

function App() {
  return (
    <div className="App">
      {FoodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      {/* map으로 FoodILike array 안의 dish를 정의하고 dish들 안에 정의된 name들을
      호출함. 그리고 Food 함수로 props를 보냄.
      그리고 dish들은 같은 정의를 갇기 때문에 만든 id값을 넣어줌 key */}

      {/* {FoodILike.map(renderFood)}
      위쪽에 renderFood라는 function을 만들어 내부값을 만들어줄 수 있다 */}

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
