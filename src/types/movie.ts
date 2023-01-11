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

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export default interface Ce_movie {
	slug?: string,
	description?: string,
	name: string,
	c_actors?: EntityReference[],
	c_backdropImage?: ComplexImage,
	c_genres?: string[],
	c_moviePoster?: ComplexImage,
	c_releaseDate?: string,
	c_runningTime?: number,
	id: string,
}
