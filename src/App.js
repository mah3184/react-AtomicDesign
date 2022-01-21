import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { MyRouter } from "./router/MyRouter";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <MyRouter />
      </UserProvider>
    </RecoilRoot>
  );
}
