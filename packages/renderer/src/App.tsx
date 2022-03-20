import { useState } from "react";
import { Demo } from "./features/Form";
import "antd/dist/antd.css";
import { LayoutApp } from "./components/Layout/Layout";
import { Typography } from "antd";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <LayoutApp>
      <Typography.Title></Typography.Title>
      <Demo />
    </LayoutApp>
  );
};

export default App;
