import Card from "./Card";
function Main(props) {
  return (
    <div className="container-cards d-flex">
      <Card title="TOKIO" text="Se dice que la moda sigue ciclos de 20 años, el tiempo que tardan los estilos y las tendencias en renovarse y lo que una vez estuvo de moda vuelve a estar de moda."/>
      <Card title="NEW YORK" text="New York es una ciudad fácil de enamorar; su street style, más aún."/>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default Main;
