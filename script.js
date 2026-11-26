
/* =========================================
   DEAR, MY LOVING WIFE
   COMPLETE SCRAPBOOK SCRIPT
========================================= */

const $ = selector => document.querySelector(selector);

const welcome = $("#welcome");
const home = $("#home");
const pageContainer = $("#page-container");
const pageContent = $("#page-content");

const startButton = $("#startButton");
const backButton = $("#backButton");

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", () => showScreen(home));
backButton.addEventListener("click", () => showScreen(home));

/* =========================================
   18 REASONS
========================================= */

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

/* =========================================
   18 WISHES
========================================= */

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

/* =========================================
   OUR MEMORIES
   PHOTOS APPEAR ONLY HERE
========================================= */

const photos = [
    { image: "photo1.jpg", caption: "Our precious eyes ♡" },
    { image: "photo2.jpg", caption: "Our cute moment ♡" },
    { image: "photo3.jpg", caption: "My favorite lablab ♡" },
    { image: "photo4.jpg", caption: "A moment to remember ♡" },
    { image: "photo5.jpg", caption: "Our first anniversary ♡" },
    { image: "photo6.jpg", caption: "Forever a favorite ♡" }
];

/* =========================================
   OUR STORY
========================================= */

const storyChapters = [
    {
        title: "Where It All Began",
        preview: "The day our paths first crossed.",
        text: `We first met during our SHS kick-off event in June 2025, during the first week of school. We were part of the same strand, but we barely talked. At that time, I never expected that someone I had just met would eventually become such an important part of my life. It was just an ordinary beginning, but looking back now, I'm really glad that our paths crossed that day.`
    },
    {
        title: "Getting to Know You",
        preview: "When a simple friendship started becoming special.",
        text: `In July 2025, after the kick-off, I started approaching your group of friends, and that's when we became closer. Little by little, I got to know you. I noticed how quiet and kind you were, and without even realizing it, I was starting to look forward to seeing you. Those little interactions slowly became something I looked forward to, and I'm happy that I got the chance to know you better.`
    },
    {
        title: "When I Started Falling",
        preview: "The little things that made you special to me.",
        text: `As time passed, my feelings slowly grew. It wasn't because of one big moment, but because of the little things about you. The way you talked, your kindness, your personality, and simply having you around made me appreciate you more. I found myself enjoying even the simplest moments we shared. Somewhere along the way, you became someone I genuinely wanted to keep close.`
    },
    {
        title: "Our Little Moments",
        preview: "The memories that made our story ours.",
        text: `Every conversation, every laugh, and every memory we made became a little part of our story. They may seem like ordinary moments to others, but they became memories I will always treasure. I love how even simple days can become special when I get to spend them with you. These are the little things I hope we never forget.`
    },
    {
        title: "Where We Are Now",
        preview: "A story that still has so many pages left.",
        text: `Here we are, still creating memories and writing our own story. I may not know everything that the future holds, but I am grateful for every chapter that has brought us here. I hope we continue learning about each other, supporting each other, and finding happiness in the little things. This is not the end of our story, my love. I hope we get to make many more beautiful memories together.`
    }
];

/* =========================================
   OPEN WHEN LETTERS
========================================= */

