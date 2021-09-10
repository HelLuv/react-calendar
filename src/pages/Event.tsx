import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm';
import { useActions } from '../hooks/useActions';


export const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { fetchGuests } = useActions();

	useEffect(() => {
		fetchGuests();
	}, [])
	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify='center'>
				<Button onClick={() => setModalVisible(true)}>Create event</Button>
			</Row>
			<Modal
				title="Create event"
				visible={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}
			>
				<EventForm />
			</Modal>
		</Layout>
	)
}
