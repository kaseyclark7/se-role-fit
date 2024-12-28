export const CORE_LANGUAGES = ['JavaScript', 'TypeScript', 'Java', 'C#'] as const;
export const ADDITIONAL_LANGUAGES = ['Python', 'Ruby', 'Go', 'Rust'] as const;
export const CORE_FRAMEWORKS = ['Angular', 'React', 'Vue'] as const;
export const ADDITIONAL_FRAMEWORKS = ['Next.js', 'Svelte', 'Express'] as const;

export type CoreLanguage = typeof CORE_LANGUAGES[number];
export type AdditionalLanguage = typeof ADDITIONAL_LANGUAGES[number];
export type CoreFramework = typeof CORE_FRAMEWORKS[number];
export type AdditionalFramework = typeof ADDITIONAL_FRAMEWORKS[number]; 