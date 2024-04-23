import Card from "./Card";
function Cards({ tasks, deletetask, completehandler }) {
  return (
    <div className="flex gap-5 mt-10 flex-wrap items-center justify-center w-[320px] sm:w-[700px]">
      {tasks.map((onetask) => {
        return (
          <Card
            key={onetask.id}
            task={onetask}
            deletetask={deletetask}
            completehandler={completehandler}
          ></Card>
        );
      })}
    </div>
  );
}
export default Cards;
