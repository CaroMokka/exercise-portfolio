import Card from "./Card";
import title from "../assets/title.png";
function Main() {
  return (
    <>
      <section className="main">
        <div className="main-title">
        <img  src={title} />
        </div>
        <div className="container-cards d-flex">
          <Card
            title="TOKIO"
            text="Se dice que la moda sigue ciclos de 20 años, el tiempo que tardan los estilos y las tendencias en renovarse y lo que una vez estuvo de moda vuelve a estar de moda."
            img="https://data2.nssmag.com/images/galleries/34772/cover-tokyo-orizz.jpg"
          />
          <Card
            title="NEW YORK"
            text="
        Nueva York es una ciudad fácil de novelar; su street style, más aún. Pocas metrópolis en el mundo se han proclamado capitales de la moda y menos aún lo logran expresando multitud de identidades."
            img="https://data2.nssmag.com/images/galleries/34776/cover-ny.jpg"
          />
          <Card
            title="MILANO"
            text="En la calle puedes crecer, luchar, aprender y, a veces, solo tienes que sobrevivir. Decidimos muy pronto que haríamos moda por el camino, partiendo de Nápoles, llegando a Milán, hasta intentar conquistar las del resto del mundo."
            img="https://data2.nssmag.com/images/galleries/34773/cover-milano.jpg"
          />
          <Card
            title="SHANGHAI"
            text="Aparentemente misterioso y aislado del resto del mundo, la moda y el estilo locales en China rara vez reciben reconocimiento fuera de sus fronteras."
            img="https://data2.nssmag.com/images/galleries/34833/cover-shangai.jpg"
          />
          <Card
            title="FIRENZE"
            text="
        Durante décadas, si no siglos, antes del turismo de masas y los viajes escolares, Florencia era una ciudad ferozmente aristocrática, sus condes y príncipes se enorgullecían de sus antiguos palacios y fincas en las colinas de Fiesole."
            img="https://data2.nssmag.com/images/galleries/34822/pitti-orizz.jpg"
          />
        </div>
      </section>
    </>
  );
}
export default Main;