const letters = [
    {
        title: "Open when you're sad",
        message: `My loveee, if you're reading this because you're feeling sad, I want you to know that it's okay not to be okay sometimes. You don't always have to be strong, and you don't have to pretend that everything is fine when it isn't.

I wish I could take away whatever is making your heart heavy, but since I can't always be there beside you, I hope these words can bring you a little comfort. Please don't be too hard on yourself. Whatever you're going through right now, remember that this feeling won't last forever.

You deserve all the love, patience, and happiness in this world. I hope you never forget how precious you are to me. Take your time, my babyy. Better days will come, and I'll always be cheering for you.`
    },
    {
        title: "Open when you miss me",
        message: `Awww, missing me already, my love? HAHAHA.

I know we're lucky enough to live in the same barangay and see each other quite often, but I guess there are still moments when we wish we could spend a little more time together. Maybe you miss our random conversations, our little moments, the way we laugh together, or simply having me around.

I hope you know that I treasure every time we get to see each other, even if it's just for a little while. Sometimes, the simplest moments with you become the ones I remember the most.

I also miss you whenever we're not together, especially when something happens and you're the first person I want to tell about it. I always look forward to the next time we'll see each other, even if it's just another ordinary day.

Until I get to see you again, remember that you're always someone I look forward to spending time with. I love you, my lablabbbb!`
    },
    {
        title: "Open when you can't sleep",
        message: `Hello, my babyy. Still awake?

I hope you're not overthinking too much tonight. I know there are times when your mind just won't stop thinking about everything, but I hope you can give yourself permission to rest.

You don't need to solve every problem tonight, and you don't need to figure out everything before tomorrow comes. Take a deep breath, get comfortable, and let yourself relax.

I wish I could be there to remind you to close your eyes and get some proper rest. For now, just remember that you've done enough for today. I'm so proud of you for making it through another day.

Sleep peacefully, my loveee. May your dreams be sweet, and may tomorrow be kinder to you. Good night!`
    },
    {
        title: "Open when you're happy",
        message: `If you're reading this while you're happy, then I hope you know how happy that makes me too!

I hope whatever happened today gave you a reason to smile and made your heart feel a little lighter. You deserve moments like this, my babyy. You deserve to experience beautiful things, achieve your dreams, and enjoy every little blessing that comes your way.

I hope you never feel guilty for being happy or think that you have to wait for a special occasion to enjoy life. Celebrate even the smallest victories because every little thing matters.

I wish I could see your smile right now and celebrate with you. Keep that happiness close to your heart, my loveee. I hope life gives you countless more reasons to smile.`
    },
    {
        title: "Open when you doubt yourself",
        message: `My love, I hope you never allow your doubts to make you forget how amazing you are.

I know there will be moments when you question yourself, your abilities, and whether you're doing enough. But please remember that you don't have to be perfect to be someone worth being proud of. You are allowed to make mistakes, learn from them, and try again.

Don't compare your journey with anyone else's because you have your own pace and your own path. I wish you could see yourself the way the people who genuinely appreciate you do.

There's so much more to you than the things you sometimes doubt. Believe in yourself, even when things get difficult. I'll always be proud of you, my babyy, not only for what you achieve but also for the person you are.`
    },
    {
        title: "Open when you need encouragement",
        message: `Hey, my loveee. I just want to remind you that you are capable of doing wonderful things.

I know life won't always be easy, and there will be times when you'll feel tired of trying. But please don't give up on the things you've been working so hard for. Look at how far you've already come.

Every little effort, every lesson, and every challenge has helped you grow into the person you are today. You don't have to accomplish everything immediately. Take things one day at a time, and allow yourself to learn along the way.

I'm always rooting for you, even in the smallest things. I hope you continue chasing your dreams and believing that good things are waiting for you. You can do this, my babyy. I believe in you so much.`
    },
    {
        title: "Open when you're stressed",
        message: `My love, I know things can get overwhelming sometimes, especially when you have so many things to think about and responsibilities to handle.

But please remember that you don't have to carry everything all at once. It's okay to pause, breathe, and give yourself a little break. You are a person too, and you deserve rest just as much as you deserve success.

Don't pressure yourself to figure everything out immediately. Take one step at a time, and focus on what you can do today.

I wish I could make things easier for you, but I hope my words remind you that you don't have to be so hard on yourself. I'm proud of you, always, my babyy.`
    },
    {
        title: "Open when you feel lonely",
        message: `Hi, my babyy. If you're feeling lonely right now, I hope these words remind you that you are never someone who is forgotten or unappreciated.

I know there are moments when you just want someone to talk to, someone who will listen, or someone who will understand you without having to explain everything.

I hope you never feel like you have to hide your feelings or pretend you're okay just to make things easier for everyone else. You deserve to feel heard, valued, and loved.

Even when I'm not physically beside you right now, please know that you matter so much. I'm grateful that life allowed our paths to cross, and having you in my life is something I'll never take for granted.

You are important, my love, more than you probably realize.`
    },
    {
        title: "Open when you're angry",
        message: `My love, before anything else, take a moment for yourself.

Whatever happened, whatever made you feel this way, I hope you give yourself time to understand your emotions. You don't have to force yourself to feel okay immediately, and you don't have to pretend that nothing bothers you.

Your feelings are valid, and you deserve to be heard and understood. Just remember to be gentle with yourself while you're figuring things out. Not every problem needs to be solved in one moment.

Sometimes, all we need is a little time and space to think clearly. I hope your heart finds peace soon, and I hope you never forget that you deserve patience, respect, and understanding.

I'm always wishing for your happiness, my babyy.`
    },
    {
        title: "Open when you need a smile",
        message: `SURPRISE! Here's your little reminder that you're stuck with someone who appreciates you so much. HAHAHA.

But seriously, my loveee, I hope this letter gives you even the tiniest reason to smile today. I don't know what you're doing right now or what kind of day you're having, but I hope something good happens to you after reading this.

Sometimes I think about how lucky I am that I got to know you. Out of all the people I could have met, somehow I got to meet you, and that's something I'll always be thankful for.

Thank you for being you, for the little moments, the random conversations, and all the memories we've shared.

Now please smile a little, my babyy. You deserve a happy day!`
    },
    {
        title: "Open when you're having a bad day",
        message: `Hey, my babyy. I know today might not be going the way you wanted it to, and maybe everything feels a little heavier than usual.

But I hope you remember that one bad day doesn't mean you have a bad life. Not everything will always go according to plan, and sometimes things happen that are beyond our control.

Please don't let one difficult moment make you forget all the beautiful things that are still waiting for you. Give yourself time to rest and recover from whatever today has brought.

You don't have to force a smile or pretend to be happy. Just take things slowly. Tomorrow is another opportunity to try again, and I hope it brings you better things.

No matter how today went, I'm still proud of you, my love. You made it through, and that's something worth appreciating.`
    },
    {
        title: "Open when you want to feel loved",
        message: `My dearest babyy, if there's one thing I want you to remember whenever you open this letter, it's how much you mean to me.

I may not always find the perfect words to express everything I feel, but I hope my actions and the little things I do remind you how special you are to me.

Thank you for coming into my life and becoming someone I get to share memories, laughter, and countless little moments with. I appreciate your presence, your kindness, your personality, and even the little things you probably don't notice about yourself.

I hope you never question whether you deserve love because you absolutely do.

Happy 18th birthday again, my loveee! As you enter another chapter of your life, I hope you receive all the happiness your heart can hold. I want to see you grow, reach your dreams, and experience everything beautiful life has to offer.

And I hope I get to be part of many more chapters of your story.

I love you, my babyy. Always remember that.`
    }
];

