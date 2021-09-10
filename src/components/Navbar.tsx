import { Layout, Row, Menu } from 'antd';
import React from 'react'
import { useHistory } from 'react-router';
import { RouteNames } from '../routes/index';
import { useTypedSelector } from './../hooks/useTypedSelector';

export const Navbar = () => {
	const router = useHistory();
	const { isAuth } = useTypedSelector(state => state.auth);
	return (
		<Layout.Header>
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>
							Myriad Dreamz
						</div>
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item
								onClick={() => console.log("Logout")}
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
