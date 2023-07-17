import { Meta } from "~/layout/Meta";
import DemoDay from "~/sections/DemoDay/DemoDay";
import Mission from "~/sections/Mission/Mission";
import Speakers from "~/sections/Speakers/Speakers";
import Sponsors from "~/sections/Sponsors/Sponsors";

export default function Home() {
  return (
    <>
      <Meta
        title={"W3GC – Web3 Gaming Con"}
        description={
          "The first worldwide Web3 gaming conference at the heart of Paris"
        }
        canonical={"https://w3gc.io/"}
      />
      <Mission />
      <Speakers />
      <Sponsors />
      <DemoDay />
    </>
  );
}
