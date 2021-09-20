import styles from './Header.module.css';

function Header() {
  function switchTheme() {
    document.body.classList.toggle('light');
  }
  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles['moon-icon']}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>Where in the World?</h1>
        <button className={styles.header__btn} onClick={switchTheme}>
          {moonIcon}Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
