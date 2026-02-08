/**
 * Ceil Studio — 招募技能資料
 * 修改此陣列即可更新頁面上的技能卡片。status: 'O' | 'X' | 'CO' | 'AI'
 */
const CEIL_RECRUIT_SKILLS = [
  // Design
  { category: 'Design', roleName: 'Game Director / Core Design', tools: 'Markdown (Obsidian)', status: 'O', description: '' },
  { category: 'Design', roleName: 'Level Design', tools: 'Unreal Engine / Blender', status: 'O', description: '' },
  { category: 'Design', roleName: 'Environment Design', tools: 'Clip Studio Paint', status: 'CO', description: '' },
  { category: 'Design', roleName: 'Character Design', tools: 'Clip Studio Paint', status: 'CO', description: '' },
  // Engineering
  { category: 'Engineering', roleName: 'Core Mechanics', tools: 'C++ / Blueprint (UE5)', status: 'O', description: '' },
  { category: 'Engineering', roleName: 'Packaging / Optimization', tools: 'UE5 / Platform Policy', status: 'O', description: '' },
  { category: 'Engineering', roleName: 'Release', tools: 'Google Play Console / Steamworks', status: 'O', description: '' },
  { category: 'Engineering', roleName: 'AI / NPC Behavior', tools: 'UE5 Behavior Tree / UE5 EQS', status: 'CO', description: '' },
  { category: 'Engineering', roleName: 'Multiplayer', tools: 'UE5 Online Subsystem', status: 'O', description: '' },
  // Art / Game Assets
  { category: 'Art / Game Assets', roleName: 'Environment & Static Mesh', tools: 'Blender', status: 'O', description: '' },
  { category: 'Art / Game Assets', roleName: 'Skeletal Mesh Pipeline', tools: 'Blender', status: 'V', description: '負責處理會動的角色/生物：包含從 AI 模型進行Retopology、Rigging 到 Animation(客製化動作)。' },
  { category: 'Art / Game Assets', roleName: 'UI/UX Design', tools: 'Figma / UMG (UE5)', status: 'V', description: '目前暫用 Fab Assets，需能客製化界面者。' },
  { category: 'Art / Game Assets', roleName: 'VFX / Particle effect', tools: 'UE5 Niagara / Material', status: 'V', description: '目前暫用 Fab Assets，需能客製化特效者。' },
  { category: 'Art / Game Assets', roleName: 'BGM & SFX Production', tools: 'Suno and ElevenLabs (AI)', status: 'AI', description: '' },
  // Marketing
  { category: 'Marketing', roleName: 'Voice Over', tools: 'Audacity / iZotope RX', status: 'O', description: '' },
  { category: 'Marketing', roleName: 'Web Dev', tools: 'Frontend / Backend', status: 'O', description: '製作遊戲官網或工作室官網。' },
  { category: 'Marketing', roleName: 'Video Production', tools: 'DaVinci Resolve / Any', status: 'CO', description: '負責 Trailer 與 Devlog 剪輯。' },
  // Project Ops
  { category: 'Project Ops', roleName: 'Legal Advisor', tools: 'Word / Law Ref.', status: 'V', description: '提供工作室營運法律諮詢、管理合約（內部/外部），並確保智慧財產權合規與風險控管。' },
  { category: 'Project Ops', roleName: 'Project Manager (PM)', tools: 'Markdown / Any', status: 'V', description: '負責成員間溝通協調、追蹤開發進度與排除障礙。' },
  { category: 'Project Ops', roleName: 'Financial Management', tools: 'Markdown / Any', status: 'V', description: '管理現金流並計算貢獻分紅。' },
  { category: 'Project Ops', roleName: 'Playtesting', tools: 'Markdown for communicate', status: 'CO', description: '尋找 Bug 並提供優化建議，需善用 Markdown 撰寫測試報告。' }
];
