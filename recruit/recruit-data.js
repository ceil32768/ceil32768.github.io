/**
 * Ceil Studio — 招募技能資料
 * 修改此陣列即可更新頁面上的技能卡片。status: 'O' | 'X' | 'CO' | 'AI'
 */
const CEIL_RECRUIT_SKILLS = [
  // Design
  { category: 'Design', roleName: 'Game Core', tools: 'Markdown (Obsidian)', status: 'O', description: '' },
  { category: 'Design', roleName: 'Environment Design', tools: 'Concept Art (CSP)', status: 'CO', description: '' },
  { category: 'Design', roleName: 'Character Design', tools: 'Concept Art (CSP)', status: 'O', description: '' },
  { category: 'Design', roleName: 'Level Design', tools: 'Unreal Engine / Blender', status: 'O', description: '' },
  // Engineering
  { category: 'Engineering', roleName: 'Core Mechanics', tools: 'C++ / Blueprint (UE5)', status: 'O', description: '' },
  { category: 'Engineering', roleName: 'AI / NPC Behavior', tools: 'UE5 Behavior Tree / UE5 EQS', status: 'CO', description: '' },
  { category: 'Engineering', roleName: 'Multiplayer', tools: 'UE5 Online Subsystem', status: 'X', description: '' },
  { category: 'Engineering', roleName: 'Packaging / Optimization', tools: 'UE5 / Platform Policy', status: 'O', description: '' },
  { category: 'Engineering', roleName: 'Release', tools: 'Google Play Console / Steamworks', status: 'O', description: '' },
  // Art / Game Assets
  { category: 'Art / Game Assets', roleName: 'Hard Surface Modeling', tools: 'Blender', status: 'O', description: '' },
  { category: 'Art / Game Assets', roleName: 'Digital Sculpting', tools: 'Tripo (AI)', status: 'AI', description: '' },
  { category: 'Art / Game Assets', roleName: 'Skeletal Mesh Retopology', tools: 'Blender', status: 'X', description: 'Static Mesh 我能處理。需協助角色/生物的拓樸，確保關節動畫佈線正確。將拓樸優化為 Game-Ready Assets。' },
  { category: 'Art / Game Assets', roleName: 'Materials & Texturing', tools: 'ElevenLabs (AI)', status: 'AI', description: '' },
  { category: 'Art / Game Assets', roleName: 'Animation & Rigging', tools: 'Blender', status: 'X', description: '常見動作暫用 Mixamo，需要能處理客製化動作的人。' },
  { category: 'Art / Game Assets', roleName: 'UI/UX Design', tools: 'Figma / UMG (UE5)', status: 'X', description: '目前暫用 Fab Assets，需能客製化界面者。' },
  { category: 'Art / Game Assets', roleName: 'VFX / Particle effect', tools: 'UE5 Niagara / Material', status: 'X', description: '目前暫用 Fab Assets，需能客製化特效者。' },
  { category: 'Art / Game Assets', roleName: 'BGM Production', tools: 'Suno (AI)', status: 'AI', description: '' },
  { category: 'Art / Game Assets', roleName: 'SFX Production', tools: 'ElevenLabs (AI)', status: 'AI', description: '' },
  // Marketing
  { category: 'Marketing', roleName: 'Video Production', tools: 'DaVinci Resolve / Any', status: 'CO', description: '負責 Trailer 與 Devlog 剪輯。' },
  { category: 'Marketing', roleName: 'Voice Over', tools: 'Audacity / iZotope RX', status: 'CO', description: '' },
  { category: 'Marketing', roleName: 'Web Dev', tools: 'Frontend / Backend', status: 'CO', description: '製作遊戲官網或工作室官網。' },
  // Misc / Project Ops
  { category: 'Misc / Project Ops', roleName: 'Asset Management', tools: 'Markdown for communicate', status: 'CO', description: '整理並尋找專案資產 (Fab)，需善用 Markdown 回報清單。' },
  { category: 'Misc / Project Ops', roleName: 'Playtesting', tools: 'Markdown for communicate', status: 'CO', description: '尋找 Bug 並提供優化建議，需善用 Markdown 撰寫測試報告。' }
];
