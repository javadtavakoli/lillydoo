import HomeComponents from "../../components/home";

const HomePage = () => {
  const { Header, Menu, Configurator } = HomeComponents;
  return (
    <div>
      <Header />
      <Menu />
      <Configurator />
    </div>
  );
};
export default HomePage;
