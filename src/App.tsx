interface DivPeProps {
  name?: string;
}

function DivPe(props: DivPeProps) {
  return <h1 className="text-red-500">{props.name ?? "default"}</h1>;
}

function App() {
  return <DivPe name="atenção" />;
}

export default App;
