import Title from "../elements/titulos.jsx";

const home = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <Title text={"Ultimate Frisbee"} />
                </div>
                <div className="col-md-8">
                    <p className="text-justify">
                        Ultimate Frisbee es un deporte de equipo de origen estadounidense que combina elementos del fútbol, baloncesto y rugby, jugado con un disco volador. Se caracteriza por su espíritu deportivo, ya que no cuenta con árbitros y se basa en el principio del "espíritu de juego", fomentando el respeto y la honestidad entre los jugadores. Se juega en más de 80 países y ha crecido en popularidad, con torneos internacionales organizados por la World Flying Disc Federation (WFDF).
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <img
                        src="https://cdn.prod.website-files.com/5ed7118d4bcece1f6a97f6d3/5ef27cd712b20424d63b8b8d_ultimate_frisbee.jpg"
                        alt="Ultimate Frisbee"
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>
        </div>
    );
};

export default home;