
/* =====================================
   DEAR, MY LOVING WIFE
   INTERACTIVE SCRAPBOOK
   COMPLETE SCRIPT.JS
===================================== */

// =====================================
// ELEMENTS
// =====================================

const welcome = document.getElementById("welcome");
const home = document.getElementById("home");
const pageContainer = document.getElementById("page-container");

const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");

const pageContent = document.getElementById("page-content");


// =====================================
// SCREEN NAVIGATION
// =====================================

function showScreen(screen) {

    if (!screen) return;

    document.querySelectorAll(".screen").forEach(section => {
        section.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Welcome button
if (startButton) {
    startButton.addEventListener("click", () => {
        showScreen(home);
    });
}


// Back button
if (backButton) {
    backButton.addEventListener("click", () => {
        showScreen(home);
    });
}


// =====================================
// SCRAPBOOK CONTENT
// =====================================

const reasons = [
    "I love your beautiful heart.",
    "I love the way you make me smile.",
    "I love your little habits.",
    "I love your laugh.",
    "I love how you care for me.",
    "I love talking with you.",
    "I love your personality.",
    "I love your kindness.",
    "I love your silly moments.",
    "I love your presence.",
    "I love how you understand me.",
    "I love your sweetness.",
    "I love making memories with you.",
    "I love your determination.",
    "I love the comfort you bring.",
    "I love being able to be myself with you.",
    "I love every little thing about you.",
    "Most of all, I love you because you're you."
];


const wishes = [
    "May your 18th birthday be filled with happiness.",
    "May you always find reasons to smile.",
    "May your dreams slowly become reality.",
    "May you receive the love you deserve.",
    "May you always be surrounded by good people.",
    "May you have courage in every challenge.",
    "May your heart always find peace.",
    "May you discover beautiful opportunities.",
    "May you never lose your kindness.",
    "May your days be filled with laughter.",
    "May you achieve your goals.",
    "May you always believe in yourself.",
    "May you experience wonderful adventures.",
    "May you always feel appreciated.",
    "May you have strength during difficult days.",
    "May you continue growing into your best self.",
    "May this new chapter bring beautiful memories.",
    "And may you always remember how loved you are."
];


// =====================================
// PHOTO COLLECTION
// =====================================

const photos = [
    {
        image: "photo1.jpg",
        caption: "Our precious eyes ♡"
    },
    {
        image: "photo2.jpg",
        caption: "Our cute moment 🌷"
    },
    {
        image: "photo3.jpg",
        caption: "My favorite lablab ♡"
    },
    {
        image: "photo4.jpg",
        caption: "A moment to remember ♡"
    },
    {
        image: "photo5.jpg",
        caption: "Our first anniversary 💗"
    },
    {
        image: "photo6.jpg",
        caption: "Forever a favorite ♡"
    }
];


// =====================================
// OPEN WHEN LETTERS
// =====================================

const letters = [
    {
        title: "Open when you're sad",
        message: "My love, if you're reading this because you're feeling sad, I want you to know that it's okay not to be okay sometimes. You don't always have to be strong, and you don't have to pretend that everything is fine when it isn't. I wish I could take away whatever is making your heart heavy, but since I can't always be there beside you, I hope these words can bring you a little comfort. Please don't be too hard on yourself. Whatever you're going through right now, remember that this feeling won't last forever. You deserve all the love, patience, and happiness in this world. I hope you never forget how precious you are to me. Take your time, my love. Better days will come, and I'll always be cheering for you."
    },
    {
        title: "Open when you miss me",
        message: "Awww, missing me already, my love? HAHAHA. I know we're lucky enough to live in the same barangay and see each other quite often, but I guess there are still moments when we wish we could spend a little more time together. Maybe you miss our random conversations, our little moments, the way we laugh together, or simply having me around. I hope you know that I treasure every time we get to see each other, even if it's just for a little while. Sometimes, the simplest moments with you become the ones I remember the most. I also miss you whenever we're not together, especially when something happens and you're the first person I want to tell about it. I always look forward to the next time we'll see each other, even if it's just another ordinary day. I hope we never get tired of making little memories together. Until I get to see you again, remember that you're always someone I look forward to spending time with. I love you, my love!"
    },
    {
        title: "Open when you can't sleep",
        message: "Hello, my love. Still awake? I hope you're not overthinking too much tonight. I know there are times when your mind just won't stop thinking about everything, but I hope you can give yourself permission to rest. You don't need to solve every problem tonight, and you don't need to figure out everything before tomorrow comes. Take a deep breath, get comfortable, and let yourself relax. I wish I could be there to remind you to close your eyes and get some proper rest. For now, just remember that you've done enough for today. I'm so proud of you for making it through another day. Sleep peacefully, my love. May your dreams be sweet, and may tomorrow be kinder to you. Good night!"
    },
    {
        title: "Open when you're happy",
        message: "If you're reading this while you're happy, then I hope you know how happy that makes me too! I hope whatever happened today gave you a reason to smile and made your heart feel a little lighter. You deserve moments like this, my babyy. You deserve to experience beautiful things, achieve your dreams, and enjoy every little blessing that comes your way. I hope you never feel guilty for being happy or think that you have to wait for a special occasion to enjoy life. Celebrate even the smallest victories because every little thing matters. I wish I could see your smile right now and celebrate with you. Keep that happiness close to your heart, my love. I hope life gives you countless more reasons to smile."
    },
    {
        title: "Open when you doubt yourself",
        message: "My love, I hope you never allow your doubts to make you forget how amazing you are. I know there will be moments when you question yourself, your abilities, and whether you're doing enough. But please remember that you don't have to be perfect to be someone worth being proud of. You are allowed to make mistakes, learn from them, and try again. Don't compare your journey with anyone else's because you have your own pace and your own path. I wish you could see yourself the way the people who genuinely appreciate you do. There's so much more to you than the things you sometimes doubt. Believe in yourself, even when things get difficult. I'll always be proud of you, not only for what you achieve but also for the person you are."
    },
    {
        title: "Open when you need encouragement",
        message: "Hey, my love. I just want to remind you that you are capable of doing wonderful things. I know life won't always be easy, and there will be times when you'll feel tired of trying. But please don't give up on the things you've been working so hard for. Look at how far you've already come. Every little effort, every lesson, and every challenge has helped you grow into the person you are today. You don't have to accomplish everything immediately. Take things one day at a time, and allow yourself to learn along the way. I'm always rooting for you, even in the smallest things. I hope you continue chasing your dreams and believing that good things are waiting for you. You can do this, Rose. I believe in you so much."
    },
    {
        title: "Open when you're stressed",
        message: "My love, I know things can get overwhelming sometimes, especially when you have so many things to think about and responsibilities to handle. But please remember that you don't have to carry everything all at once. It's okay to pause, breathe, and give yourself a little break. You are a person too, and you deserve rest just as much as you deserve success. Don't pressure yourself to figure everything out immediately. Take one step at a time, and focus on what you can do today. Whatever feels difficult right now, I hope you remember that you are stronger and more capable than you think. I wish I could make things easier for you, but I hope my words remind you that you don't have to be so hard on yourself. I'm proud of you, always."
    },
    {
        title: "Open when you feel lonely",
        message: "Hi, my love. If you're feeling lonely right now, I hope these words remind you that you are never someone who is forgotten or unappreciated. I know there are moments when you just want someone to talk to, someone who will listen, or someone who will understand you without having to explain everything. I hope you never feel like you have to hide your feelings or pretend you're okay just to make things easier for everyone else. You deserve to feel heard, valued, and loved. Even when I can't be physically beside you right now, please know that you matter so much. I'm grateful that life allowed our paths to cross, and having you in my life is something I'll never take for granted. You are important, my baby, more than you probably realize."
    },
    {
        title: "Open when you're angry",
        message: "My love, before anything else, take a moment for yourself. Whatever happened, whatever made you feel this way, I hope you give yourself time to understand your emotions. You don't have to force yourself to feel okay immediately, and you don't have to pretend that nothing bothers you. Your feelings are valid, and you deserve to be heard and understood. Just remember to be gentle with yourself while you're figuring things out. Not every problem needs to be solved in one moment. Sometimes, all we need is a little time and space to think clearly. I hope your heart finds peace soon, and I hope you never forget that you deserve patience, respect, and understanding. I'm always wishing for your happiness, my love."
    },
    {
        title: "Open when you need a smile",
        message: "SURPRISE! Here's your little reminder that you're stuck with someone who appreciates you so much. HAHAHA. But seriously, my love, I hope this letter gives you even the tiniest reason to smile today. I don't know what you're doing right now or what kind of day you're having, but I hope something good happens to you after reading this. You know, sometimes I think about how lucky I am that I got to know you. Out of all the people I could have met, somehow I got to meet you, and that's something I'll always be thankful for. Thank you for being you, for the little moments, the random conversations, and all the memories we've shared. Now please smile a little. You deserve a happy day!"
    },
    {
        title: "Open when you're having a bad day",
        message: "Hey, my babyy. I know today might not be going the way you wanted it to, and maybe everything feels a little heavier than usual. But I hope you remember that one bad day doesn't mean you have a bad life. Not everything will always go according to plan, and sometimes things happen that are beyond our control. Please don't let one difficult moment make you forget all the beautiful things that are still waiting for you. Give yourself time to rest and recover from whatever today has brought. You don't have to force a smile or pretend to be happy. Just take things slowly. Tomorrow is another opportunity to try again, and I hope it brings you better things. No matter how today went, I'm still proud of you. You made it through, and that's something worth appreciating."
    },
    {
        title: "Open when you want to feel loved",
        message: "My dearest Rose, if there's one thing I want you to remember whenever you open this letter, it's how much you mean to me. I may not always find the perfect words to express everything I feel, but I hope my actions and the little things I do remind you how special you are to me. Thank you for coming into my life and becoming someone I get to share memories, laughter, and countless little moments with. I appreciate your presence, your kindness, your personality, and even the little things you probably don't notice about yourself. I hope you never question whether you deserve love because you absolutely do. Happy 18th birthday again, my love! As you enter another chapter of your life, I hope you receive all the happiness your heart can hold. I want to see you grow, reach your dreams, and experience everything beautiful life has to offer. And I hope I get to be part of many more chapters of your story. I love you, my baby. Always remember that."
    }
];


// =====================================
// PAGE TEMPLATE
// =====================================

function createPage(title, subtitle, content) {

    pageContent.innerHTML = `
        <div class="scrapbook-page">

            <div class="page-flower">🌷</div>

            <p class="small-title">
                A LITTLE PAGE FOR YOU
            </p>

            <h1 class="page-title">
                ${title}
            </h1>

            <p class="page-subtitle">
                ${subtitle}
            </p>

            <div class="page-divider">♡ ── ✿ ── ♡</div>

            <div class="page-body">
                ${content}
            </div>

        </div>
    `;

    showScreen(pageContainer);
}


// =====================================
// OUR STORY
// =====================================

const storyChapters = [
    {
        title: "Where It All Began",
        text: "We first met during our SHS kick-off event in June 2025, during the first week of school. We were part of the same strand, but we barely talked. At that time, I never expected that someone I had just met would eventually become such an important part of my life."
    },
    {
        title: "Getting to Know You",
        text: "In July 2025, after the kick-off, I started approaching your group of friends, and that's when we became closer. Little by little, I got to know you. I noticed how quiet and kind you were, and without even realizing it, I was starting to look forward to seeing you."
    },
    {
        title: "When I Started Falling",
        text: "As time passed, my feelings slowly grew. It was the little things about you that made you special to me. I found myself appreciating your presence and enjoying even the simplest moments we shared."
    },
    {
        title: "Our Little Moments",
        text: "Every conversation, every laugh, and every memory we made became a little part of our story. They may seem like ordinary moments to others, but they became memories I will always treasure."
    },
    {
        title: "Where We Are Now",
        text: "Here we are, still creating memories and writing our own story. I may not know everything that the future holds, but I am grateful for every chapter that has brought us here. And I hope we get to make many more beautiful memories together."
    }
];



function showStory() {

    const content = `
        <div class="page-heading">
            <p class="small-title">A STORY WRITTEN BY FATE ♡</p>
            <h1>Our Little Story</h1>
            <p>Every little chapter brought me closer to you.</p>
        </div>

        <div class="story-chapters">

            ${storyChapters.map((chapter, index) => `
                <div class="story-chapter"
                     role="button"
                     tabindex="0"
                     onclick="openStoryChapter(${index})"
                     onkeydown="if(event.key === 'Enter' || event.key === ' '){event.preventDefault();openStoryChapter(${index});}">

                    <span class="chapter-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                        <h2>${chapter.title}</h2>
                        <p>${[
                            "Every beautiful story has a beginning...",
                            "When a simple friendship started becoming special...",
                            "Somehow, you became someone I looked forward to...",
                            "The memories that made us, us...",
                            "And the story we continue to write..."
                        ][index]}</p>
                    </div>

                    <span class="chapter-arrow">♡</span>

                </div>
            `).join("")}

        </div>
    `;

    createPage(
        "Our Little Story",
        "Every little chapter brought me closer to you.",
        content
    );
}


function openStoryChapter(index) {

    const chapter = storyChapters[index];

    if (!chapter) return;

    const content = `
        <div class="story-detail">

            <p class="small-title">
                OUR LITTLE STORY ♡
            </p>

            <h1>${chapter.title}</h1>

            <div class="story-detail-paper">
                <p>${chapter.text}</p>
            </div>

            <button class="back-to-chapters"
                    onclick="showStory()"
                    type="button">
                ← Back to Our Little Story
            </button>

        </div>
    `;

    createPage(
        chapter.title,
        "A little chapter of our story.",
        content
    );
}


// =====================================
// OUR MEMORIES - PHOTO GALLERY
// =====================================

function showMemories() {

    const content = `
        <p class="memory-intro">
            A little space for the moments I never want to forget.
        </p>

        <div class="photo-grid">

            ${photos.map((photo, index) => `
                <button
                    class="memory-photo"
                    onclick="openPhoto(${index})"
                    type="button"
                >
                    <img
                        src="images/${photo.image}"
                        alt="${photo.caption}"
                    >

                    <span>${photo.caption}</span>
                </button>
            `).join("")}

        </div>

        <p class="memory-note">
            More beautiful memories will fill these pages. ♡
        </p>

        <div id="photoLightbox" class="photo-lightbox">

            <button
                class="lightbox-close"
                onclick="closePhoto()"
                type="button"
                aria-label="Close photo"
            >
                ×
            </button>

            <img id="lightboxImage" src="" alt="Our memory">

            <p id="lightboxCaption"></p>

        </div>
    `;

    createPage(
        "Our Memories",
        "Little moments, endless memories.",
        content
    );
}


// =====================================
// PHOTO ENLARGEMENT
// =====================================

function openPhoto(index) {

    const photo = photos[index];

    if (!photo) return;

    const lightbox = document.getElementById("photoLightbox");

    if (!lightbox) return;

    document.getElementById("lightboxImage").src =
        `images/${photo.image}`;

    document.getElementById("lightboxCaption").textContent =
        photo.caption;

    lightbox.classList.add("visible");
}


function closePhoto() {

    const lightbox = document.getElementById("photoLightbox");

    if (lightbox) {
        lightbox.classList.remove("visible");
    }
}


// =====================================
// 18 REASONS
// =====================================

function showReasons() {

    const content = `
        <p class="memory-intro">
            Click each little card to reveal a reason.
        </p>

        <div class="reason-grid">

            ${reasons.map((reason, index) => `
                <button
                    class="reason-card"
                    onclick="revealCard(this)"
                    type="button"
                >
                    <span class="reason-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="reason-front">
                        Tap to open ♡
                    </span>

                    <span class="reason-back">
                        ${reason}
                    </span>
                </button>
            `).join("")}

        </div>
    `;

    createPage(
        "18 Reasons Why I Love You",
        "Eighteen little reminders of how special you are.",
        content
    );
}


function revealCard(card) {
    card.classList.toggle("revealed");
}


// =====================================
// 18 BIRTHDAY WISHES
// =====================================

function showWishes() {

    const content = `
        <p class="memory-intro">
            Eighteen wishes for your eighteenth birthday.
        </p>

        <div class="wish-list">

            ${wishes.map((wish, index) => `
                <div class="wish-card">

                    <span>
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <p>${wish}</p>

                    <span>♡</span>

                </div>
            `).join("")}

        </div>
    `;

    createPage(
        "18 Birthday Wishes",
        "May this new chapter be as beautiful as you are.",
        content
    );
}


// =====================================
// OPEN WHEN LETTERS
// =====================================

function showLetters() {

    const content = `
        <p class="memory-intro">
            Choose an envelope. There's a little message waiting inside.
        </p>

        <div class="letter-grid">

            ${letters.map((letter, index) => `
                <button
                    class="letter-card"
                    onclick="openLetter(${index})"
                    type="button"
                >
                    <span class="letter-icon">💌</span>

                    <span>${letter.title}</span>

                    <small>Click to open</small>
                </button>
            `).join("")}

        </div>

        <div id="letter-display" class="letter-display"></div>
    `;

    createPage(
        "Open When...",
        "Letters for every little moment.",
        content
    );
}


// Open individual letter
function openLetter(index) {

    const letter = letters[index];

    const display = document.getElementById("letter-display");

    if (!letter || !display) return;

    display.innerHTML = `
        <div class="opened-letter">

            <span>💌</span>

            <h3>${letter.title}</h3>

            <p>${letter.message}</p>

            <small>With love, always ♡</small>

        </div>
    `;

    display.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// =====================================
// BIRTHDAY LETTER
// =====================================

function showBirthdayLetter() {

    const content = `
        <div class="birthday-letter">

            <span class="letter-decoration">💗</span>

            <h2>To my Rose,</h2>

            <p>
                I just want you to know how thankful I am to have you in my life.
                Sometimes, I may not be able to express everything I feel, but I
                hope you know how much you mean to me. You have become such a
                special part of my everyday life, and I wouldn't trade the moments
                we share for anything.
            </p>

            <p>
                From the little conversations we have to the random things we do
                together, I appreciate every single moment. Even the simplest days
                become memorable because you're there. I love how we can laugh
                about silly things, share stories, and enjoy each other's company.
                I may not say it all the time, but being with you is one of the
                things that makes me happy.
            </p>

            <p>
                I know that we won't always have perfect days. There may be times
                when we misunderstand each other, disagree, or struggle to find
                the right words. But I want you to know that I am willing to
                understand you, listen to you, and learn with you. I don't expect
                us to be perfect. I just want us to keep choosing to understand
                and appreciate each other.
            </p>

            <p>
                Thank you for being you, my baby. Thank you for your patience,
                kindness, and all the little things you do that might seem
                ordinary to you but mean so much to me. I hope I also make you
                feel loved, appreciated, and valued because you deserve all of that.
            </p>

            <p>
                As we continue making memories together, I hope we never lose the
                happiness we find in the simplest things. I want to experience
                more birthdays, random conversations, little adventures, and
                ordinary days with you. Daghan pa ta ug memories nga buhaton
                together, and I look forward to every single one of them.
            </p>

            <p>
                Happy birthday, my love. I hope this new chapter of your life
                brings you more reasons to smile, more opportunities to grow,
                and all the happiness your heart deserves. Always remember that
                you are loved and appreciated.
            </p>

            <p>
                I love you so much, palablab nako. More than words can fully explain.
            </p>

            <h3>
                Always yours,<br>
                Loren ♡
            </h3>

        </div>
    `;

    createPage(
        "A Letter for You",
        "A little message from the heart.",
        content
    );
}


// =====================================
// BIRTHDAY SURPRISE
// =====================================

function showSurprise() {

    const content = `
        <div class="surprise-content">

            <p class="surprise-intro">
                I saved one last little surprise for you.
            </p>

            <div id="giftBox" class="gift-box">
                <span>🎁</span>
            </div>

            <p class="gift-instruction">
                A little gift, made especially for you. ♡
            </p>

            <button
                class="primary-button"
                id="openGiftButton"
                type="button"
            >
                Open your surprise ♡
            </button>

            <div id="giftReveal" class="gift-reveal">

                <div class="surprise-effects">
                    <span>✨</span>
                    <span>💜</span>
                    <span>♡</span>
                    <span>✨</span>
                    <span>🎀</span>
                </div>

                <p class="small-title">
                    A BOUQUET FOR MY FAVORITE PERSON
                </p>

                <div class="purple-tulip-bouquet">

                    <svg viewBox="0 0 300 240"
                         xmlns="http://www.w3.org/2000/svg"
                         role="img"
                         aria-label="A bouquet of purple tulips">

                        <!-- Leaves -->
                        <path d="M145 205 Q90 155 105 105 Q145 135 145 205"
                              fill="#779b75"/>

                        <path d="M150 205 Q205 150 195 105 Q155 140 150 205"
                              fill="#91b88b"/>

                        <path d="M145 205 Q70 185 75 145 Q120 150 145 205"
                              fill="#668f6a"/>

                        <path d="M155 205 Q230 185 225 145 Q180 150 155 205"
                              fill="#82a77c"/>

                        <!-- Stems -->
                        <g stroke="#628b68" stroke-width="5"
                           stroke-linecap="round" fill="none">
                            <path d="M150 210 Q125 130 75 55"/>
                            <path d="M150 210 Q135 115 125 35"/>
                            <path d="M150 210 Q150 110 150 25"/>
                            <path d="M150 210 Q170 115 180 35"/>
                            <path d="M150 210 Q190 130 225 55"/>
                        </g>

                        <!-- Tulip 1 -->
                        <path d="M75 57
                                 Q52 25 65 10
                                 Q76 22 78 34
                                 Q90 3 103 15
                                 Q108 34 75 57Z"
                              fill="#9b6bd1"/>

                        <!-- Tulip 2 -->
                        <path d="M125 38
                                 Q101 8 115 0
                                 Q127 9 128 19
                                 Q145 -2 153 10
                                 Q158 27 125 38Z"
                              fill="#b28ae3"/>

                        <!-- Tulip 3 -->
                        <path d="M150 28
                                 Q127 0 142 -9
                                 Q153 2 154 11
                                 Q172 -9 180 5
                                 Q184 20 150 28Z"
                              fill="#8b5cc0"/>

                        <!-- Tulip 4 -->
                        <path d="M180 38
                                 Q160 7 176 0
                                 Q187 10 186 20
                                 Q204 0 213 14
                                 Q217 29 180 38Z"
                              fill="#a77bd6"/>

                        <!-- Tulip 5 -->
                        <path d="M225 57
                                 Q202 25 216 10
                                 Q228 22 228 34
                                 Q244 3 256 15
                                 Q260 34 225 57Z"
                              fill="#9b6bd1"/>

                        <!-- Bouquet wrap -->
                        <path d="M95 145 L205 145 L180 225
                                 Q150 240 120 225Z"
                              fill="#e8d5f5"/>

                        <path d="M95 145 Q150 165 205 145"
                              fill="none"
                              stroke="#c6a4df"
                              stroke-width="3"/>

                        <!-- Ribbon -->
                        <path d="M140 185 Q115 165 105 190
                                 Q125 205 145 195Z"
                              fill="#9b6bd1"/>

                        <path d="M160 185 Q185 165 195 190
                                 Q175 205 155 195Z"
                              fill="#9b6bd1"/>

                        <path d="M145 185 Q150 170 155 185
                                 Q150 202 145 185Z"
                              fill="#8150b3"/>

                    </svg>

                </div>

                <h2 class="surprise-heading">
                    For you, my Rose. 💜
                </h2>

                <p class="tulip-message">
                    If I could give you a garden full of flowers,
                    I would make sure every single one reminded
                    you of how special you are to me.
                </p>

                <div class="surprise-divider">
                    ♡ ── ✿ ── ♡
                </div>

                <div class="final-message">

                    <p class="small-title">
                        ONE LAST THING...
                    </p>

                    <h1>
                        Happy 18th Birthday!
                    </h1>

                    <p>
                        Happy 18th birthday, my Rose.
                        I love you so much, babyyy ko ganda!
                    </p>

                    <p>
                        Thank you for being part of my life.
                        I hope this little world I made for you
                        reminds you how much you mean to me.
                    </p>

                    <p>
                        Here's to more memories, more laughter,
                        and more beautiful chapters together.
                    </p>

                    <h3>
                        Always yours,<br>
                        Loren ♡
                    </h3>

                </div>

                <div class="final-photos">

                    <p class="small-title">
                        OUR LITTLE WORLD ♡
                    </p>

                    <div class="photo-grid">

                        ${photos.map(photo => `
                            <div class="memory-photo">
                                <img
                                    src="images/${photo.image}"
                                    alt="${photo.caption}"
                                >
                                <span>${photo.caption}</span>
                            </div>
                        `).join("")}

                    </div>

                    <p class="final-ending">
                        This is not the end of our story.
                        It's just another beautiful chapter. ♡
                    </p>

                </div>

                <div class="firework-decoration">
                    ✨ 💜 ✨ 💜 ✨
                </div>

            </div>

        </div>
    `;

    createPage(
        "Your Final Surprise",
        "One last little gift for your special day.",
        content
    );

    const giftBox = document.getElementById("giftBox");
    const openButton = document.getElementById("openGiftButton");
    const giftReveal = document.getElementById("giftReveal");

    if (!giftBox || !openButton || !giftReveal) return;

    giftReveal.style.display = "none";

    openButton.addEventListener("click", () => {

        if (giftBox.classList.contains("gift-opened")) return;

        giftBox.classList.add("gift-opened");

        openButton.style.display = "none";

        giftReveal.style.display = "block";

        giftReveal.classList.add("visible");

        giftReveal.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


// =====================================
// PAGE ROUTER
// =====================================

const pageRoutes = {
    story: showStory,
    memories: showMemories,
    love: showReasons,
    wishes: showWishes,
    openwhen: showLetters,
    letter: showBirthdayLetter,
    surprise: showSurprise
};


document.querySelectorAll(".menu-card").forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        if (pageRoutes[page]) {
            pageRoutes[page]();
        }

    });

});


// =====================================
// BIRTHDAY PLAYLIST
// =====================================

const playlist = [
    {
        title: "Just The Way You Are",
        src: "music/Just The Way You Are.mp3"
    },
    {
        title: "Shape Of My Heart",
        src: "music/Shape Of My Heart.mp3"
    },
    {
        title: "Those Eyes",
        src: "music/Those Eyes.mp3"
    }
];


const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const previousMusic = document.getElementById("previousMusic");
const nextMusic = document.getElementById("nextMusic");
const musicTitle = document.getElementById("musicTitle");

let currentSong = 0;


// =====================================
// LOAD SELECTED SONG
// =====================================

function loadSong(index) {

    if (!backgroundMusic || playlist.length === 0) return;

    currentSong = (index + playlist.length) % playlist.length;

    backgroundMusic.src = playlist[currentSong].src;

    if (musicTitle) {
        musicTitle.textContent = playlist[currentSong].title;
    }

}


// =====================================
// PLAY CURRENT SONG
// =====================================

async function playSong() {

    if (!backgroundMusic || !musicToggle) return;

    try {

        await backgroundMusic.play();

        musicToggle.textContent = "Ⅱ";

        musicToggle.setAttribute("aria-label", "Pause music");

    } catch (error) {

        console.log("Unable to play music:", error);

        pauseSong();

    }

}


// =====================================
// PAUSE CURRENT SONG
// =====================================

function pauseSong() {

    if (!backgroundMusic || !musicToggle) return;

    backgroundMusic.pause();

    musicToggle.textContent = "▶";

    musicToggle.setAttribute("aria-label", "Play music");

}


// =====================================
// MUSIC CONTROLS
// =====================================

if (musicToggle) {

    musicToggle.addEventListener("click", () => {

        if (!backgroundMusic) return;

        if (backgroundMusic.paused) {
            playSong();
        } else {
            pauseSong();
        }

    });

}


if (nextMusic) {

    nextMusic.addEventListener("click", () => {

        loadSong(currentSong + 1);

        playSong();

    });

}


if (previousMusic) {

    previousMusic.addEventListener("click", () => {

        loadSong(currentSong - 1);

        playSong();

    });

}


// =====================================
// AUTOMATIC NEXT SONG
// =====================================

if (backgroundMusic) {

    backgroundMusic.addEventListener("ended", () => {

        loadSong(currentSong + 1);

        playSong();

    });


    backgroundMusic.addEventListener("play", () => {

        if (musicToggle) {
            musicToggle.textContent = "Ⅱ";

            musicToggle.setAttribute(
                "aria-label",
                "Pause music"
            );
        }

    });


    backgroundMusic.addEventListener("pause", () => {

        if (musicToggle) {
            musicToggle.textContent = "▶";

            musicToggle.setAttribute(
                "aria-label",
                "Play music"
            );
        }

    });

}


// =====================================
// INITIALIZE PLAYLIST
// =====================================

loadSong(0);


// =====================================
// END OF APPLICATION SCRIPT
// =====================================

console.log("Dear, My Loving Wife is ready ♡");

// =====================================
// PWA SERVICE WORKER REGISTRATION
// =====================================

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then((registration) => {
                console.log(
                    "PWA Service Worker registered successfully!",
                    registration
                );
            })
            .catch((error) => {
                console.error(
                    "PWA Service Worker registration failed:",
                    error
                );
            });
    });
}