const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/206501/pexels-photo-206501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Selective Focus Photography of Black Ricoh Kir-10 Camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Turned-on Flat Screen Smart Television Ahead",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/21067/pexels-photo.jpg",
    alt: "Person Holding Sony Ps4 Dualshock 4",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rose Gold Aluminum Case Apple Watch With White Sports Band",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      {data.map((image) => (
        <div
          className="slide"
          style={{ backgroundImage: `url(${image.src})` }}
          key={image.id}
        ></div>
      ))}
    </div>
  );
};

export default Slider;