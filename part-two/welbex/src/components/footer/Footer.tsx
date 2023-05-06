import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as Viber } from '../../assets/svg/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/svg/whatsapp.svg';
import { useIsMobile } from '../../shared';

export const Footer = (): JSX.Element => {
  const isMobile: boolean = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className="bg-black">
          <div className="pl-3">
            <div className="flex flex-col pb-20 pt-3 ">
              <div className="mb-4">
                <div>
                  <h6 className="mb-4 text-[#656566]">О КОМПАНИИ</h6>
                  <p>Партнерская программа</p>
                  <p>Вакансии</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <h6 className="mb-4 text-[#656566]">МЕНЮ</h6>
                  <p>Расчёт стоимости</p>
                  <p>Услуги</p>
                  <p>Виджеты</p>
                  <p>Интеграции</p>
                  <p>Наши клиенты</p>
                </div>

                <div>
                  <h6 className="mt-10 text-[#656566]"></h6>
                  <p>Кейсы</p>
                  <p>Благодарность клиентов</p>
                  <p>Сертификаты</p>
                  <p>Блог на Youtube</p>
                  <p>Вопрос/ ответ</p>
                </div>
              </div>

              <div className="text-start mt-5">
                <h6 className="mb-4 text-[#656566]">КОНТАКТЫ</h6>
                <p>+7 555 555-55-55</p>
                <div className="flex justify-start gap-3 mt-3 mb-3">
                  <Telegram />
                  <Viber />
                  <Whatsapp />
                </div>

                <p>Москва, Путевой проезд 3с1, к902</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-10 text-sm pl-3">
            <span className="font-light">©WELBEX 2022. Все права защищены.</span>
            <p className="underline font-light">Политика конфиденциальности</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="flex justify-between mt-20 pb-20">
              <div>
                <div>
                  <h6 className="mb-4 text-[#656566]">О КОМПАНИИ</h6>
                  <p>Партнерская программа</p>
                  <p>Вакансии</p>
                </div>
              </div>

              <div>
                <h6 className="mb-4 text-[#656566]">МЕНЮ</h6>
                <p>Расчёт стоимости</p>
                <p>Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Наши клиенты</p>
              </div>

              <div>
                <h6 className="mt-10 text-[#656566]"></h6>
                <p>Кейсы</p>
                <p>Благодарственные письма</p>
                <p>Сертификаты</p>
                <p>Блог на Youtube</p>
                <p>Вопрос/ ответ</p>
              </div>

              <div className="text-end">
                <h6 className="mb-4 text-[#656566]">КОНТАКТЫ</h6>
                <p>+7 555 555-55-55</p>
                <div className="flex justify-end gap-3 mt-3 mb-3">
                  <Telegram />
                  <Viber />
                  <Whatsapp />
                </div>

                <p>Москва, Путевой проезд 3с1, к902</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-end pb-10 text-sm">
            <span className="font-light">©WELBEX 2022. Все права защищены.</span>
            <p className="underline font-light">Политика конфиденциальности</p>
          </div>
        </div>
      )}
    </>
  );
};
