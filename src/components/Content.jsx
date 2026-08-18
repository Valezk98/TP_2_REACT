import Card from './Card';

const gamesData = [
  {
    id: 1,
    name: "Neon Protocol",
    description: "Infiltrate the megacorp servers in this fast-paced stealth action RPG set in a dystopian future.",
    genre: "ACCION",
    platform: "PC",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMa_TImQvLamWWvxYKVzhTavMOM9Fa-HBJZGXXgWIyDRabDdIg2oJlbGIhqTz1aD54ue11btwr-Xsfc3ZYnunisAy57tQetEkEs5vVVu9g-IgR765IZrXmEYenxWAan4LJuW1-SoCK8UIPbG4db4V_W8Dbb8WEXO7JKvM2MKyJsoF6VGyfBJRIXnuJvctZW23ECUVY1Mr6dv6inBXwRkTD75kCj1pLOQE5hy08vi4_mf22mKam2_53Cg",
    releaseDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Echoes of Aethel",
    description: "Discover the lost secrets of an ancient civilization in this sprawling open-world adventure.",
    genre: "RPG",
    platform: "CONSOLE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSDueuOFJfsZb4OqwYI8NunUu1DQ5Zc0Cx_b8qMThnqzRaXHPKJDJVgeuTIHdJgXThy7aPPxEl7SLtsjrEUNSkPNdyPtwLjf-9_DOxBD1NQ6cbpQwvVqPTunwumm3Vca-CC0oGNUxb6kmKv61r8LZUdmPiowjdKfl2zaIKQ8-OrmARVyBHQsgLp5ypahm4L_AgS48kskKar5UuL3LWyHAsyi6QUiYWSza-XNFi93w1GPEvJL-oVgJ8eg",
    releaseDate: "2024-03-22"
  },
  {
    id: 3,
    name: "Void Vanguard",
    description: "Engage in zero-gravity tactical combat across shattered orbital stations.",
    genre: "SHOOTER",
    platform: "MULTI",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFcGp96LTnDQN7cUFvl5WX3Pfzbs3dKYFs89h4bzQPi67lxvttNKKUeMJ4EaEZ-mO5UWwag4wenFjPXqiVso71hUbjGVNz-lvVezsGUn_Xv0mK-Ai10Uf0yCAgVriliG_Z9YLmiMUQ29SPh4Jm8mkI4UX3DmF-4Utt9D5zdh5fMc0loPvR0CePL23CQ9u8rggCzkped_tdwWr9mfMplTedbCgaoUEmKxRDwirCJ_vmGwJ1DGwLjfIy4Q",
    releaseDate: "2024-02-10"
  },
  {
    id: 4,
    name: "Velocity Shift",
    description: "Push past the speed of sound in hyper-magnetic tracks spanning dystopian megacities.",
    genre: "CARRERAS",
    platform: "VR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3aQQWPapFmbjghOyUppB-0n2Jah1vvcX2GazMlNTu_OQl4BxLM990EATwvs_goCtmdlFRG7gMTd6CRS8JkLVvAmW916dNg57YDX2n1Y70FOrkYdVjPFhn65NIXosS_YQoo8ZozlAk3udmKjYhLSVoazUpi9-yJTxrZas9LhwJNhcJzSBW0yAEJ66mUYGdsWpSnCRHhFcUcfkMIrsuIwYUfz78_65QrvUNwIDZ20UvsstFOLVM7rEnpw",
    releaseDate: "2024-04-05"
  }
];

export default function Content(){

  const mostrarJuegos = () =>{
    const check = document.querySelector('#checkb')
    const cards = document.querySelector('#cards')

    if(check.checked){
      cards.classList.add('hidden')
    } else {
      cards.classList.remove('hidden')
    }
  }

  return(
    <main className="w-full max-w-360 mx-auto px-margin-mobile md:px-margin-desktop py-xl min-h-auto" id="catalog">
        <div className="flex justify-between items-end mb-lg">
            <div>
                <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Catalogo</h2>
                <p className="text-on-surface-variant font-body-md mt-sm">Explora la colección de juegos.</p>
                <p className='py-4'><input id="checkb" type="checkbox" onChange={mostrarJuegos}/> Mostrar/Ocultar juegos</p>
            </div>  
        </div>
        
        <div id="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {gamesData.map((game, id) => (
          <Card key={id} game={game} />
        ))}
        </div>
    </main>
  );
}