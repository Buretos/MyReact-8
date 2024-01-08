import { useEffect, useReducer } from 'react';
import { Header, UserBlock } from './components';
import { AppContext } from './context';
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

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

export const App = () => {
	const [userData, dispatch] = useReducer(reducer, {});

	// const dispatch = (action) => {
	// 	const newState = reducer(userData, action);

	// 	setUserData(newState);
	// };

	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();
		dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
