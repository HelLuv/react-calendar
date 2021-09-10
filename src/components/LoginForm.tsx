
import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';

export const LoginForm: FC = () => {
	return (
		<Form>
			<Form.Item
				label="Username"
				name="username"
				rules={[rules.required('Please input your username!')]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[rules.required('Please input your password!')]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{}}>
				<Button type="primary" htmlType="submit">
					Log In
				</Button>
			</Form.Item>

		</Form>
	)
}
