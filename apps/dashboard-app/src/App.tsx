import { Input } from "ui-components";
import { Button } from "ui-components";

function App() {
  return (
    <>
      <div className="m-4">
        <h1 className="font-bold text-xl underline text-red-700 mb-4">
          Dashboard-app
        </h1>
        <div className="flex flex-col gap-y-2">
          <Input />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