/* =========================================
   PAGE TEMPLATE
========================================= */

function createPage(title, subtitle, content) {
    pageContent.innerHTML = `
        <article class="scrapbook-page">
            <div class="page-flower">✿</div>
            <p class="page-kicker">A LITTLE PAGE MADE WITH LOVE</p>
            <h1 class="page-title">${title}</h1>
            <p class="page-subtitle">${subtitle}</p>
            <div class="page-divider">♡ ── ✿ ── ♡</div>
            <div class="page-body">${content}</div>
        </article>
    `;

    showScreen(pageContainer);
}

/* =========================================
   STORY PAGE
========================================= */

function showStory() {
    const content = `
        <div class="page-heading">
            <p class="small-title">A STORY WRITTEN BY FATE ♡</p>
            <h2>Five Little Chapters</h2>
            <p>Every little chapter brought me closer to you.</p>
        </div>

        <p class="story-intro">
            From the day we first met to the memories we continue to make,
            here's a little look at our story.
        </p>

        <div class="story-chapters">
            ${storyChapters.map((chapter, index) => `
                <div class="story-chapter"
                     role="button"
                     tabindex="0"
                     onclick="openStoryChapter(${index})"
                     onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openStoryChapter(${index})}">
                    <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
                    <div class="chapter-copy">
                        <h3>${chapter.title}</h3>
                        <p>${chapter.preview}</p>
                    </div>
                    <span class="chapter-arrow">♡</span>
                </div>
            `).join("")}
        </div>
    `;

    createPage("Our Little Story", "A journey made of little moments.", content);
}

function openStoryChapter(index) {
    const chapter = storyChapters[index];
    if (!chapter) return;

    /*
       IMPORTANT:
       The chapter title is NOT repeated inside the content.
       The page heading is the only chapter title.
    */

    createPage(chapter.title, "A little chapter of our story.", `
        <div class="story-detail">
            <p class="small-title">CHAPTER ${String(index + 1).padStart(2, "0")}</p>

            <div class="story-detail-paper">
                <p>${chapter.text}</p>
                <div class="story-endmark">♡ ✧ ♡</div>
            </div>

            <button class="back-to-chapters" onclick="showStory()">
                ← Back to all chapters
            </button>
        </div>
    `);
}

