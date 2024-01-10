export type Database = 'main' | 'projects';
// export type Toggle = 'image' | 'profile' | 'skill' | 'education' | 'contact';

export type Profile = {
	key: string;
	value: string;
};
export type Skill = {
	name: string;
	description: string;
	image: string;
};
export type Education = {
	name: string;
	when: string;
	finished: boolean;
};

export type Project = {
	title: string;
	id: string; //childPageId
	link: string;
	image: string;
	description: {
		people: string;
		term: string;
		paragraph: string;
	};
	pinned: boolean;
	category: 'Front-End' | 'Back-End' | 'Full-Stack' | 'All';
};

export type Contact = {
	key: string;
	value: string[];
};
