import { getDatas } from "../firebase";
import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { useState } from "react";


function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt")
  
  //sort 함수에 아무런 argument도 전달하지 않을 떄는 기본적으로 유니코드에 정리된 문자열 순서에 따라 결정된다.
  //==> compareFuntion가 생략된 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드 값 순서대로 정렬된다는 의미이다.
   // 그렇기 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않는다.
  // 반환값 < 0 : a가 b보다 앞에 있어야 한다.
  // 반환값 == 0 : a와 b의 순서를 바꾸지 않는다.
  // 반환값 > 0 : b가 a보다 앞에 있어야 한다.
  // a-b : 오름차순, b-a : 내림차순

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id)=>{
    //items 에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거
    const nextItems = items.filter((item)=> item.id !== id)
    setItems(nextItems);
  };

  const handleLoadClick = async ()=> {
    const { reviews } = await getDatas("movie");
  }
  
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={items} onDelete={handleDelete}/>
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
