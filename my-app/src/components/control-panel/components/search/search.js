import { useRef, useState, useContext } from 'react';
import { ControlPanelContext } from '../../../../context';
import { debounce } from './utils';
import styles from './search.module.css';

export const Search = () => {
	const { setSearchPhrase } = useContext(ControlPanelContext);
	const [value, setValue] = useState('');

	const debouncedOnSearch = useRef(debounce(setSearchPhrase, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setSearchPhrase(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
			/>
		</form>
	);
};
