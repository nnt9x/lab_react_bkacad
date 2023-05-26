import { useParams } from "react-router-dom";

export function UserInfoPage() {
	const {id }= useParams();

	return (
		<div className="user-page">
			<p>Người dùng {id}</p>
		</div>
	);
}
