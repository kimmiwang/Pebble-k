/* ====================================================================
   pebble-k — App.js
   All-in-one client-side app: Dashboard, Vocab, Shadow Learn, Daily, Check-in
   Data persisted in localStorage
   ==================================================================== */

// ───────── Built-in Word Database (150+ words: Daily Life / Tech & Internet / Designer) ─────────
const WORD_DB = {
  // ═══ DAILY LIFE ═══
  "serendipity": { phonetic: "/ˌserənˈdɪpɪti/", meaning: "意外的美好发现；机缘巧合", examples: ["Finding that bookshop was pure serendipity.", "Life is full of serendipity if you keep your eyes open."], synonyms: ["luck", "fortune", "chance"], tag: "daily", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
  "procrastinate": { phonetic: "/prəˈkræstɪneɪt/", meaning: "拖延，耽搁", examples: ["Stop procrastinating and start working on your project.", "I tend to procrastinate when I feel overwhelmed."], synonyms: ["delay", "postpone", "defer"], tag: "daily", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
  "eloquent": { phonetic: "/ˈeləkwənt/", meaning: "雄辩的，口才好的，有说服力的", examples: ["She gave an eloquent speech about climate change.", "His silence was more eloquent than any words."], synonyms: ["articulate", "fluent", "expressive"], tag: "daily", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop" },
  "ambiguous": { phonetic: "/æmˈbɪɡjuəs/", meaning: "模棱两可的，含糊不清的", examples: ["The contract language was deliberately ambiguous.", "His response was ambiguous — I couldn't tell if he agreed."], synonyms: ["vague", "unclear", "equivocal"], tag: "daily", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop" },
  "resilient": { phonetic: "/rɪˈzɪliənt/", meaning: "有韧性的，恢复力强的", examples: ["Children are remarkably resilient.", "We need to build a more resilient economy."], synonyms: ["tough", "adaptable", "flexible"], tag: "daily", image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=300&h=200&fit=crop" },
  "nuance": { phonetic: "/ˈnjuːɑːns/", meaning: "细微差别，微妙之处", examples: ["He was able to capture every nuance of her expression.", "The nuances of the language are hard to learn."], synonyms: ["subtlety", "shade", "distinction"], tag: "daily", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=200&fit=crop" },
  "pragmatic": { phonetic: "/præɡˈmætɪk/", meaning: "务实的，实用主义的", examples: ["We need a pragmatic approach to this problem.", "She's a pragmatic leader who focuses on results."], synonyms: ["practical", "realistic", "sensible"], tag: "daily", image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300&h=200&fit=crop" },
  "compelling": { phonetic: "/kəmˈpelɪŋ/", meaning: "引人注目的，令人信服的", examples: ["She made a compelling argument for the new policy.", "The documentary was absolutely compelling."], synonyms: ["convincing", "captivating", "persuasive"], tag: "daily", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop" },
  "ubiquitous": { phonetic: "/juːˈbɪkwɪtəs/", meaning: "无处不在的", examples: ["Smartphones have become ubiquitous in modern life.", "Coffee shops are ubiquitous in this city."], synonyms: ["omnipresent", "everywhere", "pervasive"], tag: "daily", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" },
  "binge": { phonetic: "/bɪndʒ/", meaning: "（无节制地）沉迷，狂看", examples: ["I binge-watched the entire series over the weekend.", "She went on a shopping binge."], synonyms: ["spree", "splurge", "marathon"], tag: "daily", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=200&fit=crop" },
  "cliffhanger": { phonetic: "/ˈklɪfhæŋə/", meaning: "扣人心弦的悬念结局", examples: ["The season finale ended on a real cliffhanger.", "Every episode is a cliffhanger that keeps you watching."], synonyms: ["suspense", "thriller", "nail-biter"], tag: "daily", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=200&fit=crop" },
  "plot twist": { phonetic: "/plɒt twɪst/", meaning: "剧情反转", examples: ["I didn't see that plot twist coming at all!", "The movie is full of unexpected plot twists."], synonyms: ["surprise ending", "turn of events", "reversal"], tag: "daily", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop" },
  "gist": { phonetic: "/dʒɪst/", meaning: "要点，大意", examples: ["I didn't catch every word, but I got the gist of it.", "Can you give me the gist of the meeting?"], synonyms: ["essence", "core", "main point"], tag: "daily", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=300&h=200&fit=crop" },
  "commute": { phonetic: "/kəˈmjuːt/", meaning: "通勤", examples: ["My commute takes about 45 minutes each way.", "I listen to podcasts during my commute."], synonyms: ["travel", "journey", "trip"], tag: "daily", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" },
  "cringe": { phonetic: "/krɪndʒ/", meaning: "让人尴尬的，社死", examples: ["That joke was so cringe.", "I cringe every time I think about what I said."], synonyms: ["embarrassing", "awkward", "uncomfortable"], tag: "slang", image: "https://images.unsplash.com/photo-1520462100942-63e8dbf41a8c?w=300&h=200&fit=crop" },
  "anecdote": { phonetic: "/ˈænɪkdəʊt/", meaning: "趣闻，轶事", examples: ["He told a funny anecdote about his first job.", "The speech was full of personal anecdotes."], synonyms: ["story", "tale", "yarn"], tag: "daily" },
  "etiquette": { phonetic: "/ˈetɪket/", meaning: "礼仪，礼节", examples: ["Business etiquette varies across cultures.", "It's basic email etiquette to reply within 24 hours."], synonyms: ["manners", "protocol", "decorum"], tag: "daily" },
  "versatile": { phonetic: "/ˈvɜːsətaɪl/", meaning: "多才多艺的；多功能的", examples: ["She's a versatile actress who can play any role.", "This is a very versatile kitchen gadget."], synonyms: ["adaptable", "flexible", "all-round"], tag: "daily" },
  "mundane": { phonetic: "/mʌnˈdeɪn/", meaning: "平凡的，日常的，乏味的", examples: ["Even mundane tasks can be meditative.", "He wanted to escape the mundane routine of office life."], synonyms: ["ordinary", "routine", "humdrum"], tag: "daily" },
  "incentive": { phonetic: "/ɪnˈsentɪv/", meaning: "激励，动机", examples: ["The company offers financial incentives for top performers.", "There's little incentive to change the current system."], synonyms: ["motivation", "encouragement", "stimulus"], tag: "daily" },
  "spontaneous": { phonetic: "/spɒnˈteɪniəs/", meaning: "自发的，随性的", examples: ["We made a spontaneous decision to go to the beach.", "She's a very spontaneous person — you never know what she'll do next."], synonyms: ["impulsive", "unplanned", "impromptu"], tag: "daily" },
  "inevitable": { phonetic: "/ɪnˈevɪtəbl/", meaning: "不可避免的", examples: ["Change is inevitable in the tech industry.", "It was inevitable that they would find out eventually."], synonyms: ["unavoidable", "certain", "inescapable"], tag: "daily" },
  "indifferent": { phonetic: "/ɪnˈdɪfrənt/", meaning: "漠不关心的，无所谓的", examples: ["He seemed indifferent to the news.", "She gave an indifferent shrug."], synonyms: ["apathetic", "unconcerned", "detached"], tag: "daily" },
  "authentic": { phonetic: "/ɔːˈθentɪk/", meaning: "真实的，正宗的", examples: ["This restaurant serves authentic Sichuan food.", "She has a very authentic personality — what you see is what you get."], synonyms: ["genuine", "real", "original"], tag: "daily" },
  "sustainable": { phonetic: "/səˈsteɪnəbl/", meaning: "可持续的", examples: ["We need to find more sustainable sources of energy.", "Is this business model really sustainable long-term?"], synonyms: ["viable", "maintainable", "eco-friendly"], tag: "daily" },
  "overwhelmed": { phonetic: "/ˌəʊvəˈwelmd/", meaning: "不堪重负的，被压垮的", examples: ["I feel completely overwhelmed with all these tasks.", "She was overwhelmed by the support from her friends."], synonyms: ["swamped", "inundated", "buried"], tag: "daily" },
  "awkward": { phonetic: "/ˈɔːkwəd/", meaning: "尴尬的，笨拙的", examples: ["There was an awkward silence after his comment.", "I felt so awkward at the party where I knew no one."], synonyms: ["clumsy", "uncomfortable", "embarrassing"], tag: "daily" },
  "cope": { phonetic: "/kəʊp/", meaning: "应对，处理", examples: ["How do you cope with stress at work?", "She learned to cope with the pressure over time."], synonyms: ["manage", "handle", "deal with"], tag: "daily" },
  "guilty pleasure": { phonetic: "/ˈɡɪlti ˈpleʒə/", meaning: "有负罪感的快乐（知道不好但喜欢的事）", examples: ["Reality TV is my guilty pleasure.", "Eating ice cream at midnight is my guilty pleasure."], synonyms: ["secret indulgence", "shameful enjoyment"], tag: "daily" },
  "vibe": { phonetic: "/vaɪb/", meaning: "氛围，感觉", examples: ["This cafe has a really chill vibe.", "I got a weird vibe from that interview."], synonyms: ["atmosphere", "feeling", "energy"], tag: "daily" },
  "low-key": { phonetic: "/ləʊ kiː/", meaning: "低调地；暗暗地", examples: ["I'm low-key excited about the trip.", "Let's keep it low-key — just a small dinner."], synonyms: ["quietly", "subtly", "modestly"], tag: "daily" },
  "banter": { phonetic: "/ˈbæntə/", meaning: "打趣，调侃", examples: ["The banter between the characters is hilarious.", "We enjoy friendly banter at lunch."], synonyms: ["teasing", "repartee", "witty exchange"], tag: "daily" },
  "bittersweet": { phonetic: "/ˌbɪtəˈswiːt/", meaning: "苦乐参半的", examples: ["Graduation is always a bittersweet moment.", "It was a bittersweet ending to a great show."], synonyms: ["poignant", "mixed feelings", "nostalgic"], tag: "daily" },
  "understatement": { phonetic: "/ˈʌndəsteɪtmənt/", meaning: "轻描淡写", examples: ["To say the movie was 'okay' is an understatement — it was amazing.", "That's the understatement of the year."], synonyms: ["meiosis", "downplay", "belittlement"], tag: "daily" },
  "catchphrase": { phonetic: "/ˈkætʃfreɪz/", meaning: "口头禅，标语", examples: ["'Winter is coming' became one of the most famous catchphrases in TV.", "Every comedian has their signature catchphrase."], synonyms: ["slogan", "motto", "tagline"], tag: "daily" },

  // ═══ TECH & INTERNET ═══
  "benchmark": { phonetic: "/ˈbentʃmɑːk/", meaning: "基准，标杆；基准测试", examples: ["This product sets the benchmark for the industry.", "We benchmark our API against competitors."], synonyms: ["standard", "reference point", "criterion"], tag: "tech", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" },
  "leverage": { phonetic: "/ˈliːvərɪdʒ/", meaning: "利用，发挥（优势）；杠杆作用", examples: ["We need to leverage our existing user base.", "She leveraged her connections to get the deal done."], synonyms: ["utilize", "exploit", "capitalize on"], tag: "tech", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" },
  "deadline": { phonetic: "/ˈdedlaɪn/", meaning: "截止日期，最后期限", examples: ["We need to meet the deadline for this project.", "The deadline is next Friday — no extensions."], synonyms: ["due date", "time limit", "cutoff"], tag: "tech", image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&h=200&fit=crop" },
  "synergy": { phonetic: "/ˈsɪnərdʒi/", meaning: "协同效应，合力", examples: ["The merger created significant synergy between the teams.", "There's a natural synergy between design and engineering."], synonyms: ["collaboration", "cooperation", "combined effect"], tag: "tech", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop" },
  "iterate": { phonetic: "/ˈɪtəreɪt/", meaning: "迭代，反复改进", examples: ["We need to iterate on this design based on user feedback.", "The team iterates quickly to ship new features."], synonyms: ["repeat", "refine", "revise"], tag: "tech", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&h=200&fit=crop" },
  "deploy": { phonetic: "/dɪˈplɔɪ/", meaning: "部署，发布", examples: ["We'll deploy the new version after QA approval.", "The service was deployed to production at midnight."], synonyms: ["release", "launch", "roll out"], tag: "tech" },
  "refactor": { phonetic: "/riːˈfæktər/", meaning: "重构（代码）", examples: ["We need to refactor this legacy code before adding features.", "Refactoring improved the code readability significantly."], synonyms: ["restructure", "reorganize", "rework"], tag: "tech" },
  "scalable": { phonetic: "/ˈskeɪləbl/", meaning: "可扩展的，可伸缩的", examples: ["We need a more scalable architecture for this service.", "Is this solution scalable to millions of users?"], synonyms: ["expandable", "extensible", "elastic"], tag: "tech" },
  "latency": { phonetic: "/ˈleɪtənsi/", meaning: "延迟，等待时间", examples: ["The API has a latency of under 50ms.", "High latency can seriously impact user experience."], synonyms: ["delay", "lag", "response time"], tag: "tech" },
  "throughput": { phonetic: "/ˈθruːpʊt/", meaning: "吞吐量", examples: ["The system handles a throughput of 10,000 requests per second.", "We need to optimize throughput for peak hours."], synonyms: ["capacity", "output rate", "bandwidth"], tag: "tech" },
  "bottleneck": { phonetic: "/ˈbɒtlnek/", meaning: "瓶颈", examples: ["The database is the main bottleneck in our system.", "Identify and fix bottlenecks to improve performance."], synonyms: ["constraint", "limitation", "chokepoint"], tag: "tech" },
  "deprecate": { phonetic: "/ˈdeprəkeɪt/", meaning: "弃用，废弃（某功能）", examples: ["This API endpoint will be deprecated in version 3.0.", "We should deprecate the old library and migrate to the new one."], synonyms: ["phase out", "discontinue", "retire"], tag: "tech" },
  "verbose": { phonetic: "/vɜːˈbəʊs/", meaning: "冗长的；详细输出的", examples: ["Enable verbose logging for debugging.", "His code comments are too verbose."], synonyms: ["wordy", "detailed", "long-winded"], tag: "tech" },
  "robust": { phonetic: "/rəʊˈbʌst/", meaning: "稳健的，鲁棒的", examples: ["We need a more robust error handling strategy.", "The system is robust enough to handle edge cases."], synonyms: ["sturdy", "reliable", "resilient"], tag: "tech" },
  "agile": { phonetic: "/ˈædʒaɪl/", meaning: "敏捷的（开发方法）", examples: ["Our team follows agile methodology.", "Agile allows us to adapt to changing requirements quickly."], synonyms: ["nimble", "flexible", "adaptive"], tag: "tech" },
  "sprint": { phonetic: "/sprɪnt/", meaning: "冲刺（敏捷开发周期）", examples: ["We'll tackle this feature in the next sprint.", "Each sprint lasts two weeks."], synonyms: ["iteration", "cycle", "phase"], tag: "tech" },
  "standup": { phonetic: "/ˈstændʌp/", meaning: "站会（每日简短会议）", examples: ["Let's discuss this in tomorrow's standup.", "The standup should take no more than 15 minutes."], synonyms: ["daily meeting", "sync", "check-in"], tag: "tech" },
  "blocker": { phonetic: "/ˈblɑːkər/", meaning: "阻塞问题，拦路虎", examples: ["This dependency issue is a major blocker.", "Any blockers from yesterday's work?"], synonyms: ["obstacle", "impediment", "showstopper"], tag: "tech" },
  "bandwidth": { phonetic: "/ˈbændwɪdθ/", meaning: "带宽；（口语）精力/能力", examples: ["I don't have the bandwidth to take on another project.", "We need more bandwidth on the server."], synonyms: ["capacity", "resources", "availability"], tag: "tech" },
  "onboarding": { phonetic: "/ˈɒnbɔːdɪŋ/", meaning: "新用户/员工引导", examples: ["The onboarding flow needs to be simpler.", "Good onboarding reduces churn significantly."], synonyms: ["introduction", "orientation", "setup process"], tag: "tech" },
  "churn": { phonetic: "/tʃɜːrn/", meaning: "流失率（用户）", examples: ["We need to reduce our monthly churn rate.", "High churn indicates a product-market fit issue."], synonyms: ["attrition", "turnover", "loss rate"], tag: "tech" },
  "retention": { phonetic: "/rɪˈtenʃn/", meaning: "留存率", examples: ["Day-7 retention is our key metric.", "Focus on improving user retention before growth."], synonyms: ["engagement", "loyalty", "stickiness"], tag: "tech" },
  "funnel": { phonetic: "/ˈfʌnl/", meaning: "漏斗（转化漏斗）", examples: ["Users drop off at the payment step of the funnel.", "Optimize each step of the conversion funnel."], synonyms: ["pipeline", "conversion path", "flow"], tag: "tech" },
  "A/B test": { phonetic: "/eɪ biː test/", meaning: "A/B测试，对照实验", examples: ["Let's A/B test the new landing page.", "The A/B test showed a 12% improvement in click-through rate."], synonyms: ["split test", "controlled experiment", "variant test"], tag: "tech" },
  "MVP": { phonetic: "/ˌem viː ˈpiː/", meaning: "最小可行产品", examples: ["Ship the MVP first and iterate from there.", "Our MVP only has the core features."], synonyms: ["minimum viable product", "prototype", "first version"], tag: "tech" },
  "pivot": { phonetic: "/ˈpɪvət/", meaning: "转型，战略调整", examples: ["The startup pivoted from B2C to B2B.", "Sometimes you need to pivot when the market changes."], synonyms: ["shift", "redirect", "change direction"], tag: "tech" },
  "pain point": { phonetic: "/peɪn pɔɪnt/", meaning: "痛点", examples: ["What are the main pain points for our users?", "This feature directly addresses a key pain point."], synonyms: ["problem", "frustration", "challenge"], tag: "tech" },
  "edge case": { phonetic: "/edʒ keɪs/", meaning: "边界情况，极端情况", examples: ["Don't forget to handle edge cases in your code.", "This bug only appears in an obscure edge case."], synonyms: ["corner case", "boundary condition", "rare scenario"], tag: "tech" },
  "tech debt": { phonetic: "/tek det/", meaning: "技术债务", examples: ["We've accumulated too much tech debt in this module.", "We need to allocate time to pay off tech debt."], synonyms: ["technical debt", "code debt", "design debt"], tag: "tech" },
  "sync": { phonetic: "/sɪŋk/", meaning: "同步；对齐", examples: ["Let me sync with the backend team first.", "Can we have a quick sync about the roadmap?"], synonyms: ["align", "coordinate", "catch up"], tag: "tech" },
  "scope creep": { phonetic: "/skoʊp kriːp/", meaning: "需求蔓延，范围蠕变", examples: ["Scope creep is the biggest risk to our timeline.", "We need to prevent scope creep by locking requirements early."], synonyms: ["feature creep", "requirement bloat"], tag: "tech" },
  "ship": { phonetic: "/ʃɪp/", meaning: "发布，上线（产品）", examples: ["Let's ship this feature by Friday.", "We shipped three major updates this quarter."], synonyms: ["release", "launch", "deploy"], tag: "tech" },
  "dogfood": { phonetic: "/ˈdɒɡfuːd/", meaning: "内部试用自己的产品", examples: ["We dogfood all our products before release.", "Dogfooding helps us find bugs early."], synonyms: ["eat your own cooking", "internal testing", "self-use"], tag: "tech" },
  "boilerplate": { phonetic: "/ˈbɔɪlərpleɪt/", meaning: "样板代码，模板", examples: ["This framework has too much boilerplate.", "Use a starter template to skip the boilerplate."], synonyms: ["template", "scaffold", "standard code"], tag: "tech" },
  "greenfield": { phonetic: "/ˈɡriːnfiːld/", meaning: "全新项目（从零开始）", examples: ["This is a greenfield project — no legacy constraints.", "I love working on greenfield projects."], synonyms: ["new build", "fresh start", "blank slate"], tag: "tech" },
  "legacy": { phonetic: "/ˈleɡəsi/", meaning: "遗留的（代码/系统）", examples: ["We're dealing with a lot of legacy code.", "Migrating off the legacy system will take months."], synonyms: ["old", "outdated", "inherited"], tag: "tech" },
  "workaround": { phonetic: "/ˈwɜːkəraʊnd/", meaning: "变通方法，临时解决方案", examples: ["This is just a workaround until we fix the root cause.", "Is there a workaround for this browser compatibility issue?"], synonyms: ["hack", "quick fix", "temporary solution"], tag: "tech" },
  "downtime": { phonetic: "/ˈdaʊntaɪm/", meaning: "宕机时间，停机时间", examples: ["We guarantee 99.9% uptime with minimal downtime.", "Scheduled downtime for maintenance is at 3 AM."], synonyms: ["outage", "interruption", "offline period"], tag: "tech" },
  "rollback": { phonetic: "/ˈrəʊlbæk/", meaning: "回滚", examples: ["We had to rollback the release due to a critical bug.", "Always have a rollback plan before deploying."], synonyms: ["revert", "undo", "restore"], tag: "tech" },
  "pipeline": { phonetic: "/ˈpaɪplaɪn/", meaning: "流水线，管道（CI/CD或数据）", examples: ["The CI/CD pipeline runs all tests automatically.", "Our data pipeline processes 1TB daily."], synonyms: ["workflow", "chain", "process flow"], tag: "tech" },
  "migration": { phonetic: "/maɪˈɡreɪʃn/", meaning: "迁移（数据/系统）", examples: ["The database migration took the whole weekend.", "Plan your migration carefully to avoid data loss."], synonyms: ["transfer", "transition", "move"], tag: "tech" },

  // ═══ DESIGNER ═══
  "typography": { phonetic: "/taɪˈpɑːɡrəfi/", meaning: "排版，字体设计", examples: ["Good typography can make or break a design.", "The typography on this website is beautifully crafted."], synonyms: ["type design", "lettering", "font arrangement"], tag: "design" },
  "whitespace": { phonetic: "/ˈwaɪtspeɪs/", meaning: "留白", examples: ["Don't be afraid of whitespace — it helps readability.", "The design uses whitespace effectively."], synonyms: ["negative space", "blank space", "breathing room"], tag: "design" },
  "hierarchy": { phonetic: "/ˈhaɪərɑːrki/", meaning: "层级关系，视觉层次", examples: ["Visual hierarchy guides the user's attention.", "The information hierarchy on this page is confusing."], synonyms: ["ranking", "order", "structure"], tag: "design" },
  "wireframe": { phonetic: "/ˈwaɪərfreɪm/", meaning: "线框图", examples: ["Let's start with a wireframe before high-fidelity designs.", "The wireframe shows the basic layout structure."], synonyms: ["mockup", "skeleton", "blueprint"], tag: "design" },
  "mockup": { phonetic: "/ˈmɑːkʌp/", meaning: "视觉稿，样机图", examples: ["I'll prepare a high-fidelity mockup for the client.", "The mockup looks great — let's proceed to development."], synonyms: ["prototype", "comp", "visual draft"], tag: "design" },
  "prototype": { phonetic: "/ˈprəʊtətaɪp/", meaning: "原型", examples: ["We built a clickable prototype for user testing.", "Test the prototype with real users before building."], synonyms: ["model", "sample", "proof of concept"], tag: "design" },
  "palette": { phonetic: "/ˈpælɪt/", meaning: "调色板，色彩方案", examples: ["The color palette consists of soft pastels.", "Choose a palette that reflects the brand identity."], synonyms: ["color scheme", "color range", "spectrum"], tag: "design" },
  "grid system": { phonetic: "/ɡrɪd ˈsɪstəm/", meaning: "网格系统", examples: ["A 12-column grid system provides flexible layouts.", "Stick to the grid system for consistent alignment."], synonyms: ["layout grid", "column system", "alignment framework"], tag: "design" },
  "responsive": { phonetic: "/rɪˈspɑːnsɪv/", meaning: "响应式（设计）", examples: ["The website must be fully responsive on all devices.", "Responsive design adapts to different screen sizes."], synonyms: ["adaptive", "fluid", "mobile-friendly"], tag: "design" },
  "pixel-perfect": { phonetic: "/ˈpɪksl ˈpɜːrfɪkt/", meaning: "像素精准的", examples: ["The developer delivered a pixel-perfect implementation.", "Pixel-perfect design shows attention to detail."], synonyms: ["precise", "exact", "meticulous"], tag: "design" },
  "affordance": { phonetic: "/əˈfɔːrdəns/", meaning: "示能性（设计元素暗示的使用方式）", examples: ["A button's raised appearance provides affordance for clicking.", "Good affordance makes interfaces intuitive."], synonyms: ["hint", "cue", "usability signal"], tag: "design" },
  "heuristic": { phonetic: "/hjʊˈrɪstɪk/", meaning: "启发式的（评估方法）", examples: ["We did a heuristic evaluation of the app's usability.", "Nielsen's heuristics are the gold standard for UX audits."], synonyms: ["rule of thumb", "guideline", "principle"], tag: "design" },
  "persona": { phonetic: "/pərˈsoʊnə/", meaning: "用户画像，虚拟人物角色", examples: ["Our primary persona is a 28-year-old urban professional.", "Creating detailed personas helps guide design decisions."], synonyms: ["user profile", "archetype", "character"], tag: "design" },
  "user flow": { phonetic: "/ˈjuːzər floʊ/", meaning: "用户流程", examples: ["Map out the user flow from signup to first purchase.", "The user flow has too many unnecessary steps."], synonyms: ["user journey", "task flow", "interaction path"], tag: "design" },
  "friction": { phonetic: "/ˈfrɪkʃn/", meaning: "摩擦（用户体验中的阻碍）", examples: ["Remove unnecessary friction in the checkout process.", "Requiring email verification adds friction."], synonyms: ["resistance", "obstacle", "barrier"], tag: "design" },
  "delight": { phonetic: "/dɪˈlaɪt/", meaning: "愉悦感（超出预期的体验）", examples: ["Micro-interactions add moments of delight.", "User delight comes from exceeding expectations."], synonyms: ["pleasure", "joy", "satisfaction"], tag: "design" },
  "iteration": { phonetic: "/ˌɪtəˈreɪʃn/", meaning: "迭代版本", examples: ["This is the third iteration of the homepage design.", "Each iteration gets us closer to the ideal solution."], synonyms: ["version", "revision", "cycle"], tag: "design" },
  "design system": { phonetic: "/dɪˈzaɪn ˈsɪstəm/", meaning: "设计系统", examples: ["A robust design system ensures consistency across products.", "We maintain a living design system in Figma."], synonyms: ["component library", "style guide", "design language"], tag: "design" },
  "component": { phonetic: "/kəmˈpoʊnənt/", meaning: "组件", examples: ["Reuse components to maintain design consistency.", "This button component has three variants."], synonyms: ["element", "module", "building block"], tag: "design" },
  "alignment": { phonetic: "/əˈlaɪnmənt/", meaning: "对齐", examples: ["Check the alignment of these text blocks.", "Consistent alignment creates a clean, professional look."], synonyms: ["positioning", "arrangement", "justification"], tag: "design" },
  "contrast": { phonetic: "/ˈkɑːntræst/", meaning: "对比度", examples: ["Increase the contrast for better accessibility.", "The contrast between heading and body text needs work."], synonyms: ["difference", "distinction", "variation"], tag: "design" },
  "opacity": { phonetic: "/əʊˈpæsɪti/", meaning: "不透明度", examples: ["Set the overlay opacity to 60%.", "Reduce opacity for a frosted glass effect."], synonyms: ["transparency", "translucency", "alpha"], tag: "design" },
  "gradient": { phonetic: "/ˈɡreɪdiənt/", meaning: "渐变", examples: ["Add a subtle gradient to the hero section.", "Gradients are making a comeback in modern UI design."], synonyms: ["fade", "blend", "color transition"], tag: "design" },
  "kerning": { phonetic: "/ˈkɜːrnɪŋ/", meaning: "字间距调整", examples: ["Adjust the kerning between these two characters.", "Poor kerning can make text hard to read."], synonyms: ["letter-spacing", "tracking", "character spacing"], tag: "design" },
  "drop shadow": { phonetic: "/drɑːp ˈʃædoʊ/", meaning: "投影，阴影效果", examples: ["A subtle drop shadow adds depth to the card.", "Avoid using too heavy a drop shadow — keep it soft."], synonyms: ["box shadow", "shadow effect", "elevation"], tag: "design" },
  "breadcrumb": { phonetic: "/ˈbredkrʌm/", meaning: "面包屑导航", examples: ["Breadcrumbs help users understand their location.", "Add breadcrumbs for better navigation in nested pages."], synonyms: ["navigation trail", "path indicator", "location bar"], tag: "design" },
  "tooltip": { phonetic: "/ˈtuːltɪp/", meaning: "提示框，工具提示", examples: ["Show a tooltip when the user hovers over the icon.", "Keep tooltips concise — one or two lines maximum."], synonyms: ["hint", "info popup", "hover text"], tag: "design" },
  "modal": { phonetic: "/ˈməʊdl/", meaning: "弹窗，模态框", examples: ["The modal appears when the user clicks 'Delete'.", "Avoid using modals for non-critical information."], synonyms: ["dialog", "popup", "overlay"], tag: "design" },
  "CTA": { phonetic: "/ˌsiː tiː ˈeɪ/", meaning: "行动号召按钮（Call To Action）", examples: ["Make the CTA button more prominent.", "The CTA should clearly state what happens when clicked."], synonyms: ["call to action", "action button", "conversion button"], tag: "design" },
  "above the fold": { phonetic: "/əˌbʌv ðə ˈfoʊld/", meaning: "首屏可见区域", examples: ["Place the most important content above the fold.", "The hero image and CTA should be above the fold."], synonyms: ["visible area", "initial viewport", "first screen"], tag: "design" },
  "user-centric": { phonetic: "/ˈjuːzər ˈsentrɪk/", meaning: "以用户为中心的", examples: ["A user-centric approach starts with empathy research.", "User-centric design prioritizes usability over aesthetics."], synonyms: ["human-centered", "user-focused", "customer-first"], tag: "design" },
  "accessibility": { phonetic: "/ˌæksesəˈbɪlɪti/", meaning: "无障碍（设计/开发）", examples: ["Accessibility isn't optional — it's a requirement.", "Ensure your color choices pass accessibility standards."], synonyms: ["a11y", "inclusive design", "universal access"], tag: "design" },
  "handoff": { phonetic: "/ˈhændɔːf/", meaning: "设计交付（给开发）", examples: ["The design handoff includes specs, assets, and annotations.", "Use Figma for seamless design-to-dev handoff."], synonyms: ["delivery", "transfer", "spec handover"], tag: "design" },
  "moodboard": { phonetic: "/ˈmuːdbɔːrd/", meaning: "情绪板（设计灵感拼贴）", examples: ["Start the project by creating a moodboard.", "The moodboard captures the visual direction we want."], synonyms: ["inspiration board", "visual reference", "style collage"], tag: "design" },
  "brand identity": { phonetic: "/brænd aɪˈdentɪti/", meaning: "品牌识别", examples: ["The redesign should stay true to our brand identity.", "Brand identity includes logo, colors, tone of voice, and typography."], synonyms: ["branding", "visual identity", "brand image"], tag: "design" },
  "usability testing": { phonetic: "/ˌjuːzəˈbɪlɪti ˈtestɪŋ/", meaning: "可用性测试", examples: ["We run usability testing with five participants.", "Usability testing revealed that users couldn't find the search bar."], synonyms: ["user testing", "UX testing", "task-based testing"], tag: "design" },
  "information architecture": { phonetic: "/ˌɪnfərˈmeɪʃn ˈɑːrkɪtektʃər/", meaning: "信息架构", examples: ["Good information architecture makes content findable.", "Redo the information architecture before redesigning the navigation."], synonyms: ["IA", "content structure", "sitemap"], tag: "design" },
  "micro-interaction": { phonetic: "/ˈmaɪkroʊ ɪntərˈækʃn/", meaning: "微交互", examples: ["The like button has a satisfying micro-interaction.", "Micro-interactions make the interface feel alive."], synonyms: ["subtle animation", "feedback animation", "detail interaction"], tag: "design" },
  "dark pattern": { phonetic: "/dɑːrk ˈpætərn/", meaning: "暗黑模式（欺骗性设计）", examples: ["Hidden unsubscribe buttons are a dark pattern.", "Ethical design avoids dark patterns."], synonyms: ["deceptive design", "manipulative UX", "anti-pattern"], tag: "design" },

  // ═══ GENERAL / WORK ═══
  "stakeholder": { phonetic: "/ˈsteɪkhoʊldər/", meaning: "利益相关者", examples: ["We need to align all stakeholders before proceeding.", "Key stakeholders include the PM, designer, and engineering lead."], synonyms: ["interested party", "decision maker", "participant"], tag: "tech" },
  "deliverable": { phonetic: "/dɪˈlɪvərəbl/", meaning: "交付物", examples: ["What are the main deliverables for this phase?", "The final deliverable is a comprehensive report."], synonyms: ["output", "result", "product"], tag: "tech" },
  "actionable": { phonetic: "/ˈækʃənəbl/", meaning: "可执行的，有操作性的", examples: ["Give me actionable feedback, not vague comments.", "The data needs to be actionable to be useful."], synonyms: ["practical", "implementable", "doable"], tag: "tech" },
  "trade-off": { phonetic: "/ˈtreɪdɒf/", meaning: "权衡，取舍", examples: ["There's always a trade-off between speed and quality.", "We need to discuss the trade-offs before deciding."], synonyms: ["compromise", "balance", "exchange"], tag: "tech" },
  "streamline": { phonetic: "/ˈstriːmlaɪn/", meaning: "精简，优化流程", examples: ["We streamlined the approval process to save time.", "Streamlining operations reduced costs by 30%."], synonyms: ["simplify", "optimize", "make efficient"], tag: "tech" },
  "scalability": { phonetic: "/ˌskeɪləˈbɪlɪti/", meaning: "可扩展性", examples: ["Scalability is a top priority for our architecture.", "Think about scalability from day one."], synonyms: ["expandability", "growth potential", "flexibility"], tag: "tech" },
  "cohesive": { phonetic: "/kəʊˈhiːsɪv/", meaning: "有凝聚力的，一致的", examples: ["The design feels cohesive across all pages.", "We need a more cohesive brand experience."], synonyms: ["unified", "consistent", "harmonious"], tag: "design" },
  "intuitive": { phonetic: "/ɪnˈtuːɪtɪv/", meaning: "直觉的，易懂的", examples: ["The interface should be intuitive for first-time users.", "An intuitive design doesn't need a tutorial."], synonyms: ["user-friendly", "natural", "self-explanatory"], tag: "design" },
  "aesthetic": { phonetic: "/esˈθetɪk/", meaning: "美学的，审美", examples: ["The app has a clean, minimalist aesthetic.", "Don't sacrifice functionality for aesthetic appeal."], synonyms: ["visual style", "look and feel", "design sensibility"], tag: "design" },
  "empathy": { phonetic: "/ˈempəθi/", meaning: "共情，同理心", examples: ["Empathy is at the core of great UX design.", "Show empathy for users who struggle with technology."], synonyms: ["understanding", "compassion", "sensitivity"], tag: "design" },

  // ═══ COMMON PHRASES & IDIOMS ═══
  "sleep on it": { phonetic: "", meaning: "考虑一晚再做决定", examples: ["That's a big decision — why don't you sleep on it?", "I'll sleep on it and give you an answer tomorrow."], synonyms: ["think it over", "mull it over", "take time to decide"], tag: "daily" },
  "break the ice": { phonetic: "", meaning: "打破僵局，活跃气氛", examples: ["He told a joke to break the ice at the meeting.", "A good icebreaker helps break the ice at parties."], synonyms: ["start a conversation", "ease tension", "warm up"], tag: "daily" },
  "a piece of cake": { phonetic: "", meaning: "小菜一碟，很容易", examples: ["The test was a piece of cake.", "Don't worry, fixing this bug will be a piece of cake."], synonyms: ["easy", "simple", "no problem"], tag: "daily" },
  "hit the nail on the head": { phonetic: "", meaning: "说得非常准确，一针见血", examples: ["You hit the nail on the head with that analysis.", "She really hit the nail on the head about what's wrong with the design."], synonyms: ["be exactly right", "be spot on", "nail it"], tag: "daily" },
  "on the same page": { phonetic: "", meaning: "意见一致，达成共识", examples: ["Let's make sure we're all on the same page before the launch.", "Are we on the same page about the timeline?"], synonyms: ["in agreement", "aligned", "in sync"], tag: "tech" },
  "the ball is in your court": { phonetic: "", meaning: "轮到你做决定了", examples: ["I've made my offer — the ball is in your court.", "We've done our part, now the ball is in the client's court."], synonyms: ["it's your turn", "up to you", "your move"], tag: "daily" },
  "think outside the box": { phonetic: "", meaning: "跳出框架思考，创新思维", examples: ["We need to think outside the box to solve this problem.", "The best designers think outside the box."], synonyms: ["be creative", "innovate", "be unconventional"], tag: "design" },
  "cut corners": { phonetic: "", meaning: "偷工减料，走捷径", examples: ["Don't cut corners on security.", "We can't cut corners — quality matters."], synonyms: ["take shortcuts", "economize", "skimp"], tag: "tech" },
  "get the hang of": { phonetic: "", meaning: "掌握窍门，学会", examples: ["Once you get the hang of it, it's really easy.", "I'm starting to get the hang of this new framework."], synonyms: ["learn", "master", "become proficient"], tag: "daily" },
  "wrap up": { phonetic: "", meaning: "结束，收尾", examples: ["Let's wrap up the meeting — we're running over time.", "I need to wrap up this project by Friday."], synonyms: ["finish", "conclude", "complete"], tag: "tech" },
  "back to square one": { phonetic: "", meaning: "回到起点，从头开始", examples: ["The client rejected the design, so we're back to square one.", "If this approach fails, we'll be back to square one."], synonyms: ["start over", "begin again", "restart"], tag: "daily" },
  "keep someone in the loop": { phonetic: "", meaning: "让某人了解最新情况", examples: ["Please keep me in the loop on any updates.", "Make sure to keep the stakeholders in the loop."], synonyms: ["inform", "update", "notify"], tag: "tech" },
  "go the extra mile": { phonetic: "", meaning: "付出额外努力", examples: ["She always goes the extra mile for her clients.", "Going the extra mile sets you apart from competitors."], synonyms: ["make extra effort", "exceed expectations", "do more"], tag: "daily" },
  "rule of thumb": { phonetic: "", meaning: "经验法则，大致规则", examples: ["As a rule of thumb, keep your functions under 20 lines.", "A good rule of thumb is to save 20% of your income."], synonyms: ["guideline", "general principle", "rough estimate"], tag: "tech" },
  "at the end of the day": { phonetic: "", meaning: "归根结底，最终", examples: ["At the end of the day, user experience is what matters most.", "At the end of the day, it's your decision."], synonyms: ["ultimately", "in the end", "when all is said and done"], tag: "daily" },

  // ═══ EXPANDED DAILY LIFE — Conversations & Social ═══
  "awkward": { phonetic: "/ˈɔːkwəd/", meaning: "尴尬的，笨拙的", examples: ["There was an awkward silence after he said that.", "I felt awkward meeting her parents for the first time."], synonyms: ["uncomfortable", "clumsy", "embarrassing"], tag: "daily" },
  "grateful": { phonetic: "/ˈɡreɪtfʊl/", meaning: "感激的", examples: ["I'm really grateful for your help.", "She was grateful to have such supportive friends."], synonyms: ["thankful", "appreciative", "obliged"], tag: "daily" },
  "genuine": { phonetic: "/ˈdʒenjuɪn/", meaning: "真正的，真诚的", examples: ["He seems like a genuine person.", "That was a genuine smile, not a fake one."], synonyms: ["authentic", "real", "sincere"], tag: "daily" },
  "hilarious": { phonetic: "/hɪˈleəriəs/", meaning: "极其搞笑的", examples: ["That comedy show was absolutely hilarious.", "She told a hilarious story about her cat."], synonyms: ["very funny", "hysterical", "amusing"], tag: "daily" },
  "stunning": { phonetic: "/ˈstʌnɪŋ/", meaning: "令人惊叹的，极漂亮的", examples: ["The view from the top was stunning.", "She looked stunning in that dress."], synonyms: ["gorgeous", "breathtaking", "beautiful"], tag: "daily" },
  "hang out": { phonetic: "", meaning: "闲逛，一起玩", examples: ["Let's hang out this weekend.", "We usually hang out at the coffee shop after work."], synonyms: ["spend time", "chill", "socialize"], tag: "daily" },
  "figure out": { phonetic: "", meaning: "弄明白，想出", examples: ["I can't figure out how to use this app.", "We need to figure out a solution quickly."], synonyms: ["solve", "work out", "understand"], tag: "daily" },
  "catch up": { phonetic: "", meaning: "叙旧，赶上进度", examples: ["Let's catch up over coffee sometime.", "I need to catch up on my emails."], synonyms: ["reconnect", "get up to speed", "update"], tag: "daily" },
  "vibe": { phonetic: "/vaɪb/", meaning: "氛围，感觉", examples: ["This café has a really nice vibe.", "I got a weird vibe from that place."], synonyms: ["atmosphere", "feeling", "energy"], tag: "daily" },
  "chill": { phonetic: "/tʃɪl/", meaning: "放松，冷静的", examples: ["Let's just chill at home tonight.", "He's a really chill guy."], synonyms: ["relax", "laid-back", "calm"], tag: "daily" },
  "ghosting": { phonetic: "/ˈɡəʊstɪŋ/", meaning: "突然不回消息（社交中）", examples: ["She started ghosting me after the third date.", "Ghosting is really hurtful behavior."], synonyms: ["ignoring", "disappearing", "cutting off"], tag: "slang" },
  "cringe": { phonetic: "/krɪndʒ/", meaning: "让人尴尬的，社死", examples: ["That joke was so cringe.", "I cringe every time I think about what I said."], synonyms: ["embarrassing", "awkward", "uncomfortable"], tag: "slang" },
  "lowkey": { phonetic: "/ˌləʊˈkiː/", meaning: "暗地里，有一点", examples: ["I lowkey want to skip the party.", "She's lowkey the smartest person in the room."], synonyms: ["secretly", "quietly", "subtly"], tag: "slang" },
  "salty": { phonetic: "/ˈsɔːlti/", meaning: "（俚语）生气的，不爽的", examples: ["He's still salty about losing the game.", "Don't be so salty — it was just a joke."], synonyms: ["bitter", "upset", "annoyed"], tag: "daily" },
  "FOMO": { phonetic: "/ˈfəʊməʊ/", meaning: "错过恐惧症", examples: ["I have serious FOMO when I see everyone at the party.", "Social media gives me FOMO."], synonyms: ["fear of missing out", "anxiety", "envy"], tag: "daily" },
  "subtle": { phonetic: "/ˈsʌtl/", meaning: "微妙的，不明显的", examples: ["There's a subtle difference between the two colors.", "He gave a subtle hint that he was bored."], synonyms: ["understated", "delicate", "slight"], tag: "daily" },
  "toxic": { phonetic: "/ˈtɒksɪk/", meaning: "有毒的，（关系）不健康的", examples: ["That was a really toxic work environment.", "She finally left the toxic relationship."], synonyms: ["harmful", "unhealthy", "poisonous"], tag: "daily" },
  "boundaries": { phonetic: "/ˈbaʊndəriz/", meaning: "界限，边界", examples: ["It's important to set boundaries at work.", "She needs to respect my boundaries."], synonyms: ["limits", "borders", "lines"], tag: "daily" },
  "overwhelmed": { phonetic: "/ˌəʊvəˈwelmd/", meaning: "不堪重负的，被压垮的", examples: ["I feel overwhelmed by all the deadlines.", "She was overwhelmed with emotion."], synonyms: ["swamped", "stressed", "overloaded"], tag: "daily" },
  "literally": { phonetic: "/ˈlɪtərəli/", meaning: "字面上地；（口语）简直", examples: ["I literally just walked in the door.", "I'm literally dying of laughter."], synonyms: ["actually", "truly", "really"], tag: "daily" },
  "random": { phonetic: "/ˈrændəm/", meaning: "随机的，莫名其妙的", examples: ["That was such a random thing to say.", "I got a random text from an unknown number."], synonyms: ["arbitrary", "unexpected", "haphazard"], tag: "daily" },
  "iconic": { phonetic: "/aɪˈkɒnɪk/", meaning: "标志性的，经典的", examples: ["That scene in the movie is absolutely iconic.", "She has an iconic fashion style."], synonyms: ["legendary", "classic", "symbolic"], tag: "daily" },
  "wholesome": { phonetic: "/ˈhəʊlsəm/", meaning: "温馨的，正能量的", examples: ["That video of the dog was so wholesome.", "They have a really wholesome relationship."], synonyms: ["heartwarming", "sweet", "pure"], tag: "daily" },
  "relatable": { phonetic: "/rɪˈleɪtəbl/", meaning: "有共鸣的", examples: ["Her comedy is so relatable.", "That meme is really relatable."], synonyms: ["understandable", "identifiable", "familiar"], tag: "daily" },
  "savage": { phonetic: "/ˈsævɪdʒ/", meaning: "（俚语）犀利的，毒舌的", examples: ["That comeback was absolutely savage.", "She's savage — she doesn't hold back."], synonyms: ["brutal", "fierce", "ruthless"], tag: "daily" },
  "flex": { phonetic: "/fleks/", meaning: "炫耀", examples: ["He's always flexing his new car on Instagram.", "That's a weird flex but okay."], synonyms: ["show off", "brag", "flaunt"], tag: "daily" },
  "sus": { phonetic: "/sʌs/", meaning: "可疑的", examples: ["That excuse sounds really sus.", "He was acting sus the whole time."], synonyms: ["suspicious", "shady", "questionable"], tag: "daily" },
  "aesthetic": { phonetic: "/esˈθetɪk/", meaning: "美学的，有美感的", examples: ["I love the aesthetic of that café.", "Her Instagram has such a nice aesthetic."], synonyms: ["visual style", "look", "appearance"], tag: "daily" },
  "cozy": { phonetic: "/ˈkəʊzi/", meaning: "温馨舒适的", examples: ["This blanket is so cozy.", "We found a cozy little restaurant."], synonyms: ["comfortable", "snug", "warm"], tag: "daily" },
  "spontaneous": { phonetic: "/spɒnˈteɪniəs/", meaning: "自发的，随性的", examples: ["Let's be spontaneous and go on a road trip.", "She's a very spontaneous person."], synonyms: ["impulsive", "unplanned", "impromptu"], tag: "daily" },
  "overthink": { phonetic: "/ˌəʊvəˈθɪŋk/", meaning: "过度思考", examples: ["Stop overthinking it and just go for it.", "I tend to overthink everything."], synonyms: ["overanalyze", "worry", "ruminate"], tag: "daily" },
  "petty": { phonetic: "/ˈpeti/", meaning: "小气的，斤斤计较的", examples: ["Don't be so petty about who pays.", "That was a petty argument."], synonyms: ["trivial", "small-minded", "minor"], tag: "daily" },
  "legit": { phonetic: "/lɪˈdʒɪt/", meaning: "合法的，真实的", examples: ["Is this website legit?", "That was legit the best meal I've ever had."], synonyms: ["legitimate", "genuine", "real"], tag: "daily" },
  "shady": { phonetic: "/ˈʃeɪdi/", meaning: "可疑的，不正当的", examples: ["That deal sounds kind of shady.", "He's been acting shady lately."], synonyms: ["suspicious", "dubious", "questionable"], tag: "daily" },
  "down-to-earth": { phonetic: "", meaning: "脚踏实地的，接地气的", examples: ["She's famous but really down-to-earth.", "I like people who are down-to-earth."], synonyms: ["practical", "humble", "grounded"], tag: "daily" },
  "burnt out": { phonetic: "", meaning: "精疲力竭的", examples: ["I'm completely burnt out from work.", "Many employees feel burnt out after the pandemic."], synonyms: ["exhausted", "drained", "worn out"], tag: "daily" },
  "side hustle": { phonetic: "", meaning: "副业", examples: ["She has a side hustle selling handmade jewelry.", "Many people need a side hustle to make ends meet."], synonyms: ["part-time job", "gig", "freelance work"], tag: "daily" },
  "adulting": { phonetic: "/ˈædʌltɪŋ/", meaning: "做成人该做的事", examples: ["Paying bills is the worst part of adulting.", "I'm not good at adulting."], synonyms: ["being responsible", "growing up", "being mature"], tag: "daily" },
  "YOLO": { phonetic: "/ˈjəʊləʊ/", meaning: "人生只有一次", examples: ["I booked the trip. YOLO!", "YOLO is not a financial strategy."], synonyms: ["you only live once", "carpe diem", "seize the day"], tag: "daily" },
  "no-brainer": { phonetic: "", meaning: "显而易见的选择", examples: ["Accepting that job offer was a no-brainer.", "It's a no-brainer — just do it."], synonyms: ["obvious choice", "easy decision", "clear call"], tag: "daily" },
  "dealbreaker": { phonetic: "/ˈdiːlbreɪkə/", meaning: "不可接受的条件", examples: ["Smoking is a dealbreaker for me.", "That salary is a dealbreaker."], synonyms: ["non-negotiable", "disqualifier", "red flag"], tag: "daily" },

  // ═══ EXPANDED DAILY — Food & Travel ═══
  "foodie": { phonetic: "/ˈfuːdi/", meaning: "美食爱好者", examples: ["She's a real foodie — always trying new restaurants.", "This city is a paradise for foodies."], synonyms: ["food lover", "gourmet", "epicure"], tag: "daily" },
  "mouthwatering": { phonetic: "/ˈmaʊθwɔːtərɪŋ/", meaning: "令人垂涎的", examples: ["The dessert looked absolutely mouthwatering.", "She posted a mouthwatering photo of her dinner."], synonyms: ["delicious-looking", "appetizing", "tempting"], tag: "daily" },
  "bland": { phonetic: "/blænd/", meaning: "淡而无味的", examples: ["The soup was a bit bland — it needed more salt.", "Hospital food is notoriously bland."], synonyms: ["tasteless", "plain", "flavorless"], tag: "daily" },
  "jet lag": { phonetic: "/ˈdʒet læɡ/", meaning: "时差反应", examples: ["I always get terrible jet lag flying to Europe.", "It took me three days to recover from jet lag."], synonyms: ["time zone fatigue", "travel fatigue"], tag: "daily" },
  "itinerary": { phonetic: "/aɪˈtɪnərəri/", meaning: "行程安排", examples: ["What's our itinerary for tomorrow?", "She planned a detailed itinerary for the trip."], synonyms: ["schedule", "plan", "route"], tag: "daily" },
  "bucket list": { phonetic: "", meaning: "人生愿望清单", examples: ["Visiting Japan is on my bucket list.", "I'm slowly checking things off my bucket list."], synonyms: ["wish list", "life goals", "dream list"], tag: "daily" },
  "wanderlust": { phonetic: "/ˈwɒndəlʌst/", meaning: "旅行的渴望", examples: ["I have serious wanderlust — I want to travel everywhere.", "Her Instagram feed is full of wanderlust."], synonyms: ["travel bug", "desire to travel", "restlessness"], tag: "daily" },
  "souvenir": { phonetic: "/ˌsuːvəˈnɪə/", meaning: "纪念品", examples: ["I bought a souvenir for my mom.", "The best souvenirs are the memories you make."], synonyms: ["memento", "keepsake", "token"], tag: "daily" },

  // ═══ EXPANDED DAILY — Emotions & Mindset ═══
  "anxious": { phonetic: "/ˈæŋkʃəs/", meaning: "焦虑的", examples: ["I feel anxious about the interview tomorrow.", "Don't be so anxious — everything will be fine."], synonyms: ["worried", "nervous", "uneasy"], tag: "daily" },
  "motivated": { phonetic: "/ˈməʊtɪveɪtɪd/", meaning: "有动力的", examples: ["I feel really motivated after watching that video.", "She's highly motivated to succeed."], synonyms: ["driven", "inspired", "determined"], tag: "daily" },
  "insecure": { phonetic: "/ˌɪnsɪˈkjʊə/", meaning: "没有安全感的，不自信的", examples: ["He feels insecure about his English.", "Social media makes people feel insecure."], synonyms: ["self-conscious", "uncertain", "unconfident"], tag: "daily" },
  "mindful": { phonetic: "/ˈmaɪndfʊl/", meaning: "正念的，留心的", examples: ["Try to be more mindful of your spending.", "Mindful meditation can reduce stress."], synonyms: ["aware", "conscious", "attentive"], tag: "daily" },
  "nostalgic": { phonetic: "/nɒˈstældʒɪk/", meaning: "怀旧的", examples: ["This song makes me feel nostalgic.", "I'm feeling nostalgic for my college days."], synonyms: ["sentimental", "wistful", "longing"], tag: "daily" },
  "frustrated": { phonetic: "/frʌˈstreɪtɪd/", meaning: "沮丧的，受挫的", examples: ["I'm so frustrated with this bug.", "He got frustrated and gave up."], synonyms: ["annoyed", "irritated", "disappointed"], tag: "daily" },
  "grateful": { phonetic: "/ˈɡreɪtfʊl/", meaning: "感恩的", examples: ["I'm grateful for everything you've done.", "Keep a grateful journal."], synonyms: ["thankful", "appreciative"], tag: "daily" },
  "vulnerable": { phonetic: "/ˈvʌlnərəbl/", meaning: "脆弱的，易受伤的", examples: ["It takes courage to be vulnerable.", "Children are especially vulnerable."], synonyms: ["exposed", "sensitive", "defenseless"], tag: "daily" },
  "empathy": { phonetic: "/ˈempəθi/", meaning: "共情，同理心", examples: ["She has a lot of empathy for others.", "Empathy is an important leadership skill."], synonyms: ["compassion", "understanding", "sensitivity"], tag: "daily" },

  // ═══ EXPANDED TECH & WORK — Common workplace ═══
  "deadline": { phonetic: "/ˈdedlaɪn/", meaning: "截止日期", examples: ["The deadline is next Friday.", "We need to meet the deadline no matter what."], synonyms: ["due date", "time limit", "cutoff"], tag: "tech" },
  "prioritize": { phonetic: "/praɪˈɒrɪtaɪz/", meaning: "排优先级", examples: ["We need to prioritize the most critical bugs.", "Learn to prioritize your tasks."], synonyms: ["rank", "order", "focus on"], tag: "tech" },
  "bottleneck": { phonetic: "/ˈbɒtlnek/", meaning: "瓶颈", examples: ["The API is the bottleneck in our system.", "We need to identify the bottleneck in the process."], synonyms: ["obstacle", "constraint", "chokepoint"], tag: "tech" },
  "workaround": { phonetic: "/ˈwɜːkəraʊnd/", meaning: "变通方法", examples: ["We found a workaround for the bug.", "It's not ideal, but it's a workaround."], synonyms: ["temporary fix", "hack", "alternative"], tag: "tech" },
  "blocker": { phonetic: "/ˈblɒkə/", meaning: "阻碍因素", examples: ["This bug is a blocker for the release.", "What's the main blocker right now?"], synonyms: ["obstacle", "impediment", "barrier"], tag: "tech" },
  "bandwidth": { phonetic: "/ˈbændwɪdθ/", meaning: "带宽；（俚语）精力/时间", examples: ["I don't have the bandwidth to take on another project.", "We need more bandwidth on the server."], synonyms: ["capacity", "resources", "availability"], tag: "tech" },
  "leverage": { phonetic: "/ˈlevərɪdʒ/", meaning: "利用，借助", examples: ["We can leverage this technology to improve efficiency.", "She leveraged her connections to get the job."], synonyms: ["utilize", "exploit", "capitalize on"], tag: "tech" },
  "streamline": { phonetic: "/ˈstriːmlaɪn/", meaning: "简化，精简流程", examples: ["We need to streamline our onboarding process.", "The new tool will streamline our workflow."], synonyms: ["simplify", "optimize", "make efficient"], tag: "tech" },
  "scalable": { phonetic: "/ˈskeɪləbl/", meaning: "可扩展的", examples: ["We need a more scalable architecture.", "Is this solution scalable?"], synonyms: ["expandable", "extensible", "flexible"], tag: "tech" },
  "onboard": { phonetic: "/ˈɒnbɔːd/", meaning: "入职培训，引导使用", examples: ["We need to onboard the new team member.", "The app has a great onboarding experience."], synonyms: ["orient", "train", "introduce"], tag: "tech" },
  "sync": { phonetic: "/sɪŋk/", meaning: "同步", examples: ["Let's sync up after lunch.", "Make sure your files are synced to the cloud."], synonyms: ["synchronize", "align", "coordinate"], tag: "tech" },
  "heads-up": { phonetic: "", meaning: "预先提醒", examples: ["Just a heads-up — the meeting has been moved to 3 PM.", "Thanks for the heads-up."], synonyms: ["warning", "notice", "alert"], tag: "tech" },
  "follow up": { phonetic: "", meaning: "跟进", examples: ["I'll follow up with the client tomorrow.", "Did you follow up on that issue?"], synonyms: ["check in", "revisit", "pursue"], tag: "tech" },
  "ETA": { phonetic: "/ˌiːtiːˈeɪ/", meaning: "预计到达/完成时间", examples: ["What's the ETA on that feature?", "My ETA is around 6 PM."], synonyms: ["estimated time", "timeline", "deadline"], tag: "tech" },
  "EOD": { phonetic: "/ˌiːəʊˈdiː/", meaning: "今天结束前", examples: ["Can you send me the report by EOD?", "I'll have it done by EOD."], synonyms: ["end of day", "by close of business", "today"], tag: "tech" },
  "ASAP": { phonetic: "/ˌeɪesˌeɪˈpiː/", meaning: "尽快", examples: ["We need this fixed ASAP.", "Please reply ASAP."], synonyms: ["as soon as possible", "immediately", "urgently"], tag: "tech" },
  "FYI": { phonetic: "/ˌefwaɪˈaɪ/", meaning: "供参考", examples: ["FYI, the meeting room has changed.", "Just FYI, I'll be out tomorrow."], synonyms: ["for your information", "just so you know", "heads up"], tag: "tech" },
  "TL;DR": { phonetic: "", meaning: "太长不看（摘要版）", examples: ["TL;DR: we need to redesign the homepage.", "Can you give me the TL;DR?"], synonyms: ["summary", "in short", "bottom line"], tag: "tech" },
  "scope": { phonetic: "/skəʊp/", meaning: "范围", examples: ["That's outside the scope of this project.", "We need to define the scope first."], synonyms: ["range", "extent", "boundaries"], tag: "tech" },
  "scope creep": { phonetic: "", meaning: "需求蔓延", examples: ["Scope creep is killing our timeline.", "We need to prevent scope creep."], synonyms: ["feature creep", "requirement expansion"], tag: "tech" },
  "trade-off": { phonetic: "", meaning: "权衡取舍", examples: ["There's always a trade-off between speed and quality.", "We need to discuss the trade-offs."], synonyms: ["compromise", "balance", "exchange"], tag: "tech" },
  "pain point": { phonetic: "", meaning: "痛点", examples: ["What are the main pain points for our users?", "This feature addresses a real pain point."], synonyms: ["problem", "issue", "frustration"], tag: "tech" },
  "touch base": { phonetic: "", meaning: "简单沟通一下", examples: ["Let's touch base next week.", "I just wanted to touch base on the project status."], synonyms: ["check in", "connect", "catch up"], tag: "tech" },
  "takeaway": { phonetic: "/ˈteɪkəweɪ/", meaning: "要点，收获", examples: ["What's the key takeaway from this meeting?", "My main takeaway is that we need to move faster."], synonyms: ["lesson", "insight", "conclusion"], tag: "tech" },
  "actionable": { phonetic: "/ˈækʃənəbl/", meaning: "可执行的", examples: ["We need actionable feedback, not vague suggestions.", "Make sure every task is actionable."], synonyms: ["practical", "doable", "implementable"], tag: "tech" },
  "deliverable": { phonetic: "/dɪˈlɪvərəbl/", meaning: "交付物", examples: ["What are the deliverables for this sprint?", "The final deliverable is due on Friday."], synonyms: ["output", "product", "result"], tag: "tech" },
  "stakeholder": { phonetic: "/ˈsteɪkhəʊldə/", meaning: "利益相关方", examples: ["We need to get buy-in from all stakeholders.", "The stakeholders approved the design."], synonyms: ["interested party", "participant", "investor"], tag: "tech" },
  "KPI": { phonetic: "/ˌkeɪpiːˈaɪ/", meaning: "关键绩效指标", examples: ["What KPIs are we tracking this quarter?", "Our main KPI is user retention."], synonyms: ["key performance indicator", "metric", "target"], tag: "tech" },
  "ROI": { phonetic: "/ˌɑːrəʊˈaɪ/", meaning: "投资回报率", examples: ["What's the ROI on this campaign?", "We need to prove the ROI before getting more budget."], synonyms: ["return on investment", "payback", "profit"], tag: "tech" },
  "pivot": { phonetic: "/ˈpɪvət/", meaning: "转型，调整方向", examples: ["The company decided to pivot to mobile.", "Sometimes you need to pivot when things aren't working."], synonyms: ["shift", "change direction", "adapt"], tag: "tech" },
  "disrupt": { phonetic: "/dɪsˈrʌpt/", meaning: "颠覆", examples: ["Uber disrupted the entire taxi industry.", "AI is disrupting traditional workflows."], synonyms: ["revolutionize", "transform", "shake up"], tag: "tech" },
  "cutting-edge": { phonetic: "", meaning: "前沿的，尖端的", examples: ["They're using cutting-edge technology.", "It's a cutting-edge research lab."], synonyms: ["state-of-the-art", "advanced", "innovative"], tag: "tech" },
  "hands-on": { phonetic: "", meaning: "动手实践的", examples: ["I prefer a hands-on approach to learning.", "She's a very hands-on manager."], synonyms: ["practical", "involved", "interactive"], tag: "tech" },
  "deep dive": { phonetic: "", meaning: "深入研究", examples: ["Let's do a deep dive into the analytics.", "This article is a deep dive into machine learning."], synonyms: ["thorough analysis", "detailed look", "in-depth study"], tag: "tech" },
  "low-hanging fruit": { phonetic: "", meaning: "容易实现的成果", examples: ["Let's start with the low-hanging fruit.", "These quick wins are low-hanging fruit."], synonyms: ["easy wins", "quick fixes", "simple tasks"], tag: "tech" },
  "boilerplate": { phonetic: "/ˈbɔɪləpleɪt/", meaning: "样板代码/模板", examples: ["This is just boilerplate code, nothing custom.", "We can use the boilerplate to get started quickly."], synonyms: ["template", "standard text", "generic code"], tag: "tech" },
  "edge case": { phonetic: "", meaning: "边界情况", examples: ["We need to handle this edge case.", "Don't forget about edge cases in your testing."], synonyms: ["corner case", "boundary condition", "unusual scenario"], tag: "tech" },
  "ship": { phonetic: "/ʃɪp/", meaning: "发布，交付（产品）", examples: ["We need to ship this feature by Friday.", "Move fast and ship things."], synonyms: ["release", "launch", "deliver"], tag: "tech" },
  "dogfood": { phonetic: "/ˈdɒɡfuːd/", meaning: "自己使用自己的产品", examples: ["We should dogfood our own app before releasing.", "Dogfooding helps you find real issues."], synonyms: ["eat your own cooking", "self-test", "use internally"], tag: "tech" },

  // ═══ EXPANDED DESIGN — UI/UX & Visual ═══
  "grid": { phonetic: "/ɡrɪd/", meaning: "网格", examples: ["The layout is based on a 12-column grid.", "Use the grid to align your elements."], synonyms: ["layout system", "columns", "framework"], tag: "design" },
  "responsive": { phonetic: "/rɪˈspɒnsɪv/", meaning: "响应式的", examples: ["The website needs to be responsive on mobile.", "Responsive design adapts to different screen sizes."], synonyms: ["adaptive", "flexible", "mobile-friendly"], tag: "design" },
  "contrast": { phonetic: "/ˈkɒntrɑːst/", meaning: "对比度", examples: ["The text needs more contrast against the background.", "Good contrast makes content more readable."], synonyms: ["difference", "distinction", "variation"], tag: "design" },
  "alignment": { phonetic: "/əˈlaɪnmənt/", meaning: "对齐", examples: ["Check the alignment of these buttons.", "Good alignment creates a sense of order."], synonyms: ["positioning", "arrangement", "lineup"], tag: "design" },
  "padding": { phonetic: "/ˈpædɪŋ/", meaning: "内边距", examples: ["Add more padding around the text.", "The padding is too tight on mobile."], synonyms: ["spacing", "margin", "buffer"], tag: "design" },
  "serif": { phonetic: "/ˈserɪf/", meaning: "衬线（字体）", examples: ["Serif fonts are more traditional and formal.", "Times New Roman is a classic serif font."], synonyms: ["decorative stroke", "typeface detail"], tag: "design" },
  "sans-serif": { phonetic: "/ˌsænˈserɪf/", meaning: "无衬线（字体）", examples: ["Most modern apps use sans-serif fonts.", "Helvetica is a famous sans-serif font."], synonyms: ["clean font", "modern typeface"], tag: "design" },
  "hover state": { phonetic: "", meaning: "悬停状态", examples: ["The button needs a hover state.", "Don't forget to design the hover state."], synonyms: ["mouseover", "interactive state", "rollover"], tag: "design" },
  "above the fold": { phonetic: "", meaning: "首屏（不需滚动就能看到的区域）", examples: ["Put the CTA above the fold.", "The key message should be above the fold."], synonyms: ["top of page", "visible area", "first screen"], tag: "design" },
  "CTA": { phonetic: "/ˌsiːtiːˈeɪ/", meaning: "行动号召按钮", examples: ["The CTA should be more prominent.", "What's the primary CTA on this page?"], synonyms: ["call to action", "button", "prompt"], tag: "design" },
  "wireframe": { phonetic: "/ˈwaɪəfreɪm/", meaning: "线框图", examples: ["Let me show you the wireframe first.", "We need to finalize the wireframes before design."], synonyms: ["sketch", "blueprint", "layout draft"], tag: "design" },
  "moodboard": { phonetic: "/ˈmuːdbɔːd/", meaning: "情绪板", examples: ["I created a moodboard for the new branding.", "The moodboard captures the visual direction."], synonyms: ["inspiration board", "visual reference", "collage"], tag: "design" },
  "drop shadow": { phonetic: "", meaning: "投影效果", examples: ["Add a subtle drop shadow to the card.", "Don't overuse drop shadows."], synonyms: ["shadow", "depth effect", "elevation"], tag: "design" },
  "opacity": { phonetic: "/əʊˈpæsəti/", meaning: "透明度", examples: ["Set the overlay opacity to 50%.", "Reduce the opacity of the background image."], synonyms: ["transparency", "alpha", "visibility"], tag: "design" },
  "gradient": { phonetic: "/ˈɡreɪdiənt/", meaning: "渐变", examples: ["Use a subtle gradient for the background.", "Gradients are trendy again in design."], synonyms: ["color transition", "blend", "fade"], tag: "design" },
  "icon set": { phonetic: "", meaning: "图标集", examples: ["We need a consistent icon set for the app.", "I'm using the Feather icon set."], synonyms: ["icon library", "icon pack", "symbol set"], tag: "design" },
  "dark mode": { phonetic: "", meaning: "暗色模式", examples: ["Does the app support dark mode?", "Dark mode is easier on the eyes at night."], synonyms: ["night mode", "dark theme", "low-light mode"], tag: "design" },
  "pixel-perfect": { phonetic: "", meaning: "像素级精确", examples: ["The implementation needs to be pixel-perfect.", "She's a pixel-perfect designer."], synonyms: ["precise", "exact", "meticulous"], tag: "design" },
  "breakpoint": { phonetic: "/ˈbreɪkpɔɪnt/", meaning: "断点（响应式设计）", examples: ["We have breakpoints at 768px and 1024px.", "The layout breaks at this breakpoint."], synonyms: ["threshold", "screen size", "media query"], tag: "design" },
  "handoff": { phonetic: "/ˈhændɒf/", meaning: "设计交付（给开发）", examples: ["The design handoff is scheduled for Monday.", "Use Figma for seamless handoff."], synonyms: ["delivery", "transfer", "pass-off"], tag: "design" },
  "red line": { phonetic: "", meaning: "标注（设计稿上的尺寸标注）", examples: ["I added red lines to the spec.", "Make sure the red lines are accurate."], synonyms: ["annotation", "specification", "markup"], tag: "design" },
  "brand guidelines": { phonetic: "", meaning: "品牌规范", examples: ["Please follow the brand guidelines.", "The brand guidelines specify the exact colors to use."], synonyms: ["style guide", "brand standards", "visual identity"], tag: "design" },
  "A/B test": { phonetic: "", meaning: "A/B测试", examples: ["Let's A/B test the two versions of the button.", "The A/B test showed a 15% improvement."], synonyms: ["split test", "experiment", "comparison test"], tag: "design" },
  "heuristic": { phonetic: "/hjʊˈrɪstɪk/", meaning: "启发式（评估）", examples: ["We did a heuristic evaluation of the design.", "Nielsen's heuristics are a good starting point."], synonyms: ["rule of thumb", "guideline", "principle"], tag: "design" },
  "affordance": { phonetic: "/əˈfɔːdəns/", meaning: "可供性（设计中暗示可操作性的特征）", examples: ["The button has good affordance — it looks clickable.", "Good affordance reduces the learning curve."], synonyms: ["usability cue", "interaction hint", "visual clue"], tag: "design" },
  "cognitive load": { phonetic: "", meaning: "认知负荷", examples: ["Too many options increase cognitive load.", "Reduce cognitive load by simplifying the interface."], synonyms: ["mental effort", "brain load", "complexity"], tag: "design" },
  "whitespace": { phonetic: "/ˈwaɪtspeɪs/", meaning: "留白", examples: ["Don't be afraid of whitespace.", "Good use of whitespace makes design breathe."], synonyms: ["negative space", "empty space", "breathing room"], tag: "design" },

  // ═══ EXPANDED DAILY — Internet & Pop Culture ═══
  "viral": { phonetic: "/ˈvaɪrəl/", meaning: "（网络上）病毒式传播的", examples: ["That video went viral overnight.", "She became famous after her tweet went viral."], synonyms: ["trending", "widespread", "popular"], tag: "daily" },
  "meme": { phonetic: "/miːm/", meaning: "梗，网络迷因", examples: ["This meme is hilarious.", "He's always sending me memes."], synonyms: ["internet joke", "viral image", "cultural reference"], tag: "daily" },
  "binge-watch": { phonetic: "", meaning: "一口气刷完（剧）", examples: ["I binge-watched the whole season in one night.", "It's the kind of show you just binge-watch."], synonyms: ["marathon-watch", "watch non-stop"], tag: "daily" },
  "spoiler": { phonetic: "/ˈspɔɪlə/", meaning: "剧透", examples: ["No spoilers please! I haven't seen it yet.", "She accidentally dropped a huge spoiler."], synonyms: ["plot reveal", "giveaway"], tag: "daily" },
  "binge": { phonetic: "/bɪndʒ/", meaning: "（无节制地）沉迷，狂看", examples: ["I binge-watched the entire series over the weekend.", "She went on a shopping binge."], synonyms: ["spree", "splurge", "marathon"], tag: "daily" },
  "streamer": { phonetic: "/ˈstriːmə/", meaning: "直播主播", examples: ["He's a popular gaming streamer on Twitch.", "Many streamers make a living from donations."], synonyms: ["broadcaster", "content creator", "live host"], tag: "daily" },
  "influencer": { phonetic: "/ˈɪnfluənsə/", meaning: "网红，有影响力的人", examples: ["She's a popular fashion influencer.", "Brands pay influencers to promote their products."], synonyms: ["content creator", "KOL", "opinion leader"], tag: "daily" },
  "clickbait": { phonetic: "/ˈklɪkbeɪt/", meaning: "标题党", examples: ["That article is pure clickbait.", "Don't fall for clickbait headlines."], synonyms: ["sensational headline", "misleading title"], tag: "daily" },
  "algorithm": { phonetic: "/ˈælɡərɪðəm/", meaning: "算法", examples: ["The algorithm decides what you see on social media.", "I think the algorithm knows me too well."], synonyms: ["formula", "procedure", "system"], tag: "daily" },
  "notification": { phonetic: "/ˌnəʊtɪfɪˈkeɪʃn/", meaning: "通知提醒", examples: ["I turned off all notifications to focus.", "The constant notifications are distracting."], synonyms: ["alert", "reminder", "ping"], tag: "daily" },
  "screenshot": { phonetic: "/ˈskriːnʃɒt/", meaning: "截图", examples: ["Can you send me a screenshot?", "I took a screenshot of the error message."], synonyms: ["screen capture", "snap", "screen grab"], tag: "daily" },
  "lag": { phonetic: "/læɡ/", meaning: "卡顿，延迟", examples: ["The game has terrible lag.", "There's a slight lag in the video call."], synonyms: ["delay", "latency", "slowdown"], tag: "daily" },
  "glitch": { phonetic: "/ɡlɪtʃ/", meaning: "小故障", examples: ["There's a glitch in the app.", "It was just a minor glitch."], synonyms: ["bug", "error", "malfunction"], tag: "daily" },
  "scroll": { phonetic: "/skrəʊl/", meaning: "滚动浏览", examples: ["I spent an hour scrolling through Instagram.", "Just scroll down to find the button."], synonyms: ["browse", "swipe", "navigate"], tag: "daily" },
  "DM": { phonetic: "/ˌdiːˈem/", meaning: "私信", examples: ["She slid into my DMs.", "Just DM me the details."], synonyms: ["direct message", "private message", "PM"], tag: "daily" },
  "IRL": { phonetic: "/ˌaɪɑːrˈel/", meaning: "在现实生活中", examples: ["She's even nicer IRL than online.", "Have you ever met IRL?"], synonyms: ["in real life", "offline", "face to face"], tag: "daily" },
  "GOAT": { phonetic: "/ɡəʊt/", meaning: "史上最强（Greatest Of All Time）", examples: ["Messi is the GOAT.", "That album is the GOAT of hip-hop."], synonyms: ["greatest of all time", "best ever", "legend"], tag: "daily" },
  "slay": { phonetic: "/sleɪ/", meaning: "（俚语）太厉害了，杀疯了", examples: ["She absolutely slayed that performance.", "You slay every time!"], synonyms: ["dominate", "crush it", "kill it"], tag: "daily" },
  "tea": { phonetic: "/tiː/", meaning: "（俚语）八卦", examples: ["Spill the tea! What happened?", "I heard some tea about them."], synonyms: ["gossip", "drama", "scoop"], tag: "daily" },
  "cap": { phonetic: "/kæp/", meaning: "（俚语）说谎 / no cap = 不骗你", examples: ["That's cap — I don't believe you.", "No cap, that was the best movie I've ever seen."], synonyms: ["lie", "falsehood", "untruth"], tag: "daily" },
  "lit": { phonetic: "/lɪt/", meaning: "（俚语）很嗨，很精彩", examples: ["The party was absolutely lit.", "This song is so lit."], synonyms: ["amazing", "exciting", "awesome"], tag: "slang" },

  // ═══ SLANG & EVERYDAY PHRASES ═══
  "no worries": { phonetic: "", meaning: "没关系，不用担心", examples: ["No worries, I'll handle it.", "Thanks! — No worries at all."], synonyms: ["no problem", "it's fine", "don't mention it"], tag: "slang" },
  "my bad": { phonetic: "", meaning: "我的错", examples: ["Oh, my bad — I didn't see your message.", "My bad, I forgot to mention it."], synonyms: ["sorry", "my mistake", "my fault"], tag: "slang" },
  "I'm down": { phonetic: "", meaning: "我愿意/我参加", examples: ["Wanna grab dinner? — Yeah, I'm down.", "I'm down for whatever."], synonyms: ["I'm in", "count me in", "sure"], tag: "slang" },
  "that's a wrap": { phonetic: "", meaning: "结束了，搞定了", examples: ["That's a wrap for today's meeting.", "And that's a wrap on the project!"], synonyms: ["done", "finished", "all done"], tag: "slang" },
  "you do you": { phonetic: "", meaning: "你做你自己就好", examples: ["I don't agree, but you do you.", "Life's too short — you do you."], synonyms: ["be yourself", "do your thing", "to each their own"], tag: "slang" },
  "on point": { phonetic: "", meaning: "很到位，很棒", examples: ["Her outfit is on point today.", "The presentation was on point."], synonyms: ["perfect", "spot on", "flawless"], tag: "slang" },
  "keep it real": { phonetic: "", meaning: "保持真实，不装", examples: ["I respect people who keep it real.", "Just keep it real with me."], synonyms: ["be honest", "be genuine", "stay true"], tag: "slang" },
  "big deal": { phonetic: "", meaning: "大事/了不起（常用于反讽）", examples: ["It's not a big deal, don't worry.", "What's the big deal?"], synonyms: ["important matter", "fuss", "commotion"], tag: "slang" },
  "a piece of cake": { phonetic: "", meaning: "小菜一碟", examples: ["The exam was a piece of cake.", "Don't worry, it'll be a piece of cake."], synonyms: ["easy", "simple", "effortless"], tag: "slang" },
  "break the ice": { phonetic: "", meaning: "打破僵局", examples: ["He told a joke to break the ice.", "It's hard to break the ice at networking events."], synonyms: ["start a conversation", "warm up", "ease tension"], tag: "slang" },
  "spill the beans": { phonetic: "", meaning: "泄露秘密", examples: ["Come on, spill the beans — what happened?", "She accidentally spilled the beans about the surprise."], synonyms: ["reveal", "let out", "disclose"], tag: "slang" },
  "hit the nail on the head": { phonetic: "", meaning: "说得一针见血", examples: ["You hit the nail on the head with that comment.", "Her analysis hit the nail on the head."], synonyms: ["be exactly right", "be spot on", "nailed it"], tag: "slang" },
  "under the weather": { phonetic: "", meaning: "身体不舒服", examples: ["I'm feeling a bit under the weather today.", "She called in sick — she's under the weather."], synonyms: ["unwell", "sick", "not feeling well"], tag: "slang" },
  "call it a day": { phonetic: "", meaning: "到此为止，收工", examples: ["It's 6 PM, let's call it a day.", "I'm tired — I'm gonna call it a day."], synonyms: ["stop working", "wrap up", "finish"], tag: "slang" },
  "on the same page": { phonetic: "", meaning: "达成共识", examples: ["Let's make sure we're on the same page.", "Are we on the same page about the deadline?"], synonyms: ["in agreement", "aligned", "synchronized"], tag: "slang" },
  "sleep on it": { phonetic: "", meaning: "考虑一晚再决定", examples: ["Don't decide now — sleep on it.", "I'll sleep on it and let you know tomorrow."], synonyms: ["think it over", "take time", "consider"], tag: "slang" },
  "get the hang of": { phonetic: "", meaning: "掌握窍门", examples: ["It takes a while to get the hang of it.", "I'm starting to get the hang of this software."], synonyms: ["learn", "master", "understand"], tag: "slang" },
  "out of the loop": { phonetic: "", meaning: "不知情，脱节", examples: ["I've been out of the loop — what happened?", "Sorry, I'm a bit out of the loop on this."], synonyms: ["uninformed", "unaware", "behind"], tag: "slang" },
  "the elephant in the room": { phonetic: "", meaning: "房间里的大象（大家回避的问题）", examples: ["Let's address the elephant in the room.", "Nobody wants to talk about the elephant in the room."], synonyms: ["obvious problem", "unspoken issue", "taboo topic"], tag: "slang" },
  "play it by ear": { phonetic: "", meaning: "到时候再说，随机应变", examples: ["I don't have a plan — let's play it by ear.", "We'll play it by ear depending on the weather."], synonyms: ["improvise", "wing it", "see how it goes"], tag: "slang" },
  "it is what it is": { phonetic: "", meaning: "事已至此，无法改变", examples: ["The deadline is tomorrow. It is what it is.", "I didn't get the job, but it is what it is."], synonyms: ["accept it", "that's life", "nothing to do"], tag: "slang" },
  "24/7": { phonetic: "/ˌtwentiˌfɔːˈsevn/", meaning: "全天候，一直", examples: ["This store is open 24/7.", "She works 24/7 — she never stops."], synonyms: ["always", "non-stop", "around the clock"], tag: "slang" },
  "give it a shot": { phonetic: "", meaning: "试一试", examples: ["I've never tried sushi, but I'll give it a shot.", "Just give it a shot — you have nothing to lose."], synonyms: ["try", "attempt", "have a go"], tag: "slang" },
  "nailed it": { phonetic: "", meaning: "做得太好了，完美", examples: ["Your presentation? You absolutely nailed it.", "She nailed the interview."], synonyms: ["aced it", "killed it", "crushed it"], tag: "slang" },
  "mind-blowing": { phonetic: "", meaning: "令人震惊的，不可思议的", examples: ["The special effects were mind-blowing.", "She shared some mind-blowing statistics."], synonyms: ["amazing", "incredible", "astonishing"], tag: "slang" },
  "the real deal": { phonetic: "", meaning: "真材实料，货真价实", examples: ["This restaurant is the real deal.", "She's the real deal — incredibly talented."], synonyms: ["authentic", "genuine", "legitimate"], tag: "slang" },
  "throw shade": { phonetic: "", meaning: "暗中嘲讽", examples: ["Was she throwing shade at me?", "He threw shade at his competitor during the interview."], synonyms: ["diss", "insult subtly", "mock"], tag: "slang" },
  "dead": { phonetic: "/ded/", meaning: "（俚语）笑死了", examples: ["That meme has me dead.", "I'm dead — that's the funniest thing I've ever seen."], synonyms: ["dying of laughter", "hilarious", "can't stop laughing"], tag: "slang" },
  "rent-free": { phonetic: "", meaning: "（某人/事）总在脑海里", examples: ["That song is living in my head rent-free.", "He's living rent-free in my mind."], synonyms: ["stuck in your head", "obsessed", "can't stop thinking about"], tag: "slang" },
  "main character energy": { phonetic: "", meaning: "主角光环/气场", examples: ["She walked in with main character energy.", "Today I'm giving main character energy."], synonyms: ["confidence", "protagonist vibe", "star quality"], tag: "slang" },
};


// ───────── Auto-lookup dictionary for unknown words ─────────
async function autoLookup(word) {
  const w = word.toLowerCase().trim();
  // Already in DB
  if (WORD_DB[w]) return WORD_DB[w];
  
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(w)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    
    const entry = data[0];
    // Prefer British phonetic
    const phonetics = entry.phonetics || [];
    const britishPh = phonetics.find(p => p.text && (p.audio || '').includes('uk'));
    const anyPh = phonetics.find(p => p.text);
    const phonetic = britishPh?.text || entry.phonetic || anyPh?.text || '';
    const meanings = entry.meanings || [];
    const firstDef = meanings[0]?.definitions?.[0];
    const enMeaning = firstDef?.definition || '';
    const example = firstDef?.example || '';
    const synonyms = (firstDef?.synonyms || []).slice(0, 4);
    
    // Translate to Chinese via MyMemory API
    let meaning = enMeaning;
    if (enMeaning) {
      try {
        const trRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(enMeaning.slice(0, 200))}&langpair=en|zh-CN`);
        const trData = await trRes.json();
        const cnText = trData?.responseData?.translatedText;
        if (cnText && cnText !== enMeaning && !cnText.includes('MYMEMORY')) {
          meaning = cnText;
        }
      } catch {}
    }
    
    return { phonetic, meaning, examples: example ? [example] : [], synonyms, tag: '' };
  } catch {
    return null;
  }
}

// ───────── Recommended Daily Words Pool ─────────
// Pre-built list of words for daily auto-push (system picks 30/day based on date)
const DAILY_WORD_POOL = Object.keys(WORD_DB);

function getDailyRecommendedWords(existingWords, masteredWords) {
  const today = todayStr();
  const seed = today.split('-').join('');
  const seedNum = parseInt(seed, 10);
  
  const pool = [...DAILY_WORD_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = (seedNum * (i + 1) + 7919) % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const existingSet = new Set(existingWords.map(w => w.word.toLowerCase()));
  const masteredSet = new Set((masteredWords || []).map(w => w.toLowerCase()));
  const available = pool.filter(w => !existingSet.has(w.toLowerCase()) && !masteredSet.has(w.toLowerCase()));
  
  return available.slice(0, 30);
}

// ───────── YouTube Data API v3 ─────────
const YTApi = {
  KEY: 'AIzaSyBDvV2zlechm8PnvMK7W-bEZlZe6hdz6Lo',
  BASE: 'https://www.googleapis.com/youtube/v3',
  _cache: {},
  _DISK_KEY: 'ytapi_cache',
  _CACHE_TTL: 24 * 60 * 60 * 1000, // 24h

  _loadDiskCache() {
    try {
      const raw = localStorage.getItem(this._DISK_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      const now = Date.now();
      // prune expired entries
      for (const k of Object.keys(parsed)) {
        if (now - parsed[k].ts > this._CACHE_TTL) delete parsed[k];
      }
      return parsed;
    } catch { return {}; }
  },
  _saveDiskCache(url, data) {
    try {
      const disk = this._loadDiskCache();
      disk[url] = { data, ts: Date.now() };
      localStorage.setItem(this._DISK_KEY, JSON.stringify(disk));
    } catch {}
  },

  async _fetch(endpoint, params) {
    params.key = this.KEY;
    const qs = new URLSearchParams(params).toString();
    const url = `${this.BASE}/${endpoint}?${qs}`;
    // memory cache
    if (this._cache[url]) return this._cache[url];
    // disk cache (localStorage)
    const disk = this._loadDiskCache();
    if (disk[url]) {
      this._cache[url] = disk[url].data;
      return disk[url].data;
    }
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      this._cache[url] = data;
      this._saveDiskCache(url, data);
      return data;
    } catch { return null; }
  },

  // Get channel info (avatar, id) by handle/name
  _channelInfoCache: null,
  _loadChannelInfoCache() {
    if (this._channelInfoCache) return this._channelInfoCache;
    try {
      const raw = localStorage.getItem('ytapi_channel_info');
      this._channelInfoCache = raw ? JSON.parse(raw) : {};
    } catch { this._channelInfoCache = {}; }
    return this._channelInfoCache;
  },
  _saveChannelInfo(handle, info) {
    const cache = this._loadChannelInfoCache();
    cache[handle.toLowerCase()] = { ...info, ts: Date.now() };
    this._channelInfoCache = cache;
    try { localStorage.setItem('ytapi_channel_info', JSON.stringify(cache)); } catch {}
  },
  async getChannelInfo(handle) {
    // Check local cache first (24h TTL)
    const cache = this._loadChannelInfoCache();
    const cached = cache[handle.toLowerCase()];
    if (cached && (Date.now() - cached.ts < this._CACHE_TTL)) {
      return { id: cached.id, name: cached.name, avatar: cached.avatar };
    }
    // Try by handle first (@username)
    let data = await this._fetch('channels', { part: 'snippet', forHandle: handle });
    if (!data?.items?.length) {
      // Fallback: search for channel
      data = await this._fetch('search', { part: 'snippet', q: handle, type: 'channel', maxResults: '1' });
      if (data?.items?.length) {
        const chId = data.items[0].snippet.channelId;
        const chData = await this._fetch('channels', { part: 'snippet', id: chId });
        if (chData?.items?.length) {
          const s = chData.items[0].snippet;
          const result = { id: chId, name: s.title, avatar: s.thumbnails?.default?.url || '' };
          this._saveChannelInfo(handle, result);
          return result;
        }
      }
      return null;
    }
    const item = data.items[0];
    const result = { id: item.id, name: item.snippet.title, avatar: item.snippet.thumbnails?.default?.url || '' };
    this._saveChannelInfo(handle, result);
    return result;
  },

  // Get video details (title, duration)
  async getVideoDetails(videoId) {
    const data = await this._fetch('videos', { part: 'snippet,contentDetails', id: videoId });
    if (!data?.items?.length) return null;
    const item = data.items[0];
    const duration = this._parseDuration(item.contentDetails?.duration || '');
    return { title: item.snippet.title, duration, thumbnail: item.snippet.thumbnails?.medium?.url || '' };
  },

  // Parse ISO 8601 duration (PT4M13S → "4:13")
  _parseDuration(iso) {
    const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!m) return '';
    const h = parseInt(m[1] || '0');
    const min = parseInt(m[2] || '0');
    const sec = parseInt(m[3] || '0');
    if (h > 0) return `${h}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    return `${min}:${String(sec).padStart(2,'0')}`;
  },
};

// ───────── Daily Sentences Database ─────────
const DAILY_SENTENCES = [
  { scene: "Workplace - Meeting", en: "I see your point, but I'd like to offer a different perspective.", zh: "我理解你的观点，但我想提供一个不同的视角。", context: "Use this when you want to politely disagree or add a different viewpoint during a meeting. It shows respect while standing your ground." },
  { scene: "Workplace - Email", en: "Just wanted to follow up on our previous conversation regarding the project timeline.", zh: "想跟进一下我们之前关于项目时间线的对话。", context: "A professional way to remind someone about an unresolved topic. Very common in work emails — polite but purposeful." },
  { scene: "Daily Life - Coffee Shop", en: "Could I get a flat white with oat milk, please?", zh: "请给我一杯燕麦奶的馥芮白，谢谢。", context: "Ordering at a coffee shop. 'Could I get' is more natural than 'I want' in English-speaking countries." },
  { scene: "Social - Small Talk", en: "I've been binge-watching this new series — it's absolutely addictive.", zh: "我最近在追一部新剧——真的超上瘾。", context: "'Binge-watching' means watching many episodes in one sitting. Great conversation starter with colleagues or friends." },
  { scene: "Workplace - Feedback", en: "I really appreciate the feedback. Let me take some time to process it.", zh: "非常感谢反馈，让我花点时间消化一下。", context: "When receiving criticism or suggestions. Shows maturity and openness without committing to immediate changes." },
  { scene: "Daily Life - Shopping", en: "Do you have this in a different size? This one's a bit snug.", zh: "这个有其他尺码吗？这件有点紧。", context: "'Snug' means slightly tight but in a comfortable way. More natural than saying 'too small'." },
  { scene: "Social - Plans", en: "I'm down for that! What time works for you?", zh: "我可以啊！你几点方便？", context: "'I'm down for that' is casual English for 'I agree / I'd like to do that'. Very common among friends." },
  { scene: "Workplace - Presentation", en: "Let me walk you through the key takeaways from this quarter.", zh: "让我带大家过一下这个季度的重点。", context: "'Walk you through' means to explain step by step. 'Key takeaways' means the most important points. Both are staples of business English." },
  { scene: "Tech - Discussion", en: "We should probably refactor this module — it's becoming a bit of a bottleneck.", zh: "我们可能需要重构这个模块——它正在成为一个瓶颈。", context: "Very common in tech team discussions. 'Bottleneck' refers to something that slows down the whole process." },
  { scene: "Daily Life - Restaurant", en: "We'd like to split the bill, please.", zh: "我们想分开付账，谢谢。", context: "'Split the bill' means everyone pays for their own share. Common in Western dining culture." },
  { scene: "Social - Compliment", en: "You crushed that presentation! Seriously impressive.", zh: "你那个演示太棒了！真的很厉害。", context: "'Crushed it' is slang for 'did an excellent job'. Great for praising colleagues or friends." },
  { scene: "Workplace - Negotiation", en: "That's a fair point. Let's find a middle ground that works for both sides.", zh: "说得有道理。我们来找一个双方都能接受的折中方案。", context: "'Middle ground' means a compromise. Essential phrase for negotiations and resolving disagreements." },
  { scene: "Tech - Code Review", en: "Could you add some comments here? The logic is a bit hard to follow.", zh: "能在这里加一些注释吗？逻辑有点难跟上。", context: "Giving gentle feedback during code review. 'Hard to follow' is softer than saying 'this is confusing'." },
  { scene: "Daily Life - Directions", en: "Excuse me, is there a subway station nearby? I'm a bit lost.", zh: "打扰一下，附近有地铁站吗？我有点迷路了。", context: "'A bit lost' is softer than 'I don't know where I am'. People are usually happy to help when you phrase it this way." },
  { scene: "Workplace - Declining", en: "I'd love to help, but I'm at capacity right now. Can we revisit this next week?", zh: "我很想帮忙，但我现在手头排满了。下周再讨论可以吗？", context: "'At capacity' means you're fully loaded with work. Much more professional than saying 'I'm too busy'." },
  { scene: "Social - TV Shows", en: "No spoilers! I haven't finished the latest season yet.", zh: "别剧透！我还没看完最新一季呢。", context: "'No spoilers' is what you say when someone's about to reveal plot details. Essential if you watch shows at different paces than your friends." },
  { scene: "Workplace - Standup", en: "I'm currently blocked on the API integration — waiting for the backend team.", zh: "我目前卡在 API 对接上——在等后端团队。", context: "'Blocked on' means you can't proceed because of a dependency. Very common in daily standups and sprint meetings." },
  { scene: "Daily Life - Weather", en: "It's gorgeous outside today. Want to grab lunch al fresco?", zh: "今天外面天气太好了。要不要在外面吃午餐？", context: "'Al fresco' means outdoors, especially for dining. Borrowed from Italian, commonly used in English." },
  { scene: "Tech - Product", en: "Let's ship the MVP first and iterate based on user feedback.", zh: "我们先发布最小可行产品，然后根据用户反馈迭代。", context: "'Ship' means to release/launch. 'MVP' = Minimum Viable Product. Core startup/tech vocabulary." },
  { scene: "Social - Farewell", en: "It was great catching up with you. Let's not leave it so long next time!", zh: "很高兴和你叙旧。下次别隔这么久了！", context: "'Catching up' means meeting someone you haven't seen in a while and sharing updates. Warm, natural way to end a meetup." },
  { scene: "Workplace - Brainstorm", en: "Let's throw some ideas around and see what sticks.", zh: "让我们先头脑风暴一下，看看哪些可行。", context: "'See what sticks' is an idiom meaning 'see which ideas work out'. Very casual and creative meeting energy." },
  { scene: "Daily Life - Fitness", en: "I've been trying to get into a routine, but consistency is the hard part.", zh: "我一直在试着养成习惯，但最难的是坚持。", context: "'Get into a routine' means establish a regular habit. 'Consistency' is the key challenge — relatable for most people." },
  { scene: "Tech - Bug Report", en: "I can reproduce the issue consistently. It seems to be a race condition.", zh: "我可以稳定复现这个问题。看起来是一个竞态条件。", context: "'Reproduce consistently' means you can make the bug happen reliably. 'Race condition' is a common technical term." },
  { scene: "Social - Recommendation", en: "You should definitely check it out — it's right up your alley.", zh: "你一定要去看看——这完全是你的菜。", context: "'Right up your alley' means it's exactly the kind of thing you would like. Great for recommendations." },
  { scene: "Workplace - Recognition", en: "I just want to give a shoutout to the design team for pulling this together so quickly.", zh: "我想表扬一下设计团队，这么快就完成了。", context: "'Give a shoutout' means publicly acknowledge someone's good work. Common in team meetings and Slack channels." },
  { scene: "Daily Life - Apologizing", en: "My bad — I completely lost track of time.", zh: "我的错——我完全忘了时间。", context: "'My bad' is casual English for 'it's my fault'. 'Lost track of time' means you didn't notice how late it got." },
  { scene: "Workplace - Strategy", en: "We need to think about the big picture rather than getting bogged down in details.", zh: "我们需要着眼大局，而不是陷入细节。", context: "'Big picture' = overall strategy/vision. 'Bogged down' = stuck or slowed. Very useful in strategic discussions." },
  { scene: "Tech - Deployment", en: "Let's roll it out to 10% of users first and monitor the metrics.", zh: "我们先灰度发布给 10% 的用户，然后监控数据。", context: "'Roll out' means to gradually release. Phased releases are standard in tech companies for risk management." },
  { scene: "Social - Food", en: "This place has amazing reviews. Apparently their ramen is to die for.", zh: "这家店评价超好。听说他们的拉面好吃到爆。", context: "'To die for' means something is incredibly good. Commonly used for food, fashion, and experiences." },
  { scene: "Daily Life - Transport", en: "The traffic is insane today. I should have taken the subway.", zh: "今天堵车太疯狂了。我应该坐地铁的。", context: "'Insane' is commonly used casually to mean 'extremely bad/crazy'. 'Should have taken' expresses regret about a past choice." },
];

// ───────── Shadow Learn Video Database ─────────
// No built-in videos — user adds their own from YouTubers or any link
const SHADOW_VIDEOS = [];

// ───────── Badges Definition ─────────
const BADGES = [
  { id: "first_word", name: "First Step", desc: "Add your first word", icon: "📖", condition: d => d.totalWords >= 1 },
  { id: "ten_words", name: "Word Collector", desc: "Collect 10 words", icon: "📚", condition: d => d.totalWords >= 10 },
  { id: "fifty_words", name: "Lexicon Builder", desc: "Collect 50 words", icon: "🏗️", condition: d => d.totalWords >= 50 },
  { id: "hundred_words", name: "Vocabulary Master", desc: "Collect 100 words", icon: "👑", condition: d => d.totalWords >= 100 },
  { id: "first_review", name: "Memory Start", desc: "Complete first review", icon: "🧠", condition: d => d.reviewsDone >= 1 },
  { id: "fifty_reviews", name: "Review Machine", desc: "Complete 50 reviews", icon: "⚡", condition: d => d.reviewsDone >= 50 },
  { id: "first_shadow", name: "Echo Voice", desc: "Complete first shadow", icon: "🎤", condition: d => d.shadowsDone >= 1 },
  { id: "ten_shadows", name: "Shadow Master", desc: "Complete 10 shadows", icon: "🎭", condition: d => d.shadowsDone >= 10 },
  { id: "streak_3", name: "3-Day Warrior", desc: "3-day streak", icon: "🔥", condition: d => d.bestStreak >= 3 },
  { id: "streak_7", name: "Week Champion", desc: "7-day streak", icon: "💪", condition: d => d.bestStreak >= 7 },
  { id: "streak_30", name: "Monthly Legend", desc: "30-day streak", icon: "🏆", condition: d => d.bestStreak >= 30 },
  { id: "daily_learner", name: "Daily Learner", desc: "Read 10 daily sentences", icon: "💡", condition: d => d.dailySeen >= 10 },
];

// ───────── Level System ─────────
const LEVELS = [
  { level: 1, title: "Beginner Explorer", xpNeeded: 0 },
  { level: 2, title: "Curious Learner", xpNeeded: 100 },
  { level: 3, title: "Rising Star", xpNeeded: 300 },
  { level: 4, title: "Consistent Achiever", xpNeeded: 600 },
  { level: 5, title: "Word Warrior", xpNeeded: 1000 },
  { level: 6, title: "Fluency Seeker", xpNeeded: 1500 },
  { level: 7, title: "Language Artisan", xpNeeded: 2200 },
  { level: 8, title: "English Connoisseur", xpNeeded: 3000 },
  { level: 9, title: "Near-Native Speaker", xpNeeded: 4000 },
  { level: 10, title: "Legendary Polyglot", xpNeeded: 5500 },
];

// ───────── Utility ─────────
function todayStr() { return new Date().toISOString().slice(0, 10); }
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// Global speak function — natural British English
let _voicesLoaded = false;
let _bestVoice = null;
function _pickBestVoice() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  // Priority: Google UK > any en-GB female > any en-GB > any en
  const priorities = [
    v => v.name.includes('Google UK English Female'),
    v => v.name.includes('Google UK English'),
    v => v.name.includes('Daniel') && v.lang === 'en-GB',
    v => v.name.includes('Samantha'),
    v => v.lang === 'en-GB' && v.name.toLowerCase().includes('female'),
    v => v.lang === 'en-GB',
    v => v.lang === 'en-US' && v.name.includes('Google'),
    v => v.lang.startsWith('en'),
  ];
  for (const test of priorities) {
    const found = voices.find(test);
    if (found) return found;
  }
  return voices[0];
}

function speakWord(text) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.92;
  u.pitch = 1.0;
  if (!_bestVoice) _bestVoice = _pickBestVoice();
  if (_bestVoice) u.voice = _bestVoice;
  speechSynthesis.speak(u);
}
// Preload voices
speechSynthesis.getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => { _bestVoice = _pickBestVoice(); };
}

// ───────── Data Layer (localStorage + Supabase cloud sync) ─────────
const SUPABASE_URL = 'https://ohpdkobosjxxvnpxvlkd.supabase.co/rest/v1';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocGRrb2Jvc2p4eHZucHh2bGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjA1NTQsImV4cCI6MjA5MzQzNjU1NH0.fyGaz6_K001Ejy2P0Q77kGzvu2YAvxnoqBlA6SGBWwE';
const SB_HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

const Store = {
  _key: 'english_daily_data',
  _syncTimer: null,
  _defaults: {
    words: [],
    checkins: {},
    shadowDone: [],
    dailySeen: [],
    dailyIndex: 0,
    xp: 0,
    reviewsDone: 0,
    makeupUsed: {},
    customVideos: [],
    youtubers: ["emma chamberlain", "Leah's Fieldnotes", "Mike Clay", "Ashley Corbo"],
    mastered: [],
    dailyLearned: {},
    dismissedVideos: [],
    settings: {}
  },

  load() {
    try {
      const raw = localStorage.getItem(this._key);
      if (!raw) return { ...this._defaults };
      const parsed = JSON.parse(raw);
      const merged = { ...this._defaults, ...parsed };
      if ((!parsed.youtubers || parsed.youtubers.length === 0) && this._defaults.youtubers.length > 0) {
        merged.youtubers = this._defaults.youtubers;
      }
      return merged;
    } catch { return { ...this._defaults }; }
  },

  save(data) {
    localStorage.setItem(this._key, JSON.stringify(data));
    // Debounced cloud sync (save to Supabase after 1s of inactivity)
    clearTimeout(this._syncTimer);
    this._syncTimer = setTimeout(() => this._syncToCloud(data), 1000);
  },

  async _syncToCloud(data) {
    try {
      const payload = { id: 'default', data, updated_at: new Date().toISOString() };
      await fetch(`${SUPABASE_URL}/user_data?id=eq.default`, {
        method: 'GET',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` },
      }).then(async res => {
        const rows = await res.json();
        if (rows.length === 0) {
          // INSERT
          await fetch(`${SUPABASE_URL}/user_data`, {
            method: 'POST',
            headers: SB_HEADERS,
            body: JSON.stringify(payload),
          });
        } else {
          // UPDATE
          await fetch(`${SUPABASE_URL}/user_data?id=eq.default`, {
            method: 'PATCH',
            headers: SB_HEADERS,
            body: JSON.stringify({ data, updated_at: new Date().toISOString() }),
          });
        }
      });
    } catch (err) {
      console.warn('Cloud sync failed:', err);
    }
  },

  async loadFromCloud() {
    try {
      const res = await fetch(`${SUPABASE_URL}/user_data?id=eq.default&select=data,updated_at`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` },
      });
      const rows = await res.json();
      if (rows.length > 0 && rows[0].data) {
        return rows[0].data;
      }
    } catch (err) {
      console.warn('Cloud load failed:', err);
    }
    return null;
  },
};

// ───────── SM-2 Spaced Repetition ─────────
const MAX_INTERVAL = 30; // cap at 30 days — even well-known words come back periodically

function sm2(card, quality) {
  // quality: 0=forgot, 1=fuzzy, 2=got it
  let { interval, ease } = card;
  if (!interval) interval = 1;
  if (!ease) ease = 2.5;

  if (quality === 0) {
    interval = 1;
    ease = Math.max(1.3, ease - 0.3);
  } else if (quality === 1) {
    interval = Math.max(1, Math.ceil(interval * 1.2));
    ease = Math.max(1.3, ease - 0.15);
  } else {
    if (interval === 1) interval = 3;
    else if (interval <= 3) interval = 7;
    else interval = Math.ceil(interval * ease);
    ease = ease + 0.1;
  }

  // Cap interval so words always come back
  interval = Math.min(interval, MAX_INTERVAL);

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return { interval, ease, nextReview: nextReview.toISOString().slice(0, 10) };
}

// ═════════════════════════════════════════
//  APP — Global Controller
// ═════════════════════════════════════════
const App = {
  data: null,

  init() {
    this.data = Store.load();
    // Backfill: tag empty words as 'mine'
    let patched = false;
    for (const w of this.data.words) {
      if (!w.tag) { w.tag = 'mine'; patched = true; }
    }
    if (patched) Store.save(this.data);
    this.bindNav();
    this.updateGreeting();
    this.refreshDashboard();
    VocabModule.init();
    ShadowModule.init();
    DailyModule.init();
    CheckinModule.init();
    this.updateTabTitle();
    
    // Async: sync from cloud (merge cloud data with local to prevent data loss)
    Store.loadFromCloud().then(cloudData => {
      if (!cloudData) return;
      
      // Read CURRENT local data (not the snapshot from init start) to avoid race condition
      const freshLocal = Store.load();
      const localWords = freshLocal.words || [];
      const cloudWords = cloudData.words || [];
      
      // Merge words by id: keep all unique words from both local and cloud
      const wordMap = new Map();
      // Cloud words first (base)
      for (const w of cloudWords) wordMap.set(w.id, w);
      // Local words override cloud (local is more recent for same id)
      for (const w of localWords) wordMap.set(w.id, w);
      const mergedWords = [...wordMap.values()];
      
      // Merge mastered lists
      const localMastered = new Set(freshLocal.mastered || []);
      const cloudMastered = cloudData.mastered || [];
      for (const m of cloudMastered) localMastered.add(m);
      
      // Merge checkins (keep both)
      const mergedCheckins = { ...(cloudData.checkins || {}), ...(freshLocal.checkins || {}) };
      
      // Merge shadowDone
      const mergedShadowDone = [...new Set([...(cloudData.shadowDone || []), ...(freshLocal.shadowDone || [])])];
      
      // Use higher XP
      const mergedXP = Math.max(freshLocal.xp || 0, cloudData.xp || 0);
      
      // Check if anything actually changed
      const hadChanges = mergedWords.length > localWords.length || 
                         mergedWords.length > cloudWords.length ||
                         mergedXP > (freshLocal.xp || 0);
      
      if (hadChanges || cloudWords.length > 0) {
        this.data = { 
          ...Store._defaults, 
          ...freshLocal,        // start with current local
          ...cloudData,         // overlay cloud fields
          words: mergedWords,   // but use merged words
          mastered: [...localMastered],
          checkins: mergedCheckins,
          shadowDone: mergedShadowDone,
          xp: mergedXP,
          youtubers: (freshLocal.youtubers?.length >= (cloudData.youtubers?.length || 0)) 
            ? freshLocal.youtubers : cloudData.youtubers,
        };
        Store.save(this.data);
        this.refreshDashboard();
        VocabModule.render();
        ShadowModule.render();
        CheckinModule.render();
        if (mergedWords.length > localWords.length) {
          toast('Data synced from cloud!');
        }
      } else if (localWords.length > 0 && cloudWords.length === 0) {
        // Push local data to cloud if cloud is empty
        Store._syncToCloud(this.data);
      }
    });
  },

  bindNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        this.navigate(page);
      });
    });
  },

  navigate(page) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`)?.classList.add('active');

    if (page === 'vocabulary') VocabModule.render();
    if (page === 'shadow') ShadowModule.render();
    if (page === 'daily') DailyModule.render();
    if (page === 'checkin') CheckinModule.render();
  },

  updateGreeting() {
    const h = new Date().getHours();
    let greeting = 'Good evening!';
    if (h < 6) greeting = 'Still up? 🦉';
    else if (h < 12) greeting = 'Good morning!';
    else if (h < 18) greeting = 'Good afternoon!';
    document.getElementById('greeting').textContent = greeting;
    
    // Motivational sub-greeting
    const wordCount = (this.data.words || []).length;
    const subs = wordCount > 0 ? [
      `You've collected ${wordCount} words so far. Keep going! ✨`,
      `Every word is a tiny victory. ${wordCount} and counting.`,
      `${wordCount} words in your pocket. What's next?`,
      `Small steps, big fluency. You have ${wordCount} words already.`,
      `Your future self will thank you. ${wordCount} words strong.`,
    ] : [
      'Ready to learn something new today?',
      'One word a day keeps the translator away.',
      'Start with one word. Just one. 🌱',
      'The best time to start was yesterday. The next best time is now.',
    ];
    const subEl = document.getElementById('subGreeting');
    if (subEl) subEl.textContent = subs[Math.floor(Math.random() * subs.length)];
    
    this._loadAvatar();
  },

  _loadAvatar() {
    const logoIcon = document.getElementById('logoIcon');
    if (!logoIcon) return;
    const saved = localStorage.getItem('pebble_avatar');
    if (saved) {
      logoIcon.style.background = 'transparent';
      logoIcon.innerHTML = `<img src="${saved}" alt="avatar">`;
    } else {
      // Default: yin-yang SVG icon
      logoIcon.style.background = 'transparent';
      logoIcon.innerHTML = `<svg viewBox="0 0 100 100" width="28" height="28">
        <circle cx="50" cy="50" r="48" fill="#2d2d2d"/>
        <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z" fill="#fff"/>
        <circle cx="50" cy="26" r="7" fill="#2d2d2d"/>
        <circle cx="50" cy="74" r="7" fill="#fff"/>
      </svg>`;
    }
  },

  changeAvatar() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        // Resize to save space
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const size = 200;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          // Crop to square center
          const min = Math.min(img.width, img.height);
          const sx = (img.width - min) / 2;
          const sy = (img.height - min) / 2;
          ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          localStorage.setItem('pebble_avatar', dataUrl);
          this._loadAvatar();
          toast('Avatar updated!');
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    };
    input.click();
  },

  refreshDashboard() {
    const d = this.data;
    // Review count
    const dueWords = d.words.filter(w => !w.nextReview || w.nextReview <= todayStr());
    const el = document.getElementById('dashReviewCount');
    if (el) el.textContent = dueWords.length;

    // Shadow status
    const todayDone = d.checkins[todayStr()]?.tasks?.includes('shadow');
    const shadowEl = document.getElementById('dashShadowStatus');
    if (shadowEl) shadowEl.textContent = todayDone ? 'Done' : 'Ready';

    // Level
    const lvl = this.getLevel();
    const lvlEl = document.getElementById('dashLevel');
    if (lvlEl) lvlEl.textContent = `Lv.${lvl.level}`;

    // Streak
    const streak = this.getStreak();
    document.getElementById('streakNum').textContent = streak;

    // Daily sentences seen count
    const dailyEl = document.getElementById('dashDailyCount');
    if (dailyEl) dailyEl.textContent = (d.dailySeen || []).length;

    // Nav badge: show review count on Vocabulary
    const badge = document.getElementById('navVocabBadge');
    if (badge) {
      if (dueWords.length > 0) {
        badge.textContent = dueWords.length;
        badge.className = 'nav-badge show';
      } else {
        badge.className = 'nav-badge';
      }
    }

    // Recommended words
    this._recommendFilter = 'all';
    this.renderRecommend();
    this._updateLearnProgress();

    // Recent words
    const recent = [...d.words].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt)).slice(0, 8);
    const container = document.getElementById('recentWordsList');
    if (recent.length === 0) {
      container.innerHTML = '<p class="empty-hint">No words yet. Start adding from the vocabulary section!</p>';
    } else {
      container.innerHTML = recent.map(w => {
        const dbEntry = WORD_DB[w.word.toLowerCase()];
        const phonetic = w.phonetic || (dbEntry && dbEntry.phonetic) || '';
        const meaning = w.meaning || (dbEntry && dbEntry.meaning) || '';
        const tag = w.tag || (dbEntry && dbEntry.tag) || '';
        const tagClass = tag === 'tech' ? 'rc-tag-tech' : tag === 'design' ? 'rc-tag-design' : tag === 'slang' ? 'rc-tag-slang' : tag ? 'rc-tag-daily' : '';
        const tagLabel = tag === 'tech' ? 'Tech' : tag === 'design' ? 'Design' : tag === 'slang' ? 'Slang' : tag ? 'Daily' : '';
        return `<div class="recommend-card" onclick="App.navigate('vocabulary')">
          <div class="rc-left">
            <div class="rc-word-row">
              <span class="rc-word">${w.word}</span>
              <button class="speak-btn" onclick="event.stopPropagation();speakWord('${w.word.replace(/'/g, "\\'")}')" title="Listen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
            ${phonetic ? `<span class="rc-phonetic">${phonetic}</span>` : ''}
            <span class="rc-meaning">${meaning}</span>
            ${tagLabel ? `<div class="rc-meta"><span class="rc-tag ${tagClass}">${tagLabel}</span></div>` : ''}
          </div>
        </div>`;
      }).join('');
    }
  },

  renderRecommend(filter) {
    if (filter) this._recommendFilter = filter;
    const tag = this._recommendFilter || 'all';
    const recommended = getDailyRecommendedWords(this.data.words, this.data.mastered);
    let words = recommended.map(w => ({ key: w, ...WORD_DB[w] }));
    if (tag !== 'all') words = words.filter(w => w.tag === tag);
    
    const rcEl = document.getElementById('recommendCount');
    if (rcEl) rcEl.textContent = words.length;
    const grid = document.getElementById('recommendGrid');
    const existingSet = new Set(this.data.words.map(w => w.word.toLowerCase()));
    const todayLearned = new Set(((this.data.dailyLearned || {})[todayStr()] || []).map(w => w.toLowerCase()));

    grid.innerHTML = words.map(w => {
      const isAdded = existingSet.has(w.key.toLowerCase());
      const isLearned = todayLearned.has(w.key.toLowerCase());
      const tagClass = w.tag === 'tech' ? 'rc-tag-tech' : w.tag === 'design' ? 'rc-tag-design' : w.tag === 'slang' ? 'rc-tag-slang' : 'rc-tag-daily';
      const tagLabel = w.tag === 'tech' ? 'Tech' : w.tag === 'design' ? 'Design' : w.tag === 'slang' ? 'Slang' : 'Daily';
      return `<div class="recommend-card ${isLearned ? 'rc-learned' : ''}" onclick="App.showWordDetail('${w.key.replace(/'/g, "\\'")}')">
        <button class="rc-dismiss" onclick="event.stopPropagation();App.masterWord('${w.key.replace(/'/g, "\\'")}')" title="I know this word — dismiss">×</button>
        ${isLearned ? '<span class="rc-learned-badge">Learned</span>' : ''}
        <div class="rc-left">
          <div class="rc-word-row">
            <span class="rc-word">${w.key}</span>
            <button class="speak-btn" onclick="event.stopPropagation();speakWord('${w.key.replace(/'/g, "\\'")}')" title="Listen">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
          </div>
          <span class="rc-phonetic">${w.phonetic || ''}</span>
          <span class="rc-meaning">${w.meaning}</span>
          <div class="rc-meta">
            <span class="rc-tag ${tagClass}">${tagLabel}</span>
          </div>
        </div>
        ${isAdded 
          ? '<button class="rc-add added" onclick="event.stopPropagation()" disabled>✓</button>' 
          : `<button class="rc-add" onclick="event.stopPropagation();App.addRecommendWord('${w.key.replace(/'/g, "\\'")}')">+</button>`
        }
      </div>`;
    }).join('');
  },

  filterRecommend(tag) {
    document.querySelectorAll('.rtag-btn').forEach(b => b.classList.toggle('active', b.dataset.tag === tag));
    this.renderRecommend(tag);
  },

  masterWord(word) {
    if (!this.data.mastered) this.data.mastered = [];
    if (!this.data.mastered.includes(word.toLowerCase())) {
      this.data.mastered.push(word.toLowerCase());
    }
    this._markDailyLearned(word);
    Store.save(this.data);
    this.renderRecommend();
    this._updateLearnProgress();
    toast(`"${word}" marked as known — removed from recommendations.`);
  },

  showWordDetail(word) {
    const entry = WORD_DB[word.toLowerCase()];
    if (!entry) return;
    const modal = document.getElementById('wordDetailModal');
    document.getElementById('wdWord').textContent = word;
    document.getElementById('wdPhonetic').innerHTML = `${entry.phonetic || ''} <button class="speak-btn speak-btn-card" onclick="speakWord('${word.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    document.getElementById('wdMeaning').textContent = entry.meaning;
    document.getElementById('wdExamples').innerHTML = (entry.examples || []).map(ex => `<div class="wd-example-item">"${ex}"</div>`).join('');
    document.getElementById('wdSynonyms').textContent = entry.synonyms?.length ? `Synonyms: ${entry.synonyms.join(', ')}` : '';
    const imgEl = document.getElementById('wdImage');
    if (entry.image) {
      imgEl.innerHTML = `<img src="${entry.image}" alt="${word}" onerror="this.style.display='none'">`;
    } else {
      imgEl.innerHTML = '';
    }
    // Check if already added
    const isAdded = this.data.words.find(w => w.word.toLowerCase() === word.toLowerCase());
    const btnAdd = document.getElementById('wdAddBtn');
    if (isAdded) {
      btnAdd.textContent = 'Already in Vocab ✓';
      btnAdd.disabled = true;
      btnAdd.className = 'btn-secondary btn-full';
    } else {
      btnAdd.textContent = '+ Add to Vocabulary';
      btnAdd.disabled = false;
      btnAdd.className = 'btn-primary btn-full';
      btnAdd.onclick = () => {
        App.addRecommendWord(word);
        btnAdd.textContent = 'Added ✓';
        btnAdd.disabled = true;
        btnAdd.className = 'btn-secondary btn-full';
      };
    }
    modal.classList.add('show');
  },

  closeWordDetail() {
    document.getElementById('wordDetailModal').classList.remove('show');
  },

  // ── Daily Learn Mode ──
  _learnQueue: [],
  _learnIndex: 0,
  _learnKnow: 0,
  _learnNeedLearn: 0,

  startDailyLearn() {
    const recommended = getDailyRecommendedWords(this.data.words, this.data.mastered);
    const todayLearned = (this.data.dailyLearned || {})[todayStr()] || [];
    const todaySet = new Set(todayLearned.map(w => w.toLowerCase()));
    // Only show words not yet learned today
    const remaining = recommended.filter(w => !todaySet.has(w.toLowerCase()));
    if (remaining.length === 0) {
      toast('You\'ve learned all today\'s words! Great job!');
      return;
    }
    this._learnQueue = remaining.map(w => ({ key: w, ...WORD_DB[w] }));
    this._learnIndex = 0;
    this._learnKnow = 0;
    this._learnNeedLearn = 0;
    document.getElementById('dlComplete').style.display = 'none';
    document.getElementById('dlCard').style.display = '';
    document.getElementById('dlButtons').style.display = '';
    document.getElementById('dailyLearnModal').classList.add('show');
    this._showLearnCard();
  },

  _showLearnCard() {
    if (this._learnIndex >= this._learnQueue.length) {
      this._showLearnComplete();
      return;
    }
    const w = this._learnQueue[this._learnIndex];
    document.getElementById('dlProgress').textContent = `${this._learnIndex + 1} / ${this._learnQueue.length}`;
    document.getElementById('dlWord').textContent = w.key;
    document.getElementById('dlPhoneticRow').innerHTML = `${w.phonetic || ''} <button class="speak-btn" onclick="event.stopPropagation();speakWord('${w.key.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    // Back side: word + phonetic + speak, then meaning, example, synonyms, image
    document.getElementById('dlBackWord').innerHTML = `${w.key} <span class="dl-back-phonetic">${w.phonetic || ''}</span> <button class="speak-btn speak-btn-card" onclick="event.stopPropagation();speakWord('${w.key.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    document.getElementById('dlMeaning').textContent = w.meaning || '';
    document.getElementById('dlExample').textContent = w.examples?.[0] || '';
    document.getElementById('dlSynonyms').textContent = w.synonyms?.length ? `Synonyms: ${w.synonyms.join(', ')}` : '';
    const imgEl = document.getElementById('dlImage');
    imgEl.innerHTML = w.image ? `<img src="${w.image}" alt="${w.key}" onerror="this.style.display='none'">` : '';
    const inner = document.getElementById('dlCardInner');
    // Instantly flip back without animation to avoid flash
    inner.style.transition = 'none';
    inner.classList.remove('flipped');
    // Force reflow so the instant reset takes effect
    inner.offsetHeight;
    inner.style.transition = '';
    document.getElementById('dlButtons').style.visibility = 'hidden';
    // Auto-speak the word
    setTimeout(() => speakWord(w.key), 300);
  },

  flipDailyCard() {
    const inner = document.getElementById('dlCardInner');
    if (!inner.classList.contains('flipped')) {
      inner.classList.add('flipped');
      document.getElementById('dlButtons').style.visibility = 'visible';
      // Auto-speak
      const w = this._learnQueue[this._learnIndex];
      if (w) speakWord(w.key);
    }
  },

  dailyLearnAnswer(type) {
    const w = this._learnQueue[this._learnIndex];
    if (!w) return;

    // Record as learned today
    if (!this.data.dailyLearned) this.data.dailyLearned = {};
    if (!this.data.dailyLearned[todayStr()]) this.data.dailyLearned[todayStr()] = [];
    if (!this.data.dailyLearned[todayStr()].includes(w.key.toLowerCase())) {
      this.data.dailyLearned[todayStr()].push(w.key.toLowerCase());
    }

    if (type === 'know') {
      this._learnKnow++;
      // Add to mastered
      if (!this.data.mastered) this.data.mastered = [];
      if (!this.data.mastered.includes(w.key.toLowerCase())) {
        this.data.mastered.push(w.key.toLowerCase());
      }
      this.addXP(3);
    } else {
      this._learnNeedLearn++;
      // Add to vocab for spaced repetition
      VocabModule.addWordDirect(w.key, 'From daily learning');
      this.addXP(5);
    }
    Store.save(this.data);

    this._learnIndex++;
    this._updateLearnProgress();
    this._showLearnCard();
  },

  _showLearnComplete() {
    document.getElementById('dlCard').style.display = 'none';
    document.getElementById('dlButtons').style.display = 'none';
    document.getElementById('dlComplete').style.display = '';
    document.getElementById('dlStatKnow').textContent = this._learnKnow;
    document.getElementById('dlStatLearn').textContent = this._learnNeedLearn;
    // Refresh dashboard
    this.renderRecommend();
    this._updateLearnProgress();
  },

  closeDailyLearn() {
    document.getElementById('dailyLearnModal').classList.remove('show');
    this.renderRecommend();
    this._updateLearnProgress();
    this.refreshDashboard();
  },

  _updateLearnProgress() {
    const todayLearned = (this.data.dailyLearned || {})[todayStr()] || [];
    const learnedCount = todayLearned.length;
    const total = 30;
    const pct = total > 0 ? Math.min(Math.round((learnedCount / total) * 100), 100) : 0;
    document.getElementById('learnProgressFill').style.width = pct + '%';
    document.getElementById('learnProgressText').textContent = `${learnedCount} / ${total} learned`;
    const btn = document.getElementById('btnStartLearn');
    if (learnedCount >= total) {
      btn.textContent = 'All Done Today ✓';
      btn.className = 'btn-secondary';
    } else {
      btn.textContent = learnedCount > 0 ? `Continue Learning (${total - learnedCount} left)` : 'Start Learning';
      btn.className = 'btn-primary';
    }
  },

  // Helper: mark a word as learned today
  _markDailyLearned(word) {
    if (!this.data.dailyLearned) this.data.dailyLearned = {};
    if (!this.data.dailyLearned[todayStr()]) this.data.dailyLearned[todayStr()] = [];
    const key = word.toLowerCase();
    if (!this.data.dailyLearned[todayStr()].includes(key)) {
      this.data.dailyLearned[todayStr()].push(key);
    }
  },

  addRecommendWord(word) {
    VocabModule.addWordDirect(word, 'From daily recommendation');
    this._markDailyLearned(word);
    Store.save(this.data);
    this.renderRecommend();
    this._updateLearnProgress();
    this.refreshDashboard();
  },

  getLevel() {
    const xp = this.data.xp || 0;
    let result = LEVELS[0];
    for (const l of LEVELS) {
      if (xp >= l.xpNeeded) result = l;
      else break;
    }
    return result;
  },

  getNextLevel() {
    const current = this.getLevel();
    return LEVELS.find(l => l.level === current.level + 1) || null;
  },

  getStreak() {
    let streak = 0;
    const d = new Date();
    while (true) {
      const ds = d.toISOString().slice(0, 10);
      if (this.data.checkins[ds]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else break;
    }
    return streak;
  },

  getBestStreak() {
    const dates = Object.keys(this.data.checkins).sort();
    if (dates.length === 0) return 0;
    let best = 1, current = 1;
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1]);
      const curr = new Date(dates[i]);
      const diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) { current++; best = Math.max(best, current); }
      else current = 1;
    }
    return Math.max(best, current);
  },

  addXP(amount) {
    this.data.xp = (this.data.xp || 0) + amount;
    // Auto check-in: any learning activity counts as today's check-in
    const today = todayStr();
    if (!this.data.checkins[today]) {
      this.data.checkins[today] = { xp: amount, tasks: ['auto'], time: new Date().toISOString() };
    } else {
      this.data.checkins[today].xp = (this.data.checkins[today].xp || 0) + amount;
    }
    Store.save(this.data);
  },

  updateTabTitle() {
    const due = this.data.words.filter(w => !w.nextReview || w.nextReview <= todayStr()).length;
    if (due > 0 && !this.data.checkins[todayStr()]) {
      document.title = `(${due}) pebble-k — Time to learn!`;
    } else {
      document.title = 'pebble-k - 每日英语学习';
    }
  },

  toggleSettings() {
    document.getElementById('settingsModal').classList.toggle('show');
  },

  exportData() {
    const json = JSON.stringify(this.data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `english_daily_backup_${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast('Data exported successfully!');
  },

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        App.data = { ...Store._defaults, ...imported };
        Store.save(App.data);
        toast('Data imported! Refreshing...');
        setTimeout(() => location.reload(), 1000);
      } catch { toast('Invalid file format.'); }
    };
    reader.readAsText(file);
  },
};

// ═════════════════════════════════════════
//  VOCABULARY MODULE
// ═════════════════════════════════════════
const VocabModule = {
  reviewQueue: [],
  reviewIndex: 0,

  init() { this.render(); },

  render() {
    this.renderList();
    this.updateReviewBtn();
  },

  renderList(filter = '') {
    const container = document.getElementById('vocabList');
    let words = [...App.data.words].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    if (filter) words = words.filter(w => w.word.toLowerCase().includes(filter.toLowerCase()) || (w.meaning && w.meaning.toLowerCase().includes(filter.toLowerCase())));
    if (this._tagFilter) words = words.filter(w => w.tag === this._tagFilter);

    if (words.length === 0) {
      container.innerHTML = '<p class="empty-hint">Your vocabulary book is empty. Add your first word!</p>';
      return;
    }
    container.innerHTML = words.map(w => {
      const isDue = !w.nextReview || w.nextReview <= todayStr();
      const dbEntry = WORD_DB[w.word.toLowerCase()];
      const tag = w.tag || (dbEntry && dbEntry.tag) || '';
      const tagLabels = { tech: 'Tech', design: 'Design', daily: 'Daily', slang: 'Slang', mine: 'My Word' };
      const tagHtml = tag ? `<span class="vocab-tag vocab-tag-${tag}">${tagLabels[tag] || tag}</span>` : '';
      const phonetic = w.phonetic || (dbEntry && dbEntry.phonetic) || '';
      const examples = w.examples || (dbEntry && dbEntry.examples) || [];
      const synonyms = w.synonyms || (dbEntry && dbEntry.synonyms) || [];
      const image = w.image || (dbEntry && dbEntry.image) || '';
      const note = w.note || '';
      const detailId = 'vd_' + w.id;
      return `<div class="vocab-item-wrap" onclick="VocabModule.toggleDetail('${detailId}')">
        <div class="vocab-item">
          <div class="vocab-item-left">
            <div class="vocab-word-row">
              <span class="vocab-word">${w.word}</span>${tagHtml}
              <button class="speak-btn" onclick="event.stopPropagation();speakWord('${w.word.replace(/'/g, "\\'")}')" title="Listen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
            ${phonetic ? `<span class="vocab-phonetic">${phonetic}</span>` : ''}
            <span class="vocab-meaning">${w.meaning || ''}</span>
            ${w.note ? `<span class="vocab-note-inline">${w.note}</span>` : ''}
          </div>
          <div class="vocab-item-right">
            ${isDue ? '<span class="vocab-due due-now">Due now</span>' : `<span class="vocab-due">Next: ${w.nextReview}</span>`}
            <button class="vocab-delete" onclick="event.stopPropagation();VocabModule.deleteWord('${w.id}')" title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>
        <div class="vocab-detail" id="${detailId}">
          ${examples.length ? `<div class="vd-examples">${examples.map(ex => `<div class="vd-example">"${ex}"</div>`).join('')}</div>` : ''}
          ${synonyms.length ? `<div class="vd-synonyms">Synonyms: ${synonyms.join(', ')}</div>` : ''}
          <div class="vd-note-edit">
            <textarea class="vd-note-input" id="note_${w.id}" placeholder="Add your note..." onclick="event.stopPropagation()">${note}</textarea>
            <button class="vd-note-save" onclick="event.stopPropagation();VocabModule.saveNote('${w.id}')">Save</button>
          </div>
        </div>
      </div>`;
    }).join('');
  },

  saveNote(id) {
    const el = document.getElementById('note_' + id);
    if (!el) return;
    const w = App.data.words.find(x => x.id === id);
    if (w) {
      w.note = el.value.trim();
      Store.save(App.data);
      toast('Note saved!');
    }
  },

  toggleDetail(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  },

  filterWords() {
    const q = document.getElementById('vocabSearchInput').value;
    this._tagFilter = '';
    this.renderList(q);
  },

  filterByTag(tag) {
    this._tagFilter = this._tagFilter === tag ? '' : tag;
    this.renderList();
  },

  updateReviewBtn() {
    const due = App.data.words.filter(w => !w.nextReview || w.nextReview <= todayStr());
    const btn = document.getElementById('btnStartReview');
    btn.textContent = due.length > 0 ? `Review Cards (${due.length})` : 'Review Cards';
  },

  showAddModal() { document.getElementById('addWordModal').classList.add('show'); document.getElementById('inputWord').focus(); },
  closeAddModal() { document.getElementById('addWordModal').classList.remove('show'); document.getElementById('inputWord').value = ''; document.getElementById('inputNote').value = ''; },

  addWord() {
    const wordInput = document.getElementById('inputWord').value.trim();
    const noteInput = document.getElementById('inputNote').value.trim();
    if (!wordInput) { toast('Please enter a word or phrase.'); return; }

    const wordLower = wordInput.toLowerCase();
    if (App.data.words.find(w => w.word.toLowerCase() === wordLower)) {
      toast('This word already exists in your vocabulary!');
      return;
    }

    const dbEntry = WORD_DB[wordLower] || {};
    const newWord = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      word: wordInput,
      meaning: dbEntry.meaning || '',
      phonetic: dbEntry.phonetic || '',
      examples: dbEntry.examples || [],
      synonyms: dbEntry.synonyms || [],
      image: dbEntry.image || '',
      tag: dbEntry.tag || 'mine',
      note: noteInput,
      addedAt: new Date().toISOString(),
      nextReview: todayStr(),
      interval: 1,
      ease: 2.5,
    };
    App.data.words.push(newWord);
    App.addXP(5);
    Store.save(App.data);
    this.closeAddModal();
    this.render();
    App.refreshDashboard();
    toast(`"${wordInput}" added! +5 XP`);

    // Auto-lookup if no meaning
    if (!newWord.meaning) {
      autoLookup(wordInput).then(result => {
        if (result && result.meaning) {
          const w = App.data.words.find(x => x.id === newWord.id);
          if (w) {
            w.meaning = result.meaning;
            if (result.phonetic) w.phonetic = result.phonetic;
            if (result.examples?.length) w.examples = result.examples;
            if (result.synonyms?.length) w.synonyms = result.synonyms;
            Store.save(App.data);
            VocabModule.render();
            App.refreshDashboard();
          }
        }
      });
    }
  },

  addWordDirect(word, note = '') {
    const wordLower = word.toLowerCase().trim();
    if (!wordLower) return;
    if (App.data.words.find(w => w.word.toLowerCase() === wordLower)) {
      toast('Already in your vocabulary!');
      return;
    }
    const dbEntry = WORD_DB[wordLower] || {};
    const newWord = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      word: word.trim(),
      meaning: dbEntry.meaning || '',
      phonetic: dbEntry.phonetic || '',
      examples: dbEntry.examples || [],
      synonyms: dbEntry.synonyms || [],
      image: dbEntry.image || '',
      tag: dbEntry.tag || 'mine',
      note,
      addedAt: new Date().toISOString(),
      nextReview: todayStr(),
      interval: 1,
      ease: 2.5,
    };
    App.data.words.push(newWord);
    App.addXP(5);
    Store.save(App.data);
    toast(`"${word}" added! +5 XP`);

    // If no meaning found in local DB, try online dictionary
    if (!newWord.meaning) {
      autoLookup(word).then(result => {
        if (result && result.meaning) {
          const w = App.data.words.find(x => x.id === newWord.id);
          if (w) {
            w.meaning = result.meaning;
            if (result.phonetic) w.phonetic = result.phonetic;
            if (result.examples?.length) w.examples = result.examples;
            if (result.synonyms?.length) w.synonyms = result.synonyms;
            Store.save(App.data);
            VocabModule.render();
            App.refreshDashboard();
          }
        }
      });
    }
  },

  deleteWord(id) {
    App.data.words = App.data.words.filter(w => w.id !== id);
    Store.save(App.data);
    this.render();
    App.refreshDashboard();
  },

  // ── Highlight & Add ──
  showTextModal() {
    document.getElementById('textModal').classList.add('show');
    const area = document.getElementById('textHighlightArea');
    area.textContent = '';
    area.focus();
    document.getElementById('highlightActions').style.display = 'none';

    area.addEventListener('mouseup', this._handleSelection);
  },
  closeTextModal() {
    document.getElementById('textModal').classList.remove('show');
    const area = document.getElementById('textHighlightArea');
    area.removeEventListener('mouseup', this._handleSelection);
  },
  _handleSelection() {
    const sel = window.getSelection().toString().trim();
    if (sel) {
      document.getElementById('highlightSelected').textContent = sel;
      document.getElementById('highlightActions').style.display = 'flex';
    } else {
      document.getElementById('highlightActions').style.display = 'none';
    }
  },
  addHighlighted() {
    const text = document.getElementById('highlightSelected').textContent.trim();
    if (text) {
      VocabModule.addWordDirect(text);
      document.getElementById('highlightActions').style.display = 'none';
      VocabModule.render();
      App.refreshDashboard();
    }
  },
  addAllText() {
    const area = document.getElementById('textHighlightArea');
    const text = (area.innerText || area.textContent || '').trim();
    if (!text || text === 'Paste your English text here...') {
      toast('Please enter a word or phrase first.');
      return;
    }
    VocabModule.addWordDirect(text);
    VocabModule.closeTextModal();
    VocabModule.render();
    App.refreshDashboard();
  },

  // ── Flashcard Review ──
  startReview() {
    const due = App.data.words.filter(w => !w.nextReview || w.nextReview <= todayStr());
    if (due.length === 0) { toast('No words due for review today!'); return; }
    this.reviewQueue = due;
    this.reviewIndex = 0;
    document.getElementById('reviewModal').classList.add('show');
    this.showCard();
  },
  closeReview() {
    document.getElementById('reviewModal').classList.remove('show');
    this.render();
    App.refreshDashboard();
  },
  showCard() {
    if (this.reviewIndex >= this.reviewQueue.length) {
      toast('Review session complete! Great job!');
      this.closeReview();
      return;
    }
    const w = this.reviewQueue[this.reviewIndex];
    const dbEntry = WORD_DB[w.word.toLowerCase()] || {};
    const phonetic = w.phonetic || dbEntry.phonetic || '';
    const meaning = w.meaning || dbEntry.meaning || '(no definition yet)';
    const examples = w.examples || dbEntry.examples || [];
    const synonyms = w.synonyms || dbEntry.synonyms || [];
    const image = w.image || dbEntry.image || '';
    
    document.getElementById('reviewProgress').textContent = `${this.reviewIndex + 1} / ${this.reviewQueue.length}`;
    document.getElementById('fcWord').textContent = w.word;
    
    // Front: phonetic + speak
    document.getElementById('fcFrontPhonetic').innerHTML = `${phonetic} <button class="speak-btn" onclick="event.stopPropagation();speakWord('${w.word.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    
    // Back: word + phonetic + speak row at top
    document.getElementById('fcBackWord').innerHTML = `${w.word} <span class="dl-back-phonetic">${phonetic}</span> <button class="speak-btn speak-btn-card" onclick="event.stopPropagation();speakWord('${w.word.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    document.getElementById('fcMeaning').textContent = meaning;
    // Chinese meaning: show DB meaning if current meaning is English-only
    const cnEl = document.getElementById('fcMeaningCn');
    if (cnEl) {
      const dbMeaning = dbEntry.meaning || '';
      const hasChinese = /[\u4e00-\u9fff]/.test(meaning);
      if (!hasChinese && dbMeaning && /[\u4e00-\u9fff]/.test(dbMeaning)) {
        cnEl.textContent = dbMeaning;
      } else if (!hasChinese) {
        cnEl.textContent = '';
      } else {
        cnEl.textContent = '';
      }
    }
    document.getElementById('fcExample').textContent = examples[0] || '';
    document.getElementById('fcSynonyms').textContent = synonyms.length ? `Synonyms: ${synonyms.join(', ')}` : '';
    const imgEl = document.getElementById('fcImage');
    imgEl.innerHTML = image ? `<img src="${image}" alt="${w.word}" onerror="this.style.display='none'">` : '';
    document.getElementById('fcNoteInput').value = w.note || '';
    
    // Instant flip back without animation
    const inner = document.getElementById('flashcardInner');
    inner.style.transition = 'none';
    inner.classList.remove('flipped');
    inner.offsetHeight;
    inner.style.transition = '';
    // Auto-speak the word
    setTimeout(() => speakWord(w.word), 300);
  },
  flipCard() {
    document.getElementById('flashcardInner').classList.toggle('flipped');
  },
  saveReviewNote() {
    const w = this.reviewQueue[this.reviewIndex];
    if (!w) return;
    const note = document.getElementById('fcNoteInput').value.trim();
    const realWord = App.data.words.find(x => x.id === w.id);
    if (realWord) {
      realWord.note = note;
      Store.save(App.data);
      toast('Note saved!');
    }
  },
  reviewAnswer(quality) {
    const w = this.reviewQueue[this.reviewIndex];
    const realWord = App.data.words.find(x => x.id === w.id);
    if (realWord) {
      const result = sm2(realWord, quality);
      realWord.interval = result.interval;
      realWord.ease = result.ease;
      realWord.nextReview = result.nextReview;
      App.data.reviewsDone = (App.data.reviewsDone || 0) + 1;
      App.addXP(quality === 2 ? 10 : quality === 1 ? 5 : 2);
      Store.save(App.data);
    }
    this.reviewIndex++;
    this.showCard();
  },
};

// ═════════════════════════════════════════
//  SHADOW LEARN MODULE
// ═════════════════════════════════════════
const ShadowModule = {
  currentFilter: 'all',
  _feedVideos: [], // videos fetched from YouTubers

  init() { this.render(); this.fetchFeeds(); },

  render() { this.renderGrid(); this.renderSidebar(); },

  getAllVideos() {
    const custom = (App.data.customVideos || []).map(v => ({ ...v, isCustom: true }));
    const dismissed = new Set(App.data.dismissedVideos || []);
    return [...this._feedVideos, ...custom].filter(v => !dismissed.has(v.id));
  },

  // Fetch latest videos from all YouTubers via API
  async fetchFeeds() {
    const youtubers = App.data.youtubers || [];
    if (youtubers.length === 0) return;
    
    const allFeed = [];
    for (const yt of youtubers) {
      if (yt.startsWith('http')) continue; // skip bilibili for now
      try {
        const info = await YTApi.getChannelInfo(yt.replace(/^@/, ''));
        if (!info) continue;
        // Search latest videos from this channel
        const data = await YTApi._fetch('search', {
          part: 'snippet',
          channelId: info.id,
          order: 'date',
          type: 'video',
          maxResults: '3'
        });
        if (!data?.items) continue;
        for (const item of data.items) {
          const videoId = item.id.videoId;
          if (!videoId) continue;
          // Get duration
          const details = await YTApi.getVideoDetails(videoId);
          allFeed.push({
            id: 'feed_' + videoId,
            title: item.snippet.title,
            youtubeId: videoId,
            platform: 'youtube',
            category: ShadowModule._autoCategory(item.snippet.title),
            source: info.name,
            sourceAvatar: info.avatar,
            duration: details?.duration || '',
            subtitles: '',
            publishedAt: item.snippet.publishedAt,
          });
        }
      } catch { /* skip */ }
    }
    // Shuffle
    for (let i = allFeed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allFeed[i], allFeed[j]] = [allFeed[j], allFeed[i]];
    }
    this._feedVideos = allFeed;
    this.renderGrid();
  },

  filterCategory(cat) {
    this.currentFilter = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    this.renderGrid();
  },

  renderGrid() {
    const allVideos = this.getAllVideos();
    const videos = this.currentFilter === 'all'
      ? allVideos
      : allVideos.filter(v => v.category === this.currentFilter);

    const container = document.getElementById('shadowVideoGrid');
    
    if (videos.length === 0 && this._feedVideos.length === 0 && !(App.data.customVideos || []).length) {
      container.innerHTML = `<div class="shadow-empty">
        <p>No videos yet</p>
        <p>Add YouTubers in the sidebar, and their latest videos will appear here automatically.</p>
      </div>`;
      return;
    }
    if (videos.length === 0) {
      container.innerHTML = `<div class="shadow-empty"><p>No videos in this category.</p></div>`;
      return;
    }
    
    container.innerHTML = videos.map(v => {
      const done = App.data.shadowDone.includes(v.id);
      const isYT = v.platform !== 'bilibili';
      const thumb = isYT ? `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg` : '';
      const thumbHtml = isYT 
        ? `<img src="${thumb}" alt="${v.title}" onerror="this.parentElement.style.background='var(--accent-light)'">`
        : `<div class="bilibili-thumb">B</div>`;
      return `<div class="shadow-video-card">
        <button class="sv-dismiss" onclick="event.stopPropagation();ShadowModule.dismissVideo('${v.id}')" title="Remove">×</button>
        <a href="${v.platform === 'bilibili' ? 'https://www.bilibili.com/video/' + v.youtubeId : 'https://www.youtube.com/watch?v=' + v.youtubeId}" target="_blank" class="sv-link" onclick="ShadowModule.markWatched('${v.id}')">
          <div class="shadow-thumb">
            ${thumbHtml}
            <div class="play-overlay">
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
            ${v.duration ? `<span class="sv-duration">${v.duration}</span>` : ''}
          </div>
          <div class="shadow-card-body">
            <div class="shadow-card-title">${v.title}</div>
            <div class="shadow-card-meta">
              ${v.sourceAvatar ? `<img class="sv-source-avatar" src="${v.sourceAvatar}" alt="">` : ''}
              ${v.source ? `<span class="shadow-source">${v.source}</span>` : ''}
              <span class="shadow-card-tag">${v.category}</span>
              ${done ? '<span class="shadow-done-badge">Done</span>' : ''}
            </div>
          </div>
        </a>
      </div>`;
    }).join('');
  },

  dismissVideo(videoId) {
    if (!App.data.dismissedVideos) App.data.dismissedVideos = [];
    if (!App.data.dismissedVideos.includes(videoId)) {
      App.data.dismissedVideos.push(videoId);
      Store.save(App.data);
    }
    this.renderGrid();
    toast('Video removed from feed.');
  },

  markWatched(videoId) {
    if (!App.data.shadowDone.includes(videoId)) {
      App.data.shadowDone.push(videoId);
      App.addXP(20);
      Store.save(App.data);
    }
  },

  openPractice(videoId) {
    const allVideos = this.getAllVideos();
    const v = allVideos.find(x => x.id === videoId);
    if (!v) return;
    this._currentVideo = v;
    document.getElementById('spTitle').textContent = v.title;
    // Handle different platforms
    if (v.platform === 'bilibili' && v.embedUrl) {
      document.getElementById('spVideo').src = v.embedUrl;
    } else {
      document.getElementById('spVideo').src = `https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`;
    }
    document.getElementById('spSubtitles').textContent = v.subtitles || '(No subtitles provided for this video)';
    document.getElementById('spSubtitles').classList.remove('hidden-sub');
    document.getElementById('btnToggleSub').textContent = 'Hide Subtitles';
    document.getElementById('shadowPracticeModal').classList.add('show');
    this.setStep(1);
  },

  closePractice() {
    document.getElementById('shadowPracticeModal').classList.remove('show');
    document.getElementById('spVideo').src = '';
  },

  setStep(n) {
    document.querySelectorAll('.sp-step').forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) <= n));
  },

  toggleSubtitle() {
    const el = document.getElementById('spSubtitles');
    const btn = document.getElementById('btnToggleSub');
    el.classList.toggle('hidden-sub');
    btn.textContent = el.classList.contains('hidden-sub') ? 'Show Subtitles' : 'Hide Subtitles';
    if (el.classList.contains('hidden-sub')) this.setStep(3);
    else this.setStep(2);
  },

  markComplete() {
    const v = this._currentVideo;
    if (!v) return;
    if (!App.data.shadowDone.includes(v.id)) {
      App.data.shadowDone.push(v.id);
      App.addXP(20);
      Store.save(App.data);
      toast(`Shadow practice complete! +20 XP`);
    } else {
      toast('Already completed this one!');
    }
    this.closePractice();
    this.render();
    App.refreshDashboard();
  },

  // ── Add custom video ──
  showAddVideoModal() {
    document.getElementById('addVideoModal').classList.add('show');
    const urlInput = document.getElementById('inputVideoUrl');
    // Listen for paste / input to auto-fetch title
    urlInput.oninput = () => {
      const val = urlInput.value.trim();
      if (val.startsWith('http')) {
        ShadowModule._fetchVideoTitle(val);
      }
    };
  },
  renderSidebar() {
    const list = App.data.youtubers || [];
    const container = document.getElementById('sidebarChannelsList');
    if (!container) return;
    if (list.length === 0) { container.innerHTML = ''; return; }
    
    // Render with placeholder avatars first, then fetch real ones
    const colors = ['#1a1a1a','#3a3a3a','#555555','#2d2d2d','#444444','#1a1a1a','#333333','#4a4a4a'];
    const channelCache = YTApi._loadChannelInfoCache();
    
    container.innerHTML = list.map((yt, i) => {
      const isB = yt.startsWith('http') && yt.includes('bilibili');
      const url = isB ? yt : `https://www.youtube.com/@${yt.replace(/^@/, '')}`;
      const initials = yt.replace(/^@/, '').slice(0, 2).toUpperCase();
      const color = colors[i % colors.length];
      // Use cached avatar if available
      const cached = channelCache[yt.replace(/^@/, '').toLowerCase()];
      const avatarHtml = (cached && cached.avatar)
        ? `<img src="${cached.avatar}" alt="${yt}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.parentElement.style.background='${color}';this.parentElement.textContent='${initials}';this.remove();">`
        : initials;
      const avatarBg = (cached && cached.avatar) ? 'transparent' : color;
      return `<a href="${url}" target="_blank" class="sc-channel" id="sc_${i}" oncontextmenu="event.preventDefault();ShadowModule.showChannelMenu(event,${i})">
        <div class="sc-avatar" style="background:${avatarBg}" id="sca_${i}">${avatarHtml}</div>
        <span class="sc-name">${yt}</span>
      </a>`;
    }).join('');
    
    // Fetch real YouTube avatars for those not yet cached
    list.forEach((yt, i) => {
      if (yt.startsWith('http')) return; // skip bilibili
      const cached = channelCache[yt.replace(/^@/, '').toLowerCase()];
      if (cached && cached.avatar && (Date.now() - cached.ts < YTApi._CACHE_TTL)) return; // already shown from cache
      const color = colors[i % colors.length];
      const initials = yt.replace(/^@/, '').slice(0, 2).toUpperCase();
      YTApi.getChannelInfo(yt.replace(/^@/, '')).then(info => {
        if (info && info.avatar) {
          const el = document.getElementById('sca_' + i);
          if (el) {
            el.style.background = 'transparent';
            el.innerHTML = `<img src="${info.avatar}" alt="${yt}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" onerror="this.parentElement.style.background='${color}';this.parentElement.textContent='${initials}';this.remove();">`;
          }
        }
      }).catch(() => {});
    });
  },

  showChannelMenu(e, index) {
    document.querySelectorAll('.custom-ctx-menu').forEach(m => m.remove());
    const name = App.data.youtubers[index];
    const menu = document.createElement('div');
    menu.className = 'custom-ctx-menu';
    menu.innerHTML = `<div class="ctx-item ctx-item-danger" onclick="ShadowModule.removeChannelFromMenu(${index})">Remove "${name}"</div>`;
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
    document.body.appendChild(menu);
    setTimeout(() => {
      document.addEventListener('click', () => menu.remove(), { once: true });
    }, 10);
  },

  removeChannelFromMenu(index) {
    const name = App.data.youtubers[index];
    App.data.youtubers.splice(index, 1);
    Store.save(App.data);
    this.renderSidebar();
    this.fetchFeeds();
    document.querySelectorAll('.custom-ctx-menu').forEach(m => m.remove());
    toast(`"${name}" removed.`);
  },

  closeAddVideoModal() {
    document.getElementById('addVideoModal').classList.remove('show');
    document.getElementById('inputVideoUrl').value = '';
    document.getElementById('inputVideoTitle').value = '';
    document.getElementById('inputVideoSubs').value = '';
  },

  addCustomVideo() {
    const url = document.getElementById('inputVideoUrl').value.trim();
    let title = document.getElementById('inputVideoTitle').value.trim();
    const subs = document.getElementById('inputVideoSubs').value.trim();
    
    if (!url) { toast('Please enter a video URL.'); return; }
    
    let ytId = '';
    let platform = 'youtube';
    let embedUrl = '';
    
    // YouTube
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com')) {
        ytId = urlObj.searchParams.get('v') || '';
      } else if (urlObj.hostname === 'youtu.be') {
        ytId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes('bilibili.com')) {
        platform = 'bilibili';
        const match = urlObj.pathname.match(/\/video\/(BV[a-zA-Z0-9]+)/);
        if (match) {
          ytId = match[1];
          embedUrl = `https://player.bilibili.com/player.html?bvid=${ytId}&high_quality=1`;
        }
      }
    } catch {
      if (/^[a-zA-Z0-9_-]{11}$/.test(url)) ytId = url;
    }
    
    if (!ytId) { toast('Invalid URL. Supports YouTube and Bilibili.'); return; }
    if (!title) title = 'Video ' + ytId;
    
    // Auto-categorize based on title keywords
    const cat = this._autoCategory(title);
    
    if (!App.data.customVideos) App.data.customVideos = [];
    App.data.customVideos.push({
      id: 'custom_' + Date.now().toString(36),
      title,
      youtubeId: ytId,
      platform,
      embedUrl: embedUrl || '',
      category: cat,
      subtitles: subs,
      duration: this._pendingDuration || '',
      addedAt: new Date().toISOString(),
    });
    Store.save(App.data);
    this.closeAddVideoModal();
    this.render();
    toast(`Video "${title}" added!`);
  },

  _autoCategory(title) {
    const t = title.toLowerCase();
    if (/\bted\b|tedx|ted talk/i.test(t)) return 'ted';
    if (/\bnews\b|bbc|cnn|report|journalist|media|culture/i.test(t)) return 'news';
    if (/\bwork\b|meeting|office|job|career|interview|salary|boss|colleague|email|presentation|negotiate|professional/i.test(t)) return 'work';
    if (/\btech\b|code|program|api|software|developer|engineer|computer|algorithm|data|ai\b|startup|product/i.test(t)) return 'tech';
    return 'daily';
  },

  // Auto-fetch title + duration when URL is pasted
  _fetchVideoTitle(url) {
    const titleInput = document.getElementById('inputVideoTitle');
    
    let ytId = '';
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('youtube.com')) ytId = urlObj.searchParams.get('v') || '';
      else if (urlObj.hostname === 'youtu.be') ytId = urlObj.pathname.slice(1);
      else if (urlObj.hostname.includes('bilibili.com')) {
        // Bilibili doesn't support cross-origin title fetch
        titleInput.value = '';
        titleInput.placeholder = 'Enter title manually for Bilibili videos';
        titleInput.focus();
        return;
      }
    } catch { return; }
    if (!ytId) return;
    
    titleInput.value = 'Loading...';
    this._pendingDuration = '';
    
    // Use YouTube Data API for title + duration
    YTApi.getVideoDetails(ytId).then(details => {
      if (details) {
        titleInput.value = details.title || '';
        this._pendingDuration = details.duration || '';
      } else {
        // Fallback to noembed
        fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${ytId}`)
          .then(r => r.json())
          .then(data => { titleInput.value = data.title || ''; })
          .catch(() => { titleInput.value = ''; });
      }
    });
  },

  // ── Manage YouTubers ──
  showYoutuberModal() {
    document.getElementById('youtuberModal').classList.add('show');
    this.renderYoutubers();
  },
  closeYoutuberModal() {
    document.getElementById('youtuberModal').classList.remove('show');
  },
  renderYoutubers() {
    const list = App.data.youtubers || [];
    const container = document.getElementById('youtuberList');
    if (list.length === 0) {
      container.innerHTML = '<p class="empty-hint">No YouTubers added yet.</p>';
      return;
    }
    container.innerHTML = list.map((yt, i) => {
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(yt)}`;
      return `<div class="youtuber-item">
        <a href="${searchUrl}" target="_blank" class="youtuber-link" onclick="event.stopPropagation()">${yt} <span class="youtuber-go">→ Open on YouTube</span></a>
        <button class="vocab-delete" onclick="ShadowModule.removeYoutuber(${i})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>`;
    }).join('');
  },
  addYoutuber() {
    const input = document.getElementById('inputYoutuber').value.trim();
    if (!input) return;
    if (!App.data.youtubers) App.data.youtubers = [];
    if (App.data.youtubers.includes(input)) { toast('Already added!'); return; }
    App.data.youtubers.push(input);
    Store.save(App.data);
    document.getElementById('inputYoutuber').value = '';
    this.renderYoutubers();
    toast(`YouTuber "${input}" added!`);
  },
  removeYoutuber(index) {
    App.data.youtubers.splice(index, 1);
    Store.save(App.data);
    this.renderYoutubers();
  },
};

