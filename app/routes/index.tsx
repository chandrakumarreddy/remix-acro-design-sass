import { useState } from "react";
import { Drawer, Button } from "@arco-design/web-react";

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        type="primary"
      >
        Open Drawer
      </Button>

      <Drawer
        width={600}
        title={<h3>Basic Information</h3>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        cancelText="Cancel"
        okText="Submit"
      >
        <h3>Here is an example text.</h3>
        <h3>Here is an example text.</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Here is an example list</h3>
        <h3>Chandra</h3>
      </Drawer>
    </>
  );
}
