import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";

interface Props {}

const Home = (_: Props) => {
  useEffect(() => {}, []);

  return (
    <Center>
      <Logout />
    </Center>
  );
};

export default Home;
