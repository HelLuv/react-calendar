import React, { FC, useState } from 'react'
import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface EventFormProps {
	guests: IUser[],
	submit: (event: IEvent) => void
}

export const EventForm: FC<EventFormProps> = (props) => {
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: ''
	} as IEvent);
	const { user } = useTypedSelector(state => state.auth);

	const SelectDate = (date: Moment | null) => {
		if (date) {
			setEvent({ ...event, date: formatDate(date?.toDate()) })
		}
	};

	const submitForm = () => {
		props.submit({ ...event, author: user.username })
	}

	return (
		<Form onFinish={submitForm}>
			<Form.Item
				label="Event's description"
				name="description"
				rules={[rules.required("Please input event's description")]}
			>
				<Input onChange={(e) => setEvent({ ...event, description: e.target.value })} value={event.description} />
			</Form.Item>
			<Form.Item
				label="Event's date"
				name="date"
				rules={[rules.required("Please input event's date"), rules.isDateAfter("You cannot create an event in the past")]}
			>
				<DatePicker onChange={(date) => SelectDate(date)} />
			</Form.Item>
			<Form.Item
				label="Event's guest"
				name="guest"
				rules={[rules.required("Please input event's date")]}
			>
				<Select
					mode="multiple"
					showSearch
					allowClear
					style={{ width: '100%' }}
					placeholder="Please select guests"
					onChange={(guest: string) => setEvent({ ...event, guest })}
				>
					{props.guests.map(guest =>
						<Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
					)}
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
