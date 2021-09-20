import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './DetailPage.module.css';

function DetailPage({ data }) {
  const location = useLocation();
  // SELECTED COUNTRY
  const alpha3Code = location.pathname.slice(-3);
  const index = data.findIndex((c) => c.alpha3Code === alpha3Code);
  const DATA = data[index];

  // GET country names from alpha3Code
  const borderCountries = DATA.borders.map((countryAlpha) => {
    const countryObj = data.find(
      (country) => country.alpha3Code === countryAlpha
    );
    return countryObj.name;
  });

  // BORDER COUNTRIES LINKS
  const borderCLinks = borderCountries.map((c, i) => {
    return (
      <Link
        to={`/countries/${DATA.borders[i]}`}
        key={c}
        className={styles['link--countries']}
      >
        {c}
      </Link>
    );
  });

  // https://www.delftstack.com/howto/javascript/javascript-add-commas-to-number/
  function separator(numb) {
    var str = numb.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  const population = separator(DATA.population);

  return (
    <main className={styles.detailpage}>
      <div className={styles.detailpage__container}>
        <Link to={'/'} className={styles.link}>
          &larr; Back
        </Link>
        <div className={styles.detailpage__content}>
          <div className={styles.image__container}>
            <img src={DATA.flag} alt={`${DATA.demonym} flag`} />
          </div>
          <div className={styles.data__container}>
            <h2>{DATA.name}</h2>
            <div className={styles.data__info}>
              <div className={styles.data__info__col__1}>
                <span>
                  <strong>Native: </strong>
                  {DATA.nativeName}
                </span>
                <span>
                  <strong>Population: </strong>
                  {population}
                </span>
                <span>
                  <strong>Region: </strong>
                  {DATA.region}
                </span>
                <span>
                  <strong>Sub-Region: </strong>
                  {DATA.subregion}
                </span>
                <span>
                  <strong>Capital: </strong>
                  {DATA.capital}
                </span>
              </div>
              <div className={styles.data__info__col__2}>
                <span>
                  <strong>Top-Level-Domain: </strong>
                  {DATA.topLevelDomain}
                </span>
                <span>
                  <strong>Currencies: </strong>
                  {DATA.currencies.map((c) => c.name + ' ')}
                </span>
                <span>
                  <strong>Languages: </strong>
                  {DATA.languages.map((l) => l.name + ' ')}
                </span>
              </div>
            </div>
            {/* BORDER COUNTRIES */}
            <div className={styles.border__countries}>
              <h3>Border Countries:</h3>
              <div className={styles.border__countries__container}>
                {borderCLinks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
