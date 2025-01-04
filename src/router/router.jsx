import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyPage from "@/pages/MyPage";
import Chat from "@/pages/Chat";
import Calendar from "@/pages/Calendar";
import Kanban from "@/pages/Kanban";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "mypage",
				element: <MyPage />,
			},
			{
				path: "chat/:study_id",
				element: <Chat />,
			},
			{
				path: "calendar/:study_id",
				element: <Calendar />,
			},
			{
				path: "kanban/:study_id",
				element: <Kanban />,
			},
			// 사용자 ID를 사용하는 경로
			// {
			// 	path: "user/:id", // :id 부분이 동적 경로
			// 	element: <UserProfile />, // 해당 ID를 받아서 처리하는 컴포넌트
			// },
		],
	},
]);
export default router;
