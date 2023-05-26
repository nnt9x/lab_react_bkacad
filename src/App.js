import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Header } from "./layout/Header";
import { AboutPage } from "./pages/AboutPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { UserPage } from "./pages/UserPage";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/users?limit=12")
			.then((response) => response.json())
			.then((data) => setUsers(data.users))
			.catch((error) => console.log(error));
	}, []);

	function onSearch(keyword) {
		fetch(`https://dummyjson.com/users/search?q=${keyword}&limit=12`)
			.then((response) => response.json())
			.then((data) => setUsers(data.users))
			.catch((error) => console.log(error));
	}

	return (
		<BrowserRouter>
			<AppContext.Provider value={{ users, onSearch }}>
				<div className="app container">
					<Header />
					{/* Content */}
					<Routes>
						<Route exact path="/" element={<UserPage />} />
						<Route exact path="/user" element={<UserPage />} />
						<Route path="/user/:id" element={<UserInfoPage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
					{/* Content */}
				</div>
			</AppContext.Provider>
		</BrowserRouter>
	);
}

export default App;
