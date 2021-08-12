interface ISourceArticles {
	id: string;
	name: string;
}

export interface IArticles {
	source: ISourceArticles;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

export interface IResponseFetch {
	status: string;
	totalResult: number;
	articles: IArticles[];
}

export type TSearch = string;
