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

// ───────── Daily Scene Definitions (5-6 scenes per day, 3-5 words each) ─────────
const DAILY_SCENES = [
  { title: "Coffee Shop", emoji: "☕", desc: "Ordering your morning fix", words: ["commute", "mundane", "spontaneous", "vibe", "banter"], sentence: "I grab my usual <strong>commute</strong> coffee — the <strong>mundane</strong> ritual that somehow makes my day feel less <strong>mundane</strong>." },
  { title: "Standup Meeting", emoji: "🧑‍💻", desc: "Daily sync with your team", words: ["blocker", "bandwidth", "standup", "sync", "heads-up"], sentence: "At the <strong>standup</strong>, I gave a <strong>heads-up</strong> that I'm <strong>blocked</strong> on the API — I need more <strong>bandwidth</strong> from backend." },
  { title: "Design Review", emoji: "🎨", desc: "Critiquing a new mockup", words: ["hierarchy", "whitespace", "contrast", "alignment", "CTA"], sentence: "The visual <strong>hierarchy</strong> is off — add more <strong>whitespace</strong> and increase <strong>contrast</strong> on the <strong>CTA</strong>." },
  { title: "Lunch Break", emoji: "🍜", desc: "Chatting over food", words: ["foodie", "mouthwatering", "bland", "guilty pleasure", "binge"], sentence: "She's a total <strong>foodie</strong> — her Instagram is full of <strong>mouthwatering</strong> photos, and her <strong>guilty pleasure</strong> is late-night ramen." },
  { title: "Networking Event", emoji: "🤝", desc: "Making new connections", words: ["break the ice", "compelling", "stakeholder", "leverage", "synergy"], sentence: "I used a joke to <strong>break the ice</strong>, then made a <strong>compelling</strong> case for how we can create <strong>synergy</strong>." },
  { title: "Bug Hunt", emoji: "🐛", desc: "Debugging a production issue", words: ["bottleneck", "edge case", "rollback", "verbose", "workaround"], sentence: "The <strong>edge case</strong> caused a <strong>bottleneck</strong> — we used a <strong>workaround</strong> first, then <strong>rolled back</strong> the deploy." },
  { title: "Weekend Plans", emoji: "🌤️", desc: "Making plans with friends", words: ["hang out", "spontaneous", "FOMO", "bucket list", "wanderlust"], sentence: "Let's be <strong>spontaneous</strong> and just <strong>hang out</strong> at the beach — I've had serious <strong>wanderlust</strong> and <strong>FOMO</strong> lately." },
  { title: "Movie Night", emoji: "🎬", desc: "Discussing what to watch", words: ["cliffhanger", "plot twist", "binge-watch", "spoiler", "iconic"], sentence: "No <strong>spoilers</strong>! But I heard the ending has an <strong>iconic</strong> <strong>plot twist</strong> — it's so <strong>binge</strong>-worthy." },
  { title: "Performance Review", emoji: "📊", desc: "Getting feedback at work", words: ["actionable", "KPI", "deliverable", "iterate", "trade-off"], sentence: "The feedback was <strong>actionable</strong>: hit our <strong>KPIs</strong>, <strong>iterate</strong> faster, and accept the <strong>trade-offs</strong> in quality vs. speed." },
  { title: "Apartment Hunting", emoji: "🏠", desc: "Looking for a new place", words: ["dealbreaker", "incentive", "commute", "cozy", "sustainable"], sentence: "A long <strong>commute</strong> is a <strong>dealbreaker</strong> for me — I need somewhere <strong>cozy</strong> and <strong>sustainable</strong>." },
  { title: "Startup Pitch", emoji: "🚀", desc: "Presenting your idea", words: ["MVP", "pivot", "pain point", "scalable", "disrupt"], sentence: "Our <strong>MVP</strong> solves a key <strong>pain point</strong> — if we need to <strong>pivot</strong>, the architecture is <strong>scalable</strong>." },
  { title: "Creative Process", emoji: "✨", desc: "Brainstorming new ideas", words: ["moodboard", "iteration", "cohesive", "aesthetic", "intuitive"], sentence: "I started with a <strong>moodboard</strong> and after three <strong>iterations</strong>, the design feels <strong>cohesive</strong> and <strong>intuitive</strong>." },
  { title: "Gym & Fitness", emoji: "💪", desc: "Talking about workouts", words: ["motivated", "overwhelmed", "cope", "resilient", "burnt out"], sentence: "I felt <strong>overwhelmed</strong> and <strong>burnt out</strong>, but working out helps me <strong>cope</strong> — it makes me more <strong>resilient</strong>." },
  { title: "Social Media", emoji: "📱", desc: "Internet culture talk", words: ["viral", "algorithm", "influencer", "clickbait", "scroll"], sentence: "That post went <strong>viral</strong> thanks to the <strong>algorithm</strong> — but half the comments are just <strong>influencers</strong> leaving <strong>clickbait</strong>." },
  { title: "Travel Day", emoji: "✈️", desc: "At the airport", words: ["jet lag", "itinerary", "souvenir", "bucket list", "wanderlust"], sentence: "Despite the <strong>jet lag</strong>, I stuck to my <strong>itinerary</strong> and crossed three things off my <strong>bucket list</strong>." },
  { title: "Code Review", emoji: "👁️", desc: "Reviewing a teammate's PR", words: ["refactor", "tech debt", "boilerplate", "legacy", "deprecate"], sentence: "This <strong>legacy</strong> module has too much <strong>tech debt</strong> — let's <strong>refactor</strong> it and <strong>deprecate</strong> the old API." },
  { title: "First Date", emoji: "❤️", desc: "Getting to know someone", words: ["genuine", "hilarious", "awkward", "catch up", "vibe"], sentence: "The <strong>vibe</strong> was great — she's <strong>genuine</strong> and <strong>hilarious</strong>, and it wasn't <strong>awkward</strong> at all." },
  { title: "Product Launch", emoji: "🎯", desc: "Shipping a new feature", words: ["ship", "deploy", "sprint", "scope creep", "pipeline"], sentence: "We <strong>shipped</strong> it after a two-week <strong>sprint</strong> — avoided <strong>scope creep</strong> and our CI/CD <strong>pipeline</strong> handled the <strong>deploy</strong>." },
  { title: "Freelance Life", emoji: "💻", desc: "Working independently", words: ["side hustle", "deadline", "bandwidth", "streamline", "follow up"], sentence: "My <strong>side hustle</strong> has tight <strong>deadlines</strong>, so I <strong>streamlined</strong> my workflow and always <strong>follow up</strong> quickly." },
  { title: "Book Club", emoji: "📚", desc: "Discussing what you're reading", words: ["compelling", "nuance", "eloquent", "gist", "understatement"], sentence: "The author's <strong>eloquent</strong> prose captures every <strong>nuance</strong> — saying it's good is an <strong>understatement</strong>." },
  { title: "Slang Vibes", emoji: "🔥", desc: "Casual chat with friends", words: ["slay", "lit", "cap", "rent-free", "sus"], sentence: "That outfit? <strong>Slay</strong>. The party was <strong>lit</strong>. No <strong>cap</strong>, that song lives in my head <strong>rent-free</strong>." },
  { title: "Remote Work", emoji: "🏡", desc: "WFH challenges", words: ["onboarding", "downtime", "agile", "deep dive", "hands-on"], sentence: "The <strong>onboarding</strong> was smooth — our <strong>agile</strong> team does <strong>hands-on</strong> pairing and weekly <strong>deep dives</strong>." },
  { title: "Client Meeting", emoji: "💼", desc: "Discussing with stakeholders", words: ["ROI", "scope", "deliverable", "touch base", "takeaway"], sentence: "The key <strong>takeaway</strong>: define <strong>scope</strong> first, show <strong>ROI</strong>, and <strong>touch base</strong> weekly with updates." },
  { title: "Street Food Tour", emoji: "🌮", desc: "Exploring local eats", words: ["authentic", "mouthwatering", "versatile", "iconic", "subtle"], sentence: "The <strong>authentic</strong> street tacos were <strong>mouthwatering</strong> — <strong>subtle</strong> spice, <strong>iconic</strong> flavors." },
];

