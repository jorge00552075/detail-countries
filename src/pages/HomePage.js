import { useState } from 'react';
import Form from '../components/Form';
import Countries from '../components/Countries';
import styles from './HomePage.module.css';

function Homepage(props) {
  // eslint-disable-next-line
  const [data, setData] = useState(props.data);
  const [selectVal, setSelectVal] = useState('');
  const [inputVal, setInputVal] = useState('');

  // GET form values
  function getInputVal(value) {
    setInputVal(value);
  }

  function getSelectVal(value) {
    setSelectVal(value);
  }

  let filteredCountries;
  if (data) {
    filteredCountries = data.filter((c) => c.region === selectVal);
  }

  let searchedCountries;
  if (inputVal) {
    searchedCountries = data.filter((c) =>
      c.name.toLowerCase().includes(inputVal.toLowerCase())
    );
  }

  // ARRAY WITH SEARCHED DATA FROM REGIONAL DATA
  let regionSearch;
  if (filteredCountries) {
    regionSearch = filteredCountries.filter((c) =>
      c.name.toLowerCase().includes(inputVal.toLowerCase())
    );
  }

  return (
    // prettier-ignore
    <main className={styles.homepage}>
      <Form getSelectVal={getSelectVal} getInputVal={getInputVal} />
      {/* RENDER ALL DATA */}
      {selectVal === "" && searchedCountries === undefined && <Countries data={data}/>}
      {/* RENDER REGIONAL DATA */}
      {selectVal !== "" && searchedCountries === undefined && <Countries data={filteredCountries} />}
      {/* RENDER SEARCHED DATA */}
      {searchedCountries !== undefined && selectVal === "" && <Countries data={searchedCountries} />}
      {/* RENDER SEARCHED DATA FROM REGIONAL DATA  */}
      {selectVal !== "" && searchedCountries !== undefined && <Countries data={regionSearch} />}
    </main>
  );
}

export default Homepage;
