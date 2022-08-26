import HomeComponents from "../../components/home";

const HomePage = () => {
  const { Header, Menu } = HomeComponents;
  return (
    <div>
      <Header />
      <Menu />
      This is the home
    </div>
  );
};
export default HomePage;
