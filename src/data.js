import resort1Image from "./img/resort1.webp";
import resort2Image from "./img/resort2.webp";
import resort3Image from "./img/resort3.webp";
import resort4Image from "./img/resort4.webp";


function getResorts()
{

    const fakedb =[
        {
            id:1,
            title:"Resort For Lovers",
            price :60,
            image : resort1Image

        },
        {
            id:1,
            title:"Resort For Exes",
            price :160,
            image : resort2Image

        },
        {
            id:1,
            title:"Resort For Besties",
            price :40,
            image : resort3Image

        },
        {
            id:1,
            title:"Resort For Familes",
            price :80,
            image : resort4Image

        }

    ]

    return fakedb;
}

export default getResorts;