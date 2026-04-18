(function() {
    'use strict';

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const footerLinks = document.querySelectorAll('[data-tab]');
    const contentTitle = document.getElementById('contentTitle');
    const contentSubtitle = document.getElementById('contentSubtitle');
    const contentBody = document.getElementById('contentBody');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    const subtitles = {
        home: 'Фракция демонов · Yufu.su',
        blood: 'Нерушимые узы крови',
        rankup: 'Путь к вершинам силы',
        places: 'Земли под властью тьмы',
        fight: 'Честь решается в бою',
        break: 'Преодоление пределов',
        law: 'Древние законы ковена'
    };

    const data = {
        home: {
            title: 'Обзор',
            html: `
                <div class="card">
                    <div class="creator-section">
                        <div class="creator-avatar-block">O_o</div>
                        <div class="creator-info">
                            <h2>Мудзан Кибуцуджи</h2>
                            <p><i class="fas fa-crown"></i> Прародитель · Создатель</p>
                            <p><i class="fab fa-discord"></i> livgard</p>
                            <p><i class="fas fa-globe"></i> Yufu.su</p>
                        </div>
                    </div>
                    <p style="font-size:1.1rem;color:var(--text-primary);">Демоны — вампирическая раса. Люди — пища. Солнце — смерть. Ночная активность, аномальная регенерация, невосприимчивость к обычному оружию.</p>
                </div>
                
                <div class="section-title">Пути тьмы</div>
                <div class="quick-links">
                    <div class="quick-link" data-goto="blood">
                        <i class="fas fa-droplet"></i>
                        <span>Клятва крови</span>
                        <small>Иерархия и положения</small>
                    </div>
                    <div class="quick-link" data-goto="rankup">
                        <i class="fas fa-chart-line"></i>
                        <span>Возвышение</span>
                        <small>Система рангов</small>
                    </div>
                    <div class="quick-link" data-goto="places">
                        <i class="fas fa-map-pin"></i>
                        <span>Владения</span>
                        <small>Территории демонов</small>
                    </div>
                    <div class="quick-link" data-goto="fight">
                        <i class="fas fa-crosshairs"></i>
                        <span>Поединки</span>
                        <small>Дуэли крови</small>
                    </div>
                    <div class="quick-link" data-goto="break">
                        <i class="fas fa-bolt"></i>
                        <span>Прорыв</span>
                        <small>Пределы крови</small>
                    </div>
                    <div class="quick-link" data-goto="law">
                        <i class="fas fa-gem"></i>
                        <span>Закон Ковена</span>
                        <small>Закон Ковена</small>
                    </div>
                </div>
            `
        },
        blood: {
            title: 'Клятва крови',
            html: `
                <div class="card">
                    <div class="section-title">Иерархия</div>
                    
                    <div class="hierarchy-svg-wrapper">
                        <svg class="hierarchy-svg" viewBox="0 0 900 780" preserveAspectRatio="xMidYMid meet">
                            <!-- Прародитель → Высшие/Низшие -->
                            <line x1="450" y1="55" x2="450" y2="85" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="225" y1="85" x2="675" y2="85" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="225" y1="85" x2="225" y2="115" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="675" y1="85" x2="675" y2="115" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- Высшие/Низшие → Кровавая Элита -->
                            <line x1="225" y1="155" x2="225" y2="180" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="675" y1="155" x2="675" y2="180" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="225" y1="180" x2="675" y2="180" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="180" x2="450" y2="210" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- Кровавая Элита → CMD | Константы | 5 Предел -->
                            <line x1="450" y1="250" x2="450" y2="280" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="150" y1="280" x2="750" y2="280" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="150" y1="280" x2="150" y2="310" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="280" x2="450" y2="310" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="750" y1="280" x2="750" y2="310" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- CMD | Константы | 5 Предел → D.CMD | Командиры | 4 Предел -->
                            <line x1="150" y1="350" x2="150" y2="380" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="350" x2="450" y2="380" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="750" y1="350" x2="750" y2="380" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="150" y1="380" x2="750" y2="380" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="150" y1="380" x2="150" y2="410" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="380" x2="450" y2="410" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="750" y1="380" x2="750" y2="410" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- D.CMD | Командиры | 4 Предел → Яхаба | Лунный мечник | Зам.Ком | 3 Предел | Сусамару -->
                            <line x1="150" y1="450" x2="150" y2="480" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="450" x2="450" y2="480" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="750" y1="450" x2="750" y2="480" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="90" y1="480" x2="810" y2="480" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="90" y1="480" x2="90" y2="510" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="270" y1="480" x2="270" y2="510" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="480" x2="450" y2="510" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="630" y1="480" x2="630" y2="510" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="810" y1="480" x2="810" y2="510" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- 5 п → Лунный Аколит | Высшая Магия | 2 Предел -->
                            <line x1="90" y1="550" x2="90" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="270" y1="550" x2="270" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="550" x2="450" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="630" y1="550" x2="630" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="810" y1="550" x2="810" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="90" y1="580" x2="810" y2="580" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="225" y1="580" x2="225" y2="610" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="580" x2="450" y2="610" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="675" y1="580" x2="675" y2="610" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- 3 п → Низшая Магия | 1 Предел -->
                            <line x1="225" y1="650" x2="225" y2="680" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="650" x2="450" y2="680" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="675" y1="650" x2="675" y2="680" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="225" y1="680" x2="675" y2="680" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="300" y1="680" x2="300" y2="710" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="600" y1="680" x2="600" y2="710" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            
                            <!-- 2 п → Демоны 12 рангов -->
                            <line x1="300" y1="750" x2="300" y2="770" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="600" y1="750" x2="600" y2="770" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="300" y1="770" x2="600" y2="770" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                            <line x1="450" y1="770" x2="450" y2="790" stroke="#dc2626" stroke-width="2" opacity="0.6"/>
                        </svg>
                        
                        <div class="hierarchy-nodes-absolute" style="height: 820px;">
                            <div class="hierarchy-node hierarchy-node--primary" style="top: 10px; left: 450px;">
                                <span class="hierarchy-name">Прародитель</span>
                                <span class="hierarchy-sub">Мудзан Кибуцуджи</span>
                            </div>
                            
                            <div class="hierarchy-node hierarchy-node--secondary" style="top: 140px; left: 225px;">
                                <span class="hierarchy-name">Высшие Луны</span>
                                <span class="hierarchy-sub">Верхняя Шестёрка</span>
                            </div>
                            <div class="hierarchy-node hierarchy-node--secondary" style="top: 140px; left: 675px;">
                                <span class="hierarchy-name">Низшие Луны</span>
                                <span class="hierarchy-sub">Нижняя Шестёрка</span>
                            </div>
                            
                            <div class="hierarchy-node hierarchy-node--tertiary" style="top: 245px; left: 450px;">
                                <span class="hierarchy-name">Кровавая Элита</span>
                            </div>
                            
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 335px; left: 150px;">
                                <span class="hierarchy-name">CMD</span>
                                <span class="hierarchy-sub">Лунный Сенсей</span>
                            </div>
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 345px; left: 450px;">
                                <span class="hierarchy-name">Константы</span>
                            </div>
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 345px; left: 750px;">
                                <span class="hierarchy-name">5 Предел</span>
                            </div>
                            
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 435px; left: 150px;">
                                <span class="hierarchy-name">D.CMD</span>
                                <span class="hierarchy-sub">Лунный Сенсей</span>
                            </div>
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 435px; left: 450px;">
                                <span class="hierarchy-name">Командиры</span>
                                <span class="hierarchy-sub">Отрядов</span>
                            </div>
                            <div class="hierarchy-node hierarchy-node--quaternary" style="top: 445px; left: 750px;">
                                <span class="hierarchy-name">4 Предел</span>
                            </div>
                            
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 545px; left: 90px;">Яхаба</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 545px; left: 270px;">Лунный мечник</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 545px; left: 450px;">Зам. Ком.</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 545px; left: 630px;">3 Предел</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 545px; left: 810px;">Сусамару</div>
                            
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 645px; left: 225px;">Лунный Аколит</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 645px; left: 450px;">Высшая Магия</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 645px; left: 675px;">2 Предел</div>
                            
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 745px; left: 300px;">Низшая Магия</div>
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 745px; left: 600px;">1 Предел</div>
                            
                            <div class="hierarchy-node hierarchy-node--leaf" style="top: 825px; left: 450px;">Демоны 12 рангов</div>
                        </div>
                    </div>
                    
                    <div class="section-title" style="margin-top: var(--space-3xl);">Положения</div>
                    <ul class="rule-list">
                        <li><span class="rule-number">1</span> Подчинение вышестоящему по иерархии</li>
                        <li><span class="rule-number">2</span> При виде Луны — падать ниц</li>
                        <li><span class="rule-number">3</span> Бой вне додзё карается</li>
                        <li><span class="rule-number">4</span> Магия крови только для перемещения</li>
                    </ul>
                </div>
            `
        },
        rankup: {
            title: 'Возвышение',
            html: `
                <div class="card">
                    <div class="section-title">Ограничения</div>
                    <ul class="rule-list">
                        <li><span class="rule-number">1</span> Otokuma / Demon — 1 день</li>
                        <li><span class="rule-number">2</span> Keykon~Chikuma — 2 дня</li>
                        <li><span class="rule-number">3</span> Asakuma~Shiko — 3 дня</li>
                    </ul>
                    <div class="note">КД сбрасывается в 0:00. Пример: 22:00 09.03 → 0:10 10.03</div>
                </div>
                <div class="tab-bar" id="rankTabs"></div>
                <div class="tab-content" id="rankPane">Выберите ранг</div>
            `
        },
        places: {
            title: 'Владения',
            html: `
                <div class="section-title">Цитадель</div>
                <div class="gallery" id="indoorGrid"></div>
                <div class="section-title">Внешние земли</div>
                <div class="gallery" id="outdoorGrid"></div>
            `
        },
        fight: {
            title: 'Поединки',
            html: `
                <div class="card">
                    <div class="section-title">Порядок</div>
                    <ul class="rule-list">
                        <li><span class="rule-number">1</span> Вызов</li>
                        <li><span class="rule-number">2</span> Ожидание 24ч</li>
                        <li><span class="rule-number">3</span> Организация (Аказа)</li>
                        <li><span class="rule-number">4</span> 3 раунда</li>
                        <li><span class="rule-number">5</span> Клятва</li>
                    </ul>
                    <div class="section-title">Правила</div>
                    <ul class="rule-list">
                        <li><span class="rule-number">1</span> Вызывать равного или выше (с Хофума)</li>
                        <li><span class="rule-number">2</span> 2 отказа</li>
                        <li><span class="rule-number">3</span> Ответ за 24 часа</li>
                        <li><span class="rule-number">4</span> Баффы запрещены</li>
                    </ul>
                </div>
            `
        },
        break: {
            title: 'Предел Крови',
            html: `
                <div class="card">
                    <div class="section-title">HDS 1 → HDS 5</div>
                    <div class="note">Задержка 3 дня. Почтением закрыть 1 пункт.</div>
                </div>
                <div class="tab-bar" id="limitTabs"></div>
                <div class="tab-content" id="limitPane">Выберите предел</div>
            `
        },
        law: {
            title: 'Закон Ковена',
            html: `
                <div class="card" style="text-align:center;padding:60px;">
                    <i class="fas fa-lock" style="font-size:48px;color:var(--accent-primary);margin-bottom:20px;"></i>
                    <h3 style="font-family:var(--font-display);font-size:1.8rem;">Закрытый раздел</h3>
                    <p>Доступ ограничен</p>
                </div>
            `
        }
    };

    const rankDetails = {
        'Otokuma → Demon': '<ul class="rule-list"><li><span class="rule-number">1</span> Проверка клятвы</li><li><span class="rule-number">2</span> Лекция инструктора+</li><li><span class="rule-number">3</span> Одобрение</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 1 день</span></p>',
        'Demon → Keykon': '<ul class="rule-list"><li><span class="rule-number">1</span> 3 точки с 12 луной</li><li><span class="rule-number">2</span> 4 истребителя</li><li><span class="rule-number">3</span> Тренировка элиты</li><li><span class="rule-number">4</span> Обряд</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 1 день</span></p>',
        'Keykon → Hofuma': '<ul class="rule-list"><li><span class="rule-number">1</span> Поручение 12 лун</li><li><span class="rule-number">2</span> Похитить, допросить</li><li><span class="rule-number">3</span> 3 истребителя, украшение</li><li><span class="rule-number">4</span> Одобрение 12 лун</li></ul><div class="note">"Демон малой крови"</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 2 дня</span></p>',
        'Hofuma → Chisuma': '<ul class="rule-list"><li><span class="rule-number">1</span> Дуэль</li><li><span class="rule-number">2</span> Конспирация</li><li><span class="rule-number">3</span> Задание 12 лун</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 2 дня</span></p>',
        'Chisuma → Chikuma': '<ul class="rule-list"><li><span class="rule-number">1</span> Мероприятие</li><li><span class="rule-number">2</span> Клятва Доуме</li><li><span class="rule-number">3</span> Диверсия</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 2 дня</span></p>',
        'Chikuma → Asakuma': '<ul class="rule-list"><li><span class="rule-number">1</span> Проверка тройки</li><li><span class="rule-number">2</span> 10 истребителей</li><li><span class="rule-number">3</span> Признание D.CMD+</li><li><span class="rule-number">4</span> 2 мероприятия</li></ul><div class="note">"Демон средней крови"</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 2 дня</span></p>',
        'Asakuma → Hobura': '<ul class="rule-list"><li><span class="rule-number">1</span> Одобрение тройки</li><li><span class="rule-number">2</span> Украсть катану/хаори</li><li><span class="rule-number">3</span> Похвала</li><li><span class="rule-number">4</span> 15 истребителей</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'Hobura → Shateigashira': '<ul class="rule-list"><li><span class="rule-number">1</span> Подарок Высшей луне</li><li><span class="rule-number">2</span> Собрать строй</li><li><span class="rule-number">3</span> 10 истребителей</li><li><span class="rule-number">4</span> Битва с элитой</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'Shateigashira → Wakagashira': '<ul class="rule-list"><li><span class="rule-number">1</span> Личная тренировка</li><li><span class="rule-number">2</span> 30 истребителей</li><li><span class="rule-number">3</span> Почтение</li><li><span class="rule-number">4</span> Одобрение Прародителя</li></ul><div class="note">"Демон магии крови"</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'Wakagashira → Tsukomon': '<ul class="rule-list"><li><span class="rule-number">1</span> 2 сбора</li><li><span class="rule-number">2</span> Признание луны</li><li><span class="rule-number">3</span> Поручение</li><li><span class="rule-number">4</span> Одобрение</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'Tsukomon → Shiko': '<div class="note">4 предел + первый Shiko в отряде</div><ul class="rule-list"><li><span class="rule-number">1</span> Поручение 3 лун</li><li><span class="rule-number">2</span> 3 тренировки</li><li><span class="rule-number">3</span> Информация о лилии</li><li><span class="rule-number">4</span> Задание Руи</li><li><span class="rule-number">5</span> Развить искусство</li><li><span class="rule-number">6</span> Дуэль (50% хп)</li><li><span class="rule-number">7</span> Одобрение</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>'
    };

    const limitDetails = {
        'HDS 1': '<ul class="rule-list"><li><span class="rule-number">1</span> Одобрение 2 демонов 12 лун</li><li><span class="rule-number">2</span> Дуэль с HDS 4/5 или Низшей</li><li><span class="rule-number">3</span> Ранг Tsukomon</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'HDS 2': '<ul class="rule-list"><li><span class="rule-number">1</span> Одобрение 2 высших лун</li><li><span class="rule-number">2</span> Дуэль (40% хп)</li><li><span class="rule-number">3</span> HDS 1, 10 истребителей</li><li><span class="rule-number">4</span> 3 поручения</li></ul><div class="note">"Низшая Магия крови"</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'HDS 3': '<ul class="rule-list"><li><span class="rule-number">1</span> 4 поручения</li><li><span class="rule-number">2</span> Дуэль с Д.КМД+</li><li><span class="rule-number">3</span> HDS 2, тренировка</li><li><span class="rule-number">4</span> 2 сбора</li></ul><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'HDS 4': '<ul class="rule-list"><li><span class="rule-number">1</span> 4 поручения</li><li><span class="rule-number">2</span> Дуэль (50% хп)</li><li><span class="rule-number">3</span> HDS 3, 20 истребителей</li><li><span class="rule-number">4</span> Испытание, 10 точек</li></ul><div class="note">Можно на Shiko</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>',
        'HDS 5': '<ul class="rule-list"><li><span class="rule-number">1</span> Ранг Shiko</li><li><span class="rule-number">2</span> Одобрение Тройки</li><li><span class="rule-number">3</span> HDS 4, поручение</li><li><span class="rule-number">4</span> 25 истребителей, 3 сбора, 2 тренировки</li><li><span class="rule-number">5</span> Почтение 3</li></ul><div class="note">"Высшая Магия Крови"</div><p><span style="background:#dc2626;padding:4px 16px;border-radius:20px;color:white;">КД: 3 дня</span></p>'
    };

    const territoryRules = {
        natagumo: '<h3 style="font-family:var(--font-display);">Гора Натагумо</h3><ul class="rule-list"><li><span class="rule-number">1</span> Не перечить Младшему Брату</li><li><span class="rule-number">2</span> Не трогать ловушки</li><li><span class="rule-number">3</span> Покинуть за 10 сек</li></ul>',
        otrek: '<h3 style="font-family:var(--font-display);">Дом Отрёкшихся</h3><ul class="rule-list"><li><span class="rule-number">1</span> Не перечить членам отряда</li><li><span class="rule-number">2</span> Своя иерархия</li></ul>',
        douma: '<h3 style="font-family:var(--font-display);">Храм Доумы</h3><ul class="rule-list"><li><span class="rule-number">1</span> Приветствует ищущих</li><li><span class="rule-number">2</span> Без маскировки запрещено</li><li><span class="rule-number">3</span> Подчиняться слову</li></ul>'
    };

    function switchTab(tabId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.tab === tabId) link.classList.add('active');
        });
        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.tab === tabId) link.classList.add('active');
        });

        const item = data[tabId];
        contentTitle.textContent = item.title;
        contentSubtitle.textContent = subtitles[tabId];
        contentBody.innerHTML = item.html;

        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');

        if (tabId === 'home') {
            document.querySelectorAll('.quick-link').forEach(el => {
                el.addEventListener('click', () => switchTab(el.dataset.goto));
            });
        }

        if (tabId === 'rankup') {
            const container = document.getElementById('rankTabs');
            const pane = document.getElementById('rankPane');
            container.innerHTML = '';
            Object.keys(rankDetails).forEach(r => {
                const btn = document.createElement('button');
                btn.className = 'tab'; btn.textContent = r;
                btn.onclick = () => {
                    document.querySelectorAll('#rankTabs .tab').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    pane.innerHTML = rankDetails[r];
                };
                container.appendChild(btn);
            });
            container.firstChild?.classList.add('active');
            pane.innerHTML = rankDetails[Object.keys(rankDetails)[0]];
        }

        if (tabId === 'break') {
            const container = document.getElementById('limitTabs');
            const pane = document.getElementById('limitPane');
            container.innerHTML = '';
            Object.keys(limitDetails).forEach(l => {
                const btn = document.createElement('button');
                btn.className = 'tab'; btn.textContent = l;
                btn.onclick = () => {
                    document.querySelectorAll('#limitTabs .tab').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    pane.innerHTML = limitDetails[l];
                };
                container.appendChild(btn);
            });
            container.firstChild?.classList.add('active');
            pane.innerHTML = limitDetails[Object.keys(limitDetails)[0]];
        }

        if (tabId === 'places') {
            const indoor = document.getElementById('indoorGrid');
            const outdoor = document.getElementById('outdoorGrid');
            const rooms = ['Отрядные','Додзё','Зал Высших','Зал Прародителя','Переход','Башня','Площадь','Полумесяц','Церберы'];
            const imgs = ['BWzrbRt','BWzi9zF','BWzsZAB','BWzLk0J','BWzQDEg','BWztgOQ','BWzbaFn','BWzmNsI','BWzynae'];
            indoor.innerHTML = rooms.map((r,i)=>`<div class="gallery-item" data-terr="indoor${i}"><img src="https://iili.io/${imgs[i]}.png"><div class="caption">${r}</div></div>`).join('');
            outdoor.innerHTML = `
                <div class="gallery-item" data-terr="natagumo"><img src="https://iili.io/BWzymoQ.png"><div class="caption">Гора Натагумо</div></div>
                <div class="gallery-item" data-terr="otrekshiesya"><img src="https://iili.io/BWIHr37.png"><div class="caption">Дом Отрёкшихся</div></div>
                <div class="gallery-item" data-terr="douma"><img src="https://iili.io/BWIHr37.png"><div class="caption">Храм Доумы</div></div>
            `;
            document.querySelectorAll('.gallery-item').forEach(c => {
                c.addEventListener('click', () => {
                    const t = c.dataset.terr;
                    if (t === 'natagumo') modalBody.innerHTML = territoryRules.natagumo;
                    else if (t === 'otrekshiesya') modalBody.innerHTML = territoryRules.otrek;
                    else if (t === 'douma') modalBody.innerHTML = territoryRules.douma;
                    else modalBody.innerHTML = `<h3>${c.querySelector('.caption').textContent}</h3>`;
                    modal.classList.add('active');
                });
            });
        }
    }

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.dataset.tab);
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.dataset.tab);
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.dataset.tab) switchTab(link.dataset.tab);
        });
    });

    logo.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('home');
    });

    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) modal.classList.remove('active');
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });

    switchTab('home');
})();