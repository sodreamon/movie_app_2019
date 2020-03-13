import React from "react";

function App() {
  return <span>something</span>;
}

export default App;
/*import React from "react";
import axios from "axios";
import Movie from "./components/Movies";
import "./App.css";
// import PropTypes from "prop-types";
// import Potato from "./Potato";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
        //data.data.movies와 같은 [es6] 표현 여튼 마지막 movies를 movies라고 정의함
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    //this.setState({movies:movies}) ({스테이트에 있는 movies : getMovies에서 정의한 movies}) 와 같이 표현가능

    //console.log(movies);
    //async로 동기화 되는 것이라고 알려줌, await로 시간이 걸리는 걸 알려줌    await는 async가 있어야 사용가능
  };

  componentDidMount() {
    this.getMovies();
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: false });
  //   }, 6000);
  //   //render되면 실행되는 함수임.   setTimeout으로 6초 뒤에 setTimeout 내부 값을 실행    setState로 isLoading을 false값으로 변경
  // }
  render() {
    const { isLoading, movies } = this.state;
    //[ES6] isLoading이 state에 있는 isLoading이라고 정의     movies는 Movies.Moive component와 무관함
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              //Movies.Movie component를 가져옴 Movie({}) component에 지정한 항목들만 내용물로 사용가능     <Movie 안의 내용들만 Movies.js > Movie component와 관련있음
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;*/

/*class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("hello");
  //}
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
    // state를 직접 변경하면 안됨 setState를 써야 됨. (current => ({count: current.count + 1}))는 ({count: this.state.count + 1})과 같음    setState를 호출 할 때마다 새로운 state를 render해옴
  };

  // componentDidMount() {
  //   console.log("component rendered");
  //   //render가 처음 발생하면 실행 update때는 상관 없음
  // }
  // componentDidUpdate() {
  //   console.log("i just updated");
  //   //render가 state등에 의해 update되면 실행
  // }
  // componentWillUnmount() {
  //   console.log("Goodbye, cruel world");
  //   //다른 페이지로 가거나 등등 component가 끝날 때 실행
  // }
  render() {
    // console.log("im rendering");
    return (
      <div>
        <h1>the number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  // state 내부의 값은 변화를 줄 수 있음
  // 클릭하면 add, minus 함수를 실행하는 버튼을 만듬
}*/

// 일단은 array를 하나 만듬
/* const FoodILike = [
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
]; */

/*function Food({ name, picture, rating }) {
  // Food를 JSX component로 쓸 거라서 첫글자 대문자
   console.log(fav);
  콘솔 창에 JSX fav값을 출력한다. 
  function Food({ fav })는 (props.fav)와 같음
  한 conponent에서 여러 props를 사용하려면
  function Food(props) -> props.fav 처럼 사용하는게 편함 
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
       image는 src(source라는 뜻)를 써야됨 
    </div>
  );
   Food가 가진 모든 fav를 loop로 출력함 
} */

/*Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
   내용물이 string인지 number인지 
  require은 필수 인지 아닌지
};*/

/* function renderFood(dish) {return <Food name={dish.name} picture={dish.image} />;}
아래 {FoodILike.map(renderFood)}를 dish라고 재정의 하고 이전 방식과 같이 return 할 수 있다. */

/*function App() {
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
      map으로 FoodILike array 안의 dish를 정의하고 dish들 안에 정의된 name들을
      호출함. 그리고 Food 함수로 props를 보냄.
      그리고 dish들은 같은 정의를 갇기 때문에 만든 id값을 넣어줌 key

      {FoodILike.map(renderFood)}
      위쪽에 renderFood라는 function을 만들어 내부값을 만들어줄 수 있다

      <Food fav="kimchi" />
      component는 첫글자 대문자 필수 Food 
       위 같이 props를 만들어줌 fav가 props임
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" /> 

       <Potato /> 
      Potato 내용이 hello 내용 아래에 입력됨(index.js에 따로 Potato를 쓸 필요
      없음)
    </div>
  );
}*/
