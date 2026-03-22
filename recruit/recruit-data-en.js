/**
 * Ceilusion — Core member duties & deliverables (English)
 * Mirrors recruit-data.js: same order, category, roleName structure.
 */
const CEIL_RECRUIT_ROLES_EN = [
  {
    category: 'Management',
    roleName: 'Studio Director / CEO',
    owner: null,
    duties: [
      {
        label: 'Building the creative stage:',
        text:
          'Owns absolute responsibility for constructing the studio’s creative environment. Leads recruiting core talent, fundraising, and bringing in technical resources; through foundational systems and collaboration rules, turns individuals who don’t know each other into a highly cohesive combat-ready team. The Director allocates tasks precisely, schedules member capacity, and guides rapid growth in projects, ensuring technical and artistic work ultimately earns fair market and financial returns.',
      },
      {
        label: 'Vision & direction:',
        text:
          'Decides the studio’s survival and vision. Secures resources (funding, hardware/software, talent), sets the studio’s overarching direction, builds a sustainable profitable business model, and leads the team toward the milestone of “startup success right after graduation.” Every CEO decision, ruling, and hard line must serve the single highest principle: helping core members achieve financial freedom first.',
      },
      {
        label: 'Institutional & defensive architecture:',
        text:
          'Defines the studio’s systems and business model—including investor vs. labor allocation logic (30% vs. 70%), org structure, mandatory exit rules (e.g. forfeiture after 72h no-contact), and asset buyout procedures—so team effort and commercial interests are absolutely protected.',
      },
      {
        label: 'Hiring & deep alignment:',
        text:
          'Sets hiring standards and final hiring decisions. After the COO completes standardized screening and stress tests, conducts final “vision alignment” with surviving candidates. For confirmed members, designs tailored onboarding and ramp-up so values and ambition match the team 100%.',
      },
      {
        label: 'Budget & asset investment:',
        text:
          'Owns overall dev funding and final budget allocation. Uses deep understanding of the engine and production to evaluate ROI on paid assets, outsourcing, tools, and training. Holds final approval on all project spend so every dollar maximizes game quality.',
      },
      {
        label: 'Strategic meetings & alignment:',
        text:
          'Initiates, prepares, and hosts major studio-level meetings—not only facilitation but strategic content and rules design behind them. Controls pace and discussion boundaries so the team stays aligned and executes under clear norms.',
      },
      {
        label: 'Decisions & planning:',
        text:
          'Owns strategic decisions: team roles, training and growth, roadmap, and marketing direction. Allocates tasks and resources precisely; holds final authority when the team cannot resolve disagreements.',
      },
      {
        label: 'Store platforms & release:',
        text:
          'Manages Steam / Google Play backend accounts. Controls build uploads, final store page approval, and executes final publish actions.',
      },
    ],
  },
  {
    category: 'Management',
    roleName: 'COO',
    owner: null,
    duties: [
      {
        label: 'Governance & IP ownership:',
        text:
          'Drafts core agreements (NDA, revenue-sharing commitments, exit and rights transfer). Ensures that when people leave, the studio has exclusive, undisputed absolute ownership of all work product (code, art, design data).',
      },
      {
        label: 'Platform compliance & release review:',
        text:
          'Studies platform legal rules, tax flows, and regional ratings (e.g. Steam). Strictly reviews commercial licenses for all external assets (audio, models, plugins) to eliminate infringement and delisting risk.',
      },
      {
        label: 'Legal defense & major business:',
        text:
          'Acts as the studio’s legal and business shield. For major negotiations (e.g. publishers) or legal exposure, mobilizes budget and external counsel, maximizes commercial interest, and escalates final decisions to the CEO.',
      },
      {
        label: 'External resources & outsourcing:',
        text:
          'When the project needs secondary resources (localization, voice acting, outsourced 2D promo art), owns vendor search, negotiation, contracting, and acceptance; builds the studio’s vendor pool.',
      },
      {
        label: 'Recruiting screen & stress test:',
        text:
          'First line of defense for hiring. Runs standardized screening and early interviews; stress-tests candidates on resilience, execution, and rule buy-in—ruthlessly filtering wrong mindsets.',
      },
    ],
  },
  {
    category: 'Management',
    roleName: 'CMO',
    owner: null,
    duties: [
      {
        label: 'Positioning & reach:',
        text:
          'Defines target audience early—not random posting, but the right marketing approach.',
      },
      {
        label: 'Community & wishlists:',
        text:
          'Owns content strategy for YouTube, IG, Discord, and the official site. Directs Steam page art and copy, streamer/media outreach, and wishlist growth; uses data and community feedback to optimize conversion as the core marketing KPI.',
      },
      {
        label: 'Go-to-market planning:',
        text:
          'Sets trailer timing, demo strategy, and market research for pricing and launch date.',
      },
      {
        label: 'Brand & channels:',
        text:
          'Builds and maintains the studio’s public image via YouTube/IG dev logs and technical behind-the-scenes, turning one-game players into long-term followers so every future title starts with strong reach.',
      },
    ],
  },
  {
    category: 'Management',
    roleName: 'Lead Content Creator',
    owner: null,
    duties: [
      {
        label: 'Ongoing solo content (traffic):',
        text:
          'Runs day-to-day channel updates: research, immersive scripts, high-quality recording, and fully independent edit/post for each video. Highest owner of community content—but cannot command the core project video editor.',
      },
      {
        label: 'Core project traffic & strict execution:',
        text:
          'For content tied to Ceil Studio game promotion, dev logs, or traffic campaigns, script and strategy are owned entirely by the CMO. The lead only performs and publishes per SOP—no unilateral changes to core messaging.',
      },
      {
        label: 'Community order & reporting:',
        text:
          'Maintains Discord/YouTube comment order, handles templated player questions, and compiles cross-platform metrics into reports for leadership.',
      },
      {
        label: 'Rights & format compliance:',
        text:
          'Ensures scripts and footage are rights-clean (e.g. Wiki citations under CC). Enforces the publishing calendar so marketing ships on time.',
      },
      {
        label: 'Compensation — dual revenue share:',
        text:
          'In addition to Ceil Studio game net profit, receives 60% of actual YouTube AdSense revenue from the official channel operated on behalf of the studio, as exclusive performance bonus.',
      },
      {
        label: 'Compensation — account sovereignty:',
        text:
          'Channel ownership, brand IP, and credentials remain 100% with the founder (Ceil). Work is done via YouTube Editor role only—no requests for highest-level access.',
      },
      {
        label: 'Compensation — payout & termination:',
        text:
          'Revenue is paid to the studio account by YouTube first; the studio settles monthly or quarterly. The 60% is an in-role labor bonus; on exit, resignation, or termination, revenue share ends immediately with no claim on future channel earnings.',
      },
    ],
  },

  {
    category: 'Planning & Design',
    roleName: 'Game Director',
    owner: null,
    duties: [
      {
        label: 'GDD & specs:',
        text:
          'Writes and maintains the GDD, turning abstract ideas into enforceable specs. Must define Core Design, Level Design, and Character Design as the single source of truth. All code and art must follow the GDD 100%—no unapproved scope creep. Ideas go through proposal and approval, then formal GDD updates, before implementation. Everyone knows exactly what to draw and what to code.',
      },
      {
        label: 'Numbers & balance:',
        text:
          'Defines the underlying model—stats, damage resolution, economy—for replay value and strategic depth.',
      },
      {
        label: 'Mechanics design:',
        text:
          'Designs core loop and breakthrough mechanics so systems fuse naturally.',
      },
      {
        label: 'Soul quality & performance:',
        text:
          'Owns final look and feel. Handles lighting, atmosphere, and post while strictly managing rendering cost for stable FPS.',
      },
      {
        label: 'Asset curation & visual direction:',
        text:
          'Final say on paid and open assets. Sources and filters 3D/2D/VFX/audio from Fab, Quixel, etc.; hands base assets to department leads for polish and integration—unified world-building and maximum ROI.',
      },
      {
        label: 'Soul guard & final quality authority:',
        text:
          'Absolute final reject authority across departments. If deliverables don’t match the GDD’s core feel, controls, or mood, the Game Director can veto and demand rework—protecting the game’s soul.',
      },
    ],
  },
  {
    category: 'Planning & Design',
    roleName: 'Level Designer',
    owner: null,
    duties: [
      {
        label: 'Maps & flow:',
        text:
          'Builds immersive, playable levels in UE5 from 3D art—exploration routes, combat spaces, scale, terrain, cover—balancing visual punch with room for core mechanics.',
      },
      {
        label: 'Pacing:',
        text:
          'Controls rhythm so each session matches the intended emotional arc.',
      },
      {
        label: 'Visual guidance:',
        text:
          'Uses lighting and prop placement to guide attention and mood.',
      },
    ],
  },

  {
    category: 'Visual & Audio',
    roleName: '3D Art Director (Lead)',
    owner: null,
    duties: [
      {
        label: 'Environment modeling:',
        text:
          'Builds terrain, architecture, and large set pieces—absolute responsibility for spatial scale and visual foundation, commercial-grade immersion and plausibility.',
      },
      {
        label: 'Character & prop sculpt:',
        text:
          'Delivers core characters, enemies, and key assets via digital sculpt—owns final detail and look, and final quality of all core 3D.',
      },
      {
        label: 'Retopo & performance:',
        text:
          'Retopologizes multi-million-poly meshes; owns in-engine performance and poly budgets and correct low-poly topology—no binding failures or schedule slips from bad topo.',
      },
      {
        label: 'UV layout:',
        text:
          'Efficient, precise UVs so texturing has no stretch or wasted resolution.',
      },
      {
        label: 'Asset sourcing:',
        text:
          'Don’t reinvent the wheel—generic assets come from libraries or AI generation.',
      },
      {
        label: 'Quality bar & delegation:',
        text:
          'Sets the visual pipeline standard and holds final reject rights. Personally owns hero assets; delegates mass environment work, secondary topo/UV, etc. to 3D Artists.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: '3D Artist (Execution)',
    owner: null,
    duties: [
      {
        label: 'Mass modeling:',
        text:
          'Under the Director’s visual/spatial baseline, produces small/medium props, secondary scenery, and consumable assets.',
      },
      {
        label: 'Pipeline execution:',
        text:
          'Follows topology/perf rules—retopo and UV for secondary assets.',
      },
      {
        label: 'Library polish:',
        text:
          'Decimates, fixes penetration, and normalizes library/AI assets so they slot cleanly into the engine.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: '2D Art & UI/UX Director (Lead)',
    owner: null,
    duties: [
      {
        label: 'Materials & textures:',
        text:
          'Gives grey meshes soul—final responsibility for high-end PBR (roughness, metal, normal) matching world physicality.',
      },
      {
        label: 'UI/UX:',
        text:
          'Plans and draws in-game UI/UX—full responsibility for smooth interaction; HUD, menus, upgrades must be intuitive and stylistically unified.',
      },
      {
        label: 'Marketing art:',
        text:
          'Owns outward-facing key art—site look, logos, Steam pages—turning positioning and copy into impactful assets (posters, platform art) with brand consistency.',
      },
      {
        label: 'Asset sourcing:',
        text:
          'Generic flat assets (icons, tiling textures, standard fonts) come from libraries or AI; time goes to core visuals and hero art.',
      },
      {
        label: 'Quality bar & delegation:',
        text:
          'Sets 2D/UI standards and final reject rights. Owns hero key art and critical PBR; delegates icons, UI slicing, size variants to 2D Artists.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: '2D Artist & UI Assistant (Execution)',
    owner: null,
    duties: [
      {
        label: 'UI mass production:',
        text:
          'Mass-produces icons, skill icons, item art, slicing, and basic layout under the established style and UX logic.',
      },
      {
        label: 'Texture assist & library:',
        text:
          'Helps with base textures on minor 3D props; organizes seamless textures, fonts, and flats from libraries/AI to project spec.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: 'Lead Audio Experience Director (Lead)',
    owner: null,
    duties: [
      {
        label: 'Audio soul & mood:',
        text:
          'Owns the full sound experience—BGM arcs, environmental immersion, UI feedback—100% aligned with the world.',
      },
      {
        label: 'SFX design & synthesis:',
        text:
          'Per Game Director benchmarks, runs original sound experiments with synths, VSTs, and special systems to craft distinctive SFX.',
      },
      {
        label: 'Reference & deconstruction:',
        text:
          'Gives concrete audio specs to specialists—deconstructs references (orchestration, synthesis, FX chains) and calibrates output via Tier List review.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: 'Audio & Music Specialist (Execution)',
    owner: null,
    duties: [
      {
        label: 'Layering & Tier List:',
        text:
          'Sources or generates material and reports functional Tier Lists per the Lead’s bar—layered options for final pick.',
      },
      {
        label: 'Audio engineering & pipeline:',
        text:
          'Processes SFX (pitch, spatial reflection, loudness/format) and helps the engine lead import standardized audio for smooth UE pipeline.',
      },
    ],
  },
  {
    category: 'Visual & Audio',
    roleName: 'Video Editor',
    owner: null,
    duties: [
      {
        label: 'Trailers:',
        text:
          'Produces all outward motion assets—captures the strongest moments and cuts high-conversion Steam trailers.',
      },
      {
        label: 'Short-form:',
        text:
          'Produces Shorts/TikTok-style dev logs and gameplay clips per marketing strategy.',
      },
    ],
  },

  {
    category: 'Engineering',
    roleName: 'Lead Game Engine Architect',
    owner: null,
    duties: [
      {
        label: 'Engine integration:',
        text:
          'Integrates GDD, 2D UI, 3D animation, audio, and code in UE—deep engine/render knowledge and holistic shipping sense so cross-discipline assets connect efficiently.',
      },
      {
        label: 'Core architecture & Blueprint:',
        text:
          'Bridges mainline C++ into designer-friendly Blueprint classes; owns GameMode/GameInstance lifecycle and Event Graph work on Blueprint classes (Actor, Character, Level, etc.) to realize GDD core mechanics.',
      },
      {
        label: 'UMG:',
        text:
          'Integrates 2D assets into front-end UI logic—UMG binds live data (HP, state, loadout) with C++/BP for smooth interaction.',
      },
      {
        label: 'Animation & logic bridge:',
        text:
          'Binds skeletal meshes and animation sequences; owns Animation Blueprint event graph wiring variables into state machines—bridging gameplay and character motion.',
      },
      {
        label: 'UE Material System:',
        text:
          'Integrates textures into Master Materials and Instances for scalability, performance, and final image quality.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Systems Engineer',
    owner: null,
    duties: [
      {
        label: 'Architecture:',
        text:
          'Designs class hierarchy and data structures—solid base classes and interfaces for large-scale expansion.',
      },
      {
        label: 'Networking & OSS:',
        text:
          'Plans multiplayer foundations on UE5 OSS—sessions, search, GameMode/GameState/PlayerState lifecycle—solid server/client sync baseline.',
      },
      {
        label: 'Project structure:',
        text:
          'Defines folder hierarchy and naming for searchability and speed.',
      },
      {
        label: 'Clean code & review:',
        text:
          'Coding standards and code review—readable, extensible code without leaks.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Director of TechOps & Release Certification',
    owner: null,
    duties: [
      {
        label: 'CI/CD & pipelines:',
        text:
          'Owns automation from code to build—stable integration and compile of all departments’ output.',
      },
      {
        label: 'Platform technical compliance:',
        text:
          'Leads hard tech integration with Steam/Google Play (encryption, SDK, cloud saves)—100% spec compliance to avoid rejection.',
      },
      {
        label: 'Git authority:',
        text:
          'Top authority on the repo—merge rules and branches; final say on conflicts; mainline always shippable.',
      },
      {
        label: 'Stability & triage:',
        text:
          'Crash analytics, log triage, bug classification, and time-boxed assignments—the quality court.',
      },
      {
        label: 'Release certification:',
        text:
          'Final technical sign-off before ship—packaging, encryption, installers. Does not press publish, but issues the technical compliance memo to the Studio Director; only with the “technical green light” may release proceed.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Systems Integration Lead (Lead)',
    owner: null,
    duties: [
      {
        label: 'Final code responsibility:',
        text:
          'Owns debugging and integration for specialist/AI-generated code—strict logic and perf validation; no blind paste that causes leaks or crashes. If it breaks, the lead owns the fix.',
      },
      {
        label: 'API encapsulation:',
        text:
          'Reviews and wraps backend logic into clean, foolproof APIs, Blueprint Callable functions, and Event Dispatchers so the architect can wire Blueprint without breaking foundations.',
      },
      {
        label: 'Advanced replication:',
        text:
          'Server authority, replication, and RPC correctness—towers, skills, multiplayer sync with anti-cheat considerations.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Systems Integration Specialist (Execution)',
    owner: null,
    duties: [
      {
        label: 'AI-assisted coding:',
        text:
          'Minimize hand-typing—use AI to generate most system logic and C++/BP scaffolding for maximum throughput.',
      },
      {
        label: 'Mechanics implementation:',
        text:
          'Implements first-pass mechanics on the framework (e.g. tower range math, monster skills) with self-testing.',
      },
      {
        label: 'Version control:',
        text:
          'Daily pull/commit/push under the architect’s branch and commit conventions.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'NPC Behavior Lead (Lead)',
    owner: null,
    duties: [
      {
        label: 'Advanced AI & performance:',
        text:
          'Designs formidable enemy brains—Behavior Trees, EQS, and concrete BTT tasks.',
      },
      {
        label: 'Edge cases:',
        text:
          'Fixes pathing deadlocks, wall-stuck, multi-body collisions—owns final NPC behavior and CPU budget.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'NPC Behavior Specialist (Execution)',
    owner: null,
    duties: [
      {
        label: 'Baseline implementation:',
        text:
          'Places and implements NavMesh per lead design.',
      },
      {
        label: 'Perception & patrols:',
        text:
          'Sets AI Perception (sight/hearing) and simple patrol/chase hooks for the lead to extend.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Tech Animation Director (Lead)',
    owner: null,
    duties: [
      {
        label: 'Hero animation:',
        text:
          'Personally authors the hardest, highest-impact animations—weight, inertia, and quality ownership.',
      },
      {
        label: 'Rigging & IK:',
        text:
          'Expandable rigs; IK and Control Rig in UE—including complex foot adaptation.',
      },
      {
        label: 'Physics & state machines:',
        text:
          'Animation Blueprints and state machines; Physics Assets and convincing ragdoll.',
      },
      {
        label: 'Quality bar & delegation:',
        text:
          'Sets animation/physics standards and final reject rights—owns the hardest graphs; delegates weight painting, tweaks, and application to Tech Animators.',
      },
    ],
  },
  {
    category: 'Engineering',
    roleName: 'Tech Animator (Execution)',
    owner: null,
    duties: [
      {
        label: 'Skinning & weights:',
        text:
          'Skinning and weight painting per spec—no tearing or intersection at extreme poses.',
      },
      {
        label: 'Hand-key animation:',
        text:
          'Shares production load with simpler animations—commercial-grade keyframe quality.',
      },
      {
        label: 'Retargeting & physics assist:',
        text:
          'Retargets external libraries to project skeletons for director polish.',
      },
    ],
  },
];