/* =========================================
   MEMORIES PAGE
========================================= */

function photoCards() {
    return photos.map((photo, index) => `
        <button class="memory-photo" type="button" onclick="openPhoto(${index})">
            <img src="images/${photo.image}" alt="${photo.caption}" loading="lazy">
            <span>${photo.caption}</span>
        </button>
    `).join("");
}

function showMemories() {
    createPage("Our Memories", "Little moments, endless memories.", `
        <p class="memory-intro">
            A little space for the moments I never want to forget.
        </p>

        <div class="photo-grid">
            ${photoCards()}
        </div>

        <p class="memory-note">
            More beautiful memories will fill these pages. ♡
        </p>

        <div id="photoLightbox" class="photo-lightbox"
             onclick="if(event.target===this)closePhoto()">
            <button class="lightbox-close" onclick="closePhoto()" aria-label="Close photo">×</button>
            <img id="lightboxImage" src="" alt="Our memory">
            <p id="lightboxCaption"></p>
        </div>
    `);
}

function openPhoto(index) {
    const photo = photos[index];
    const lightbox = $("#photoLightbox");

    if (!photo || !lightbox) return;

    $("#lightboxImage").src = `images/${photo.image}`;
    $("#lightboxCaption").textContent = photo.caption;
    lightbox.classList.add("visible");
}

function closePhoto() {
    $("#photoLightbox")?.classList.remove("visible");
}

/* =========================================
   18 REASONS PAGE
========================================= */

function showReasons() {
    createPage("18 Reasons Why I Love You", "Eighteen little reminders of how special you are.", `
        <p class="memory-intro">
            Open each little card to discover a reason. ♡
        </p>

        <div class="reason-grid">
            ${reasons.map((reason, index) => `
                <button class="reason-card" onclick="revealCard(this)" type="button">
                    <span class="reason-number">${String(index + 1).padStart(2, "0")}</span>
                    <span class="reason-front">Tap to open ♡</span>
                    <span class="reason-back">${reason}</span>
                </button>
            `).join("")}
        </div>
    `);
}

function revealCard(card) {
    card.classList.toggle("revealed");
}

/* =========================================
   18 WISHES PAGE
========================================= */

function showWishes() {
    createPage("18 Birthday Wishes", "May this new chapter be as beautiful as you are.", `
        <p class="memory-intro">
            Eighteen wishes for your eighteenth birthday.
        </p>

        <div class="wish-list">
            ${wishes.map((wish, index) => `
                <div class="wish-card">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${wish}</p>
                    <span>♡</span>
                </div>
            `).join("")}
        </div>
    `);
}

/* =========================================
   OPEN WHEN PAGE
========================================= */

function showLetters() {
    createPage("Open When...", "Little letters for every kind of day.", `
        <p class="memory-intro">
            Choose an envelope, my loveee. There's a little message waiting inside.
        </p>

        <div class="letter-grid">
            ${letters.map((letter, index) => `
                <button class="letter-card" onclick="openLetter(${index})" type="button">
                    <span class="letter-icon">✉</span>
                    <span>${letter.title}</span>
                    <small>Open your letter ♡</small>
                </button>
            `).join("")}
        </div>

        <div id="letter-display" class="letter-display"></div>
    `);
}

