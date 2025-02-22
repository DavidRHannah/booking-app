import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <Heading title="Room Availability" />
      { rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (<p>No rooms available at the moment</p>) }
    </>
  );
}
