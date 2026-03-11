import DynamicForm from "../components/DynamicForm";

export default function Home() {
  return (
    <div style={{ maxWidth: 500, margin: "auto", marginTop: 50, background: "#fff" }}>
      <h2>Signup Form</h2>
      <DynamicForm />
    </div>
  );
}