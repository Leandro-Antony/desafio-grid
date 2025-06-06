import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header1}>Header</header>
        <header className={styles.header2}>Header</header>
        <aside className={styles.aside1}>aside</aside>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>card 1</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 2</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 3</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 4</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 5</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 6</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 7</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 8</h2>
              <p>this is card</p>
            </div>

            <div className={styles.card}>
              <h2>card 9</h2>
              <p>this is card</p>
            </div>
          </div>
        </main>
        <aside className={styles.aside2}>aside</aside>
        <footer className={styles.footer1}>Footer</footer>
        <footer className={styles.footer2}>Footer</footer>
      </div>
    </>
  );
}
