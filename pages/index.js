import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Topics from "../components/Topics";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Alfredo</title>
                <link rel="icon" href="/logo.ico" />
            </Head>

            <main>
                <Nav />
                <Topics />
                <Container />
                <Footer />
            </main>
        </div>
    );
}
