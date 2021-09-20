import Country from './Country';
import styles from './Countries.module.css';

function Countries({ data }) {
  return (
    <section className={styles.countries__container}>
      {data.map((c, i) => (
        <Country key={data[i].name} data={data[i]} />
      ))}
    </section>
  );
}

export default Countries;
