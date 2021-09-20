import { Link } from 'react-router-dom';
import styles from './Country.module.css';

// prettier-ignore
function Country({ data: { flag, name, alpha3Code, population, region, capital } }) {

  // https://www.delftstack.com/howto/javascript/javascript-add-commas-to-number/
  function separator(numb) {
    var str = numb.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  // prettier-ignore
  return (
    <article className={styles.country}>
      <div className={styles.country__container}>
        <img src={flag} alt={name} className={styles.skeleton}/>
      </div>
      <div className={styles.country__info}>
        <h4>
          <Link
            to={`/countries/${alpha3Code}`}
            className={styles.country__info__name}
          >
            {name}
          </Link>
        </h4>
        <div className={styles.card__info__container}>
          <p>
            <span className={styles.card__info__detail}>Population: </span>
            {separator(population)}
          </p>
          <p>
            <span className={styles.card__info__detail}>Region: </span>
            {region}
          </p>
          <p>
            <span className={styles.card__info__detail}>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Country;
