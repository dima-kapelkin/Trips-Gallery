import Heading from "../Heading/Heading"
import GalleryCard from "../Gallery card/Gallery Card";
import './Gallery.css';
import city1img from "../../assets/gallery1.png"
import city2img from "../../assets/gallery2.png"
import city3img from "../../assets/gallery3.png"
import city4img from "../../assets/gallery4.png"


const trips = [
    {
        city:"Тбилиси",
        month:"апрель",
        price:"83.000",
        type:"НА АВТОБУСЕ",
        places:10,
        image:city1img
    },
    {
        city:"Стамбул",
        month:"март",
        price:"110.000",
        type:"НА САМОЛЕТЕ",
        places:0,
        image:city2img
    },
    {
        city:"Дубай",
        month:"июнь",
        price:"220.000",
        type:"НА САМОЛЕТЕ",
        places:15,
        image:city3img
    },
    {
        city:"Пхукет",
        month:"сентябрь",
        price:"135.000",
        type:"САМОЛЕТ+ПАРОМ",
        places:11,
        image:city4img
    },
];

function Gallery() {
    return (
        <div className="container">
            <Heading
            level='h1'
            text='Галерея путешествий'
            />
            {trips.map(trip =>(
                <GalleryCard
                city={trip.city}
                month={trip.month}
                price={trip.price}
                type={trip.type}
                places={trip.places}
                image={trip.image}/>
            ))}           
        </div>
    )
}

export default Gallery