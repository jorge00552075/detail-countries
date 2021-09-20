import { useRef } from 'react';
import styles from './Form.module.css';

function Form(props) {
  const inputEl = useRef('');
  const selectEl = useRef('');

  function onInputChange() {
    props.getInputVal(inputEl.current.value);
  }

  function onSelectChange() {
    props.getSelectVal(selectEl.current.value);
  }

  return (
    <form className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__group}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          {/* INPUT */}
          <input
            type="text"
            name="form__input"
            id="form__input"
            className={styles.form__input}
            placeholder="Search for a country..."
            ref={inputEl}
            onChange={onInputChange}
          />
        </div>
        <div className="form__group">
          <select
            name="region"
            id="region-select"
            className={styles.form__select}
            ref={selectEl}
            onChange={onSelectChange}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
