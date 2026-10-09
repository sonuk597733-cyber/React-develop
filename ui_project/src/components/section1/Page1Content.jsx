import Arrow from "./Arrow";
import LeftContent1 from "./Leftcontent1";
import Leftcontent2 from "./Leftcontent2";
import Rightcontainer from "./Rightcontainer";
import basant from "./basant.png"

const Page1Content = () => {
  const users = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bhZGNojmNstdm5B0G01puzSBllyBc2BuVzjZNmgjBA&s=10",
    title: "Shah Rukh Khan",
    color: "red",
    des: "Indian Actor",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbcFOut2Thze3uYjTyOjXIxyc0KquOTwg9oVp-GdJmg&s=10",
    title: "Salman Khan",
    color: "blue",
    des: "Indian Actor",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5LGMy1bYu7uilheNymUKk-tIsTLTOcCsoX70wVothg&s=10",
    title: "Aamir Khan",
    color: "green",
    des: "Indian Actor",
  },
  {
    img: "https://images.news18.com/ibnlive/uploads/2018/01/Deepika-Padukone-at-LFW.jpg",
    title: "Deepika Padukone",
    color: "purple",
    des: "Indian Actress",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lawh6Z2yibn7h6-VUCDOaB2HB0dqsU8kLq2HFB7vj7fCmMmYwivc6AWR&s=10",
    title: "Virat Kohli",
    color: "orange",
    des: "Indian Cricketer",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYCxkwEJBe__TPjh_O8Wk-yl3ZyyDfPLdgS9hFtPiNrISgwuwQHLI2Ek&s=10",
    title: "Alia Bhatt",
    color: "pink",
    des: "Indian Actress",
  },
  {
    img: basant,
    title: "Basant",
    color: "gray",
    des: "Data Analytics",
  },
];

  return (
    <div className="flex">
      <div>
      <LeftContent1 />
      <Leftcontent2 />
      <Arrow />
      </div>
      <Rightcontainer  users={users}/>
    </div>
  )
}

export default Page1Content
