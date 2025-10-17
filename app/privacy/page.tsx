import { PrivacyHeader } from "@/components/privacy-header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PrivacyHeader />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Russian Version */}
          <div className="prose prose-lg max-w-none mb-16">
            <h1 className="text-4xl font-bold mb-2">Политика конфиденциальности</h1>
            <p className="text-xl text-muted-foreground mb-8">Qutty Band</p>
            <p className="text-sm text-muted-foreground mb-12">(дата обновления: 17 октября 2025 года)</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Общие положения</h2>
            <p className="mb-4">
              Настоящая Политика конфиденциальности (далее – Политика) регулирует порядок сбора, хранения и обработки
              персональных данных пользователей сайта и приложения Qutty Band (далее – Сервис). Используя сайт или
              приложение Qutty Band, пользователь подтверждает согласие с условиями данной Политики.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Оператор персональных данных</h2>
            <p className="mb-4">
              Оператором персональных данных является Qutty Band,
              <br />
              юридический адрес: Республика Казахстан, г. Алматы, ул. Абая, д. 100.
              <br />
              Электронная почта для обращений: support@quttyband.kz
              <br />
              Телефон: +7 (777) 123-45-67
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Какие данные мы собираем</h2>
            <p className="mb-2">
              При использовании браслета, мобильного приложения и сайта Qutty Band могут быть собраны следующие данные
              пользователя:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>имя и фамилия;</li>
              <li>номер телефона;</li>
              <li>пол, рост, вес;</li>
              <li>пульс, уровень стресса, артериальное давление, уровень кислорода в крови, вариабельность пульса;</li>
              <li>данные о сне;</li>
              <li>фотографии, присланные пользователем для определения калорийности пищи.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Цели обработки данных</h2>
            <p className="mb-2">Персональные данные обрабатываются исключительно в следующих целях:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>предоставление пользователю доступа к функционалу браслета и приложения;</li>
              <li>расчёт и отображение индивидуальных параметров активности, сна и питания;</li>
              <li>улучшение качества сервиса, статистический и аналитический анализ;</li>
              <li>информирование пользователя о работе устройства и обновлениях.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Особенности продукта</h2>
            <p className="mb-4">
              Фитнес-браслет Qutty Band не является медицинским устройством и не предназначен для диагностики, лечения
              или профилактики заболеваний. Все полученные данные имеют исключительно справочный и информационный
              характер.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Хранение и защита данных</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Все данные пользователей хранятся на защищённом сервере, расположенном на территории Республики
                Казахстан.
              </li>
              <li>
                Доступ к персональной информации ограничен и предоставляется только уполномоченным сотрудникам,
                обеспечивающим техническое обслуживание системы.
              </li>
              <li>Применяются современные методы шифрования и защиты информации.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Передача данных третьим лицам</h2>
            <p className="mb-4">
              Данные пользователей не передаются третьим лицам, за исключением случаев, предусмотренных
              законодательством Республики Казахстан (например, по официальному запросу суда или правоохранительных
              органов).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Права пользователя</h2>
            <p className="mb-2">Пользователь имеет право:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>запросить копию своих персональных данных;</li>
              <li>потребовать исправления или удаления данных;</li>
              <li>отозвать согласие на обработку данных, направив запрос на адрес support@quttyband.kz.</li>
            </ul>
            <p className="mb-4">
              После получения запроса обработка данных будет прекращена, а информация удалена в течение 30 календарных
              дней.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookies и аналитика</h2>
            <p className="mb-4">
              Сайт-лендинг quttyband.kz не использует cookies и сторонние системы аналитики. Никакие данные о действиях
              пользователей на сайте не собираются и не передаются.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Ответственность сторон</h2>
            <p className="mb-4">
              Qutty Band не несёт ответственности за возможные утечки информации, возникшие в результате действий
              третьих лиц, не связанных с работой компании, а также за неправильное использование устройства или
              приложения пользователем.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Изменения политики конфиденциальности</h2>
            <p className="mb-4">
              Компания Qutty Band оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия
              документа всегда доступна на официальном сайте quttyband.kz.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Контакты</h2>
            <p className="mb-4">
              По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу:
              <br />
              support@quttyband.kz
              <br />
              +7 (777) 123-45-67
            </p>
          </div>

          {/* English Version */}
          <div className="prose prose-lg max-w-none border-t pt-16">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-8">Qutty Band</p>
            <p className="text-sm text-muted-foreground mb-12">(last updated: October 17, 2025)</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. General Provisions</h2>
            <p className="mb-4">
              This Privacy Policy (hereinafter – the "Policy") explains how Qutty Band (hereinafter – the "Service")
              collects, stores, and processes personal data of users of its website and mobile application. By using the
              Qutty Band website or mobile app, you agree to the terms of this Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Controller</h2>
            <p className="mb-4">
              The data controller is Qutty Band.
              <br />
              Legal address: Republic of Kazakhstan, Almaty, Abai Street 100.
              <br />
              Email: support@quttyband.kz
              <br />
              Phone: +7 (777) 123-45-67
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information We Collect</h2>
            <p className="mb-2">
              When using the Qutty Band bracelet, mobile app, or website, we may collect the following personal data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>first name and last name;</li>
              <li>phone number;</li>
              <li>gender, height, and weight;</li>
              <li>heart rate, stress level, blood pressure, blood oxygen level, heart rate variability;</li>
              <li>sleep data;</li>
              <li>photos sent by the user to estimate food calorie content.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Purposes of Data Processing</h2>
            <p className="mb-2">Personal data is processed solely for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>providing access to the features of the bracelet and mobile app;</li>
              <li>calculating and displaying individual activity, sleep, and nutrition parameters;</li>
              <li>improving service quality, performing statistical and analytical analysis;</li>
              <li>informing the user about device performance and updates.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Product Disclaimer</h2>
            <p className="mb-4">
              The Qutty Band fitness bracelet is not a medical device and is not intended for diagnosing, treating, or
              preventing diseases. All health-related data provided by the device or app is for informational and
              reference purposes only.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All user data is stored on secure servers located in the Republic of Kazakhstan.</li>
              <li>
                Access to personal data is restricted and granted only to authorized personnel responsible for technical
                maintenance.
              </li>
              <li>Modern encryption and information protection technologies are used to ensure security.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Sharing with Third Parties</h2>
            <p className="mb-4">
              User data is not shared with any third parties, except when required by law or by an official request from
              a court or government authority of the Republic of Kazakhstan.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. User Rights</h2>
            <p className="mb-2">Users have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>request a copy of their personal data;</li>
              <li>request correction or deletion of their data;</li>
              <li>withdraw consent for data processing by sending a request to support@quttyband.kz.</li>
            </ul>
            <p className="mb-4">
              Upon receiving such a request, data processing will be stopped, and the user's information will be deleted
              within 30 calendar days.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookies and Analytics</h2>
            <p className="mb-4">
              The Qutty Band landing page (quttyband.kz) does not use cookies or third-party analytics services. No
              behavioral or tracking data is collected or transmitted.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Liability</h2>
            <p className="mb-4">
              Qutty Band is not responsible for any data leaks resulting from the actions of third parties unrelated to
              the company's operations, or for any incorrect use of the device or mobile app by the user.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">
              Qutty Band reserves the right to make changes to this Privacy Policy at any time. The current version of
              the Policy is always available on the official website quttyband.kz.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For all inquiries regarding personal data processing, please contact us at:
              <br />
              support@quttyband.kz
              <br />
              +7 (777) 123-45-67
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
