import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router';
import { RouteNames } from '../routes/index';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const Navbar = () => {
	const router = useHistory();
	const { isAuth, user } = useTypedSelector(state => state.auth);
	const { logout } = useActions();

	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>
							{user.username}
						</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item
								onClick={() => logout()}
								key={1}
							>
								Log Out
							</Menu.Item>
						</Menu>
					</>
					:
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<Menu.Item
							onClick={() => router.push(RouteNames.LOGIN)}
							key={1}
						>
							Log In
						</Menu.Item>
					</Menu>}
			</Row>
		</Layout.Header>
	)
}
