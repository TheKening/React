import Title from "../elements/titulos.jsx";

const characters= () => {
    return (
        <div className="container py-5">
          <div className="row">
            <Title text={"Ultimate Frisbee: Características y Reglas"} />
            <div className="col-md-12">
              <ul>
                <li>
                  Juego sin árbitros <br />
                  <img src="https://aprendeultimatefrisbee.es/wp-content/uploads/2015/12/spirit-of-the-game-recognize-it.jpg" alt="Juego sin árbitros" width={100}/>
                </li>
                <li>
                  Espíritu de juego <br />
                  <img src="https://sportnauta.com/wp-content/uploads/2017/07/ULTIMATE3-orangepeel.png" alt="Espíritu de juego" width={100} />
                </li>
                <li>
                  Puntuación con atrapadas en la zona de gol <br />
                  <img src="https://i.ytimg.com/vi/f7h5nNYyH8M/maxresdefault.jpg" alt="Zona de gol" width={100}/>
                </li>
                <li>
                  El disco no se puede correr con él <br />
                  <img src="https://www.salamanca24horas.com/uploads/s1/42/68/39/1436782.jpeg" alt="Sin correr con el disco" width={100}/>
                </li>
                <li>
                  Se juega 7 vs 7 en césped <br />
                  <img src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2016/06/USAU_D1_2016_PMR_5-30-16_12-56-15_PM-ZF-3612-32557-1-001.jpg" alt="7 vs 7 en césped" width={100}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    
}
export default characters;