// ═════════════════════════════════════════
//  DAILY SENTENCE MODULE
// ═════════════════════════════════════════
const DailyModule = {
  init() { 
    this.render(); 
    this._bindSelectionAdd();
  },

  _bindSelectionAdd() {
    document.addEventListener('keydown', (e) => {
      // Option+Q: show confirm popup for selected text (like Bob app)
      if (e.altKey && (e.code === 'KeyQ' || e.key === 'q' || e.key === 'œ')) {
        e.preventDefault();
        const sel = window.getSelection().toString().trim();
        if (sel && sel.length < 500) {
          DailyModule._showQuickAdd(sel);
        } else {
          toast('Select a word or phrase first, then press Option+Q');
        }
      }
      // Option+W: screenshot OCR (like Bob app screenshot translate)
      if (e.altKey && (e.code === 'KeyW' || e.key === 'w' || e.key === '∑')) {
        e.preventDefault();
        DailyModule._showOCRModal();
      }
    });

    // Custom context menu for adding selected text
    document.addEventListener('contextmenu', (e) => {
      const sel = window.getSelection().toString().trim();
      if (sel && sel.length > 0 && sel.length < 200) {
        document.querySelectorAll('.custom-ctx-menu').forEach(m => m.remove());
        e.preventDefault();
        const menu = document.createElement('div');
        menu.className = 'custom-ctx-menu';
        menu.innerHTML = `<div class="ctx-item" onclick="DailyModule._showQuickAdd('${sel.replace(/'/g, "\\'")}');this.closest('.custom-ctx-menu').remove()">+ Add "${sel.length > 30 ? sel.slice(0,30)+'...' : sel}" to Vocab</div>`;
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';
        document.body.appendChild(menu);
        setTimeout(() => {
          document.addEventListener('click', () => menu.remove(), { once: true });
        }, 10);
      }
    });
  },

  _addFromCtx(text) {
    VocabModule.addWordDirect(text, 'Selected from page');
    VocabModule.render();
    App.refreshDashboard();
    document.querySelectorAll('.custom-ctx-menu').forEach(m => m.remove());
  },

  // ── Quick Add Popup (Bob-style, Option+Q) ──
  _showQuickAdd(text) {
    // Remove old popup
    document.querySelectorAll('.quick-add-popup').forEach(p => p.remove());
    
    const dbEntry = WORD_DB[text.toLowerCase().trim()] || {};
    const meaning = dbEntry.meaning || '';
    const phonetic = dbEntry.phonetic || '';
    
    const popup = document.createElement('div');
    popup.className = 'quick-add-popup';
    popup.innerHTML = `
      <div class="qap-header">
        <span class="qap-title">Add to Vocabulary</span>
        <button class="qap-close" onclick="this.closest('.quick-add-popup').remove()">×</button>
      </div>
      <div class="qap-word-row">
        <span class="qap-word">${text}</span>
        ${phonetic ? `<span class="qap-phonetic">${phonetic}</span>` : ''}
        <button class="speak-btn" onclick="speakWord('${text.replace(/'/g, "\\'")}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="qap-meaning" id="qapMeaning">${meaning || '<span style="color:var(--text-muted)">Looking up...</span>'}</div>
      <textarea class="qap-input" id="qapInput" placeholder="Add a note (optional)..."></textarea>
      <div class="qap-buttons">
        <button class="qap-btn-cancel" onclick="this.closest('.quick-add-popup').remove()">Cancel</button>
        <button class="qap-btn-confirm" onclick="DailyModule._confirmQuickAdd('${text.replace(/'/g, "\\'")}')">Confirm</button>
      </div>
    `;
    document.body.appendChild(popup);
    
    // Position near center of screen
    requestAnimationFrame(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'translateY(0)';
    });
    
    // Auto-speak
    speakWord(text);
    
    // Auto-lookup if no meaning in DB
    if (!meaning) {
      autoLookup(text).then(result => {
        const el = document.getElementById('qapMeaning');
        if (el && result && result.meaning) {
          el.textContent = result.meaning;
          // Store for confirm
          popup.dataset.autoMeaning = result.meaning;
          popup.dataset.autoPhonetic = result.phonetic || '';
        } else if (el) {
          el.innerHTML = '<span style="color:var(--text-muted)">No definition found</span>';
        }
      });
    }
  },
  
  _confirmQuickAdd(text) {
    const noteEl = document.getElementById('qapInput');
    const note = noteEl ? noteEl.value.trim() : '';
    VocabModule.addWordDirect(text, note || 'Added via Option+Q');
    VocabModule.render();
    App.refreshDashboard();
    document.querySelectorAll('.quick-add-popup').forEach(p => p.remove());
  },

  // ── Screenshot OCR (Option+W) ──
  _showOCRModal() {
    document.getElementById('ocrModal').classList.add('show');
    document.getElementById('ocrResult').value = '';
    document.getElementById('ocrPreview').innerHTML = '<p class="empty-hint">Paste a screenshot (Ctrl+V) or drop an image here.</p>';
    document.getElementById('ocrStatus').textContent = '';
  },
  _closeOCRModal() {
    document.getElementById('ocrModal').classList.remove('show');
  },
  _handleOCRPaste(e) {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        e.preventDefault();
        const blob = item.getAsFile();
        DailyModule._processOCRImage(blob);
        return;
      }
    }
  },
  _handleOCRDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      DailyModule._processOCRImage(file);
    }
  },
  _handleOCRFile(e) {
    const file = e.target.files[0];
    if (file) DailyModule._processOCRImage(file);
  },
  _processOCRImage(blob) {
    const preview = document.getElementById('ocrPreview');
    const status = document.getElementById('ocrStatus');
    const result = document.getElementById('ocrResult');
    
    // Show preview
    const url = URL.createObjectURL(blob);
    preview.innerHTML = `<img src="${url}" alt="Screenshot" style="max-width:100%;max-height:200px;border-radius:8px;">`;
    status.textContent = 'Recognizing text...';
    result.value = '';
    
    // Use Tesseract.js for OCR
    if (typeof Tesseract === 'undefined') {
      // Load Tesseract dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
      script.onload = () => DailyModule._runOCR(blob, status, result);
      script.onerror = () => {
        status.textContent = 'Failed to load OCR engine. Please check your network.';
      };
      document.head.appendChild(script);
    } else {
      DailyModule._runOCR(blob, status, result);
    }
  },
  async _runOCR(blob, status, result) {
    try {
      const { data: { text } } = await Tesseract.recognize(blob, 'eng', {
        logger: m => {
          if (m.status === 'recognizing text') {
            status.textContent = `Recognizing... ${Math.round((m.progress || 0) * 100)}%`;
          }
        }
      });
      const cleaned = text.trim();
      result.value = cleaned;
      status.textContent = cleaned ? 'Recognition complete! Edit if needed, then click Add.' : 'No text found. Try a clearer image.';
    } catch (err) {
      status.textContent = 'OCR failed: ' + err.message;
    }
  },
  _addOCRResult() {
    const text = document.getElementById('ocrResult').value.trim();
    if (!text) { toast('No text to add.'); return; }
    VocabModule.addWordDirect(text, 'From screenshot OCR');
    VocabModule.render();
    App.refreshDashboard();
    DailyModule._closeOCRModal();
  },

  _getIndex() {
    const start = new Date('2025-01-01');
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return diff % DAILY_SENTENCES.length;
  },

  render() {
    const idx = App.data.dailyIndex || this._getIndex();
    App.data.dailyIndex = idx;
    const s = DAILY_SENTENCES[idx % DAILY_SENTENCES.length];
    document.getElementById('dailyScene').textContent = s.scene;
    document.getElementById('dailyEnglish').textContent = s.en;
    document.getElementById('dailyChinese').textContent = s.zh;
    document.getElementById('dailyContext').innerHTML = s.context + '<div class="daily-context-cn" id="dailyContextCn"></div>';
    
    // Auto-translate context to Chinese
    if (s.context) {
      fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(s.context.slice(0, 400))}&langpair=en|zh-CN`)
        .then(r => r.json())
        .then(data => {
          const cn = data?.responseData?.translatedText;
          const el = document.getElementById('dailyContextCn');
          if (el && cn && !cn.includes('MYMEMORY')) el.textContent = cn;
        }).catch(() => {});
    }

    if (!App.data.dailySeen.includes(idx)) {
      App.data.dailySeen.push(idx);
      Store.save(App.data);
    }
    this.renderHistory();
    // Auto-speak the sentence
    setTimeout(() => speakWord(s.en), 300);
  },

  renderHistory() {
    const container = document.getElementById('dailyHistory');
    const seen = [...App.data.dailySeen].reverse().slice(0, 10);
    if (seen.length === 0) {
      container.innerHTML = '<p class="empty-hint">No history yet.</p>';
      return;
    }
    container.innerHTML = seen.map(idx => {
      const s = DAILY_SENTENCES[idx % DAILY_SENTENCES.length];
      return `<div class="daily-history-item">
        <div>${s.en}</div>
        <div class="dh-chinese">${s.cn}</div>
      </div>`;
    }).join('');
  },

  speak() {
    const text = document.getElementById('dailyEnglish').textContent;
    speakWord(text);
  },

  addToVocab() {
    const text = document.getElementById('dailyEnglish').textContent;
    VocabModule.addWordDirect(text, 'From Daily Sentence');
    VocabModule.render();
    App.refreshDashboard();
  },

  next() {
    App.data.dailyIndex = ((App.data.dailyIndex || 0) + 1) % DAILY_SENTENCES.length;
    Store.save(App.data);
    this.render();
    App.addXP(3);
    Store.save(App.data);
  },
};

// ═════════════════════════════════════════
//  CHECK-IN MODULE
// ═════════════════════════════════════════
const CheckinModule = {
  init() { this.render(); },

  render() {
    this.renderLevel();
    this.renderStats();
    this.renderHeatmap();
    this.renderBadges();
    this.renderCheckinBtn();
    this.renderMakeup();
  },

  renderLevel() {
    const lvl = App.getLevel();
    const next = App.getNextLevel();
    document.getElementById('levelNum').textContent = lvl.level;
    document.getElementById('levelTitle').textContent = lvl.title;
    if (next) {
      const progress = ((App.data.xp - lvl.xpNeeded) / (next.xpNeeded - lvl.xpNeeded)) * 100;
      document.getElementById('xpFill').style.width = `${Math.min(100, Math.max(0, progress))}%`;
      document.getElementById('xpText').textContent = `${App.data.xp} / ${next.xpNeeded} XP`;
    } else {
      document.getElementById('xpFill').style.width = '100%';
      document.getElementById('xpText').textContent = `${App.data.xp} XP — MAX LEVEL`;
    }
  },

  renderStats() {
    document.getElementById('statTotalWords').textContent = App.data.words.length;
    document.getElementById('statReviewed').textContent = App.data.reviewsDone || 0;
    document.getElementById('statShadow').textContent = App.data.shadowDone.length;
    document.getElementById('statStreak').textContent = App.getBestStreak();
  },

  renderHeatmap() {
    const heatmap = document.getElementById('heatmap');
    heatmap.innerHTML = '';

    // Build 53 weeks × 7 days (371 cells) ending today
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 370 + (6 - today.getDay())); // Align to fill grid

    for (let i = 0; i < 371; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const ds = d.toISOString().slice(0, 10);
      const checkin = App.data.checkins[ds];
      let level = 0;
      if (checkin) {
        const xp = checkin.xp || 0;
        if (xp >= 50) level = 4;
        else if (xp >= 30) level = 3;
        else if (xp >= 15) level = 2;
        else level = 1;
      }
      const cell = document.createElement('div');
      cell.className = 'hm-cell';
      cell.dataset.level = level;
      cell.title = `${ds}: ${checkin ? `${checkin.xp || 0} XP` : 'No activity'}`;
      heatmap.appendChild(cell);
    }
  },

  renderBadges() {
    const grid = document.getElementById('badgesGrid');
    const stats = {
      totalWords: App.data.words.length,
      reviewsDone: App.data.reviewsDone || 0,
      shadowsDone: App.data.shadowDone.length,
      bestStreak: App.getBestStreak(),
      dailySeen: App.data.dailySeen.length,
    };
    grid.innerHTML = BADGES.map(b => {
      const earned = b.condition(stats);
      return `<div class="badge-card ${earned ? 'earned' : 'locked'}">
        <div class="badge-icon">${b.icon}</div>
        <span class="badge-name">${b.name}</span>
        <span class="badge-desc">${b.desc}</span>
      </div>`;
    }).join('');
  },

  renderCheckinBtn() {
    const btn = document.getElementById('btnCheckin');
    if (App.data.checkins[todayStr()]) {
      btn.textContent = 'Checked In Today ✓';
      btn.classList.add('checked');
    } else {
      btn.textContent = 'Check In Today';
      btn.classList.remove('checked');
    }
  },

  checkinToday() {
    const today = todayStr();
    if (App.data.checkins[today]) {
      toast('Already checked in today!');
      return;
    }
    App.data.checkins[today] = { xp: 10, tasks: ['checkin'], time: new Date().toISOString() };
    App.addXP(10);
    Store.save(App.data);
    this.render();
    App.refreshDashboard();

    // Random encouragement
    const encouragements = [
      "Consistency is the mother of mastery!",
      "Every day is a new chance to grow!",
      "You're building something amazing!",
      "Small steps lead to big changes!",
      "Keep it up, future English master!",
      "Did you know? 'OK' is the most universally understood word!",
      "Fun fact: Shakespeare invented over 1,700 English words!",
      "The word 'set' has the most definitions of any English word!",
    ];
    const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
    toast(`Checked in! +10 XP — ${msg}`);
  },

  renderMakeup() {
    const month = todayStr().slice(0, 7);
    const used = App.data.makeupUsed[month] || 0;
    document.getElementById('makeupRemain').textContent = Math.max(0, 3 - used);
    document.getElementById('makeupDate').max = todayStr();
  },

  makeupCheckin() {
    const dateInput = document.getElementById('makeupDate').value;
    if (!dateInput) { toast('Please select a date.'); return; }
    if (dateInput >= todayStr()) { toast('Cannot make up today or future dates.'); return; }
    if (App.data.checkins[dateInput]) { toast('Already checked in on that day!'); return; }

    const month = todayStr().slice(0, 7);
    const used = App.data.makeupUsed[month] || 0;
    if (used >= 3) { toast('No make-up chances left this month!'); return; }

    App.data.checkins[dateInput] = { xp: 5, tasks: ['makeup'], time: new Date().toISOString() };
    App.data.makeupUsed[month] = used + 1;
    App.addXP(5);
    Store.save(App.data);
    this.render();
    App.refreshDashboard();
    toast(`Made up check-in for ${dateInput}! +5 XP`);
  },
};

// ───────── Bootstrap ─────────
// ═════════════════════════════════════════
//  FOCUS TIMER MODULE
// ═════════════════════════════════════════
const FocusTimer = {
  GOAL: 30 * 60, // 30 minutes in seconds
  _interval: null,
  _startTime: null,
  _elapsed: 0, // seconds already elapsed today
  _running: false,
  _KEY: 'pebble_focus',

  init() {
    const saved = this._load();
    const today = todayStr();
    if (saved.date === today) {
      this._elapsed = saved.elapsed || 0;
    } else {
      this._elapsed = 0;
    }
    this._running = false;
    this._render();
  },

  _load() {
    try { return JSON.parse(localStorage.getItem(this._KEY)) || {}; } catch { return {}; }
  },

  _save() {
    localStorage.setItem(this._KEY, JSON.stringify({
      date: todayStr(),
      elapsed: this._elapsed,
    }));
  },

  toggle() {
    if (this._elapsed >= this.GOAL) return; // already done
    if (this._running) {
      this._pause();
    } else {
      this._start();
    }
  },

  _start() {
    this._running = true;
    this._startTime = Date.now();
    this._baseElapsed = this._elapsed; // snapshot current elapsed
    this._interval = setInterval(() => this._tick(), 1000);
    this._render();
  },

  _pause() {
    this._running = false;
    clearInterval(this._interval);
    this._interval = null;
    this._save();
    this._render();
  },

  _tick() {
    const sessionSec = Math.floor((Date.now() - this._startTime) / 1000);
    this._elapsed = this._baseElapsed + sessionSec;

    if (this._elapsed >= this.GOAL) {
      this._elapsed = this.GOAL;
      this._pause();
      toast('30 minutes done! Great focus today! 🎉');
      App.addXP(15);
      Store.save(App.data);
    }
    this._render();
  },

  _render() {
    const remaining = Math.max(0, this.GOAL - this._elapsed);
    const min = Math.floor(remaining / 60);
    const sec = remaining % 60;
    const pct = Math.min(this._elapsed / this.GOAL, 1);
    const done = pct >= 1;

    // Time
    const timeEl = document.getElementById('ftTime');
    if (timeEl) timeEl.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

    // Progress ring (circumference = 2 * π * 16 ≈ 100.53)
    const circumference = 100.53;
    const progressEl = document.getElementById('ftProgress');
    if (progressEl) progressEl.setAttribute('stroke-dashoffset', circumference * (1 - pct));

    // Button
    const btn = document.getElementById('ftBtn');
    if (btn) {
      if (done) btn.textContent = 'Done ✓';
      else if (this._running) btn.textContent = 'Pause';
      else if (this._elapsed > 0) btn.textContent = 'Resume';
      else btn.textContent = 'Start';
    }

    // Label
    const label = document.getElementById('ftLabel');
    if (label) {
      if (done) label.textContent = 'COMPLETED';
      else if (this._running) label.textContent = 'FOCUSING...';
      else label.textContent = 'DAILY FOCUS';
    }

    // Sub
    const sub = document.getElementById('ftSub');
    if (sub) {
      if (done) sub.textContent = '30 min done today';
      else sub.textContent = `${Math.floor(this._elapsed / 60)}/${this.GOAL / 60} min`;
    }

    // Container state
    const container = document.getElementById('focusTimer');
    if (container) {
      container.classList.toggle('running', this._running && !done);
      container.classList.toggle('completed', done);
    }

    // Ring color
    if (progressEl) {
      progressEl.setAttribute('stroke', done ? '#16a34a' : '#e8590c');
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  FocusTimer.init();
  
  // Click outside modal to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('show');
        // Stop any playing video
        const iframe = overlay.querySelector('iframe');
        if (iframe) iframe.src = '';
      }
    });
  });
});
