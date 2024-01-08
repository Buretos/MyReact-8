import { store } from '../../../../store';

export const CurrentUser = () => {
	const { name } = store.getState();
	return <div>Текущий пользователь: {name}</div>;
};
