import { useState, userEffet, useEffect } from "react";

function Hello() {
  /* case 1 */
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("destroyed :(");
  }, []);

  /* case 2 */
  // useEffect(function () {
  //   console.log("Created :)");
  //   return function () {
  //     console.log("destroyed :(");
  //   };
  // }, []);

  /* case 3 */
  // function destroyedFn() {
  //   console.log("destroyed :(");
  // }
  // function effectFn() {
  //   console.log("Created :)");
  //   return destroyedFn;
  // }
  // useEffect(effectFn, []);

  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
