import { useEffect, useState } from 'react';
import { Header, UserBlock } from './components';
import { store } from './store';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'alliase',
	name: 'Иван',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

const getAnotherUserFromServer = () => ({
	id: 'alliasee',
	name: 'Василий',
	age: 23,
	email: 'ivan@gmail.com',
	phone: '+7-999-999-9-9',
});

export const App = () => {
	const [myRen, setMyRen] = useState(null);
	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
		setMyRen(store.getState());
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		store.dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
		setMyRen(store.getState());
	};

	return (
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
