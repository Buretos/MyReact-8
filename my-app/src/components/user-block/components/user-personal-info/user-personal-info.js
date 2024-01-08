import { useEffect, useState } from 'react';
import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age } = store.getState();
	const [myRen, setMyRen] = useState(null);

	// setMyRen(store.getState());

	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 30, email, phone };
		// setUserData(newUserData);
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
		setMyRen(store.getState());
	};

	const onUserAgeDecrease = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 15 });
		setMyRen(store.getState());
	};

	useEffect(() => {
		setMyRen(store.getState());
	}, []);

	return (
		<div>
			<h3>Персональные данные</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Обновить данные пользователя</button>
			<button onClick={onUserAgeDecrease}>Уменьшить возраст пользователя</button>
		</div>
	);
};
