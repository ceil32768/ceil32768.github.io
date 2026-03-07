/**
 * Ceil Studio — Core Member Duties & Deliverables (English, verbatim-style)
 * Same structure: category, roleName, duties[{ label, text }], owner (string or null)
 */
const CEIL_RECRUIT_ROLES_EN = [
  {
    category: 'Management',
    roleName: 'CEO',
    owner: 'Ceil',
    duties: [
      { label: 'Vision & Direction:', text: 'Decide the survival and vision of the company. Responsible for finding resources (funding, hardware/software, talent), setting studio direction, and ensuring core members can sustain and achieve post-graduation entrepreneurship success and long-term financial freedom.' },
      { label: 'Decision-making:', text: 'Responsible for all strategic decisions, including team division of labor, training and growth, and subsequent development and marketing direction.' },
      { label: 'Resource & Task Allocation:', text: 'Responsible for precise task allocation, resource scheduling, and defining the path to business goals. When the team hits irreconcilable disagreement, holds final say.' },
      { label: 'Storefront & Release:', text: 'Manage Steam/Google Play backend accounts. Control build uploads, store page final approval, and execute final release.' }
    ]
  },
  {
    category: 'Management',
    roleName: 'COO',
    owner: 'Deborah',
    duties: [
      { label: 'Internal Operations:', text: 'Handle day-to-day operational friction and act as the buffer between the team and leadership. Absorb CEO load in admin, progress follow-up, and personnel communication so the CEO can focus 100% on core development, quality, and strategy.' },
      { label: 'Discipline & Schedule:', text: 'Ensure development discipline, run weekly progress meetings, track delays and blockers, and ensure on-time, on-target delivery.' },
      { label: 'Team Management:', text: 'Act as the team anchor and psychological support, resolve communication friction, and prevent the project from stalling due to external or academic pressure.' },
      { label: 'Finance & Budget:', text: 'Ensure every dollar is spent effectively. Control initial funding and follow-on investment from the CEO, and evaluate ROI of assets, outsourcing, or training.' }
    ]
  },
  {
    category: 'Management',
    roleName: 'CMO',
    owner: 'Ceil',
    duties: [
      { label: 'Market Positioning & Exposure:', text: 'Establish target audience early in development. Ensure we find the right marketing channels instead of posting blindly.' },
      { label: 'Community & Wishlists:', text: 'Run YouTube, IG, Discord and the official site. Plan Steam store visuals and copy, liaise with streamers and press, and own wishlist count and conversion.' },
      { label: 'Release Strategy:', text: 'Decide trailer timing, demo strategy, and market research for pricing and launch date.' },
      { label: 'Brand & Channel:', text: 'Build and maintain the studio's public image. Publish dev logs and behind-the-scenes on YouTube/IG to turn players into long-term followers and give future titles strong initial reach.' }
    ]
  },
  {
    category: 'Planning & Design',
    roleName: 'Game Director',
    owner: 'Ceil',
    duties: [
      { label: 'GDD & Specs:', text: 'Write and maintain the Game Design Document (GDD). Turn abstract ideas into executable specs. The GDD must define Core Design, Level Design, and Character/Monster Design as the single source of truth. All code and art must follow the GDD 100%; no unapproved scope. Proposals must be approved and the GDD updated before implementation.' },
      { label: 'Numbers & Balance:', text: 'Define the game\'s core model: character stats, damage, economy, etc., for high replay value and strategic depth.' },
      { label: 'Mechanics Design:', text: 'Design core loop and win conditions so all elements fit together.' },
      { label: 'Engine & Tech Integration:', text: 'Integrate design, 2D/3D art, store assets, and code in UE5 with a full game-dev perspective.' },
      { label: 'Unreal Engine Blueprint:', text: 'Implement C++ classes as Blueprint classes (Actor, Character, Game Mode, Game Instance, etc.).' },
      { label: 'Packaging & Delivery:', text: 'Own final compile and packaging. Resolve build errors, blueprint conflicts, and cooking errors so the project ships as a runnable build meeting platform specs (compression, encryption, installer).' },
      { label: 'Quality & Performance:', text: 'Define final look and feel. Own lighting, atmosphere, and post-process for commercial-grade visuals while keeping frame rate stable.' },
      { label: 'Asset Curation:', text: 'Own final say on paid and open assets. Source and filter 3D/2D/VFX/audio from Unreal Fab, Quixel, etc., and hand off to department leads for integration and ROI.' },
      { label: 'Quality Gate:', text: 'Hold "reject" authority. When art or feel falls below bar, send back for rework and protect the game\'s soul.' }
    ]
  },
  {
    category: 'Planning & Design',
    roleName: 'Level Designer',
    owner: 'Ceil',
    duties: [
      { label: 'Map & Flow:', text: 'Build levels in UE5 from 3D art with immersive, playable spaces. Plan exploration routes, combat zones, scale, terrain, and cover for both visual impact and gameplay.' },
      { label: 'Pacing:', text: 'Control rhythm so each session matches the intended emotional curve.' },
      { label: 'Visual Guide:', text: 'Use lighting and props to direct player attention and mood.' }
    ]
  },
  {
    category: 'Visual & Audio',
    roleName: '3D Art Director',
    owner: 'Duckcat',
    duties: [
      { label: 'Environment Modeling:', text: 'Build terrain, architecture, and large set pieces in 3D as the spatial and visual foundation of the world.' },
      { label: 'Character & Prop Sculpting:', text: 'Produce high-quality characters, enemies, and key assets. Use digital sculpting to define final form and feel.' },
      { label: 'Retopology & Performance:', text: 'Retopologize high-poly models into engine-friendly low-poly with clean joint flow for animation.' },
      { label: 'UV Layout:', text: 'Create efficient, accurate UVs so 2D art can texture without stretching or resolution waste.' },
      { label: 'Asset Sourcing:', text: 'Avoid reinventing the wheel: use asset libraries or AI for non-custom assets.' }
    ]
  },
  {
    category: 'Visual & Audio',
    roleName: '2D Art & UI/UX Director',
    owner: 'Wudi',
    duties: [
      { label: 'Materials & Textures:', text: 'Give 3D greybox life. Create PBR materials (roughness, metal, normal) for realistic, world-consistent look.' },
      { label: 'UI/UX Design:', text: 'Plan and visualize in-game UI/UX. Ensure HUD, menus, and upgrade screens are intuitive and match the game\'s style.' },
      { label: 'Key Art & Marketing:', text: 'Own all outward-facing visuals: site, logo, Steam page. Turn positioning and copy into impactful assets (posters, platform art) for brand consistency.' },
      { label: 'Asset Sourcing:', text: 'Use asset libraries or AI for generic UI, textures, and type; reserve time for core visuals and key art.' }
    ]
  },
  {
    category: 'Visual & Audio',
    roleName: 'Audio Designer',
    owner: 'Ceil',
    duties: [
      { label: 'Soundscape:', text: 'Own the game\'s sound experience. Source, record, or mix convincing ambience (e.g. creature sounds, footsteps).' },
      { label: 'Feedback SFX:', text: 'Design weapon hit, ability cast, hit reaction, and UI sounds for strong feedback and impact.' },
      { label: 'Asset Sourcing:', text: 'Use paid SFX libraries for non-custom sounds where appropriate.' }
    ]
  },
  {
    category: 'Visual & Audio',
    roleName: 'Video Editor',
    owner: 'Wudi',
    duties: [
      { label: 'Trailers:', text: 'Produce all motion marketing. Capture the game\'s best moments and cut high-conversion Steam trailers.' },
      { label: 'Short-form:', text: 'Produce dev logs and gameplay clips for YouTube Shorts, TikTok, etc.' }
    ]
  },
  {
    category: 'Technical',
    roleName: 'Systems Engineer',
    owner: 'Ceil',
    duties: [
      { label: 'Architecture & Design:', text: 'Design class hierarchy and data structures. Define solid base classes and interfaces for scalable features.' },
      { label: 'Online Subsystem (OSS):', text: 'Plan multiplayer networking. Implement UE5 Online Subsystem (e.g. Steam), connection, sessions, and search. Define lifecycle for GameMode, GameState, PlayerState and Server-Client sync.' },
      { label: 'Project Structure & Naming:', text: 'Define folder structure and asset naming in the UE project for findability and efficiency.' },
      { label: 'Clean Code & Review:', text: 'Define coding standards and run code review. Keep code readable, extensible, and free of leaks.' },
      { label: 'Version Control (Git):', text: 'Manage the GitHub repo, commit and branch policy. Resolve merge conflicts and keep main clean, buildable, and stable.' }
    ]
  },
  {
    category: 'Technical',
    roleName: 'NPC Behavior Engineer',
    owner: 'Rayhong',
    duties: [
      { label: 'NPC Behavior:', text: 'Design smart, pressure-inducing enemy behavior. Implement NavMesh, Behavior Tree, AI Perception, and edge cases like pathfinding and avoidance.' }
    ]
  },
  {
    category: 'Technical',
    roleName: 'Systems Integration Engineer',
    owner: 'Rayhong',
    duties: [
      { label: 'API Surface:', text: 'Do not bind visuals directly. Expose backend logic as clean APIs, Blueprint Callables, and Event Dispatchers so design can hook art and VFX in UMG/Blueprint.' },
      { label: 'Core Logic:', text: 'Implement game mechanics on top of the systems architect\'s framework (e.g. tower fire, monster abilities, data-only logic).' },
      { label: 'AI-Assisted Code:', text: 'Prefer AI-assisted generation over hand-writing for speed. Own final debugging and integration; validate logic and performance so nothing leaks or crashes.' },
      { label: 'Replication & RPC:', text: 'Implement network sync from the OSS framework. Apply server authority, variable replication, and RPC (Server, Client, NetMulticast) so towers, skills, and AI stay in sync and cheat-resistant.' },
      { label: 'Version Control:', text: 'Use Git/GitHub independently: pull, commit, push per the architect\'s branch and commit rules, and submit code for final review and merge.' }
    ]
  },
  {
    category: 'Technical',
    roleName: 'Tech Animator',
    owner: 'Jinjie',
    duties: [
      { label: 'Rigging & Control Rig:', text: 'Build rigs and UE5 Control Rig. Implement IK and weight painting to eliminate clipping and artifacts on bend.' },
      { label: 'Animation & State Machine:', text: 'Hand-key weight and inertia (locomotion, attack, hit). Set up Animation Blueprints for smooth transitions.' },
      { label: 'Physics & Ragdoll:', text: 'Configure UE5 Physics Assets. Tune joint damping and mass for convincing ragdoll on hit or death.' }
    ]
  }
];
