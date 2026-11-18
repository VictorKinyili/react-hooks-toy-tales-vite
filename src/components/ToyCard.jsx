function ToyCard({ toy }) {
  const { name, image, likes } = toy;

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method:  "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteToy(toy.id);
      }
    });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;