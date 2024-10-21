import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Articles from "./Pages/Articles/Articles";
import UserPanel from "./Components/UserPanel/UserPanel";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/category/:categoryName", element: <Category /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/my-account", element: <UserPanel /> },
];

export default routes;