function getDailyScenes(existingWords) {
  const today = todayStr();
  const seed = today.split('-').join('');
  const seedNum = parseInt(seed, 10);
  
  // Shuffle scenes based on date seed and pick 5-6
  const pool = [...DAILY_SCENES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = (seedNum * (i + 1) + 7919) % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 6);
}

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
  // ═══ BATCH 2: Workplace & Professional ═══
  { scene: "Workplace - Deadline", en: "We're cutting it close on the deadline. Can we reprioritize?", zh: "截止日期快到了，我们能重新排优先级吗？", context: "'Cutting it close' means barely making it in time. Very natural in project discussions." },
  { scene: "Workplace - Feedback", en: "That's a fair point. Let me push back on one thing, though.", zh: "这说得有道理。不过有一点我想反驳一下。", context: "'Push back' means to disagree or challenge politely. Shows you're engaged but have a different view." },
  { scene: "Workplace - Standup", en: "I'm blocked on the API integration — waiting on the backend team.", zh: "我在 API 集成上被卡住了——在等后端团队。", context: "'Blocked' is standard agile terminology meaning you can't proceed. Very common in daily standups." },
  { scene: "Workplace - Praise", en: "You absolutely crushed that presentation. The client loved it.", zh: "你那个演讲太牛了，客户超喜欢。", context: "'Crushed it' is enthusiastic informal praise meaning you did an amazing job." },
  { scene: "Workplace - Delegation", en: "Can you take the lead on this? I trust your judgment.", zh: "这个你来主导好吗？我信任你的判断。", context: "'Take the lead' means to be in charge. Adding 'I trust your judgment' shows confidence in the person." },
  { scene: "Workplace - Scheduling", en: "Does 3 PM work for everyone, or should we push it to tomorrow?", zh: "下午三点大家都行吗，还是推到明天？", context: "'Does X work for everyone' is the standard way to propose a meeting time." },
  { scene: "Workplace - Declining", en: "I'd love to help, but I'm at capacity right now. Can we revisit next week?", zh: "我很想帮忙，但现在确实忙不过来。下周再看看？", context: "'At capacity' is a polite way to say you're too busy. Much better than 'I'm too busy'." },
  { scene: "Workplace - Update", en: "Quick update — we're on track for the Friday release.", zh: "简单更新一下——周五发布按计划进行中。", context: "'On track' means everything is going according to plan. Very common in status updates." },
  { scene: "Workplace - Problem", en: "We've hit a snag with the deployment. I'll have a fix by EOD.", zh: "部署遇到了一个问题。我今天下班前搞定。", context: "'Hit a snag' means encountered an unexpected problem. 'EOD' = end of day." },
  { scene: "Workplace - Collaboration", en: "Let's loop in the design team — they might have thoughts on this.", zh: "把设计团队拉进来吧——他们可能有想法。", context: "'Loop in' means to include someone in a conversation or decision. Very common in cross-team work." },
  { scene: "Workplace - Negotiation", en: "That's a fair point. Let's find a middle ground that works for both sides.", zh: "有道理。我们找个双方都能接受的折中方案吧。", context: "'Middle ground' means a compromise. Shows willingness to collaborate rather than insist." },
  { scene: "Workplace - Brainstorm", en: "Let's throw some ideas around and see what sticks.", zh: "我们先头脑风暴一下，看看哪些可行。", context: "'See what sticks' is an idiom meaning 'see which ideas work out'. Very casual and creative meeting energy." },
  { scene: "Workplace - Review", en: "Overall it looks solid. I have a few minor suggestions in the comments.", zh: "整体看起来不错。我在评论里留了几条小建议。", context: "'Looks solid' is positive feedback. 'Minor suggestions' downplays criticism to keep things collaborative." },
  { scene: "Workplace - Onboarding", en: "Don't hesitate to reach out if you have any questions. We've all been there.", zh: "有什么问题尽管问。大家都是这么过来的。", context: "'We've all been there' normalizes asking questions as a new person. Very welcoming." },
  { scene: "Workplace - Closing", en: "I think we're aligned. Let's circle back if anything comes up.", zh: "我觉得我们达成一致了。有情况再聊。", context: "'Aligned' means in agreement. 'Circle back' means to return to the topic later if needed." },
  // ═══ BATCH 3: Daily Life — Social & Friends ═══
  { scene: "Social - Greeting", en: "Long time no see! How have you been?", zh: "好久不见！最近怎么样？", context: "Classic greeting for someone you haven't seen in a while. 'How have you been' is warmer than 'how are you'." },
  { scene: "Social - Plans", en: "Are you free this Saturday? A bunch of us are going hiking.", zh: "这周六有空吗？我们一群人去爬山。", context: "'A bunch of us' means a group of friends. Casual way to invite someone to join group plans." },
  { scene: "Social - Compliment", en: "I love your outfit! Where did you get that jacket?", zh: "你这身穿搭好好看！那件外套哪买的？", context: "Complimenting someone's style and asking where they got it is a natural conversation opener." },
  { scene: "Social - Sympathy", en: "That sounds really tough. I'm here if you need to talk.", zh: "听起来真的很难。想聊的话我在。", context: "Showing empathy without giving advice. 'I'm here if you need to talk' is supportive without being pushy." },
  { scene: "Social - Invitation", en: "We're having a few people over on Friday. Nothing fancy — just drinks and pizza.", zh: "周五我们家来几个人。很随意的——喝酒吃披萨。", context: "'Nothing fancy' sets expectations that it's casual. Makes the invitation feel low-pressure." },
  { scene: "Social - Declining", en: "I really appreciate the invite, but I'm going to sit this one out.", zh: "谢谢邀请，但这次我就不去了。", context: "'Sit this one out' means to skip this particular event. Polite and non-committal." },
  { scene: "Social - Gossip", en: "Did you hear about Sarah and Tom? Apparently they broke up.", zh: "你听说 Sarah 和 Tom 的事了吗？好像分手了。", context: "'Apparently' signals that it's secondhand information. Common way to share gossip without claiming certainty." },
  { scene: "Social - Advice", en: "If I were you, I'd sleep on it before making a decision.", zh: "换作是我，我会先想一晚再决定。", context: "'If I were you' is a gentle way to give advice. 'Sleep on it' means to think overnight." },
  { scene: "Social - Catching up", en: "So what's new with you? Last time we talked, you were thinking about switching jobs.", zh: "你最近有啥新鲜事？上次聊的时候你在考虑换工作。", context: "Great way to reconnect — showing you remember what they told you last time." },
  { scene: "Social - Encouragement", en: "You've got this. Seriously, you're way more prepared than you think.", zh: "你能行的。说真的，你比自己以为的准备得好多了。", context: "'You've got this' is encouraging someone before a challenge. Very common between friends." },
  // ═══ BATCH 4: Daily Life — Shopping & Services ═══
  { scene: "Shopping - Returns", en: "I'd like to return this. I bought it last week but it doesn't fit.", zh: "我想退货。上周买的但尺码不合适。", context: "Simple and direct. Most stores accept returns within a certain period." },
  { scene: "Shopping - Browsing", en: "I'm just browsing, thanks. I'll let you know if I need help.", zh: "我随便看看，谢谢。需要帮忙我会叫你。", context: "Standard response when a shop assistant approaches you. Polite but sets boundaries." },
  { scene: "Shopping - Price", en: "Is there any discount if I buy two? Or any ongoing promotions?", zh: "买两个有折扣吗？或者有什么活动？", context: "Asking about discounts is completely normal. 'Ongoing promotions' sounds natural." },
  { scene: "Restaurant - Ordering", en: "Could we get a few more minutes? We haven't decided yet.", zh: "能再给我们几分钟吗？还没决定好。", context: "Very natural way to ask the waiter for more time. 'Could we get' is polite." },
  { scene: "Restaurant - Requesting", en: "Excuse me, could I get the bill when you have a moment?", zh: "不好意思，方便的时候能结账吗？", context: "'When you have a moment' is very polite — acknowledges the server is busy." },
  { scene: "Restaurant - Dietary", en: "Does this have any nuts in it? I have a pretty severe allergy.", zh: "这里面有坚果吗？我过敏挺严重的。", context: "Important to communicate allergies clearly. 'Pretty severe' emphasizes it's serious." },
  { scene: "Restaurant - Compliment", en: "Compliments to the chef — that was absolutely incredible.", zh: "请代我夸一下厨师——真的太好吃了。", context: "'Compliments to the chef' is a classic phrase when the food is exceptional." },
  { scene: "Services - Hairdresser", en: "Just a trim, please. Maybe an inch off the ends.", zh: "修一下就好。大概剪掉一寸。", context: "'Just a trim' means a small cut, not a major change. 'An inch off the ends' gives specific guidance." },
  { scene: "Services - Doctor", en: "I've been having headaches for about a week. They come and go.", zh: "头疼大概一周了。时好时坏的。", context: "'Come and go' describes intermittent symptoms. Clear and concise for a doctor." },
  // ═══ BATCH 5: Daily Life — Feelings & Reactions ═══
  { scene: "Reaction - Surprise", en: "No way! Are you serious? That's insane!", zh: "不会吧！你认真的？太疯狂了！", context: "Classic surprised reaction. 'No way' and 'insane' are very common in casual speech." },
  { scene: "Reaction - Disappointment", en: "That's a bummer. I was really looking forward to it.", zh: "太可惜了。我之前特别期待的。", context: "'That's a bummer' is informal for expressing disappointment. Very natural." },
  { scene: "Reaction - Agreement", en: "Totally. I couldn't agree more. That's exactly how I feel.", zh: "完全同意。一模一样的感觉。", context: "'I couldn't agree more' is the strongest way to express agreement." },
  { scene: "Reaction - Frustration", en: "I've been going back and forth on this for days. I just can't decide.", zh: "这件事我来回纠结好几天了。就是定不下来。", context: "'Going back and forth' means being indecisive, switching between options repeatedly." },
  { scene: "Reaction - Relief", en: "Oh thank god. I was so worried that wasn't going to work out.", zh: "谢天谢地。我之前好担心搞不定。", context: "'Thank god' expresses relief. 'Work out' means to succeed or be resolved." },
  { scene: "Reaction - Excitement", en: "I'm so hyped for this weekend! It's going to be epic.", zh: "我超期待这个周末的！肯定会很棒。", context: "'Hyped' means very excited. 'Epic' means amazing/memorable. Both casual and enthusiastic." },
  { scene: "Reaction - Empathy", en: "I totally get it. That must have been really stressful for you.", zh: "我完全理解。你当时一定压力很大。", context: "'I totally get it' validates their feelings. 'That must have been' shows empathy without minimizing." },
  { scene: "Reaction - Humor", en: "I'm dead. That's the funniest thing I've heard all week.", zh: "笑死我了。这是我这周听到最搞笑的。", context: "'I'm dead' is slang for laughing extremely hard. Very common online and in person." },
  // ═══ BATCH 6: Local/Idioms — Native-sounding expressions ═══
  { scene: "Idiom - Honesty", en: "I'll be honest with you — I think we need to rethink this approach.", zh: "跟你说实话——我觉得这个方案得重新想想。", context: "'I'll be honest with you' signals that what follows is a candid opinion, possibly critical." },
  { scene: "Idiom - Uncertainty", en: "I'm on the fence about it. There are pros and cons either way.", zh: "我还没想好。两边都有利弊。", context: "'On the fence' means undecided. 'Pros and cons either way' shows balanced thinking." },
  { scene: "Idiom - Timing", en: "It's now or never. If we don't do it today, we'll lose the window.", zh: "机不可失。今天不做就没机会了。", context: "'Now or never' creates urgency. 'Lose the window' means miss the opportunity." },
  { scene: "Idiom - Overwork", en: "I've been burning the candle at both ends. I need a proper break.", zh: "我最近太拼了。需要好好休息一下。", context: "'Burning the candle at both ends' means working too hard with too little rest." },
  { scene: "Idiom - Reality", en: "Let's be realistic here. We can't do everything with this budget.", zh: "咱们现实点。这个预算不可能什么都做。", context: "'Let's be realistic' brings the conversation back to practical constraints." },
  { scene: "Idiom - Luck", en: "We really dodged a bullet there. It could have been so much worse.", zh: "我们真是躲过一劫。本来可能更糟的。", context: "'Dodged a bullet' means narrowly avoided a bad situation." },
  { scene: "Idiom - Effort", en: "It's not rocket science. Just follow the steps and you'll be fine.", zh: "又不是什么难事。照着步骤来就行了。", context: "'It's not rocket science' means it's not that complicated. Used to reassure someone." },
  { scene: "Idiom - Money", en: "That restaurant was a rip-off. $30 for a salad? No thanks.", zh: "那家餐厅太坑了。一份沙拉30刀？算了吧。", context: "'Rip-off' means something is way overpriced. Very common complaint." },
  { scene: "Idiom - Gossip", en: "I don't want to name names, but someone on the team dropped the ball.", zh: "我不想点名，但团队里有人掉链子了。", context: "'Dropped the ball' means failed to do their part. 'Name names' means specifically identify who." },
  { scene: "Idiom - Success", en: "We nailed the pitch. The investors were totally on board.", zh: "我们那个 pitch 讲得太好了。投资人完全被说服了。", context: "'Nailed it' means did it perfectly. 'On board' means they agreed/supported." },
  { scene: "Idiom - Change", en: "I'm turning over a new leaf this year. More exercise, less screen time.", zh: "今年我要重新开始。多运动，少看屏幕。", context: "'Turning over a new leaf' means making a fresh start with better habits." },
  { scene: "Idiom - Patience", en: "Hang in there. I know it's tough, but things will get better.", zh: "撑住。我知道很难，但会好起来的。", context: "'Hang in there' is encouraging someone to persist through a difficult time." },
  // ═══ BATCH 7: Tech & Internet Culture ═══
  { scene: "Tech - Bug Report", en: "I can reproduce the bug consistently. It happens every time you refresh.", zh: "这个 bug 我能稳定复现。每次刷新都会出现。", context: "'Reproduce consistently' is key language in bug reports. Makes the issue easier to fix." },
  { scene: "Tech - Code Review", en: "Could you add some comments here? The logic is a bit hard to follow.", zh: "这里能加点注释吗？逻辑有点不太好跟。", context: "Constructive code review feedback. 'A bit hard to follow' is gentle criticism." },
  { scene: "Tech - Architecture", en: "We should decouple these two services. The tight coupling is causing issues.", zh: "我们应该把这两个服务解耦。耦合太紧在出问题。", context: "'Decouple' and 'tight coupling' are standard architecture terms. Very common in design discussions." },
  { scene: "Tech - Release", en: "Let's hold off on the release until we've fixed the critical bugs.", zh: "先别发布，等把严重 bug 修完再说。", context: "'Hold off' means to wait/delay. Common when something isn't ready to ship." },
  { scene: "Tech - Performance", en: "The page load time is way too slow. We need to optimize the queries.", zh: "页面加载太慢了。得优化一下查询。", context: "'Way too slow' emphasizes the severity. Direct and actionable feedback." },
  { scene: "Tech - Learning", en: "I went down a rabbit hole reading about WebAssembly last night.", zh: "昨晚我看 WebAssembly 的文章看入迷了。", context: "'Went down a rabbit hole' means got deeply absorbed in research/reading, often losing track of time." },
  { scene: "Tech - Help", en: "I'm stuck on this. Mind taking a look when you get a chance?", zh: "我卡住了。你有空的时候能帮我看看吗？", context: "'Mind taking a look' is a polite way to ask for help without being demanding." },
  { scene: "Tech - Demo", en: "Let me share my screen. I'll walk you through the new flow.", zh: "我来共享屏幕。带你们过一下新流程。", context: "'Walk you through' means to explain step by step. Standard in demos." },
  // ═══ BATCH 8: Daily Life — Home & Routine ═══
  { scene: "Home - Morning", en: "I'm not a morning person at all. I need at least two coffees to function.", zh: "我完全不是早起的人。至少得喝两杯咖啡才能运转。", context: "'Not a morning person' means you struggle to wake up early. Very relatable." },
  { scene: "Home - Cooking", en: "I tried to follow the recipe but I think I messed up the seasoning.", zh: "我照着食谱做了，但调味好像搞砸了。", context: "'Messed up' means made a mistake. 'Seasoning' refers to salt, spices, etc." },
  { scene: "Home - Chores", en: "I've been putting off doing laundry for way too long.", zh: "我拖了好久都没洗衣服了。", context: "'Putting off' means procrastinating. 'Way too long' emphasizes how long it's been." },
  { scene: "Home - Roommate", en: "Hey, could you keep it down a bit? I have an early meeting tomorrow.", zh: "嘿，能小声点吗？我明天一早有会。", context: "'Keep it down' means be quieter. Polite but direct way to ask a roommate." },
  { scene: "Home - Weather", en: "It's absolutely pouring outside. I'm not going anywhere today.", zh: "外面瓢泼大雨。今天哪儿也不去了。", context: "'Pouring' means raining very heavily. 'Not going anywhere' shows determination to stay home." },
  { scene: "Home - Health", en: "I think I'm coming down with something. My throat feels scratchy.", zh: "我好像要感冒了。嗓子有点发痒。", context: "'Coming down with something' means getting sick. 'Scratchy throat' is early cold symptom." },
  { scene: "Home - Sleep", en: "I barely slept last night. I was tossing and turning the whole time.", zh: "昨晚几乎没睡。一直翻来覆去的。", context: "'Tossing and turning' means unable to fall asleep, moving around in bed restlessly." },
  { scene: "Home - Exercise", en: "I've been trying to work out more, but it's hard to stay consistent.", zh: "我一直想多锻炼，但很难坚持。", context: "'Stay consistent' is the key challenge with exercise. Very relatable sentence." },
  // ═══ BATCH 9: Travel & Transportation ═══
  { scene: "Travel - Airport", en: "My flight got delayed by two hours. Classic.", zh: "我的航班延误了两小时。果然。", context: "'Classic' here is sarcastic, meaning 'of course this happened, not surprised'." },
  { scene: "Travel - Directions", en: "Excuse me, is there a subway station nearby? I'm a bit lost.", zh: "打扰一下，附近有地铁站吗？我有点迷路了。", context: "'A bit lost' is gentler than 'I'm lost'. Casual way to ask for directions." },
  { scene: "Travel - Hotel", en: "Is there any chance of an upgrade? We're celebrating our anniversary.", zh: "有可能升级房间吗？我们在庆祝结婚纪念日。", context: "'Is there any chance' is a polite way to ask for something extra. Mentioning a reason helps." },
  { scene: "Travel - Ride", en: "Could you drop me off at the corner? That's close enough.", zh: "在拐角让我下车就行。够近了。", context: "'Drop me off' means let me out of the car. 'Close enough' means it's an acceptable distance." },
  { scene: "Travel - Experience", en: "That was hands down the best trip I've ever been on.", zh: "那绝对是我去过的最棒的一次旅行。", context: "'Hands down' means without any doubt, definitively the best." },
  // ═══ BATCH 10: Pop Culture & Entertainment ═══
  { scene: "Entertainment - TV", en: "No spoilers! I haven't finished the latest season yet.", zh: "别剧透！我还没看完最新一季。", context: "'No spoilers' is essential when you're behind on a show. Very common." },
  { scene: "Entertainment - Music", en: "This song has been stuck in my head all day. I can't stop humming it.", zh: "这首歌在我脑子里循环了一整天。一直在哼。", context: "'Stuck in my head' means you keep hearing it mentally. An earworm." },
  { scene: "Entertainment - Movies", en: "That movie was a total letdown. The trailer made it look way better.", zh: "那部电影太令人失望了。预告片看着好多了。", context: "'Letdown' means disappointment. Comparing trailer to actual movie is very common." },
  { scene: "Entertainment - Games", en: "I've been grinding this game for hours and I still can't beat the boss.", zh: "这游戏我肝了好几个小时还是过不了这个 boss。", context: "'Grinding' means doing repetitive actions to progress. Gaming term now widely used." },
  { scene: "Entertainment - Reading", en: "I couldn't put the book down. I finished it in one sitting.", zh: "那本书根本放不下来。我一口气看完了。", context: "'Couldn't put it down' means it was so engaging you had to keep reading." },
  { scene: "Entertainment - Podcast", en: "Have you listened to that new podcast everyone's talking about?", zh: "你听了那个大家都在聊的新播客吗？", context: "Asking about trending content is a great conversation starter." },
  // ═══ BATCH 11: Dating & Relationships ═══
  { scene: "Dating - Interest", en: "We really hit it off. We talked for like three hours straight.", zh: "我们特别聊得来。连续聊了差不多三个小时。", context: "'Hit it off' means to instantly get along well with someone. Very common in dating context." },
  { scene: "Dating - Boundaries", en: "I need some space right now. It's not about you — I just need time to think.", zh: "我现在需要一些空间。不是因为你——我只是需要时间想想。", context: "'I need some space' is asking for alone time. 'It's not about you' prevents the other person from feeling blamed." },
  { scene: "Dating - Flirting", en: "You have really good taste in music. We should make a playlist together.", zh: "你音乐品味真好。我们可以一起做个歌单。", context: "Compliment + suggesting an activity together is natural flirting. Low-pressure and fun." },
  { scene: "Relationship - Support", en: "I'm proud of you for going after what you want. That takes guts.", zh: "我为你骄傲，敢于追求自己想要的。那需要勇气。", context: "'Takes guts' means requires courage. Expressing pride in someone's bravery." },
  // ═══ BATCH 12: Money & Finance ═══
  { scene: "Money - Budget", en: "I'm trying to cut back on eating out. It adds up so fast.", zh: "我在尽量减少外出吃饭。花得太快了。", context: "'Cut back on' means to reduce. 'It adds up' means small expenses accumulate into a lot." },
  { scene: "Money - Splitting", en: "Should we split the bill, or do you want to just Venmo me later?", zh: "AA 还是你之后转给我？", context: "'Split the bill' means divide equally. 'Venmo me' uses the app name as a verb (common in US)." },
  { scene: "Money - Deals", en: "I got it on sale — 40% off. I couldn't pass that up.", zh: "我打折买的——四折。这个不能错过。", context: "'Couldn't pass that up' means the deal was too good to ignore." },
  { scene: "Money - Rent", en: "Rent keeps going up every year. I might need to find a roommate.", zh: "房租年年涨。我可能得找个室友。", context: "Very relatable complaint about living costs in expensive cities." },
  // ═══ BATCH 13: Small Talk & Fillers ═══
  { scene: "Small Talk - Weather", en: "Can you believe this weather? It was sunny like an hour ago.", zh: "这天气也太离谱了吧？一小时前还是晴天。", context: "Weather is the universal small talk topic. Expressing disbelief is engaging." },
  { scene: "Small Talk - Weekend", en: "Any plans for the weekend? I'm thinking of checking out that new café.", zh: "周末有什么计划吗？我想去看看那家新开的咖啡店。", context: "Classic conversation starter. Sharing your own plans makes it less of an interrogation." },
  { scene: "Small Talk - Work", en: "How's work going? Still surviving the corporate life?", zh: "工作怎么样？还在坚持打工吗？", context: "'Surviving the corporate life' is humorous and relatable. Creates bonding over shared experience." },
  { scene: "Small Talk - Pets", en: "Your dog is adorable! How old is she? What breed?", zh: "你的狗好可爱！多大了？什么品种？", context: "Asking about pets is one of the easiest ways to start a friendly conversation." },
  { scene: "Small Talk - Food", en: "Have you tried that new ramen place on 5th Street? It's incredible.", zh: "你去过五街那家新开的拉面店吗？超好吃。", context: "Restaurant recommendations are great conversation topics. Sharing excitement about food." },
  { scene: "Small Talk - Transition", en: "Anyway, I should probably get going. It was great catching up!", zh: "好了，我差不多该走了。很开心能叙叙旧！", context: "'I should probably get going' is the standard polite exit from a conversation." },
  // ═══ BATCH 14: Apologies & Politeness ═══
  { scene: "Polite - Sorry", en: "I'm so sorry for the late reply. Things have been crazy this week.", zh: "回复晚了真不好意思。这周忙疯了。", context: "'Things have been crazy' is a common excuse for slow responses. Casual but sincere." },
  { scene: "Polite - Interrupt", en: "Sorry to interrupt, but I think we're running out of time.", zh: "不好意思打断一下，但我们时间快不够了。", context: "Polite way to redirect a conversation that's going over time." },
  { scene: "Polite - Favor", en: "Would you mind giving me a hand with this? It'll only take a minute.", zh: "你介意帮我一下吗？就一分钟的事。", context: "'Would you mind' + 'only take a minute' makes the request feel small and easy to agree to." },
  { scene: "Polite - Thanks", en: "I really appreciate you taking the time to explain this. It helped a lot.", zh: "真的感谢你花时间给我解释。帮了大忙。", context: "Specific gratitude ('taking the time') is more meaningful than just 'thanks'." },
  { scene: "Polite - Boundary", en: "I'd rather not talk about that, if you don't mind.", zh: "如果你不介意的话，我不太想聊这个。", context: "'I'd rather not' + 'if you don't mind' is a firm but polite boundary." },
  // ═══ BATCH 15: Opinions & Debates ═══
  { scene: "Opinion - Agreeing", en: "That's a great point. I hadn't thought about it that way.", zh: "说得好。我之前没从这个角度想过。", context: "Validating someone's idea while showing it's new to you. Very collaborative." },
  { scene: "Opinion - Disagreeing", en: "I see where you're coming from, but I think there's more to it.", zh: "我理解你的意思，但我觉得没那么简单。", context: "'I see where you're coming from' acknowledges their view before disagreeing." },
  { scene: "Opinion - Neutral", en: "I could go either way on this, honestly. Both options have merit.", zh: "说实话两个都行。都有道理。", context: "'Could go either way' means you don't have a strong preference." },
  { scene: "Opinion - Strong", en: "I feel strongly about this. I think we're making a mistake.", zh: "这件事我态度很明确。我觉得我们在犯错。", context: "'Feel strongly' signals this is important to you. Direct and honest." },
  { scene: "Opinion - Hedge", en: "I might be wrong, but I think there's a simpler solution.", zh: "我可能不对，但我觉得有更简单的解决方案。", context: "'I might be wrong' is a hedge that makes your suggestion less confrontational." },
  // ═══ BATCH 16: Phone & Messaging ═══
  { scene: "Phone - Answering", en: "Hey! I was just about to text you. Great timing.", zh: "嘿！我正要给你发消息。时机真好。", context: "Fun coincidence when someone calls/texts you at the same time you were thinking of them." },
  { scene: "Phone - Voicemail", en: "Hey, it's me. Give me a call back when you get a chance. Nothing urgent.", zh: "嘿是我。有空回我个电话。不着急。", context: "'Nothing urgent' prevents the other person from worrying." },
  { scene: "Phone - Texting", en: "Sorry, just saw this! My phone was on silent. What's up?", zh: "不好意思刚看到！手机静音了。怎么了？", context: "Common excuse for late text reply. 'What's up' asks what they needed." },
  { scene: "Messaging - Group chat", en: "Can someone fill me in? I missed the last 50 messages.", zh: "谁能帮我说一下？我错过了最后50条消息。", context: "'Fill me in' means summarize what I missed. Common in active group chats." },
  // ═══ BATCH 17: Workplace — Remote & Async ═══
  { scene: "Remote - Async", en: "I'll leave a Loom video so you can watch it at your own pace.", zh: "我录一个 Loom 视频，你可以按自己的节奏看。", context: "'At your own pace' means whenever it's convenient. Key async communication skill." },
  { scene: "Remote - Focus", en: "I'm going to go heads-down for a couple hours. Ping me if it's urgent.", zh: "我接下来两小时要专注工作。紧急的事再 ping 我。", context: "'Heads-down' means deep focus work. 'Ping me' is casual for 'message me'." },
  { scene: "Remote - Timezone", en: "Let's find a time that works across time zones. Maybe 10 AM UTC?", zh: "找个跨时区都方便的时间吧。UTC 上午10点怎么样？", context: "Essential for distributed teams. Always suggest a specific time in a neutral zone." },
  { scene: "Remote - Check-in", en: "Just wanted to check in — how's everything going on your end?", zh: "就想问一下——你那边一切还好吗？", context: "'On your end' means in your area of responsibility. Casual check-in." },
  // ═══ BATCH 18: Self-improvement & Learning ═══
  { scene: "Learning - Progress", en: "I'm not where I want to be yet, but I'm making progress every day.", zh: "我还没达到目标，但每天都在进步。", context: "Great mindset sentence. 'Making progress' acknowledges effort over perfection." },
  { scene: "Learning - Habits", en: "It takes about 21 days to build a habit, but consistency is what really matters.", zh: "养成习惯大约需要21天，但真正重要的是坚持。", context: "Classic self-improvement wisdom. 'Consistency' is the key word." },
  { scene: "Learning - Mistakes", en: "I'd rather make mistakes and learn than play it safe and stay stuck.", zh: "我宁愿犯错学习，也不愿安于现状不进步。", context: "'Play it safe' means avoid risks. 'Stay stuck' means no progress." },
  { scene: "Learning - Comfort zone", en: "Growth happens outside your comfort zone. It's supposed to feel uncomfortable.", zh: "成长发生在舒适区之外。本来就应该觉得不舒服。", context: "Motivational. 'It's supposed to' normalizes the discomfort of learning." },
  { scene: "Learning - Feedback", en: "I'm open to constructive criticism. It's the fastest way to improve.", zh: "我乐于接受建设性批评。那是最快的进步方式。", context: "'Constructive criticism' vs just 'criticism' — the adjective matters." },
  // ═══ BATCH 19: Health & Wellness ═══
  { scene: "Health - Sleep", en: "I've been prioritizing sleep lately and it's made a huge difference.", zh: "我最近很注重睡眠，效果特别明显。", context: "'Prioritizing' and 'made a huge difference' are very common collocations." },
  { scene: "Health - Mental", en: "It's okay to not be okay. Taking a mental health day isn't weakness.", zh: "不好也没关系。请心理健康假不是软弱。", context: "'Mental health day' is increasingly common in workplaces. Normalizing self-care." },
  { scene: "Health - Exercise", en: "Even a 20-minute walk can completely shift your mood.", zh: "哪怕走20分钟路，心情都会完全不一样。", context: "'Shift your mood' means change how you feel. Simple but powerful advice." },
  { scene: "Health - Burnout", en: "I realized I was heading toward burnout and decided to set better boundaries.", zh: "我意识到自己快要 burnout 了，决定设立更好的界限。", context: "'Heading toward' implies you caught it before it got worse. 'Set boundaries' is key." },
  // ═══ BATCH 20: Culture & Society ═══
  { scene: "Culture - Diversity", en: "I love how diverse this city is. You can find food from every continent.", zh: "我喜欢这个城市的多元化。各大洲的美食都能找到。", context: "'Diverse' and 'every continent' paint a vivid picture of multiculturalism." },
  { scene: "Culture - Generational", en: "Every generation thinks the next one has it easy. It's been like that forever.", zh: "每一代人都觉得下一代过得轻松。一直都是这样。", context: "Observation about generational dynamics. 'Has it easy' means life is easier for them." },
  { scene: "Culture - Trends", en: "I try not to follow every trend. I'd rather develop my own style.", zh: "我尽量不追每个潮流。我更想发展自己的风格。", context: "'Follow every trend' vs 'develop my own style' shows independence." },
  { scene: "Culture - Language", en: "Learning a new language opens up a completely different way of thinking.", zh: "学一门新语言会打开一种完全不同的思维方式。", context: "'Opens up' is a beautiful metaphor for what language learning does to your mind." },
  // ═══ BATCH 21: Professional Growth ═══
  { scene: "Career - Interview", en: "Tell me about a time when you had to deal with a difficult situation.", zh: "跟我说说你处理过的一个困难情况。", context: "Classic behavioral interview question. Practice the STAR method to answer." },
  { scene: "Career - Negotiation", en: "Based on my experience and market research, I believe a salary of X is fair.", zh: "根据我的经验和市场调研，我认为X的薪资是合理的。", context: "'Based on' and 'market research' show you've done your homework." },
  { scene: "Career - Networking", en: "I'd love to pick your brain about your experience in this field.", zh: "很想请教一下你在这个领域的经验。", context: "'Pick your brain' is informal for 'get your insights/advice'. Flattering but casual." },
  { scene: "Career - Transition", en: "I'm looking to make a career change. Any advice for someone starting over?", zh: "我在考虑转行。对从头开始的人有什么建议吗？", context: "'Make a career change' and 'starting over' are vulnerable but brave things to say." },
  { scene: "Career - Mentorship", en: "Having a mentor completely changed my trajectory. I can't recommend it enough.", zh: "有个导师完全改变了我的轨迹。怎么推荐都不为过。", context: "'Changed my trajectory' and 'can't recommend it enough' are powerful endorsements." },
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
    const scenes = getDailyScenes(this.data.words);
    const grid = document.getElementById('recommendGrid');
    const existingSet = new Set(this.data.words.map(w => w.word.toLowerCase()));
    const todayLearned = new Set(((this.data.dailyLearned || {})[todayStr()] || []).map(w => w.toLowerCase()));

    grid.innerHTML = scenes.map(scene => {
      const wordsHtml = scene.words.map(w => {
        const isLearned = todayLearned.has(w.toLowerCase());
        const isAdded = existingSet.has(w.toLowerCase());
        return `<div class="scene-word-chip ${isLearned ? 'learned' : ''}" onclick="App.showWordDetail('${w.replace(/'/g, "\\'")}')">
          <span>${w}</span>
          ${isAdded || isLearned 
            ? '<button class="chip-add" disabled>✓</button>'
            : `<button class="chip-add" onclick="event.stopPropagation();App.addRecommendWord('${w.replace(/'/g, "\\'")}')" title="Add to vocab">+</button>`}
        </div>`;
      }).join('');
      return `<div class="scene-card">
        <div class="scene-card-header">
          <span class="scene-card-title"><span class="scene-emoji">${scene.emoji}</span> ${scene.title}</span>
        </div>
        <div class="scene-card-desc">${scene.desc}</div>
        <div class="scene-words">${wordsHtml}</div>
        <div class="scene-sentence">${scene.sentence}</div>
      </div>`;
    }).join('');
  },

  filterRecommend(tag) {
    // Deprecated — scenes mode no longer uses tag filtering
    this.renderRecommend();
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
    // Auto-speak the word
    setTimeout(() => speakWord(word), 200);
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
      const tagLabels = { tech: 'Tech', design: 'Design', daily: 'Daily', slang: 'Slang' };
      const tagHtml = (tag && tag !== 'mine') ? `<span class="vocab-tag vocab-tag-${tag}">${tagLabels[tag] || tag}</span>` : '';
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

  showAddModal() {
    document.getElementById('addWordModal').classList.add('show');
    document.getElementById('addWordStep1').style.display = 'block';
    document.getElementById('addWordStep2').style.display = 'none';
    document.getElementById('addWordLoading').style.display = 'none';
    document.getElementById('inputWord').value = '';
    document.getElementById('inputWord').focus();
  },
  closeAddModal() {
    document.getElementById('addWordModal').classList.remove('show');
    document.getElementById('inputWord').value = '';
    document.getElementById('inputNote').value = '';
    this._lookupResult = null;
  },
  backToStep1() {
    document.getElementById('addWordStep1').style.display = 'block';
    document.getElementById('addWordStep2').style.display = 'none';
    document.getElementById('inputWord').focus();
  },
  _lookupResult: null,
  async lookupWord() {
    const word = document.getElementById('inputWord').value.trim();
    if (!word) { toast('Please enter a word.'); return; }
    const wordLower = word.toLowerCase();
    if (App.data.words.find(w => w.word.toLowerCase() === wordLower)) {
      toast('This word already exists in your vocabulary!');
      return;
    }
    // Show loading
    document.getElementById('addWordStep1').style.display = 'none';
    document.getElementById('addWordLoading').style.display = 'block';
    // Lookup
    let entry = WORD_DB[wordLower];
    if (!entry) {
      entry = await autoLookup(word);
    }
    document.getElementById('addWordLoading').style.display = 'none';
    // Show preview
    document.getElementById('awWord').textContent = word;
    document.getElementById('awMeaning').textContent = entry?.meaning || '(No definition found)';
    document.getElementById('inputNote').value = '';
    document.getElementById('addWordStep2').style.display = 'block';
    this._lookupResult = entry;
    // Auto speak
    speakWord(word);
  },

  addWord() {
    const wordInput = document.getElementById('inputWord').value.trim();
    const noteInput = document.getElementById('inputNote').value.trim();
    if (!wordInput) { toast('Please enter a word or phrase.'); return; }

    const wordLower = wordInput.toLowerCase();
    if (App.data.words.find(w => w.word.toLowerCase() === wordLower)) {
      toast('This word already exists in your vocabulary!');
      return;
    }

    const dbEntry = this._lookupResult || WORD_DB[wordLower] || {};
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
    
    // Front: cloze sentence (fill-in-blank)
    const clozeEl = document.getElementById('fcClozeSentence');
    const exampleSentence = examples[0] || `Use the word "${w.word}" in context.`;
    // Replace the word with blank, case-insensitive
    const wordRegex = new RegExp(`\\b${w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const clozeSentence = exampleSentence.replace(wordRegex, '<span class="cloze-blank">___</span>');
    clozeEl.innerHTML = clozeSentence !== exampleSentence ? clozeSentence : `"${exampleSentence.replace(wordRegex, '<span class="cloze-blank">___</span>')}"`;
    // If the word wasn't found in the example (phrase with space, etc), use a generic cloze
    if (clozeSentence === exampleSentence) {
      clozeEl.innerHTML = `<span style="font-size:16px;color:var(--text-secondary);display:block;margin-bottom:12px;">"${exampleSentence}"</span><span class="cloze-blank" style="min-width:120px;">___</span><span style="display:block;margin-top:8px;font-size:13px;color:var(--text-muted);">What word fits this context?</span>`;
    }
    
    // Back: word + phonetic + speak row at top
    document.getElementById('fcBackWord').innerHTML = `${w.word} <span class="dl-back-phonetic">${phonetic}</span> <button class="speak-btn speak-btn-card" onclick="event.stopPropagation();speakWord('${w.word.replace(/'/g, "\\'")}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>`;
    document.getElementById('fcMeaning').textContent = meaning;
    // Chinese meaning
    const cnEl = document.getElementById('fcMeaningCn');
    if (cnEl) {
      const dbMeaning = dbEntry.meaning || '';
      const hasChinese = /[\u4e00-\u9fff]/.test(meaning);
      if (!hasChinese && dbMeaning && /[\u4e00-\u9fff]/.test(dbMeaning)) {
        cnEl.textContent = dbMeaning;
      } else {
        cnEl.textContent = '';
      }
    }
    document.getElementById('fcExample').textContent = examples[0] || '';
    document.getElementById('fcSynonyms').textContent = synonyms.length ? `Synonyms: ${synonyms.join(', ')}` : '';
    const imgEl = document.getElementById('fcImage');
    imgEl.innerHTML = image ? `<img src="${image}" alt="${w.word}" onerror="this.style.display='none'">` : '';
    document.getElementById('fcNoteInput').value = w.note || '';
    
    // Reset card state
    const inner = document.getElementById('flashcardInner');
    inner.style.transition = 'none';
    inner.classList.remove('flipped');
    inner.offsetHeight;
    inner.style.transition = '';
    
    // Hide compose prompt, show review buttons
    document.getElementById('fcComposePrompt').style.display = 'none';
    document.getElementById('reviewButtons').style.display = 'flex';
    
    // Auto-speak the example sentence (so user hears context)
    if (examples[0]) setTimeout(() => speakWord(examples[0]), 300);
  },
  flipCard() {
    const inner = document.getElementById('flashcardInner');
    // Only allow flip from front to back, not back to front
    if (inner.classList.contains('flipped')) return;
    inner.classList.add('flipped');
    // Auto-speak the word when revealing
    const w = this.reviewQueue[this.reviewIndex];
    if (w) setTimeout(() => speakWord(w.word), 300);
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
    // Show compose prompt
    const prompts = [
      `Try making a sentence with <strong>${w.word}</strong> in your head. Think about how you'd use it in conversation.`,
      `Imagine a scenario where you'd say <strong>${w.word}</strong>. Picture yourself using it naturally.`,
      `Can you think of a situation from today where <strong>${w.word}</strong> would fit? Take a moment.`,
      `Close your eyes and compose a sentence with <strong>${w.word}</strong>. No pressure — just think it.`,
    ];
    const prompt = prompts[this.reviewIndex % prompts.length];
    document.getElementById('fcComposeText').innerHTML = prompt;
    document.getElementById('fcComposePrompt').style.display = 'block';
    document.getElementById('reviewButtons').style.display = 'none';
  },
  composeNext() {
    this.reviewIndex++;
    this.showCard();
  },
};

// ═════════════════════════════════════════
//  DAILY BRIEF MODULE (replaces Shadow/Video)
// ═════════════════════════════════════════
const BRIEF_DATABASE = [
  {
    category: "Lifestyle & Input",
    items: [
      { title: "Emma Chamberlain (Anything Goes)", meta: "Podcast · ~20 min", desc: "Emma 聊到了那种「苦乐参半」的情绪——也就是你现在面对假期结束的心情。她探讨了如何接受不完美，并从这种细微的情感中汲取成长的力量。", keywords: ["bittersweet", "resilient", "vulnerable"] },
      { title: "The Hot Pursuit Podcast", meta: "Podcast · ~45 min", desc: "三位主持人非常坦诚地聊到了关于身体焦虑和自我接纳。这类关于「自我认同」的对话包含了大量高频的<strong>情绪描述词汇</strong>。", keywords: ["boundaries", "authentic", "mindful"] },
      { title: "Volka English", meta: "YouTube Vlog · ~30 min", desc: "春日户外的慢节奏 Vlog，适合做家务或通勤时开启。练习捕捉关于自然、天气和即时感受的简单地道短语。", keywords: ["spontaneous", "cozy", "subtle"] },
    ]
  },
  {
    category: "Professional UX & Tech",
    items: [
      { title: "UI/UX Design Trends 2026", meta: "YouTube · 15 min", desc: "视频提到了系统开始能够「感知用户的犹豫」（detect hesitation）并即时简化界面。掌握这些表达让你的设计汇报显得逻辑严密。", keywords: ["intuitive", "friction", "iterate"] },
      { title: "State Machines & Agentic UI", meta: "Conference Talk · 25 min", desc: "主讲人解释了为什么<strong>状态机</strong>比简单的 if/else 更适合处理 Generative UI。核心概念：Orchestration (编排), Event-driven (事件驱动)。", keywords: ["robust", "scalable", "pipeline"] },
      { title: "Product-Led Growth Strategies", meta: "Podcast · 35 min", desc: "如何用数据驱动产品增长——讨论了<strong>留存率</strong>、<strong>转化漏斗</strong>和用户行为分析的实战方法。", keywords: ["retention", "funnel", "churn"] },
    ]
  },
  {
    category: "Culture & Communication",
    items: [
      { title: "Cross-cultural Communication", meta: "TED Talk · 18 min", desc: "讲者分享了在不同文化背景下工作的技巧——如何识别<strong>高语境</strong>和<strong>低语境</strong>沟通的区别。", keywords: ["nuance", "empathy", "pragmatic"] },
      { title: "Remote Team Dynamics", meta: "Podcast · 30 min", desc: "远程团队如何建立信任和保持高效协作。讨论了异步沟通的艺术和时区管理策略。", keywords: ["sync", "bandwidth", "streamline"] },
      { title: "The Art of Small Talk", meta: "YouTube · 12 min", desc: "如何在社交场合自然地开启对话，避免尴尬沉默。提供了实用的<strong>破冰</strong>句型和话题转换技巧。", keywords: ["break the ice", "catch up", "vibe"] },
    ]
  },
];

const SHADOW_TEXTS = [
  {
    title: "On Growth & Change",
    source: "Emma Chamberlain",
    text: "I'm finding that the <strong>bittersweet</strong> moments—the ones where you're a little sad to leave but so excited to go—are actually the ones that <strong>resonate</strong> the most with me. There's this massive <strong>misconception</strong> that leaving something comfortable is a loss, but sometimes, it's actually the most <strong>strategic</strong> thing you can do for your growth.",
    tips: [
      { label: "词块 (Chunks)", detail: "将 \"the ones where you're a little sad to leave\" 读顺，模仿那种略带随意的口语感。" },
      { label: "关键词重音", detail: "强调 bittersweet (苦乐参半), resonate (产生共鸣), misconception (误解)。" },
      { label: "弱读", detail: "\"to be\" 和 \"but it's\" 读得轻且快。" },
    ],
    keywords: ["bittersweet", "resilient", "pragmatic"]
  },
  {
    title: "On Building Products",
    source: "Design Engineering Talk",
    text: "The key insight is that you don't need to <strong>iterate</strong> on everything simultaneously. Focus on the <strong>bottleneck</strong>—the one thing that's blocking user value—and fix that first. Everything else is <strong>scope creep</strong> in disguise. Ship the <strong>MVP</strong>, measure the impact, then decide what's next.",
    tips: [
      { label: "节奏", detail: "在 'fix that first' 后停顿一拍，制造重点感。" },
      { label: "关键词重音", detail: "强调 iterate, bottleneck, scope creep, MVP。" },
      { label: "连读", detail: "\"everything else is\" 连在一起读，不要断。" },
    ],
    keywords: ["iterate", "bottleneck", "scope creep", "MVP"]
  },
  {
    title: "On Remote Work",
    source: "Distributed Teams Podcast",
    text: "Working remotely isn't just about <strong>flexibility</strong>—it's about intentional communication. When you can't tap someone on the shoulder, every message needs to be <strong>actionable</strong> and self-contained. The best remote teams don't just <strong>sync</strong> less; they sync <strong>better</strong>.",
    tips: [
      { label: "语调", detail: "\"isn't just about\" 用略升语调暗示后面有转折。" },
      { label: "关键词重音", detail: "强调 flexibility, actionable, sync, better。" },
      { label: "对比重音", detail: "最后一句 'less' 和 'better' 形成对比，'better' 要读重。" },
    ],
    keywords: ["actionable", "streamline", "sync"]
  },
  {
    title: "On Finding Your Path",
    source: "Career Growth Interview",
    text: "It's about recognizing that you've <strong>outgrown</strong> the container you were in. Moving to a new place or a new career isn't just a physical shift; it's a mental <strong>reframing</strong>. You have to be okay with being the 'new person' again, even if it feels incredibly <strong>daunting</strong> at first.",
    tips: [
      { label: "词块 (Chunks)", detail: "\"You have to be okay with\" 当成一个整体读，中间不换气。" },
      { label: "关键词重音", detail: "强调 outgrown, reframing, daunting。" },
      { label: "弱读", detail: "\"even if it feels\" 中的 'it' 要读得极短。" },
    ],
    keywords: ["compelling", "resilient", "pragmatic"]
  },
  {
    title: "On Design Thinking",
    source: "UX Conference Keynote",
    text: "Great design isn't about making things look pretty—it's about reducing <strong>cognitive load</strong>. Every element on the screen should either guide the user forward or get out of the way. The best <strong>interfaces</strong> are the ones people never notice, because they just <strong>work</strong>.",
    tips: [
      { label: "强调", detail: "\"guide the user forward OR get out of the way\" 中 'or' 前要稍停。" },
      { label: "关键词重音", detail: "强调 cognitive load, interfaces, work (最后一个词加重)。" },
      { label: "节奏", detail: "最后 'because they just work' 要慢下来，制造结尾力度。" },
    ],
    keywords: ["intuitive", "hierarchy", "friction"]
  },
];

const MORNING_PLANS = [
  [
    { time: "00-10 min", task: "播放 Volka English 的 Vlog。在心里尝试用英文复述：\"Today is a beautiful day, and I'm going to make the most of it.\"" },
    { time: "10-25 min", task: "专注死磕今天的影子跟读文本。不仅要读对发音，更要模仿那种略带随意的自信语调。" },
    { time: "25-30 min", task: "打开 pebble-k 的 Daily Sentence，把重点词加入生词本。试着用这些词造一个跟你今天计划有关的句子。" },
  ],
  [
    { time: "00-10 min", task: "听 The Hot Pursuit 最新一期的前 10 分钟。注意情绪类词汇的用法。" },
    { time: "10-20 min", task: "做 pebble-k 的复习卡片（例句填空模式）。通过语境回忆单词。" },
    { time: "20-30 min", task: "朗读今天的影子跟读文本三遍。第一遍看文本，第二遍遮住部分单词，第三遍尝试脱稿。" },
  ],
  [
    { time: "00-5 min", task: "快速浏览今天的 Daily Brief，标记你最想深入学习的内容。" },
    { time: "5-20 min", task: "完成影子跟读练习。录音自己读一遍，对比原音，找出发音差异。" },
    { time: "20-30 min", task: "学习今天「每日场景」里的新词。每个词用英文造一个和你生活相关的句子。" },
  ],
];

// Keep ShadowModule as alias for backward compatibility
const ShadowModule = { init() { BriefModule.init(); }, render() { BriefModule.render(); } };

const BriefModule = {
  init() { this.render(); },

  _getDayIndex() {
    const start = new Date('2025-01-01');
    const now = new Date();
    return Math.floor((now - start) / (1000 * 60 * 60 * 24));
  },

  render() {
    const dayIdx = this._getDayIndex();
    const container = document.getElementById('briefContent');
    if (!container) return;

    // Pick content for today
    const catIdx = dayIdx % BRIEF_DATABASE.length;
    const categories = [];
    for (let i = 0; i < Math.min(2, BRIEF_DATABASE.length); i++) {
      categories.push(BRIEF_DATABASE[(catIdx + i) % BRIEF_DATABASE.length]);
    }
    const shadowText = SHADOW_TEXTS[dayIdx % SHADOW_TEXTS.length];
    const plan = MORNING_PLANS[dayIdx % MORNING_PLANS.length];
    const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

    let html = '';

    // Content sections
    categories.forEach(cat => {
      html += `<div class="brief-section">
        <div class="brief-section-header">
          <span class="brief-section-icon">📺</span>
          <span class="brief-section-title">${cat.category}</span>
        </div>
        ${cat.items.map(item => `<div class="brief-item">
          <div class="brief-item-title">${item.title}</div>
          <div class="brief-item-meta">${item.meta}</div>
          <div class="brief-item-desc">${item.desc}</div>
          <div class="brief-keywords">${item.keywords.map(kw => 
            `<span class="brief-kw" onclick="BriefModule.addKeyword('${kw.replace(/'/g, "\\'")}')">${kw}</span>`
          ).join('')}</div>
        </div>`).join('')}
      </div>`;
    });

    // Shadow practice
    html += `<div class="brief-section">
      <div class="brief-section-header">
        <span class="brief-section-icon">🎙️</span>
        <span class="brief-section-title">Shadow Practice</span>
      </div>
      <div class="brief-item-title">${shadowText.title}</div>
      <div class="brief-item-meta">Source: ${shadowText.source}</div>
      <div class="brief-shadow-text">${shadowText.text}</div>
      <div class="brief-tips">
        ${shadowText.tips.map(t => `<div class="brief-tip"><strong>${t.label}:</strong> ${t.detail}</div>`).join('')}
      </div>
      <div class="brief-keywords">${shadowText.keywords.map(kw => 
        `<span class="brief-kw" onclick="BriefModule.addKeyword('${kw.replace(/'/g, "\\'")}')">${kw}</span>`
      ).join('')}</div>
      <div class="brief-actions">
        <button class="btn-secondary" onclick="BriefModule.openPractice()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          Start Shadowing
        </button>
      </div>
    </div>`;

    // Morning plan
    html += `<div class="brief-section">
      <div class="brief-section-header">
        <span class="brief-section-icon">💡</span>
        <span class="brief-section-title">Morning Plan (${today})</span>
      </div>
      <div class="brief-plan">
        ${plan.map(p => `<div class="brief-plan-item"><strong>${p.time}:</strong> ${p.task}</div>`).join('')}
      </div>
    </div>`;

    container.innerHTML = html;
  },

  addKeyword(word) {
    VocabModule.addWordDirect(word, 'From Daily Brief');
    VocabModule.render();
    App.refreshDashboard();
    toast(`"${word}" added to vocabulary!`);
  },

  openPractice() {
    const dayIdx = this._getDayIndex();
    const shadowText = SHADOW_TEXTS[dayIdx % SHADOW_TEXTS.length];
    document.getElementById('spTitle').textContent = 'Shadow: ' + shadowText.title;
    document.getElementById('spSubtitles').innerHTML = shadowText.text;
    document.getElementById('spShadowTips').innerHTML = shadowText.tips.map(t => 
      `<p><strong>${t.label}:</strong> ${t.detail}</p>`
    ).join('');
    document.getElementById('shadowPracticeModal').classList.add('show');
    // Auto-speak
    const plainText = shadowText.text.replace(/<[^>]+>/g, '');
    setTimeout(() => speakWord(plainText), 500);
  },

  closePractice() {
    document.getElementById('shadowPracticeModal').classList.remove('show');
    App.addXP(15);
    Store.save(App.data);
    toast('Shadow practice done! +15 XP');
  },

  speakPractice() {
    const text = document.getElementById('spSubtitles').textContent;
    speakWord(text);
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

    // Show keywords for this sentence
    const keywords = this._extractKeywords(s.en);
    const kwContainer = document.getElementById('dailyKeywords');
    if (keywords.length > 0) {
      kwContainer.innerHTML = `<span class="daily-keywords-label">Key words in this sentence</span>` +
        keywords.map(kw => 
          `<span class="daily-keyword-chip" onclick="DailyModule.addKeyword('${kw.replace(/'/g, "\\'")}')" title="Click to add to vocab">
            ${kw} <span class="kw-plus">+</span>
          </span>`
        ).join('');
    } else {
      kwContainer.innerHTML = '';
    }

    if (!App.data.dailySeen.includes(idx)) {
      App.data.dailySeen.push(idx);
      Store.save(App.data);
    }
    this.renderHistory();
    // Auto-speak the sentence
    setTimeout(() => speakWord(s.en), 300);
  },

  _extractKeywords(sentence) {
    // Find words from WORD_DB that appear in this sentence
    const lower = sentence.toLowerCase();
    const found = [];
    for (const word of Object.keys(WORD_DB)) {
      if (word.length < 3) continue; // skip very short
      const wLower = word.toLowerCase();
      // Check if the word appears in the sentence (word boundary aware for single words)
      if (wLower.includes(' ')) {
        if (lower.includes(wLower)) found.push(word);
      } else {
        const regex = new RegExp(`\\b${wLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        if (regex.test(sentence)) found.push(word);
      }
    }
    // Return up to 3 keywords, prioritize longer/more complex words
    return found.sort((a, b) => b.length - a.length).slice(0, 3);
  },

  addKeyword(word) {
    VocabModule.addWordDirect(word, 'From Daily Sentence keyword');
    VocabModule.render();
    App.refreshDashboard();
    toast(`"${word}" added to your vocabulary!`);
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
        <div class="dh-chinese">${s.zh}</div>
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
    this._checkAndReset();
    this._running = false;
    this._render();
    // Check every 60s if day changed (for users who keep the page open overnight)
    this._dayCheckInterval = setInterval(() => this._checkAndReset(), 60000);
  },

  _checkAndReset() {
    const saved = this._load();
    const today = todayStr();
    if (saved.date === today) {
      this._elapsed = saved.elapsed || 0;
    } else {
      this._elapsed = 0;
      this._save();
      if (this._running) { this._pause(); }
      this._render();
      // Also refresh dashboard to reset "All Done Today" and progress
      try { App.refreshDashboard(); } catch {}
    }
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
