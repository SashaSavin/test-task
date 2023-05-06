import { Fade } from 'react-awesome-reveal';
import { Button } from '..';
import { useParallax } from 'react-scroll-parallax';
import { useIsMobile } from '../../shared';

export const Main = (): JSX.Element => {
  const { ref } = useParallax<HTMLDivElement>({ speed: 10 });
  const isMobile: boolean = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col pt-10 justify-between p-3 ">
          <h1 className="text-5xl mt-10">Зарабатывайте больше</h1>
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
            c WELBEX
          </div>
          <span className="mt-4 w-3/4 font-light">Развиваем и контролируем продажи за вас</span>

          <div className="mt-10 ">
            Вместе с
            <span className="uppercase ml-1 mr-1 text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
              бесплатной консультацией
            </span>
            мы дарим:
          </div>

          <div className="inline-flex justify-start gap-10 mb-10 mt-3">
            <div>
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                  -
                </span>
                SKYPE АУДИТ
              </p>
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                  -
                </span>
                DASHBOARD
              </p>
            </div>
            <div>
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                  -
                </span>
                30 ВИДЖЕТОВ
              </p>
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                  -
                </span>
                МЕСЯЦ AMOCRM
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between py-10" ref={isMobile ? null : ref}>
          <div className="w-1/4">
            <h1 className="text-5xl">Зарабатывайте больше</h1>
            <div className="text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
              c WELBEX
            </div>
            <span className="font-light">Развиваем и контролируем продажи за вас</span>
          </div>

          <div className="text-end w-2/6">
            <Fade cascade damping={0.1}>
              <div>
                Вместе с
                <span className=" uppercase ml-1 mr-1 text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                  бесплатной консультацией
                </span>
                мы дарим:
              </div>

              <div className="flex justify-between mt-3 mb-10  gap-x-10">
                <div>
                  <h3 className="text-2xl mb-2">Виджеты</h3>
                  <small className="text-[#E4E5EA] font-light">30 готовых решений</small>

                  <h3 className="text-2xl mb-2 mt-5">Dashboard</h3>
                  <small className="text-[#E4E5EA] font-light">с показателями вашего бизнеса</small>
                </div>

                <div>
                  <h3 className="text-2xl mb-2">Skype Аудит</h3>
                  <small className="text-[#E4E5EA] font-light">отдела продажи CRM системы</small>
                  <h3 className="text-2xl mb-2 ">35 дней</h3>
                  <small className="text-[#E4E5EA] font-light">использования CRM</small>
                </div>
              </div>

              <Button text="Получить консультацию" />
            </Fade>
          </div>
        </div>
      )}
    </>
  );
};
