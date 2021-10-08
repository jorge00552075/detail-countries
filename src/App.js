import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";

import styles from "./App.module.css";

// LAZY LOAD
const DetailPage = React.lazy(() => import("./pages/DetailPage"));

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        if (response.ok !== true) {
          throw new Error("Failed to load resource. Try again later.");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }
    getData();
  }, []);

  const spinner = (
    <main className={styles.main}>
      <div className={styles.loading}></div>
    </main>
  );

  // SHOW LOADING SPINNER
  if (loading) {
    return spinner;
  }

  if (error) {
    return (
      <React.Fragment>
        <main className={styles.main}>
          <h1>{error}</h1>
        </main>
      </React.Fragment>
    );
  }

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Suspense fallback={spinner}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Homepage data={data} {...props} />}
            />
            <Route
              path="/countries/:id"
              render={(props) => <DetailPage data={data} {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
