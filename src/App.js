import { Container } from "reactstrap";
import ExampleUsingClass from "./components/ExampleUsingClass";
import ExampleUsingHooks from "./components/ExampleUsingHooks";
import ExamplePersons from "./components/ExamplePersons";

function App() {
    return (
        <Container className="pt-3">
            <ExampleUsingClass />
            <ExampleUsingHooks />
            {/* <ExamplePersons /> */}
        </Container>
    );
}

export default App;
