import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
import CoursePage from "./pages/CoursePage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import WishlistPage from "./pages/WishlistPage";
import closeButton from "../assets/closeButton.svg";
import { getData, updateDatas } from "../src/api/firebase";
import { useEffect } from "react";

function wishlistPage(){
    const [courses, setCourses] = useState([]);
    const member = JSON.parse(localStorage.getItem("member"));

    const handleDelete = async (course) => {
        const result = await updateDatas("member", member.docId, course, {
            type: "DELETE",
            fieldName: "courseList"
          })
          handleLoad();
    }

    const handleLoad = async () => {
        const result = await getData("member", "id", "==", member.id);
        setCourses(result.CourseList);
    };

    useEffect(()=> {
        handleLoad();
    }, []);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>나의 위시리스트</h1>
      {courses.length === 0 ? (
        <>
          <Warn
            className={styles.emptyList}
            title="담아 놓은 코스가 없어요."
            description="카탈로그에서 나에게 필요한 코스를 찾아보세요."
          />
          <div className={styles.link}>
            <Link to="/courses">
              <Button as="div">코스 찾아보기</Button>
            </Link>
          </div>
        </>
      ) : (
        <ul className={styles.items}>
          {courses.map((course) => (
            <li key={course.slug} className={styles.item}>
              <CourseItem course={course} />
              <img
                className={styles.delete}
                src={closeButton}
                alt="닫기"
                onClick={() => handleDelete(course)}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default WhishlistPage;