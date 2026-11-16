export interface NavLink { label: string; href: string }
export interface Offering { title: string; description: string }
export interface StoryCard {
    src: string;
    alt: string;
    title: string;
    description: string;
    location?: string; // add this line
}
export interface Photo { src: string; alt: string }
