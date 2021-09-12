// import Library
import { Helmet } from "react-helmet";
// Import Components
import Header from "../../Child_Components/Coming_soon_Components/Header/Header";
import Form from "../../Child_Components/Coming_soon_Components/Form/Form";
import Cards from "../../Child_Components/Coming_soon_Components/Cards/Cards";

function Coming_Soon() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
        <meta name="description" content="coming soon page" />
        <meta name="author" content="kalumian" />
      </Helmet>
      <main className="Coming_Soon">
        <Header />
        <Form />
        <Cards />
      </main>
      ;
    </>
  );
}

export default Coming_Soon;
