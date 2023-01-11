export interface EntityReference {
	entityId: string,
	name: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export default interface Ce_actor {
	slug?: string,
	name: string,
	c_bio?: string,
	c_birthDate?: string,
	c_birthPlace?: string,
	c_movies?: EntityReference[],
	headshot?: Image,
	id: string,
}
