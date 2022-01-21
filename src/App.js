import { UserProvider } from "./providers/UserProvider";
import { MyRouter } from "./router/MyRouter";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <MyRouter />
    </UserProvider>
  );
}
