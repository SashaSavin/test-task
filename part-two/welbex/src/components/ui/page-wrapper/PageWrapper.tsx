import { PageWrapperType } from '../../../shared';

export const PageWrapper = ({ children }: PageWrapperType) => {
  return <div className="container md:px-40 text-[#E4E5EA]">{children}</div>;
};
