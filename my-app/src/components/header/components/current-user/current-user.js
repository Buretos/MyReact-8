import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const CurrentUser = () => {
	const { name } = useContext(AppContext);
	return <div>Текущий пользователь: {name}</div>;
};
