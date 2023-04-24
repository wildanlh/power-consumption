import Form from "./components/form";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="bg=[#FCFCFD]">
          <div className="bg-hero-pattern h-80 relative" />
          <div className="container mx-auto py-5 px-10 md:px-28 lg:px-80 relative -top-36">
            <Form />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
