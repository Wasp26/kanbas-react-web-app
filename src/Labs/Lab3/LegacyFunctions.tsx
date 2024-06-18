function add(a: number, b: number) {
  return a + b;
}

export default function LegacyFunctions() {
  const twoplusfour = add(2, 4);
  console.log(twoplusfour);

  return (
    <div id="wd-legacy-functions">
      <h4> Functions </h4>
      <h5> Legacy ES5 Functions </h5>
      twoplusfour = {twoplusfour}
      <br />
      add(2,4) = {add(2, 4)}
      <hr />
    </div>
  );
}