function openLetter(index) {
    const letter = letters[index];
    const display = $("#letter-display");

    if (!letter || !display) return;

    display.innerHTML = `
        <article class="opened-letter">
            <span>♡</span>
            <h3>${letter.title}</h3>
            <p>${letter.message}</p>
            <small>With love, always ꨄ︎</small>
        </article>
    `;

    display.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/* =========================================
   BIRTHDAY LETTER
========================================= */

function showBirthdayLetter() {
    createPage("A Letter for You", "A little message from my heart.", `
        <div class="birthday-letter">
            <span class="letter-decoration">♡</span>

            <h2>To my loveee,</h2>

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
                Thank you for being you, my babyy. Thank you for your patience,
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
                Happy birthday, my loveee. I hope this new chapter of your life
                brings you more reasons to smile, more opportunities to grow,
                and all the happiness your heart deserves. Always remember that
                you are loved and appreciated.
            </p>

            <p>
                I love you so much, palablab nako. More than words can fully explain.
            </p>

            <h3>Always yours,<br>Loren ♡</h3>
        </div>
    `);
}

/* =========================================
   REALISTIC-STYLE BOUQUET SVG
========================================= */

function createBouquet() {
    return `
    <svg class="bouquet-svg"
         viewBox="0 0 620 650"
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-label="A hand-tied bouquet of purple tulips">

        <defs>
            <linearGradient id="stemGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#456a49"/>
                <stop offset=".45" stop-color="#91b18a"/>
                <stop offset="1" stop-color="#4e7652"/>
            </linearGradient>

            <linearGradient id="wrapPaper" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#fffaf5"/>
                <stop offset=".45" stop-color="#e9d8ed"/>
                <stop offset="1" stop-color="#cbb0d9"/>
            </linearGradient>

            <linearGradient id="wrapInner" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#fffdfb"/>
                <stop offset="1" stop-color="#ead9ed"/>
            </linearGradient>

            <linearGradient id="purplePetal" x1="0" y1="0" x2=".8" y2="1">
                <stop offset="0" stop-color="#f0dafa"/>
                <stop offset=".35" stop-color="#d2aee8"/>
                <stop offset=".72" stop-color="#a77bc9"/>
                <stop offset="1" stop-color="#79519d"/>
            </linearGradient>

            <linearGradient id="purplePetalDark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#d9b9ed"/>
                <stop offset=".5" stop-color="#a77bc8"/>
                <stop offset="1" stop-color="#70488f"/>
            </linearGradient>

            <linearGradient id="purplePetalLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#f7e9fc"/>
                <stop offset=".55" stop-color="#d7b6ed"/>
                <stop offset="1" stop-color="#a77bc9"/>
            </linearGradient>

            <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#b2c99f"/>
                <stop offset=".45" stop-color="#739a72"/>
                <stop offset="1" stop-color="#426d4d"/>
            </linearGradient>

            <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#e3c7ed"/>
                <stop offset=".5" stop-color="#a67cbe"/>
                <stop offset="1" stop-color="#805994"/>
            </linearGradient>

            <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5"/>
            </filter>

            <filter id="petalShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
                <feOffset dy="2" result="offset"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope=".16"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <!-- SOFT GROUND SHADOW -->
        <ellipse cx="310" cy="575" rx="155" ry="22"
                 fill="#9275a0" opacity=".13" filter="url(#softShadow)"/>

        <!-- STEMS -->
        <g fill="none" stroke="url(#stemGradient)" stroke-width="7"
           stroke-linecap="round">

            <path class="bouquet-stem" d="M305 505 Q240 330 90 105"/>
            <path class="bouquet-stem" d="M305 505 Q265 320 180 65"/>
            <path class="bouquet-stem" d="M305 505 Q290 295 270 38"/>
            <path class="bouquet-stem" d="M305 505 Q330 300 365 64"/>
            <path class="bouquet-stem" d="M305 505 Q380 330 505 115"/>
            <path class="bouquet-stem" d="M305 505 Q190 350 55 220"/>
            <path class="bouquet-stem" d="M305 505 Q425 355 560 215"/>
        </g>

        <!-- LEAVES -->
        <g fill="url(#leafGradient)" stroke="#537b5b" stroke-width="1.6">

            <path class="bouquet-leaf"
                  d="M296 456 Q185 373 158 255 Q256 295 296 456Z"/>

            <path class="bouquet-leaf"
                  d="M307 453 Q410 348 459 246 Q470 362 307 453Z"/>

            <path class="bouquet-leaf"
                  d="M276 492 Q153 456 104 350 Q222 364 276 492Z"/>

            <path class="bouquet-leaf"
                  d="M332 485 Q462 441 512 347 Q493 455 332 485Z"/>

            <path class="bouquet-leaf"
                  d="M300 425 Q251 305 276 195 Q340 312 300 425Z"/>

            <path class="bouquet-leaf"
                  d="M321 432 Q363 310 411 223 Q412 351 321 432Z"/>

            <path class="bouquet-leaf"
                  d="M265 454 Q197 410 183 333 Q258 365 265 454Z"/>
        </g>

        <!-- LEAF VEINS -->
        <g fill="none" stroke="#c3d4b2" stroke-width="2" opacity=".7">
            <path d="M296 456 Q220 350 166 268"/>
            <path d="M307 453 Q405 355 452 260"/>
            <path d="M276 492 Q189 421 115 362"/>
            <path d="M332 485 Q440 439 502 359"/>
            <path d="M300 425 Q282 308 278 208"/>
            <path d="M321 432 Q372 318 403 236"/>
        </g>

        <!-- FLOWER 1 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M52 124
                     C35 95 44 52 68 35
                     C82 46 90 67 92 83
                     C104 49 128 34 145 45
                     C166 72 154 111 131 137
                     C111 154 91 133 90 119
                     C77 143 60 144 52 124Z"
                  fill="url(#purplePetal)"/>

            <path d="M92 124
                     C75 92 79 48 93 27
                     C115 50 112 91 92 124Z"
                  fill="url(#purplePetalLight)"/>

            <path d="M58 100 C62 75 71 60 81 57"
                  fill="none" stroke="#f9eafa" stroke-width="3" opacity=".7"/>

            <path d="M109 116 C121 91 127 69 125 58"
                  fill="none" stroke="#f5e6fa" stroke-width="2.5" opacity=".65"/>
        </g>

        <!-- FLOWER 2 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M135 88
                     C119 59 130 23 151 9
                     C168 21 177 42 181 57
                     C195 25 220 12 237 26
                     C256 54 241 91 219 112
                     C199 128 181 110 180 95
                     C162 119 144 111 135 88Z"
                  fill="url(#purplePetalDark)"/>

            <path d="M180 100
                     C163 67 168 25 183 2
                     C205 26 202 68 180 100Z"
                  fill="url(#purplePetalLight)"/>

            <path d="M151 70 C157 45 167 31 176 28"
                  fill="none" stroke="#f9eafa" stroke-width="3" opacity=".7"/>
        </g>

        <!-- FLOWER 3 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M224 64
                     C207 36 217 6 240 -8
                     C258 6 267 27 270 43
                     C284 10 308 -1 325 13
                     C344 40 329 77 307 99
                     C286 115 269 96 269 81
                     C251 105 233 91 224 64Z"
                  fill="url(#purplePetal)"/>

            <path d="M270 83
                     C251 49 257 9 271 -16
                     C293 9 290 50 270 83Z"
                  fill="url(#purplePetalLight)"/>

            <path d="M240 45 C246 22 256 11 265 8"
                  fill="none" stroke="#f9eafa" stroke-width="3" opacity=".7"/>
        </g>

        <!-- FLOWER 4 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M323 90
                     C307 60 319 25 341 12
                     C357 25 367 45 370 61
                     C384 28 409 15 426 29
                     C445 57 430 94 408 115
                     C387 132 369 113 369 98
                     C351 122 332 108 323 90Z"
                  fill="url(#purplePetalDark)"/>

            <path d="M369 103
                     C351 69 356 29 371 5
                     C393 30 389 70 369 103Z"
                  fill="url(#purplePetalLight)"/>

            <path d="M340 69 C346 44 356 31 365 28"
                  fill="none" stroke="#f9eafa" stroke-width="3" opacity=".7"/>
        </g>

        <!-- FLOWER 5 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M451 139
                     C434 108 446 74 468 59
                     C485 72 494 93 498 109
                     C512 76 536 64 553 78
                     C573 106 557 143 535 164
                     C515 181 497 162 497 147
                     C479 170 460 157 451 139Z"
                  fill="url(#purplePetal)"/>

            <path d="M497 151
                     C480 117 485 77 499 53
                     C521 78 517 119 497 151Z"
                  fill="url(#purplePetalLight)"/>

            <path d="M469 119 C475 94 484 80 493 76"
                  fill="none" stroke="#f9eafa" stroke-width="3" opacity=".7"/>
        </g>

        <!-- FLOWER 6 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M19 249
                     C4 220 15 186 37 172
                     C54 185 63 206 66 222
                     C80 190 104 177 121 191
                     C140 219 125 256 103 277
                     C82 294 65 275 65 260
                     C47 284 28 267 19 249Z"
                  fill="url(#purplePetalDark)"/>

            <path d="M65 264
                     C48 230 53 190 67 166
                     C89 191 85 232 65 264Z"
                  fill="url(#purplePetalLight)"/>
        </g>

        <!-- FLOWER 7 -->
        <g class="bouquet-flower" filter="url(#petalShadow)">
            <path d="M493 243
                     C476 213 488 179 510 165
                     C527 178 536 199 540 215
                     C554 183 578 170 595 184
                     C614 212 599 249 577 270
                     C556 287 538 268 538 253
                     C520 277 502 260 493 243Z"
                  fill="url(#purplePetalDark)"/>

            <path d="M539 258
                     C522 224 527 184 541 160
                     C563 185 559 226 539 258Z"
                  fill="url(#purplePetalLight)"/>
        </g>

        <!-- PAPER WRAPPING -->
        <g class="bouquet-wrap">
            <path d="M90 285
                     Q305 347 530 285
                     L424 576
                     Q310 626 196 576Z"
                  fill="url(#wrapPaper)"
                  stroke="#cdb2d9"
                  stroke-width="2"/>

            <path d="M90 285
                     Q145 420 196 576
                     Q247 603 310 615
                     Q232 431 90 285Z"
                  fill="#fffaf7"
                  opacity=".8"/>

            <path d="M530 285
                     Q475 420 424 576
                     Q373 603 310 615
                     Q388 431 530 285Z"
                  fill="#d9c3e3"
                  opacity=".55"/>

            <path d="M90 285 Q310 373 530 285"
                  fill="none" stroke="#c7a7d6" stroke-width="3"/>

            <path d="M117 299 Q310 383 503 299"
                  fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>

            <path d="M153 383 Q310 450 467 383"
                  fill="none" stroke="#c6a7d4" stroke-width="2" opacity=".6"/>

            <path d="M182 465 Q310 520 438 465"
                  fill="none" stroke="#c6a7d4" stroke-width="2" opacity=".6"/>

            <path d="M215 538 Q310 576 405 538"
                  fill="none" stroke="#c6a7d4" stroke-width="2" opacity=".6"/>

            <path d="M310 370 L310 601"
                  stroke="#fff" stroke-width="3" opacity=".55"/>
        </g>

        <!-- RIBBON -->
        <g class="bouquet-ribbon">
            <path d="M297 432
                     C246 389 197 397 188 435
                     C187 474 243 480 305 453Z"
                  fill="url(#ribbonGradient)"
                  stroke="#89649e" stroke-width="2"/>

            <path d="M323 432
                     C374 389 423 397 432 435
                     C433 474 377 480 315 453Z"
                  fill="url(#ribbonGradient)"
                  stroke="#89649e" stroke-width="2"/>

            <path d="M299 446
                     C266 489 255 528 262 553
                     L309 518
                     L337 558
                     C357 506 341 466 321 446Z"
                  fill="#a981bd"
                  stroke="#89649e" stroke-width="2"/>

            <path d="M310 425
                     C284 405 277 440 297 458
                     C308 469 323 469 334 454
                     C352 430 333 405 310 425Z"
                  fill="#d8b8e5"
                  stroke="#89649e" stroke-width="2"/>

            <path d="M300 438 Q310 451 322 438"
                  fill="none" stroke="#f8eafa" stroke-width="3"/>

            <path d="M201 433 Q239 420 277 447"
                  fill="none" stroke="#e8d1f0" stroke-width="3" opacity=".8"/>

            <path d="M419 433 Q381 420 343 447"
                  fill="none" stroke="#e8d1f0" stroke-width="3" opacity=".8"/>
        </g>

        <!-- SMALL DETAILS -->
        <g fill="#fff" opacity=".8">
            <circle cx="139" cy="326" r="3"/>
            <circle cx="472" cy="331" r="3"/>
            <circle cx="175" cy="360" r="2"/>
            <circle cx="438" cy="365" r="2"/>
        </g>

    </svg>`;
}

/* =========================================
   SURPRISE PAGE
========================================= */

function showSurprise() {
    createPage("Your Final Surprise", "One last little gift for my favorite person.", `
        <div class="surprise-content">

            <p class="surprise-intro">
                I saved one last little surprise for you, my babyy.
            </p>

            <div id="giftBox" class="gift-box" aria-hidden="true">୨୧</div>

            <p class="gift-instruction">
                Something special is waiting for you. ♡
            </p>

            <button class="primary-button" id="openGiftButton" type="button">
                Open your surprise ♡
            </button>

            <div id="giftReveal" class="gift-reveal">

                <div class="bloom-petals" aria-hidden="true">
                    <span>✿</span><span>♡</span><span>✧</span>
                    <span>✿</span><span>♡</span>
                </div>

                <p class="surprise-kicker">
                    A BOUQUET MADE ESPECIALLY FOR YOU
                </p>

                <div class="realistic-bouquet">
                    ${createBouquet()}
                </div>

                <h2 class="surprise-heading">For you, my loveee. ♡</h2>

                <p class="tulip-message">
                    If I could give you a garden full of flowers,
                    I would make sure every single one reminded
                    you of how special you are to me.
                    You deserve all the beautiful things in this world,
                    my babyy.
                </p>

                <div class="surprise-divider">♡ ── ✿ ── ♡</div>

                <div class="final-message">
                    <p class="small-title">ONE LAST THING...</p>

                    <h1>Happy 18th Birthday!</h1>

                    <p>
                        Happy birthday, my loveee!
                        I hope this new chapter brings you happiness,
                        beautiful opportunities, and countless reasons
                        to smile.
                    </p>

                    <p>
                        Thank you for being part of my life.
                        I hope this little world I made for you reminds
                        you how much you mean to me.
                    </p>

                    <p>
                        Here's to more memories, more laughter,
                        and more beautiful chapters together.
                    </p>

                    <h3>Always yours,<br>Loren ♡</h3>
                </div>

                <div class="firework-decoration">✧ ♡ ✧ ♡ ✧</div>

                <p class="final-ending">
                    This is not the end of our story.<br>
                    It's just another beautiful chapter. ♡
                </p>

            </div>
        </div>
    `);

    const giftBox = $("#giftBox");
    const openButton = $("#openGiftButton");
    const giftReveal = $("#giftReveal");

    openButton.addEventListener("click", () => {
        if (openButton.disabled) return;

        openButton.disabled = true;
        giftBox.classList.add("gift-opened");
        openButton.style.display = "none";

        setTimeout(() => {
            giftReveal.style.display = "block";

            requestAnimationFrame(() => {
                giftReveal.classList.add("visible");

                giftReveal.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }, 650);
    });
}

/* =========================================
   PAGE ROUTER
========================================= */

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

/* =========================================
   MUSIC PLAYER
========================================= */

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

const backgroundMusic = $("#backgroundMusic");
const musicToggle = $("#musicToggle");
const previousMusic = $("#previousMusic");
const nextMusic = $("#nextMusic");
const musicTitle = $("#musicTitle");

let currentSong = 0;

function loadSong(index) {
    currentSong = (index + playlist.length) % playlist.length;
    backgroundMusic.src = playlist[currentSong].src;
    musicTitle.textContent = playlist[currentSong].title;
}

async function playSong() {
    try {
        await backgroundMusic.play();
        musicToggle.textContent = "Ⅱ";
        musicToggle.setAttribute("aria-label", "Pause music");
    } catch (error) {
        console.warn("Music could not be played:", error);
        pauseSong();
    }
}

function pauseSong() {
    backgroundMusic.pause();
    musicToggle.textContent = "▶";
    musicToggle.setAttribute("aria-label", "Play music");
}

musicToggle.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextMusic.addEventListener("click", () => {
    loadSong(currentSong + 1);
    playSong();
});

previousMusic.addEventListener("click", () => {
    loadSong(currentSong - 1);
    playSong();
});

backgroundMusic.addEventListener("ended", () => {
    loadSong(currentSong + 1);
    playSong();
});

backgroundMusic.addEventListener("play", () => {
    musicToggle.textContent = "Ⅱ";
    musicToggle.setAttribute("aria-label", "Pause music");
});

backgroundMusic.addEventListener("pause", () => {
    musicToggle.textContent = "▶";
    musicToggle.setAttribute("aria-label", "Play music");
});

loadSong(0);

/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePhoto();
    }
});

/* =========================================
   SERVICE WORKER
========================================= */

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(registration => {
                console.log(
                    "Scrapbook service worker registered.",
                    registration.scope
                );
            })
            .catch(error => {
                console.error(
                    "Service worker registration failed:",
                    error
                );
            });
    });
}

console.log("Dear, My Loving Wife is ready. ♡");
