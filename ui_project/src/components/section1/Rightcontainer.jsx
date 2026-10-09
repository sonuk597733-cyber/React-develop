
const Rightcontainer = ({ users }) => {
  return (
    <div className="w-3/5 h-[480px] flex gap-4 overflow-x-auto rounded-xl p-5 scrollbar-hide">
      {users.map((user, index) => (
        <div
          key={index}
          className="relative h-full min-w-[220px] overflow-hidden rounded-2xl"
          style={{ backgroundColor: user.color }}
        >
          <img
            className="h-full w-full object-cover"
            src={user.img}
            alt={user.title}
          />

          <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white">
            <h2 className="text-xl font-bold">{user.title}</h2>
            <p>{user.des}</p>
            <button className="mt-2 rounded  px-3 py-1 text-black" style={{backgroundColor: user.color}}>
              Underbackend
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rightcontainer;