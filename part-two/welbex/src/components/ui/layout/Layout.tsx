import { Footer, Header, Main } from '../..';
import { PageWrapper } from '../page-wrapper';

export const Layout = (): JSX.Element => {
  return (
    <PageWrapper>
      <nav>
        <Header />
      </nav>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </PageWrapper>
  );
};
