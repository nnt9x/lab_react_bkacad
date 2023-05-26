import { User } from "./User";

export function ListViewUser({ users }) {
	const listView = (
		<div className="row">
			{users.map((user) => (
				<div className="col-3" key={user.id}>
					<User user={user} />
				</div>
			))}
		</div>
	);
	return (
		<div className="container">
			{users.length !== 0 ? (
				listView
			) : (
				<p className="display-6 mx-3 text-center">Không có dữ liệu</p>
			)}
		</div>
	);
}

ListViewUser.defaultProps = {
	users: [],
};
