const heading1 = React.createElement("h1", {
    id: "head1"
}, "Namaste to heading1");
const heading2 = React.createElement("h2", {
    id: "head2"
}, "namaste to hrading2");
const root = ReactDOM.createRoot(document.getElementById("root"));
const container = React.createElement("div", {
    id: "content"
}, [
    heading1,
    heading2
]);
root.render(container);
const heading = React.createElement("h1", {
    id: "title"
}, "Namaste React using React");
const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
root.render(heading);

//# sourceMappingURL=indexUsingReact.e770369a.js.map
