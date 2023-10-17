import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <section className='sectionAbout'>
                <h3 className='title'>Досвід роботи на навчання</h3>
                <ul className="list">
                    <li>Розпочав своє навчання з книг "Head First HTML and CSS" та "Head First JavaScript Programming". (20 годин)</li>
                    <li>Отримав доступ до курсів на сайті ITVDN "JavaScript Базовий" та "JavaScript Стартовий" (20 годин)</li>
                    <li>Пройшов "Повний курс по JS + React (67 годин)" на Udemy</li>
                    <li>Вирішував задачи на CodeWars (4 kyu/ біля 15 годин)</li>
                </ul>
                    <p className='sectioon-text' >  
                        Наприкінці курсу на Udemy, почав паралельно вивчати фреймворки Redux, React Router, TypeScript, мови стилізації та розширення SASS, Tailwind CSS.
                        З кожним новим проектом, я вивчаю щось нове, та посилююсь як спеціаліст. 
                        На данний момент зробив 4 пет проєкта, ви можете ознайомитись з ними детальніше за посиланням <Link to="/projects"><span className='reference'>Projects</span></Link>.
                    </p>
                    <span>Витрачені години на курсах - витрати без умов вирішення практичних завдань*</span>
            </section>
            <section className='sectionAbout'>
                <h3 className='title'>Плани</h3>
                <ul className="list">
                    <li>Працевлаштування і практика, практика, практика</li>
                    <li>Ще трохи практики</li>
                    <li>Вивчення нових технологій, бібліотек (на даний час цікавлюсь Next.js)</li>
                    <li>Англійський - upper intermediate</li>
                </ul>
            </section>
            <section className='sectionAbout'>
                <h3 className='title'>Хоббі</h3>
                <ul className="list">
                    <li>Гра на гітарі</li>
                    <li>Катання на роликах, ковзанах та сноуборді</li>
                    <li>Інвестиційний аналіз</li>
                </ul>
            </section>
            <section className='sectionAbout'>
                <h3 className='title'>Як я вирішив обрати IT та фронт-енд розробку</h3>
                <p className='sectioon-text' >Ви колись мали відчуття, що ви ніби все робите правильно, йдете до своєї мрії, однак щось не так?
                    І ви ніяк не можете зрозуміти, що саме. Ось одного дня я усвідомив, що дійсно трапилось.
                    Я зрозумів, що обрав не ту професію, не ту роботу, і невірно розклав пріорітети.
                    Я помилився, але все завжди можна виправити. Тому я вирішив змінити усе.
                    Чому обрав ІТ? Тому що я завжди любив працювати за монітором, створювати проекти, над якими цікаво працювати, і які будуть маии цінність.
                    Коли я навчався в університеті, на гідрометеоролога (так так, точнісінько на нього), то обирав магістерьску роботу 
                    яка буде повязана конкретно з компютерними технологіями. Саме робота з ГІС (гео-інформаційні системи)
                    підштовхнула мене до обрання ІТ. А далі, уже сніжний ком. Проте, це довга історія, а я просто хотів розповісти,
                    як саме обирав цей шлях. :)
                </p>
            </section>
        </section>
    )
};

export default AboutMe;