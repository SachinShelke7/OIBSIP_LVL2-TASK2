import Head from "next/head";
import { Header } from "../components";
import Layout from "../components/Layout";
import Main from "../components/main/Main";
import Slider from "../components/slider/Slider";

export default function Home({ dark }) {
  return (
    <div>
      <div className="min-h-screen 2xl:container mx-auto font-saira">
        <Head>
          <title>Chatrapati Shivaji Raje Tribute page</title>
        </Head>
        <div>
          <Layout dark={dark} />
          <Header />
          <Slider />
          <Main />
        </div>
      </div>
    </div>
  );
}
