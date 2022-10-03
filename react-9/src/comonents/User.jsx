
let User = () => {
 let Name="NTR";
 let image="https://panipuri.us/wp-content/uploads/2018/02/174-Jr-Ntr-Latest-Stylish-ULTRA-HD-Photos-Stills.jpg";
 let award="ascar";
  return (
    <div>
     <h1> Name:{Name}</h1>
      <img src={image} />
      <h1>award:{award}</h1>
      <button className="btn btn-success">login</button>
    </div>
  );
}

export default User
