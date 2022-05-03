import Card from "./Card";


const CardList = ({ robots, userBot }) => {
    console.log(userBot);
    return (
        <div>
            {
                robots.map((robot, index) => {
                    return (
                        <Card
                            key={robots[index].id}
                            id={robots[index].id}
                            name={robots[index].name}
                            email={robots[index].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;