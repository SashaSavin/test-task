import { Footer, Header, Main } from '../..';
import { PageWrapper } from '../page-wrapper';

export const Layout = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-blmob bg-cover md:bg-bl ">
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
    </div>
  );
};
