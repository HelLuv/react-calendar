import React, { FC } from 'react'
import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { Option } from 'antd/lib/mentions';

export const EventForm: FC = () => {
	return (
		<Form>
			<Form.Item
				label="Event's description"
				name="description"
				rules={[rules.required("Please input event's description")]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Event's date"
				name="date"
				rules={[rules.required("Please input event's date")]}
			>
				<DatePicker />
			</Form.Item>
			<Form.Item
				label="Event's guest"
				name="date"
				rules={[rules.required("Please input event's date")]}
			>
				<Select
					mode="multiple"
					showSearch
					allowClear
					style={{ width: '100%' }}
					placeholder="Please select"
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Form.Item>
			<Row justify="end">
				<Form.Item wrapperCol={{}}>
					<Button type="primary" htmlType="submit" >
						Create Event
					</Button>
				</Form.Item>
			</Row>
		</Form >
	)
}
