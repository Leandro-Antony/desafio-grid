import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {
  const text = [
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
  ];

  return (
    <>
    <h1 className={styles.title}> Lista de textos </h1>
    <div className={styles.container}>
      {text.map((obj, index) => {
        return (
          <MyText title={`${obj.title} ${index + 1}`}>
            {`${obj.text} ${index + 1}`}
          </MyText>
        );
      })}
    </div>
    </>
  );
}
