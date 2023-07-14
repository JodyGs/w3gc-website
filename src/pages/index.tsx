import Head from "next/head";
import { Meta } from "~/layout/Meta";
import Mission from "~/sections/Mission/Mission";

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
    </>
  );
}
