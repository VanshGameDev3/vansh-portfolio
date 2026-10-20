// All content lives here. Source of truth: Vansh_Pandya_CV.pdf
export const links = {
  email: 'mailto:vanshpandya1417@gmail.com',
  emailText: 'vanshpandya1417@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vansh-pandya-95614a377',
  github: 'https://github.com/VanshGameDev3',
  resume: '/Vansh_Pandya_CV.pdf?v=20261020-2',
};

export const names: Record<string, string> = {
  valkyra: 'Valkyra Technologies (AR)',
  vajradhaara: 'Vajradhaara Studios (3D Snake)',
  'shadows-blade': "Shadow's Blade",
  'mini-games': '2-Player Mini-Games',
};

export type Exp = { id: string; role: string; org: string; period: string; place: string; summary: string; points: string[]; tags: string[] };
export const experience: Exp[] = [
  {
    id: 'valkyra', role: 'XR/AR Unity Developer Intern', org: 'Valkyra Technologies', period: 'Apr 2026 – Present', place: 'Remote, India',
    summary: 'Working on an AR product in Unity and C#, contributing to AR feature development, debugging and integration.',
    points: ['AR Foundation with real-time camera/frame processing', 'API integration and Android deployment', 'Collaborating with a US-based team'],
    tags: ['Unity', 'C#', 'AR Foundation', 'Camera / Frame Processing', 'API Integration', 'Android'],
  },
  {
    id: 'vajradhaara', role: 'Unity Developer Intern', org: 'Vajradhaara Studios LLP', period: 'Jan 2026 – Jul 2026', place: 'Remote, India',
    summary: 'Worked on a 3D Snake game in Unity and C#, implementing core gameplay mechanics, scalable game systems and feature integration.',
    points: ['Debugging and performance optimization for smooth gameplay', 'Collaborated with designers, artists and developers'],
    tags: ['Unity', 'C#', '3D Snake', 'Gameplay Mechanics', 'Debugging', 'Optimization'],
  },
];

export type Project = { id: string; title: string; kind: string; role: string; period: string; desc: string; tech: string[]; systems: string[]; repo?: string; cta?: string; media?: Media };
// `tint` / `tint2` colour the soft backdrop behind an image (tint2 defaults to tint).
export type Media = { type: 'image' | 'video'; src: string; alt?: string; w?: number; h?: number; tint?: string; tint2?: string };
// Add `repo` (project GitHub URL) when you have it. To swap an icon for a gameplay video: media: { type: 'video', src: '/projects/shadows-blade.mp4' }
export const projects: Project[] = [
  {
    id: 'shadows-blade', title: "Shadow's Blade", kind: '2D top-down action game', role: 'Unity Game Developer / Gameplay Programmer · Personal Project', period: 'Dec 2025 – Feb 2026',
    desc: 'A fast-paced 2D top-down action game built in Unity and C#.',
    tech: ['Unity', 'C#'],
    systems: ['360° weapon system', 'Responsive movement', 'Enemy AI with horde spawning', 'Combat mechanics', 'Progression systems', 'JSON save/load'],
    repo: 'https://vanshspandya.itch.io/shadowsblade', cta: 'Play Game',
    media: { type: 'image', src: '/projects/shadows-blade.png', alt: "Shadow's Blade icon: a pixel-art ninja in black holding a sword on a purple background", w: 315, h: 250, tint: '#8a4fe0' },
  },
  {
    id: 'mini-games', title: 'Mobile 2-Player Mini-Games', kind: 'Mobile local multiplayer', role: 'Unity Game Developer / Multiplayer Programmer · Group Project', period: 'Aug 2025 – Sep 2025',
    desc: 'A mobile 2-player game with multiple mini-games, built in Unity and C#.',
    tech: ['Unity', 'C#'],
    systems: ['Local multiplayer', 'Touch controls', 'Scoring', 'Game state management', 'UI and gameplay optimized for performance'],
    media: { type: 'image', src: '/projects/two-player-games.png', alt: 'Mobile 2-Player Mini-Games icon: a red and blue game controller with two hands tapping it', w: 512, h: 512, tint: '#e5322d', tint2: '#3fa9d8' },
  },
];

export type Skill = { id: string; label: string; group: string; note: string; used: string[] };
export const skills: Skill[] = [
  { id: 'unity', label: 'Unity', group: 'Game Development', note: 'The engine behind every project on this page.', used: ['valkyra', 'vajradhaara', 'shadows-blade', 'mini-games'] },
  { id: 'gameplay', label: 'Gameplay Systems', group: 'Game Development', note: 'Core mechanics and scalable systems in the Snake game; weapon, movement and combat in Shadow\'s Blade; scoring and game state in the mini-games.', used: ['vajradhaara', 'shadows-blade', 'mini-games'] },
  { id: 'csharp', label: 'C#', group: 'Programming', note: 'Primary language across professional and personal work.', used: ['valkyra', 'vajradhaara', 'shadows-blade', 'mini-games'] },
  { id: 'oop', label: 'OOP', group: 'Programming', note: 'Object-oriented design behind my C# gameplay code.', used: [] },
  { id: 'fsm', label: 'Finite State Machines', group: 'AI', note: 'State-based behaviour logic for NPCs, listed alongside NPC AI in my CV.', used: ['shadows-blade'] },
  { id: 'npc-ai', label: 'NPC AI & Behaviour Logic', group: 'AI', note: 'Enemy AI with horde spawning in Shadow\'s Blade.', used: ['shadows-blade'] },
  { id: 'ar-xr', label: 'AR/XR Development', group: 'XR', note: 'AR feature development on the Valkyra Technologies product.', used: ['valkyra'] },
  { id: 'arf', label: 'AR Foundation', group: 'XR', note: 'Used with real-time camera/frame processing on the Valkyra AR product.', used: ['valkyra'] },
  { id: 'debug', label: 'Debugging & Optimization', group: 'Engineering', note: 'Debugging on the AR product, performance work on the Snake game, and optimized UI/gameplay in the mini-games.', used: ['valkyra', 'vajradhaara', 'mini-games'] },
  { id: 'integration', label: 'Feature Integration', group: 'Engineering', note: 'Integrating features into the AR product and the Snake game.', used: ['valkyra', 'vajradhaara'] },
];
export const paths = [
  { label: "Unity → Snake → Shadow's Blade → AR/XR", skills: ['unity'] },
  { label: 'C# → Gameplay Systems → AI → Multiplayer', skills: ['csharp', 'gameplay', 'npc-ai'] },
];
