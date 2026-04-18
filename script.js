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
                <style>
                    .blood-sections-nav{
                        display:grid;
                        grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
                        gap:12px;
                        margin-top:var(--space-xl);
                    }
                    .blood-nav-btn{
                        position:relative;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        gap:10px;
                        min-height:56px;
                        padding:14px 16px;
                        border:1px solid rgba(220,38,38,.28);
                        border-radius:16px;
                        background:linear-gradient(180deg, rgba(24,24,27,.95) 0%, rgba(14,14,17,.95) 100%);
                        color:var(--text-primary);
                        font-weight:600;
                        letter-spacing:.02em;
                        cursor:pointer;
                        transition:transform .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease;
                        box-shadow:0 10px 30px rgba(0,0,0,.22);
                    }
                    .blood-nav-btn:hover{
                        transform:translateY(-2px);
                        border-color:rgba(220,38,38,.5);
                        box-shadow:0 14px 34px rgba(220,38,38,.12);
                    }
                    .blood-nav-btn i{
                        color:var(--accent-primary);
                    }
                    .blood-section{
                        position:relative;
                        scroll-margin-top:96px;
                        margin-top:var(--space-2xl);
                        padding:24px;
                        border-radius:22px;
                        border:1px solid rgba(220,38,38,.16);
                        background:linear-gradient(180deg, rgba(19,19,22,.96) 0%, rgba(11,11,13,.98) 100%);
                        box-shadow:0 18px 40px rgba(0,0,0,.24);
                        overflow:hidden;
                    }
                    .blood-section::before{
                        content:'';
                        position:absolute;
                        top:0;
                        left:0;
                        right:0;
                        height:1px;
                        background:linear-gradient(90deg, transparent 0%, rgba(220,38,38,.45) 50%, transparent 100%);
                    }
                    .blood-section-head{
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:12px;
                        margin-bottom:18px;
                        flex-wrap:wrap;
                    }
                    .blood-section-title{
                        margin:0;
                        font-family:var(--font-display);
                        font-size:1.45rem;
                        color:var(--text-primary);
                        display:flex;
                        align-items:center;
                        gap:12px;
                    }
                    .blood-section-title i{
                        color:var(--accent-primary);
                    }
                    .blood-section-badge{
                        padding:6px 12px;
                        border-radius:999px;
                        background:rgba(220,38,38,.12);
                        border:1px solid rgba(220,38,38,.24);
                        color:var(--text-secondary);
                        font-size:.85rem;
                    }
                    .blood-text-list{
                        display:flex;
                        flex-direction:column;
                        gap:14px;
                    }
                    .blood-rule{
                        padding:16px 18px;
                        border-radius:16px;
                        background:rgba(255,255,255,.02);
                        border:1px solid rgba(255,255,255,.05);
                    }
                    .blood-rule p{
                        margin:0;
                        color:var(--text-primary);
                        line-height:1.75;
                    }
                    .blood-rule + .blood-note,
                    .blood-rule + .blood-exception,
                    .blood-note + .blood-note,
                    .blood-exception + .blood-note{
                        margin-top:-2px;
                    }
                    .blood-note,
                    .blood-exception,
                    .blood-clarification{
                        padding:14px 16px;
                        border-radius:14px;
                        line-height:1.7;
                        font-size:.97rem;
                    }
                    .blood-note{
                        background:rgba(255,255,255,.03);
                        border-left:3px solid rgba(220,38,38,.45);
                        color:var(--text-secondary);
                    }
                    .blood-exception{
                        background:rgba(220,38,38,.08);
                        border:1px solid rgba(220,38,38,.18);
                        color:var(--text-primary);
                    }
                    .blood-clarification{
                        background:rgba(164, 92, 255, .07);
                        border:1px solid rgba(164, 92, 255, .16);
                        color:var(--text-secondary);
                    }
                    .blood-mini-grid{
                        display:grid;
                        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
                        gap:14px;
                        margin-top:18px;
                    }
                    .blood-mini-card{
                        padding:16px;
                        border-radius:16px;
                        background:rgba(255,255,255,.025);
                        border:1px solid rgba(255,255,255,.06);
                    }
                    .blood-mini-card strong{
                        display:block;
                        color:var(--text-primary);
                        margin-bottom:8px;
                    }
                    .punishment-tabs{
                        display:grid;
                        grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
                        gap:12px;
                        margin-bottom:16px;
                    }
                    .punishment-tab{
                        position:relative;
                        padding:14px 14px;
                        border-radius:16px;
                        background:linear-gradient(180deg, rgba(32,32,37,.98) 0%, rgba(16,16,20,.98) 100%);
                        border:1px solid rgba(220,38,38,.16);
                        color:var(--text-primary);
                        font-weight:700;
                        cursor:pointer;
                        transition:all .22s ease;
                    }
                    .punishment-tab:hover{
                        border-color:rgba(220,38,38,.42);
                        transform:translateY(-2px);
                    }
                    .punishment-tab.active{
                        border-color:rgba(220,38,38,.52);
                        box-shadow:0 0 0 1px rgba(220,38,38,.18) inset, 0 12px 24px rgba(220,38,38,.12);
                        background:linear-gradient(180deg, rgba(46,15,15,.98) 0%, rgba(18,10,12,.98) 100%);
                    }
                    .punishment-pane{
                        padding:18px;
                        border-radius:18px;
                        background:linear-gradient(180deg, rgba(17,17,20,.96) 0%, rgba(10,10,12,.98) 100%);
                        border:1px solid rgba(220,38,38,.14);
                    }
                    .punishment-pane h4{
                        margin:0 0 12px 0;
                        font-family:var(--font-display);
                        font-size:1.2rem;
                        color:var(--text-primary);
                    }
                    .punishment-pane p{
                        margin:0 0 14px 0;
                        color:var(--text-secondary);
                        line-height:1.75;
                    }
                    .issuer-list{
                        display:flex;
                        flex-wrap:wrap;
                        gap:10px;
                    }
                    .issuer-chip{
                        padding:8px 12px;
                        border-radius:999px;
                        border:1px solid rgba(220,38,38,.18);
                        background:rgba(220,38,38,.08);
                        color:var(--text-primary);
                        font-size:.9rem;
                    }
                    .blood-anchor-divider{
                        height:1px;
                        margin:18px 0 0;
                        background:linear-gradient(90deg, transparent 0%, rgba(220,38,38,.18) 50%, transparent 100%);
                    }
                    @media (max-width: 768px){
                        .blood-section{
                            padding:18px;
                            border-radius:18px;
                        }
                        .blood-nav-btn{
                            min-height:52px;
                            font-size:.95rem;
                        }
                    }
                </style>

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

                    <div class="blood-anchor-divider"></div>

                    <div class="section-title" style="margin-top: var(--space-2xl);">Оглавление</div>
                    <div class="blood-sections-nav" id="bloodSectionsNav">
                        <button class="blood-nav-btn" type="button" data-target="blood-general"><i class="fas fa-scroll"></i><span>Общие положения</span></button>
                        <button class="blood-nav-btn" type="button" data-target="blood-dojo"><i class="fas fa-torii-gate"></i><span>Правила додзё</span></button>
                        <button class="blood-nav-btn" type="button" data-target="blood-events"><i class="fas fa-users"></i><span>Правила мероприятий</span></button>
                        <button class="blood-nav-btn" type="button" data-target="blood-punishments"><i class="fas fa-gavel"></i><span>Типы наказаний</span></button>
                        <button class="blood-nav-btn" type="button" data-target="blood-respect"><i class="fas fa-award"></i><span>Почтения</span></button>
                        <button class="blood-nav-btn" type="button" data-target="blood-transfer"><i class="fas fa-right-left"></i><span>Правила переводов</span></button>
                    </div>
                </div>

                <section class="blood-section" id="blood-general">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-scroll"></i>Общие положения</h3>
                        <div class="blood-section-badge">Базовые правила клятвы</div>
                    </div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>1)</strong> Каждый демон, независимо от того какой пост он занимает, обязан подчиниться приказу выше находящего по иерархии и проявлять уважение.</p></div>
                        <div class="blood-note"><strong>Примечание:</strong> Луны не обязаны подчиняться друг другу. Низшие Луны не могут оспорить решения Высших Лун и обязаны уважительно общаться с высшими лунами.</div>

                        <div class="blood-rule"><p><strong>2)</strong> При виде луны каждый демон обязан падать ниц для приветствия или обращения к той или иной луне, вне зависимости от того кем является. Общение к лунам должно сопровождаться уважительным тоном, встать с колена можно только после разрешения либо ухода самой луны. Также запрещено общаться с лунами и Прародителем по-свойски.</p></div>
                        <div class="blood-note"><strong>Примечание:</strong> к первой тройке Высших Лун можно обращаться только по номеру, если у вас нет разрешения обращаться по имени. Пример: «Господин Первая Высшая».</div>

                        <div class="blood-rule"><p><strong>3)</strong> Запрещено использовать магию крови для битвы вне додзё.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> Демоны 12-ти лун и Прародитель.</div>
                        <div class="blood-note"><strong>Примечание:</strong> магию крови для передвижения можно использовать.</div>

                        <div class="blood-rule"><p><strong>4)</strong> Демонам запрещено посещать отрядные комнаты, залы Высших/Низших лун и комнату Прародителя без их разрешения. Также запрещено прикасаться к дверям комнаты Прародителя без разрешения.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> разрешение владельцев.</div>

                        <div class="blood-rule"><p><strong>5)</strong> Приоритет приказов зависит от места в иерархии. При этом демон, находящийся выше в иерархии, не может без веской причины отменить чей-то приказ.</p></div>
                        <div class="blood-note"><strong>Примечание:</strong> веской причиной может быть некорректный приказ либо наличие более важного задания для демона.</div>

                        <div class="blood-rule"><p><strong>6)</strong> Демоны могут отдавать ограниченные приказы нижестоящим по иерархии. Демоны 12 рангов могут отдавать только мелкие приказы. Уполномоченные демоны могут отдавать приказы, связанные с тренировками, физическими наказаниями, а также отдавать приказы, пресекающие нарушение клятвы крови.</p></div>
                        <div class="blood-clarification"><strong>Пояснение:</strong> ограничения подразумевают мелкие приказы по типу «перестань спорить» или «отойди с моей дороги».</div>

                        <div class="blood-rule"><p><strong>7)</strong> В цитадели запрещено неадекватное поведение и нанесение ущерба интерьеру.</p></div>

                        <div class="blood-rule"><p><strong>8)</strong> Запрещено отдавать некорректные приказы. Некорректным приказом является приказ, унижающий достоинство игрока. Запрещено отдавать унизительные, излишне сложные приказы, имеющие длительный характер.</p></div>
                    </div>
                </section>

                <section class="blood-section" id="blood-dojo">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-torii-gate"></i>Правила додзё</h3>
                        <div class="blood-section-badge">Бои и поведение на арене</div>
                    </div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>1)</strong> Запрещено наносить какой-либо вред находящимся в додзё без причины или для вызова на бой.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> Демоны 12-ти лун.</div>

                        <div class="blood-rule"><p><strong>2)</strong> Запрещено вступать в бой вне очереди. Запрещено вступать в начавшийся бой.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> тренировка, приказ Демона 12 лун / Прародителя.</div>

                        <div class="blood-rule"><p><strong>3)</strong> Запрещено приказывать сражаться с кем-либо.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> тренировка / приказ демона 12-ти лун / Прародителя.</div>

                        <div class="blood-rule"><p><strong>4)</strong> Во время дуэли запрещено прятаться за наблюдающими.</p></div>

                        <div class="blood-rule"><p><strong>5)</strong> Дуэлянтам запрещено покидать додзё во время активного боя более чем на несколько секунд.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> зов по телепатии / приказ демона 12-ти лун / Прародителя.</div>

                        <div class="blood-rule"><p><strong>6)</strong> Дуэлянтам запрещено перебегать от одной арены к другой во время активного боя.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> условия тренировки / Демоны 12 лун / Прародитель.</div>
                    </div>
                </section>

                <section class="blood-section" id="blood-events">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-users"></i>Правила мероприятий и построений</h3>
                        <div class="blood-section-badge">В навигации: «Правила мероприятий»</div>
                    </div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>1)</strong> Между окончанием и началом мероприятий должно пройти не менее 15 минут. Луны могут иногда игнорировать этот пункт, при этом злоупотребление этим правом будет караться.</p></div>
                        <div class="blood-clarification"><strong>Пояснение:</strong> игнорировать КД можно только ради качественных тренировок или особых заданий.</div>

                        <div class="blood-rule"><p><strong>2)</strong> Демон, находящийся выше в иерархии, не может насильно отменить строй, если приоритет мероприятия ниже, чем тот, что проводится в данный момент.</p></div>
                        <div class="blood-clarification"><strong>Пояснение:</strong> если демон собрал на ивент, луна не может отменить строй ради тренировки. Приоритет мероприятий: захват → лекция → тренировка → особое задание.</div>

                        <div class="blood-rule"><p><strong>3)</strong> Луны и кровавая элита могут забирать своих демонов для отрядной деятельности только с захватов и лекций. В мероприятиях с приоритетом выше — только с одобрения проводящего. Злоупотребление этим правом будет караться.</p></div>
                        <div class="blood-note"><strong>Примечание:</strong> запрещено врать об отрядной деятельности.</div>

                        <div class="blood-rule"><p><strong>4)</strong> Запрещены однотипные, плохо разработанные тренировки.</p></div>
                        <div class="blood-clarification"><strong>Пояснение:</strong> собрать демонов прыгать по паркуру, биться в додзё по очереди без какого-либо разнообразия. К однотипному также относится ситуация, когда луна/уполномоченный демон постоянно проводит одну и ту же тренировку.</div>

                        <div class="blood-rule"><p><strong>5)</strong> Запрещено покидать мероприятия без веской причины.</p></div>

                        <div class="blood-rule"><p><strong>6)</strong> На тренировке все участники должны слушаться проводящего.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> некорректные приказы.</div>

                        <div class="blood-rule"><p><strong>7)</strong> В строю запрещено проявлять любую самовольность: разговаривать без разрешения, использовать эмоции, выходить из строя.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> приказ собирающего строй / Высшей луны / Прародителя.</div>

                        <div class="blood-rule"><p><strong>8)</strong> Во время строя падать ниц нужно только при виде Прародителя. Высших лун и ниже нужно приветствовать только по приказу организатора строя.</p></div>

                        <div class="blood-rule"><p><strong>9)</strong> Строиться нужно по определённым правилам:</p></div>
                        <div class="blood-mini-grid">
                            <div class="blood-mini-card">
                                <strong>Основной строй</strong>
                                <span>Всегда по центру.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Если собирает Высшая Луна</strong>
                                <span>Низшие луны должны построиться слева от неё, Высшие луны — в произвольном порядке.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Если собирает Прародитель</strong>
                                <span>Высшие луны стоят справа от Прародителя, Низшие луны — слева.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="blood-section" id="blood-punishments">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-gavel"></i>Типы наказаний</h3>
                        <div class="blood-section-badge">Интерактивный блок</div>
                    </div>

                    <div class="punishment-tabs" id="punishmentTabs"></div>
                    <div class="punishment-pane" id="punishmentPane"></div>

                    <div class="section-title" style="margin-top:24px;">Правила выдачи наказаний</div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>1)</strong> Мера наказания выбирается самим наказывающим по мере нарушения.</p></div>
                        <div class="blood-rule"><p><strong>2)</strong> Запрещено выдавать больше одного выговора за одну ситуацию, даже если было несколько нарушений.</p></div>
                        <div class="blood-rule"><p><strong>3)</strong> Запрещено выдавать излишне строгое наказание.</p></div>
                        <div class="blood-rule"><p><strong>4)</strong> Наличие выговоров накладывает определённые санкции.</p></div>

                        <div class="blood-mini-grid">
                            <div class="blood-mini-card">
                                <strong>1 / 3</strong>
                                <span>Запрет на перевод и повышение ранга.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>2 / 3</strong>
                                <span>Любой уполномоченный демон может отказать вам в участии в мероприятии.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>3 / 3</strong>
                                <span>РПК персонажа, ЧС фракции либо удаление персонажа по решению Прародителя.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="blood-section" id="blood-respect">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-award"></i>Почтения</h3>
                        <div class="blood-section-badge">Награды за заслуги</div>
                    </div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>Почтения</strong> — награда, которая даёт возможность пропустить пункт или пункты повышения. Всего есть четыре степени почтений.</p></div>

                        <div class="blood-mini-grid">
                            <div class="blood-mini-card">
                                <strong>Первая степень почтения</strong>
                                <span>Позволяет пропустить один пункт повышения.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Вторая степень почтения</strong>
                                <span>Позволяет пропустить два пункта повышения.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Третья степень почтения</strong>
                                <span>Позволяет пропустить три пункта повышения.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Кровавая Печать</strong>
                                <span>Позволяет повыситься вне ограничений при соблюдении правила «1 повышение — 1 день».</span>
                            </div>
                        </div>

                        <div class="blood-note"><strong>Почтения могут выдавать:</strong> Прародитель | 12 лун | Кровавая элита | Отряд полумесяцев | Константы.</div>

                        <div class="blood-rule"><p><strong>Почтения можно получить за:</strong></p></div>
                        <div class="blood-mini-grid">
                            <div class="blood-mini-card"><strong>1</strong><span>Выполнение заданий, которые дают демоны 12 лун в специальном канале.</span></div>
                            <div class="blood-mini-card"><strong>2</strong><span>Хорошо проявив себя на тренировке.</span></div>
                            <div class="blood-mini-card"><strong>3</strong><span>Победу в различных соревновательных мероприятиях.</span></div>
                            <div class="blood-mini-card"><strong>4</strong><span>Выполнение заданий от демонов 12 лун.</span></div>
                        </div>

                        <div class="blood-note"><strong>Примечание:</strong> Демонам 12 лун / Кровавой Элите запрещено выдавать в качестве награды почтения за задания, не требующие особых усилий. Почтения за задания могут выдавать лишь луны, владельцы отряда и Прародитель.</div>
                    </div>
                </section>

                <section class="blood-section" id="blood-transfer">
                    <div class="blood-section-head">
                        <h3 class="blood-section-title"><i class="fas fa-right-left"></i>Правила переводов</h3>
                        <div class="blood-section-badge">Переход между отрядами</div>
                    </div>
                    <div class="blood-text-list">
                        <div class="blood-rule"><p><strong>Перевод</strong> — возможность демона перейти от одного отряда к другому.</p></div>

                        <div class="blood-mini-grid">
                            <div class="blood-mini-card">
                                <strong>Основание 1</strong>
                                <span>Одобрение двух глав/замов отряда.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Основание 2</strong>
                                <span>Отсутствие ЧС в отряде, в которое осуществляется перевод.</span>
                            </div>
                            <div class="blood-mini-card">
                                <strong>Основание 3</strong>
                                <span>Прохождение испытательного срока в отряде.</span>
                            </div>
                        </div>
                        <div class="blood-note"><strong>Примечание:</strong> в случае отсутствия глав/замов перевод может одобрять CMD / D.CMD.</div>

                        <div class="section-title" style="margin-top:20px;">Правила переводов</div>

                        <div class="blood-rule"><p><strong>1)</strong> После перевода на человека накладывается КД в течение недели.</p></div>
                        <div class="blood-note"><strong>Примечание:</strong> Демоны 12 лун на второй профессии могут перевестись дважды, прежде чем получить КД.</div>
                        <div class="blood-exception"><strong>Наказание:</strong> ЧС переводов на 2 недели.</div>

                        <div class="blood-rule"><p><strong>2)</strong> Запрещено выдавать роли отряда без одобрения перевода с двух сторон.</p></div>
                        <div class="blood-exception"><strong>Наказание:</strong> откат перевода + выговор.</div>

                        <div class="blood-rule"><p><strong>3)</strong> Перевод разрешён лишь с ранга Кейкон.</p></div>
                        <div class="blood-exception"><strong>Наказание:</strong> ЧС переводов на неделю + откат перевода.</div>

                        <div class="blood-rule"><p><strong>4)</strong> Запрещено переводиться 2+ раз за месяц.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> Демонам 12 лун разрешается перевестись трижды, прежде чем получить ЧС.</div>
                        <div class="blood-exception"><strong>Наказание:</strong> ЧС переводов на месяц.</div>

                        <div class="blood-rule"><p><strong>5)</strong> Запрещено переводить человека в отряд в случае действия КД.</p></div>
                        <div class="blood-exception"><strong>Исключение:</strong> одобрение Прародителя.</div>
                        <div class="blood-exception"><strong>Наказание:</strong> ЧС переводов на неделю + откат перевода.</div>
                    </div>
                </section>
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


    const punishmentDetails = {
        'Физическое наказание': {
            icon: 'fas fa-dumbbell',
            description: 'Наказание, применяемое к незначительно провинившимся участникам организации. Выражается в физических упражнениях (отжимания, бег и т.д.) или в трудовой деятельности (уборка, починка, ремонт и т.д.).',
            issuers: [
                'Демоны от четвёртого предела',
                'D.CMD отрядов',
                'CMD отрядов',
                'Константы',
                'Кровавая элита',
                'Лунный аколит — D.CMD Полумесяцев',
                'CMD Полумесяцев'
            ]
        },
        'Предупреждение': {
            icon: 'fas fa-triangle-exclamation',
            description: 'Дисциплинарное взыскание, применяемое к участникам организации, нарушившим правила организации в незначительной степени. Используется при спорных ситуациях, а также при первых нарушениях, совершённых ввиду неопытности члена организации, и работает как последнее предупреждение перед полноценным выговором. Два предупреждения равняются одному выговору.',
            issuers: [
                'Демоны от четвёртого предела',
                'CMD отрядов',
                'Константы',
                'Кровавая элита',
                'Лунный аколит — D.CMD Полумесяцев',
                'CMD Полумесяцев'
            ]
        },
        'Выговор': {
            icon: 'fas fa-file-signature',
            description: 'Дисциплинарное взыскание, применяемое к участникам организации, нарушившим устав крови. Выговор является письменной мерой наказания. Всего член организации может получить до 3 выговоров; после получения третьего — исключается из организации.',
            issuers: [
                'Константы',
                'Кровавая элита',
                'Лунный аколит — D.CMD Полумесяцев',
                'CMD Полумесяцев'
            ]
        },
        'Строгий выговор': {
            icon: 'fas fa-skull',
            description: 'Дисциплинарное взыскание, применяемое к участникам организации, нарушившим устав крови, что невозможно отработать обычным способом. Может быть снят через долгий срок только с одобрением главы фракции.',
            issuers: [
                'CMD Полумесяцев'
            ]
        }
    };


    const territoryRules = {
        natagumo: '<h3 style="font-family:var(--font-display);">Гора Натагумо</h3><ul class="rule-list"><li><span class="rule-number">1</span> Не перечить Младшему Брату</li><li><span class="rule-number">2</span> Не трогать ловушки</li><li><span class="rule-number">3</span> Покинуть за 10 сек</li></ul>',
        otrek: '<h3 style="font-family:var(--font-display);">Дом Отрёкшихся</h3><ul class="rule-list"><li><span class="rule-number">1</span> Не перечить членам отряда</li><li><span class="rule-number">2</span> Своя иерархия</li></ul>',
        douma: '<h3 style="font-family:var(--font-display);">Храм Доумы</h3><ul class="rule-list"><li><span class="rule-number">1</span> Приветствует ищущих</li><li><span class="rule-number">2</span> Без маскировки запрещено</li><li><span class="rule-number">3</span> Подчиняться слову</li></ul>'
    };


    function initBloodSection() {
        const navButtons = document.querySelectorAll('#bloodSectionsNav .blood-nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = document.getElementById(btn.dataset.target);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        const punishmentTabs = document.getElementById('punishmentTabs');
        const punishmentPane = document.getElementById('punishmentPane');

        if (punishmentTabs && punishmentPane) {
            const entries = Object.entries(punishmentDetails);
            punishmentTabs.innerHTML = '';

            const renderPunishment = (key) => {
                const item = punishmentDetails[key];
                punishmentPane.innerHTML = `
                    <h4><i class="${item.icon}" style="color:var(--accent-primary);margin-right:10px;"></i>${key}</h4>
                    <p>${item.description}</p>
                    <div class="note" style="margin-bottom:12px;">Кто может выдавать:</div>
                    <div class="issuer-list">
                        ${item.issuers.map(name => `<span class="issuer-chip">${name}</span>`).join('')}
                    </div>
                `;
            };

            entries.forEach(([key, value], index) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'punishment-tab';
                btn.innerHTML = `<i class="${value.icon}" style="margin-right:8px;color:var(--accent-primary);"></i>${key}`;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('#punishmentTabs .punishment-tab').forEach(tab => tab.classList.remove('active'));
                    btn.classList.add('active');
                    renderPunishment(key);
                });

                punishmentTabs.appendChild(btn);

                if (index === 0) {
                    btn.classList.add('active');
                    renderPunishment(key);
                }
            });
        }
    }


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

        if (tabId === 'blood') {
            initBloodSection();
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
