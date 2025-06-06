import "./styles/themes.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";
import { MyTextList } from "./components/MyTextList";
import { MyGrid } from "./components/MyGrid";

export default function App() {


  return (
    //react fragment
    <>
    {/* <MyTextList /> */}

    <MyGrid></MyGrid>
    </>
  );
}